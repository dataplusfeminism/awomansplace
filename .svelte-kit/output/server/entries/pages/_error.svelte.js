import { s as subscribe } from "../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { c as t, d as locale } from "../../chunks/index3.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  const { status } = $page;
  let { error } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
  $$unsubscribe_page();
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `<div class="content"><h1>${escape($t("error.message"))} (${escape(status)})</h1> <p>${escape($t(`error.${status}`, { default: $t("error.default") }))}</p> <br> <br> ${escape($locale)} – ${escape($t(`lang.${$locale}`))} <a href="/" data-svelte-h="svelte-11tu1n7">Go back home</a> </div>`;
});
export {
  Error as default
};
