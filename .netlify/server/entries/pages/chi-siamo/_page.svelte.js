import { c as create_ssr_component, b as add_attribute, e as escape, d as each } from "../../../chunks/ssr.js";
import { renderRichText } from "@storyblok/js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let resolvedRichText;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  resolvedRichText = renderRichText(data.story?.content.description);
  return `<figure class="image is-2by1 block"><img${add_attribute("src", data.story?.content.image?.filename, 0)}${add_attribute("alt", data.story?.content.image?.alt, 0)}></figure> <section class="section content"><h1 class="title is-1">${escape(data.story?.content.title)}</h1> <p><!-- HTML_TAG_START -->${resolvedRichText}<!-- HTML_TAG_END --></p> <hr> <div class="timeline is-centered"><header class="timeline-header" data-svelte-h="svelte-1h7ccqu"><span class="tag is-medium is-primary">Iniziamo</span></header> ${each(data.story?.content.steps ?? [], (step) => {
    return `<div class="timeline-item"><div class="timeline-marker is-primary"></div> <div class="timeline-content"><h2 class="title is-4">${escape(step.title)}</h2> <p class="heading">${escape(step.date)}</p> <p>${escape(step.description)}</p></div> </div>`;
  })}</div></section>`;
});
export {
  Page as default
};
