import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../../chunks/ssr.js";
import { d as t } from "../../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_t();
  return `<h1>${escape($t("about.title"))}</h1> <p><!-- HTML_TAG_START -->${$t("about.text")}<!-- HTML_TAG_END --></p>`;
});
export {
  Page as default
};
