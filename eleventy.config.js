module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("assets");

  return {
    pathPrefix: "FNPSO",
    dir: {
      input: ".", // Your input directory (root in this case)
      output: "_site", // Your output directory
    },
  };
};
