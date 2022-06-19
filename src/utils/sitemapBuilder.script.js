require("babel-register")({
  presets: ["es2015", "react"],
});

const router = require("./sitemap.routes").default;
const Sitemap = require("react-router-sitemap").default;

const paramsConfig = {
  "/collection/:slug": [
    {
      slug: [
        "t-shirts",
        "sweatshirts",
        "hoodies",
        "polos",
        "stickers",
        "phone-cases",
        "masks",
        "posters",
        "bracelets",
        "hats",
        "mugs",
      ],
    },
  ],
};

new Sitemap(router)
  .applyParams(paramsConfig)
  .build("https://dev-style.com")
  .save("./public/sitemap.xml");
