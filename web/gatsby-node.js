/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const slugify = require("slugify")

const sanityClient = require("@sanity/client")
const client = sanityClient({
  projectId: "r6yxavok",
  dataset: "production",
  token:
    "skvg0VWY7q5nXHO227cfkyaRJ4r1HB1e6xGNWFBGTdV5ftjSMNhoCelYS9ki7Y8SIoxVUWkXDYtWhghfmoi2RaIN6snhi9l3gAGh0negUkc1vgQ3OCFxDFHnxSonjYIe3A9mRdcAP7oAzUFnAnwsZWfzBNEbcEsqXCaxooVYlYLWx0BdVisW", // or leave blank to be anonymous user
  useCdn: true, // `false` if you want to ensure fresh data
})

const postsAndProjects = `*[_type in ["project", "post"]] | order(publishedAt desc) {
  _type,
  _id,
  'slug': slug.current,
  title,
  excerpt,
  publishedAt,
  'hero': mainImage.asset->,
  body,
  siteUrl,
  linkOut,
  excerpt,
  projectTypes,
  projectNote,
}`

const projects = `*[_type == "project"] | order(publishedAt desc) {
  title,
  publishedAt,
  'slug': slug.current,
  siteUrl,
  body,
  linkOut,
  excerpt,
  projectTypes,
  'hero': mainImage.asset->url,
  _id,
  projectNote
}`

const posts = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  excerpt,
  publishedAt,
  'slug': slug.current,
  body,
  'hero': mainImage.asset->url,
}`

const redirects = [
  {
    from: "stick-to-the-script.html",
    to: "stick-to-the-script",
  },
  {
    from: "reactive-shopify-ui.html",
    to: "reactive-shopify-ui",
  },
  {
    from: "introducing-match-maker.html",
    to: "introducing-match-maker",
  },
  {
    from: "year-in-review-2017.html",
    to: "year-in-review-2017",
  },
  {
    from: "what-is-burnout.html",
    to: "what-is-burnout",
  },
  {
    from: "who-cares.html",
    to: "who-cares",
  },
  {
    from: "year-in-review-2016.html",
    to: "year-in-review-2016",
  },
  {
    from: "working-together.html",
    to: "working-together",
  },
  {
    from: "year-in-review-2015.html",
    to: "year-in-review-2015",
  },
  {
    from: "the-hardest-part.html",
    to: "the-hardest-part",
  },
  {
    from: "goals.html",
    to: "goals",
  },
  {
    from: "new-site.html",
    to: "new-site",
  },
]

exports.createPages = async ({ actions }) => {
  const { createPage, createRedirect } = actions

  await client
    .fetch(postsAndProjects)
    .then(data => {
      data = {
        posts: data.filter(p => p._type === "post"),
        projects: data.filter(p => p._type === "project"),
      }
      return data
    })
    .then(data => {
      createPage({
        path: `/`,
        component: path.resolve(`./src/pages/home.js`),
        context: {
          slug: "home",
          work: data.projects,
          posts: data.posts,
        },
      })

      return data
    })
    .then(data => {
      data.posts.map(post => {
        createPage({
          path: `/writing/${post.slug}`,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: post.slug,
            post: post,
          },
        })
      })
    })
    .then(() => {
      redirects.forEach(({ from, to }) => {
        createRedirect({
          redirectInBrowser: false,
          isPermanent: true,
          fromPath: `/writing/${from}`,
          toPath: `/writing/${to}`,
        })
      })
    })
}
