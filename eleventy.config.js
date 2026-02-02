import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/rss.xml",
    collection: {
      name: "writing"
    },
    metadata: {
      language: "en",
      title: "Roman Stanuch Writing",
      base: "https://romanstanuch.com/",
      author: {
        name: "Roman Stanuch"
      }
    }
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
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