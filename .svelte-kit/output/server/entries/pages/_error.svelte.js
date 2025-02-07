import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/index2.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const { status } = $page;
  $$unsubscribe_page();
  return `<div class="content"><h1>Error occured (${escape(status)})</h1></div>`;
});
export {
  Error as default
};
