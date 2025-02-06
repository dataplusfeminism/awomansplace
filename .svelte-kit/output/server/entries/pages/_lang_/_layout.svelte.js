import { s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, a as add_attribute, e as escape, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { d as locale, c as t, e as locales } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
const css = {
  code: 'nav.svelte-wyg3j4{justify-content:space-between;padding:0.5em 1em 0.5em;max-width:1024px;margin:auto;color:#de45aa}.logo.svelte-wyg3j4{height:80px;max-height:80px;width:auto}.name.svelte-wyg3j4{align-self:center;font-size:28px;font-family:"Laila", serif;font-weight:600;transition:color 0.75s;padding-left:10px}@media(max-width: 640px){.name.svelte-wyg3j4{font-size:24px}}:root{--body-bg-color:#1a1c1d;--text-color:#aaaebc;--red:#e74c3c}a.svelte-wyg3j4{color:inherit;text-decoration:none}.name.svelte-wyg3j4:hover{background:linear-gradient(\n      to left,\n      #4c136f 20%,\n      #eb3de4 30%,\n      #56bbb7 70%,\n      #efb215 80%\n    );-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;text-fill-color:transparent;background-size:200% auto;animation:svelte-wyg3j4-textShine 7s ease-in-out infinite alternate;text-decoration:none}@keyframes svelte-wyg3j4-textShine{to{background-position:200%}}',
  map: '{"version":3,"file":"Nav.svelte","sources":["Nav.svelte"],"sourcesContent":["<script>\\n  import { t, locale, locales } from \\"$lib/translations\\";\\n  import { page } from \'$app/stores\';\\n  import { goto } from \'$app/navigation\';\\n  export let segment;\\n  const links = [\\n    { name: \\"ENG\\", href: \\".\\" },\\n    { name: \\"BAN\\", href: \\".\\" },\\n    { name: \\"HIN\\", href: \\".\\" },\\n  ];\\n\\n  let scribble = \\"#FF6B0E\\";\\n  $: outerWidth = 0;\\n  let window;\\n  // <a href=\\"/\\">Home</a>\\n  // <a href=\\"/about\\">About</a>\\n  // <a href=\\"/settings\\">Settings</a>\\n  let w = 0;\\n  let h = 0;\\n\\n  const handleChange = ({ currentTarget }) => {\\n    console.log(currentTarget);\\n    // const { value } = currentTarget;\\n\\n    document.cookie = `lang=${value} ;`;\\n  };\\n\\n  $: ({ route } = $page.data);\\n<\/script>\\n\\n<svelte:window bind:innerWidth={window} />\\n\\n<nav class=\\"flex items-center\\">\\n  <div class=\\"flex\\">\\n    <a href={`../${$locale}`}>\\n      <img\\n        src=\\"/illustrations/logo.png\\"\\n        class=\\"me-3 h-6 sm:h-9 logo\\"\\n        alt=\\"Project Logo\\"\\n      />\\n    </a>\\n    <a href={`../${$locale}`} class=\\"name py-2\\">\\n      {$t(\\"menu.shorttitle\\")}\\n    </a>\\n  </div>\\n\\n  <select\\n    on:change=\\"{({ target }) => goto(target.value)}\\"\\n    class=\\"rounded-md bg-pink-600 h-10 text-white text-xl font-bold px-3 py-2 text-left shadow-sm ring-1 ring-inset\\n    ring-pink-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:leading-6\\"\\n  >\\n    {#each $locales as lc}\\n      <option value=\\"/{lc}{route}\\" selected=\\"{lc === $locale}\\">{$t(`lang.${lc}`)}</option>\\n    {/each}\\n  </select>\\n</nav>\\n\\n<style>\\n  nav {\\n    justify-content: space-between;\\n    padding: 0.5em 1em 0.5em;\\n    max-width: 1024px;\\n    margin: auto;\\n    color: #de45aa;\\n  }\\n\\n  .logo {\\n    height: 80px;\\n    max-height: 80px;\\n    width: auto;\\n  }\\n\\n  .name {\\n    align-self: center;\\n    /* margin-right: 1.5rem; */\\n    font-size: 28px;\\n    font-family: \\"Laila\\", serif;\\n    font-weight: 600;\\n    transition: color 0.75s;\\n    padding-left: 10px;\\n  }\\n\\n  @media (max-width: 640px) {\\n    .name {\\n      font-size: 24px;\\n    }\\n\\n    .menu a {\\n      font-size: 12px;\\n    }\\n  }\\n\\n  :root {\\n    --body-bg-color: #1a1c1d;\\n    --text-color: #aaaebc;\\n    --red: #e74c3c;\\n  }\\n\\n  ul {\\n    list-style: none;\\n  }\\n\\n  a {\\n    color: inherit;\\n    text-decoration: none;\\n  }\\n\\n  .menu {\\n    display: flex;\\n    justify-content: center;\\n  }\\n\\n  .menu li {\\n    margin-right: 10px;\\n  }\\n\\n  .menu a {\\n    position: relative;\\n    display: block;\\n    padding: 0.1em;\\n  }\\n\\n  .menu a svg {\\n    position: absolute;\\n    top: 50%;\\n    left: 45%;\\n    transform: translate(-50%, -50%);\\n    width: 60%;\\n    height: 70%;\\n    z-index: -1;\\n  }\\n\\n  .menu a svg path {\\n    fill: transparent;\\n    stroke-width: 6px;\\n    stroke-dasharray: 1210.709716796875;\\n    stroke-dashoffset: -1210.709716796875;\\n    transition: stroke-dashoffset 0.5s cubic-bezier(0.29, 0.68, 0.74, 1.02);\\n  }\\n\\n  .menu a:hover svg path,\\n  .menu a:hover svg path .active {\\n    stroke-dashoffset: 0;\\n  }\\n\\n  .name:hover {\\n    background: linear-gradient(\\n      to left,\\n      #4c136f 20%,\\n      #eb3de4 30%,\\n      #56bbb7 70%,\\n      #efb215 80%\\n    );\\n    -webkit-background-clip: text;\\n    background-clip: text;\\n    -webkit-text-fill-color: transparent;\\n    text-fill-color: transparent;\\n    background-size: 200% auto;\\n    animation: textShine 7s ease-in-out infinite alternate;\\n    text-decoration: none;\\n  }\\n\\n  @keyframes textShine {\\n    to {\\n      background-position: 200%;\\n    }\\n  }\\n</style>\\n"],"names":[],"mappings":"AA0DE,iBAAI,CACF,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,KAAK,CAAC,GAAG,CAAC,KAAK,CACxB,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,OACT,CAEA,mBAAM,CACJ,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IACT,CAEA,mBAAM,CACJ,UAAU,CAAE,MAAM,CAElB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,OAAO,CAAC,CAAC,KAAK,CAC3B,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,KAAK,CAAC,KAAK,CACvB,YAAY,CAAE,IAChB,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,mBAAM,CACJ,SAAS,CAAE,IACb,CAKF,CAEA,KAAM,CACJ,eAAe,CAAE,OAAO,CACxB,YAAY,CAAE,OAAO,CACrB,KAAK,CAAE,OACT,CAMA,eAAE,CACA,KAAK,CAAE,OAAO,CACd,eAAe,CAAE,IACnB,CAwCA,mBAAK,MAAO,CACV,UAAU,CAAE;AAChB,MAAM,EAAE,CAAC,IAAI,CAAC;AACd,MAAM,OAAO,CAAC,GAAG,CAAC;AAClB,MAAM,OAAO,CAAC,GAAG,CAAC;AAClB,MAAM,OAAO,CAAC,GAAG,CAAC;AAClB,MAAM,OAAO,CAAC,GAAG;AACjB,KAAK,CACD,uBAAuB,CAAE,IAAI,CAC7B,eAAe,CAAE,IAAI,CACrB,uBAAuB,CAAE,WAAW,CACpC,eAAe,CAAE,WAAW,CAC5B,eAAe,CAAE,IAAI,CAAC,IAAI,CAC1B,SAAS,CAAE,uBAAS,CAAC,EAAE,CAAC,WAAW,CAAC,QAAQ,CAAC,SAAS,CACtD,eAAe,CAAE,IACnB,CAEA,WAAW,uBAAU,CACnB,EAAG,CACD,mBAAmB,CAAE,IACvB,CACF"}'
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let route;
  let $page, $$unsubscribe_page;
  let $locale, $$unsubscribe_locale;
  let $t, $$unsubscribe_t;
  let $locales, $$unsubscribe_locales;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locales = subscribe(locales, (value) => $locales = value);
  let { segment } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
  $$result.css.add(css);
  ({ route } = $page.data);
  $$unsubscribe_page();
  $$unsubscribe_locale();
  $$unsubscribe_t();
  $$unsubscribe_locales();
  return ` <nav class="flex items-center svelte-wyg3j4"><div class="flex"><a${add_attribute("href", `../${$locale}`, 0)} class="svelte-wyg3j4"><img src="/illustrations/logo.png" class="me-3 h-6 sm:h-9 logo svelte-wyg3j4" alt="Project Logo"></a> <a${add_attribute("href", `../${$locale}`, 0)} class="name py-2 svelte-wyg3j4">${escape($t("menu.shorttitle"))}</a></div> <select class="rounded-md bg-pink-600 h-10 text-white text-xl font-bold px-3 py-2 text-left shadow-sm ring-1 ring-inset ring-pink-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:leading-6">${each($locales, (lc) => {
    return `<option value="${"/" + escape(lc, true) + escape(route, true)}" ${lc === $locale ? "selected" : ""}>${escape($t(`lang.${lc}`))}</option>`;
  })}</select> </nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { segment } = $$props;
  if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
  $page.data;
  $$unsubscribe_page();
  return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})} ${slots.default ? slots.default({}) : ``} `;
});
export {
  Layout as default
};
