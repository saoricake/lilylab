import lume from "lume/mod.ts"
import { dateISO, datePretty } from "./_utils.ts"

// initialize the site
const lilylab = lume({
  location: new URL("https://proflily.games/"),
  server: { open: true },
})

// make the utility functions available in the blog folder
lilylab.data("dateISO", dateISO, "/blog")
lilylab.data("datePretty", datePretty, "/blog")

// copy the CSS folder to the output folder
lilylab.copy("css")
lilylab.copy("blog/img")

// keep dates on post URLs
lilylab.parseBasename(basename => ({ basename }))

export default lilylab
