import { c as create_ssr_component, b as add_attribute, e as escape, d as each } from "../../../chunks/ssr.js";
import { renderRichText } from "@storyblok/js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<figure class="image is-2by1 block"><img${add_attribute("src", `${data.candidates?.content.image?.filename}/m/1104x552/smart`, 0)}${add_attribute("alt", data.candidates?.content.image?.alt, 0)}></figure> <section class="section content"><h1 class="title is-1">${escape(data.candidates?.content.title)}</h1> <!-- HTML_TAG_START -->${renderRichText(data.candidates?.content.description)}<!-- HTML_TAG_END --></section> <div class="columns is-multiline">${each(data.stories ?? [], (story) => {
    return `<div class="${"column " + escape(story.content.mayor ? "is-full" : "is-half", true)}"><div class="card"><div class="card-image"><figure class="image is-3by2"><img${add_attribute("src", `${story.content.image?.filename}/m/1104x736/smart`, 0)}${add_attribute("alt", story.content.image?.filename, 0)}> </figure></div> <div class="card-content"><div class="content"><h2 class="title is-4">${escape(story.content.title)}</h2> <p>${escape(story.content.intro)}</p> </div></div> <footer class="card-footer"><a${add_attribute("href", story.full_slug, 0)} class="card-footer-item">Scopri di più</a> </footer></div> </div>`;
  })}</div>`;
});
export {
  Page as default
};
