import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { renderRichText } from "@storyblok/js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<article><figure class="image is-2by1 block"><img${add_attribute("src", data.story?.content.image?.filename, 0)}${add_attribute("alt", data.story?.content.image?.alt, 0)}></figure> <section class="section content"><h1 class="title is-2">${escape(data.story?.content.title)}</h1> <blockquote>${escape(data.story?.content.date)} <br> ${escape(data.story?.content.place)}</blockquote> <p><!-- HTML_TAG_START -->${renderRichText(data.story?.content.description)}<!-- HTML_TAG_END --></p></section> ${data.story?.content.asset?.filename ? `<a${add_attribute("href", data.story?.content.asset?.filename, 0)} class="button is-primary" target="_blank">Scarica allegato</a>` : ``}</article>`;
});
export {
  Page as default
};
