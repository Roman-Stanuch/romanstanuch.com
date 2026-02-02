import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/rss.xml",
    collection: {
      name: "writing"
    },
    metadata: {
      language: "en",
      title: "Roman Stanuch Writing",
      base: "https://roman-stanuch.github.io/",
      author: {
        name: "Roman Stanuch"
      }
    },
    htmlBasePluginOptions: {
      baseHref: '',
    },
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");

  return {
    pathPrefix: "/romanstanuch.com/"
  }
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