import lume from "lume/mod.ts"
import { dateISO, datePretty } from "./_utils.ts"

// define the site's domain
const SITE_DOMAIN = new URL("https://proflily.games/")

// initialize the site
const lilylab = lume({
  location: SITE_DOMAIN,
  server: { open: true },
})

// don't consider the readme part of the site
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
