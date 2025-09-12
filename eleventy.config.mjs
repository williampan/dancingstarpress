import YAML from "yaml";

export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css.css")
    eleventyConfig.addPassthroughCopy("./fonts/*")
    eleventyConfig.addPassthroughCopy("./images/**/*")
    eleventyConfig.addPassthroughCopy("./favicon/*")
    eleventyConfig.addPassthroughCopy("./files/*")
    eleventyConfig.addWatchTarget("./");

    // Add YAML data extension
    eleventyConfig.addDataExtension("yaml", (contents) => YAML.parse(contents));
};