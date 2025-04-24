import lume from "lume/mod.ts"
import feed from "lume/plugins/feed.ts"
import redirects from "lume/plugins/redirects.ts"
import { dateISO, datePretty } from "./_utils.ts"

// define the site's domain
const SITE_DOMAIN = new URL("https://proflily.games/")

// initialize the site
const lilylab = lume({
  dest: "./__dist",
  location: SITE_DOMAIN,
  caseSensitiveUrls: true,
  server: {
    page404: "./not_found.html",
    open: true,
  },
})

// load plugins
lilylab.use(redirects())
lilylab.use(feed({
  output: "/blog.xml",
  query: "type=post",
  info: {
    title: "=site.name",
    authorName: "=site.author",
    authorUrl: SITE_DOMAIN.toString(),
  },
  items: {
    authorName: "=author",
  },
}))

// don't consider repo files part of the site
lilylab.ignore(".gitignore")
lilylab.ignore("README.md")

// make the utility functions available in other pages
lilylab.data("dateISO", dateISO)
lilylab.data("datePretty", datePretty, "/blog")

// copy the static file folders folders to the output folder
lilylab.copy("css")
lilylab.copy("blog/img")
lilylab.copy("txt")

// keep dates on post URLs
lilylab.parseBasename(basename => ({ basename }))

export default lilylab
