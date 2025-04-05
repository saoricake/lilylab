import lume from "lume/mod.ts"

const lilyLab = lume({
  src: "./src",
  dest: "./dist",
  location: new URL("https://proflily.games/"),
  includes: "_layouts",
  server: {
    open: true,
  },
})

export default lilyLab

// https://lume.land/docs/getting-started/working-with-assets/
// https://vento.js.org/
