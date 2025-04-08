import lume from "lume/mod.ts"
import { dateISO, datePretty } from "./_utils.ts"

// initialize the site
const lilylab = lume({
  location: new URL("https://proflily.games/"),
  server: { open: true },
})

// don't consider the readme part of the site
lilylab.ignore("README.md")

// make the utility functions available in other pages
lilylab.data("dateISO", dateISO)
lilylab.data("datePretty", datePretty, "/blog")

// copy the CSS folder to the output folder
lilylab.copy("css")
lilylab.copy("blog/img")

// keep dates on post URLs
lilylab.parseBasename(basename => ({ basename }))

export default lilylab
