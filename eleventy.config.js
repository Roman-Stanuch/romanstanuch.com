export default function(eleventyConfig) {
}

export const config = {
  dir: {
    input: "src",
    output: "dist",
    includes: "_includes",
  },
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  templateFormats: ["md", "njk", "html"]
};