---
title: Convert your stm32f103 mcu to a JLink programmer.
date: "2021-03-31T14:13:59.420Z"
description: "Flash the latest JLink OB firmware to a blackpill board."
---

![](black_pill.jpg)
I have a few stm32f103 boards lying around, and struggling to find a use
for them. I found out that they can be used as debug probe over JTAG and SWD.
And designating one of the unused boards wouldn't be too much of a hassle.
There are a few good firmwares that can be flashes on the stm32 that can
serve that purpose. Here is a non exhaustive list:

 - [blackmagic probe](https://github.com/blacksphere/blackmagic/wiki)
 - [DirtyJTAG](https://github.com/jeanthom/DirtyJTAG)
 - [DapperMime](https://github.com/majbthrd/DapperMime)
 - [DMSIS-DAP_SWO](https://github.com/RadioOperator/STM32F103C8T6_CMSIS-DAP_SWO)
 - [JLink-v2](http://e.pavlin.si/2016/02/28/how-to-program-blank-stm32f1-with-stlink-v2-firmware/)
 - [Versaloon](https://github.com/zoobab/versaloon)
 - [Versaloon-git](https://github.com/lamfe/versaloon-git) a more recent version of versaloon
 - [JLINK-OB-STM32-F103](https://github.com/GCY/JLINK-ARM-OB)

I have used the blackmagic probe in the past and it is very convenient, but 
the fact that it can only support the cpus that it is compiled with is very 
restricting. For that reason I also tried using Versaloon, the code hasn't been
updated for almost 7 years and it was failing to scan for devices in OpenOCD,
so I declared that it is most likely bit-roted. As I wanted to have a device that 
is as versatile as possible I decided to go the only illegal route there is.
Ant that is to use the JLink firmware that is intended for people who want to
integrate a debugger on the same board as their main chip (This is why it is 
called OB (On Board)). The first time I found about it was when I found the 
[JLINK-OB-STM32-F103](https://github.com/GCY/JLINK-ARM-OB) repository. That 
piqued my interest in the topic again and I decided to flash it on one of the 
boards I have. I first flashed the firmware from 2012 and checked the output from 
`lsusb` to see this:
```
Bus 001 Device 007: ID 1366:0101 SEGGER J-Link PLUS
```
That made me hopeful enough to try download the [JLink Software](https://aur.archlinux.org/packages/jlink/)
and find out to my amusement that it recognizes the device and even offers to 
upgrade it's firmware.

| Upgrade dialog | Upgrade progress |
| -------------- | ---------------- |
| ![](firmware-upgrade-2012.png) |  ![](upgrade-fail-2012.png) |

I didn't have very high expectations from this as I knew that the bootloader
on the blackpill would manage the upgrade. But I didn't consider that fact 
that it might just flash something that brakes the probe. Which turned out
to be the case. As the `JLinkExe` showed a probe faulty message.

![](probe-defective.png)

As I had downloaded the whole repository I decided to flash the version from 
2019 and see what happens. It again reports itself to `lsusb` as a `J-Link
PLUS` and asked me to upgrade it's firmware. The update failed again making
the device inoperable in the process.

![](upgrade-fail-2019.png)
```
Connecting to J-Link via USB...FAILED: Cannot connect to J-Link.
```

From this I could infer that this process is still supported as the newest 
update is from 2021, but I didn't know where and how I could even obtain the 
firmware, maybe I could dump it while it is downloaded from the net or 
something like that. However not even knowing how things are supposed to be 
connected I started looking for a schematic of the original JLink PLUS to see
how it's pins are connected only to find out that it contains an FPGA inside 
so it is nothing like the thing I have at the moment. The repository that 
contains the firmware also has a reference sections where I found this 
[link](http://akb77.com/g/stm32/jlink-ob/). It describes what is the meaning 
of each pin and how it's supposed to be connected. Trying to connect it like 
that didn't gave any results, but that didn't discourage me as it is for a 
different device, and I was looking for a f103 schematic. I scoured the `blog.
csdn.net` website searching for something useful in the sea of Chinese 
characters I don't understand. Eventually I found these two pages: 
[page](https://blog.csdn.net/qq_25814297/article/details/103186725) and [page](https://blog.csdn.net/whik1194/article/details/90081825)
the first one looked like some kind of diary that mentions how the extract 
the firmware from `JLinkARM.dll`, but the second had what I was looking for.
A schematic showing which pins are used for the JTAG communication. What I
was looking for was SWD pin but it only gave the connections for the JTAG
protocol. Having previously looked at Versaloon source code and at pictures of
other probes I knew that the `SWDIO` and `SWDCLK` pins correspond to the `TCK` and `TMS`
so this is how I connected my other blackpill board that was going to be the
target of my debugging, and this is what I saw: 

```
Connecting to J-Link via USB...O.K.
Firmware: J-Link OB-STM32F103 V1 compiled Jan  7 2019 14:10:25
Hardware version: V1.00
S/N: -1
VTref=3.300V


Type "connect" to establish a target connection, '?' for help
J-Link>connect
Please specify device / core. <Default>: RP2040_M0_0
Type '?' for selection dialog
Device>?
Please specify target interface:
  J) JTAG (Default)
  S) SWD
  T) cJTAG
TIF>S
Specify target interface speed [kHz]. <Default>: 4000 kHz
Speed>
Device "STM32F103C8" selected.


Connecting to target via SWD
Found SW-DP with ID 0x1BA01477
Found SW-DP with ID 0x1BA01477
DPv0 detected
Scanning AP map to find all available APs
AP[1]: Stopped AP scan as end of AP map has been reached
AP[0]: AHB-AP (IDR: 0x14770011)
Iterating through AP map to find AHB-AP to use
AP[0]: Core found
AP[0]: AHB-AP ROM base: 0xE00FF000
CPUID register: 0x411FC231. Implementer code: 0x41 (ARM)
Found Cortex-M3 r1p1, Little endian.
FPUnit: 6 code (BP) slots and 2 literal slots
CoreSight components:
ROMTbl[0] @ E00FF000
ROMTbl[0][0]: E000E000, CID: B105E00D, PID: 001BB000 SCS
ROMTbl[0][1]: E0001000, CID: B105E00D, PID: 001BB002 DWT
ROMTbl[0][2]: E0002000, CID: B105E00D, PID: 000BB003 FPB
ROMTbl[0][3]: E0000000, CID: B105E00D, PID: 001BB001 ITM
ROMTbl[0][4]: E0040000, CID: B105900D, PID: 001BB923 TPIU-Lite
Cortex-M3 identified.
J-Link>
```

It was able to correctly identify the CPU and dump the CoreSight components.
Later on I found that the schematic is also available publicly from 
[SEGGER](https://www.segger.com/downloads/jlink/UM08023_JLinkOBSTM32F103.pdf)
, that kind of meant I wasted a couple of hours looking for it. 
I didn't try debugging at this point but there was no reason I wouldn't work.
What I was more interested in was getting the newest version of the firmware.
As found in the Chinese website the firmware for the probe doesn't come over the
internet but is instead embedded in the `JLinkArm.dll` file, a quick check
showed that thee is a corresponding `libjlinkarm.so` file on Linux. I used
`bless` to open it and look around as it can manipulate the binary data. The
first thins I searched for was `OB-STM32F103`, and there it was. 

![](hex-firmware.png)

This is the beginning of the firmware, the Chinese website mentioned that the
`XX XX 00 20` should be the beginning of the firmware. That looks a little
strange to me but checking against the already working binaries so it all checks out.
I knew that the binary starts with the interrupt table and the first value in
the interrupt table is the starting stack pointer. Knowing that this is a
little-endian system this means the value is: `0x20001430`. This is why the
firmware always starts with `XX XX 00 20`, as the internal ram for the stm32f103
is in the `0x20000000 - 0x40000000` range, this can be checked in stm32f103
memory map. If you are perceptive you might notice that this is a 512mb range
and the ram on the chip is actually only 20kb so effectively the range is
`0x20000000 - 0x20005000`. The best part is that there is no need to determine
the end of the firmware as what is not needed wont be used. So starting from the
bytes we identified as starting bytes, we can just take 65536 (0x10000) bytes as
the size of the flash is 64kb. So good so far, but this is the firmware without
the bootloader, and the bootloader is kind of important. So I did the simplest
thing possible and just used the bootloader from the repository that contained
the firmware. I just opened the downloaded `.bin` file, deleted the firmware
contained there by removing all of the bytes starting from `XX XX 00 20` and
replacing it with the ones copied from the `.so` file. This is good and all but
what is in the bootloader and why isn't the firmware starting form 0x08000000
like it should. Because this is where the original firmware resides, meaning a
custom bootloader is needed. The source code can be found
[here](http://www.crystalradio.cn/forum.php?mod=viewthread&tid=1576269) it is
nothing spectacular, just relocation the interrupt table and jumping to the start
address. This is how you can buy a cheap JLink programmer from china for less
then 5$ like [this](https://www.aliexpress.com/item/32743207311.html) one. I
don't beleive that anybody would use this information in any malicious way but if
you can buy the real one, if you are unable to then make one yourself don't buy
the imitations. 

P.S. Somebody should try this on the stm32f103 imitation: gd32f103. It would 
be the ultimate fake JLink adapter :D.
