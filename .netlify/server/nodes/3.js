import * as universal from '../entries/pages/candidati/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/candidati/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/candidati/+page.ts";
export const imports = ["_app/immutable/nodes/3.BElMlVwH.js","_app/immutable/chunks/scheduler.C8xB6X-8.js","_app/immutable/chunks/index.a-ADXh7o.js","_app/immutable/chunks/each.D6YF6ztN.js","_app/immutable/chunks/storyblok-js.YHKC1NIq.js"];
export const stylesheets = [];
export const fonts = [];
