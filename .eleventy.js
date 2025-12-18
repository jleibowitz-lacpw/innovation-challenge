module.exports = function (eleventyConfig) {
  // Copy CSS files to output
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy images to output
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    pathPrefix: "/innovation-challenge/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
