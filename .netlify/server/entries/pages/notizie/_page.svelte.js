import { c as create_ssr_component, d as each, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="columns is-multiline">${each(data.stories ?? [], (story) => {
    return `<div class="column is-half"><div class="card"><div class="card-image"><figure class="image is-3by2"><img${add_attribute("src", story.content.image?.filename, 0)}${add_attribute("alt", story.content.image?.filename, 0)}> </figure></div> <div class="card-content"><div class="content"><h2 class="title is-4">${escape(story.content.title)}</h2> <p>${escape(story.content.intro)}</p> </div></div> <footer class="card-footer"><a${add_attribute("href", story.full_slug, 0)} class="card-footer-item">Scopri di più</a> </footer></div> </div>`;
  })}</div>`;
});
export {
  Page as default
};
