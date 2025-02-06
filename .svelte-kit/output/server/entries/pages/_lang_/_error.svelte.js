import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { d as t, c as locale } from "../../../chunks/index2.js";
const css = {
  code: ".content.svelte-fjlgwo{max-width:960px;margin:auto}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script>\\n  import { page } from '$app/stores';\\n  import { t, locale } from '$lib/translations';\\n\\n  const { status } = $page;\\n<\/script>\\n\\n<div class=\\"content\\">\\n  <h1>{$t('error.message')} ({status})</h1>\\n  <p>{$t(\`error.\${status}\`, { default: $t('error.default') })}</p>\\n  <br>\\n  <br>\\n  {$locale} – {$t(\`lang.\${$locale}\`)}\\n</div>\\n\\n<style>\\n  .content {\\n\\t\\tmax-width: 960px;\\n\\t\\tmargin: auto;\\n\\t}\\n\\n</style>"],"names":[],"mappings":"AAgBE,sBAAS,CACT,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IACT"}`
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  const { status } = $page;
  $$result.css.add(css);
  $$unsubscribe_page();
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `<div class="content svelte-fjlgwo"><h1>${escape($t("error.message"))} (${escape(status)})</h1> <p>${escape($t(`error.${status}`, { default: $t("error.default") }))}</p> <br> <br> ${escape($locale)} – ${escape($t(`lang.${$locale}`))} </div>`;
});
export {
  Error as default
};
