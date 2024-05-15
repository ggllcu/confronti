import { c as create_ssr_component, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<article><section class="intro block"><div class="container"><div class="columns"><div class="column is-two-thirds"><div class="content"><h1 class="title is-2">${escape(data.story?.content.title)}</h1> <blockquote>${escape(data.story?.content.intro)}</blockquote></div></div> <div class="column is-one-third"><figure class="image is-square"><img class="is-rounded"${add_attribute("src", `${data.story.content.image?.filename}/m/352x352/smart`, 0)}${add_attribute("alt", data.story?.content.image?.alt, 0)}></figure></div></div></div></section> <section class="section content"><div class="container"><p>${escape(data.story?.content.description)}</p></div></section></article>`;
});
export {
  Page as default
};
