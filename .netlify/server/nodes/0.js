import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CDvcIWvO.js","_app/immutable/chunks/storyblok-js.YHKC1NIq.js","_app/immutable/chunks/index.a-ADXh7o.js","_app/immutable/chunks/scheduler.C8xB6X-8.js","_app/immutable/chunks/entry.CVqbvDPn.js","_app/immutable/chunks/index.D0piL1w-.js"];
export const stylesheets = ["_app/immutable/assets/0.vhUTzwn_.css"];
export const fonts = [];
