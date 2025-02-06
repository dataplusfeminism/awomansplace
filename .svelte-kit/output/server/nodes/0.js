import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.B3JRIxhH.js","_app/immutable/chunks/index.Bn1vHyFR.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/index.Cmv0BlU7.js","_app/immutable/chunks/scheduler.6wlBD6-3.js","_app/immutable/chunks/index.BFL5IW7c.js"];
export const stylesheets = [];
export const fonts = [];
