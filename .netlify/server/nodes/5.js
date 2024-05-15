import * as universal from '../entries/pages/chi-siamo/_page.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/chi-siamo/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/chi-siamo/+page.ts";
export const imports = ["_app/immutable/nodes/5.iH8h1B9E.js","_app/immutable/chunks/scheduler.C8xB6X-8.js","_app/immutable/chunks/index.a-ADXh7o.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/storyblok-js.YHKC1NIq.js"];
export const stylesheets = [];
export const fonts = [];
