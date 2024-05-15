import * as universal from '../entries/pages/notizie/_page.ts.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/notizie/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/notizie/+page.ts";
export const imports = ["_app/immutable/nodes/8.B8GTj42q.js","_app/immutable/chunks/scheduler.C8xB6X-8.js","_app/immutable/chunks/index.a-ADXh7o.js","_app/immutable/chunks/each.D6YF6ztN.js"];
export const stylesheets = [];
export const fonts = [];
