import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.uR-1PgGj.js","_app/immutable/chunks/index.DnOrKzsY.js","_app/immutable/chunks/index.D3blekvI.js","_app/immutable/chunks/scheduler.6wlBD6-3.js","_app/immutable/chunks/index.Cmv0BlU7.js"];
export const stylesheets = [];
export const fonts = [];
