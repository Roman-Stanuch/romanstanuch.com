import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginRss from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addWatchTarget("src/writing");

  eleventyConfig.addFilter("dateFormatLong", (date) => {
    const d = new Date(date);
    const month = d.toLocaleString('default', { month: 'long' });
    const day = String(d.getUTCDate());
    const year = d.getUTCFullYear();
    return `${month} ${day}, ${year}`;
  });

  eleventyConfig.addFilter("dateFormatMonth", (date) => {
    const d = new Date(date);
    const month = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    const year = d.getUTCFullYear();
    return `${month}-${day}-${year}`;
  });

  eleventyConfig.addFilter("dateYear", (date) => {
    return new Date(date).getUTCFullYear();
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/.nojekyll");
  eleventyConfig.addPassthroughCopy("src/writing/**/images");
}

export const config = {
  dir: {
    input: "src",
    output: "dist",
    includes: "_includes",
    data: "_data"
  },
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  templateFormats: ["md", "njk", "html"]
};