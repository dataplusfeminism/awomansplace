import * as universal from '../entries/pages/_layout.js';
import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.OBiQKxRR.js","_app/immutable/chunks/CPxYzlcQ.js","_app/immutable/chunks/cYdHAS5C.js","_app/immutable/chunks/DGhRV1CF.js","_app/immutable/chunks/NGToSnMG.js"];
export const stylesheets = [];
export const fonts = [];
