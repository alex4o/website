const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Bonin's website`,
    description: ``,
    author: `@alex4o`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-slug`
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-optimize-svgs',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        styles: path.join(__dirname, 'src/styles')
      }
    },
	{
		resolve: 'gatsby-plugin-local-search',
		options: {
			name: "posts",
			engine: "flexsearch",
			engineOptions: {
				encode: "advanced",
				tokenize: "reverse",
				suggest: true,
				cache: true
			},
			query: `
				{
					allMarkdownRemark {
						nodes {
							id
							excerpt
							fields {
								slug
							}
      						frontmatter {
								title
								tags
								description
								ingredients {
									name
								}
							}
						}
					}
				}
			`,
			ref: 'id',
			index: ['title', 'tags'],
			store: ['id', 'title', 'slug', 'description', 'tags'],
			normalizer: ({ data }) => 
				data.allMarkdownRemark.nodes.map(node => ({
					id: node.id,
					tags: node.frontmatter.tags != null ? node.frontmatter.tags.join(" ") : "",
					title: node.frontmatter.title,
					slug: node.fields.slug,
					description: node.frontmatter.description || node.excerpt,
					ingredients: (node.frontmatter.ingredients || []).map(ingredient => ingredient.name).join(" ")
				})),
		}
	}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
