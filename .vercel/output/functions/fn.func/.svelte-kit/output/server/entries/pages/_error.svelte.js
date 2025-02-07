import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { c as t, d as locale } from "../../chunks/index2.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  const { status } = $page;
  $$unsubscribe_page();
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `<div class="content"><h1>${escape($t("error.shit.happens"))} (${escape(status)})</h1> <p>${escape($t(`error.${status}`, { default: $t("error.default") }))}</p> <br> <br> ${escape($locale)} – ${escape($t(`lang.${$locale}`))}</div>`;
});
export {
  Error as default
};
