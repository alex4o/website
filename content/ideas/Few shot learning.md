Невронна мрежа която се тренира първо да научи формата на данните и после се fine tune ва да научи точния проблем.

Например невронна мрежа която се научава да предвижда къде ще има земетресения на базата на планети първо се тренира на това че резултатите са Гео координати а после се тренира че те трябва да са на лунните от тези планети и най накрая се fine tune ва за земетресенията. Защото там данните са най малко. 

Другия вариант е MAML където може да се направи както преди, но после да се намерят различни проблеми и събития които да се предвиждат и те да се ползват за да се научи  мрежата комбинирано. 

https://interactive-maml.github.io/comparison.html
https://github.com/sshkhr/imaml/blob/master/metalearners/imaml.py
https://github.com/metaopt/torchopt
