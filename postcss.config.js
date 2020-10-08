const path = require("path");

module.exports = {
  plugins: [
    require("postcss-url"),
    require("autoprefixer"),
    require("css-mqpacker"),
    require("postcss-mixins")({
      mixinsDir: path.join(__dirname, "./src/app/styles"),
    }),
    require("cssnano")({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
    require("postcss-preset-env")({
      stage: 0,
      features: {
        "nesting-rules": true,
      },
    }),
    require("postcss-nested"),
    require("postcss-import"),
  ],
};
