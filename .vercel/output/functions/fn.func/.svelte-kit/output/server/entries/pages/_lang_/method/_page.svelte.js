import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../../chunks/ssr.js";
import { c as t, d as locale } from "../../../../chunks/index2.js";
const css = {
  code: 'section.svelte-1czrbj3{background:#f0b123;background:linear-gradient(to bottom, #f0b123 0%, #f58fd2 100%);padding:0px 10px 0px 10px;color:#000000}.content.svelte-1czrbj3{max-width:960px;margin:auto}.chapter-header.svelte-1czrbj3{text-align:center}h2.svelte-1czrbj3,h3.svelte-1czrbj3{color:black}h3.svelte-1czrbj3{font-size:16pt;padding-bottom:8px;text-indent:-60px;@media (max-width: 1000px) {\n            text-indent: 0px;\n        }}h2.svelte-1czrbj3{font-size:18pt;@media (max-width: 1000px) {\n            text-indent: 14px;\n        }}.pink.svelte-1czrbj3{color:#e529de}p.text-para.svelte-1czrbj3{padding-bottom:20px;color:black;font-family:"Noto Sans", sans-serif;font-size:12pt}.chapter-link.svelte-1czrbj3{font-size:16pt;font-family:"Laila";color:#ffffff;@media (max-width: 1000px) {\n            font-size: 14pt;\n        }}li.svelte-1czrbj3{margin:0;padding:1em;text-align:left;font-family:"Noto Sans", sans-serif;cursor:pointer;color:black}h2.svelte-1czrbj3{cursor:pointer}',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import { t, locale, locales } from \\"$lib/translations\\";\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{$t(\\"method.title\\")}</title>\\n\\t<meta\\n\\t\\tname={$t(\\"method.title\\")}\\n        content={$t(\\"method.page_title\\")}\\n    />\\n</svelte:head>\\n\\n<section>\\n    <div class=\\"content\\">\\n        <div class=\\"chapter-header py-8\\">\\n            <h2>{$t(\\"method.title\\")}</h2>\\n        </div>\\n\\n        <p class=\\"text-para\\">\\n            {@html $t(\\"method.para_1\\")}\\n        </p>\\n\\n        <div class=\\"pb-10\\">\\n            <p class=\\"text-para\\">{$t(\\"method.para_2\\")}</p>\\n            <ol>\\n                <li>\\n                    {$t(\\"method.bullet_1\\")}\\n                </li>\\n                <li>\\n                    {$t(\\"method.bullet_2\\")}\\n                </li>\\n                <li>\\n                    {$t(\\"method.bullet_3\\")}\\n                </li>\\n            </ol>\\n        </div>\\n        <div class=\\"pb-10\\">\\n            <h3>{$t(\\"method.subheader_1\\")}</h3>\\n            <p class=\\"text-para\\">\\n                {$t(\\"method.para_3\\")}\\n            </p>\\n        </div>\\n\\n        <!-- <div class=\\"py-10\\">\\n            <h3 class=\\"py-8\\">{@html $t(\\"method.subheader_3\\")}</h3>\\n            <ul class=\\"py-8\\">\\n                <li>\\n                    {@html $t(\\"method.fr_link_1\\")}\\n                </li>\\n                <li>\\n                    {@html $t(\\"method.fr_link_2\\")}\\n                </li>\\n                <li>\\n                    {@html $t(\\"method.fr_link_3\\")}\\n                </li>\\n            </ul>\\n        </div> -->\\n\\n        <div class=\\"pb-10\\">\\n            <h3>️{$t(\\"method.subheader_2\\")}</h3>\\n            <p class=\\"text-para\\">\\n                {@html $t(\\"method.para_4\\")}\\n            </p>\\n            <p class=\\"text-para\\">\\n                {@html $t(\\"method.para_5\\")}\\n            </p>\\n            <p class=\\"text-para\\">\\n                {@html $t(\\"method.para_6\\")}\\n            </p>\\n            <p class=\\"text-para\\">\\n                {@html $t(\\"method.para_7\\")}\\n            </p>\\n            <p class=\\"text-para\\">\\n                {@html $t(\\"method.para_8\\")}\\n            </p>\\n\\n            <div class=\\"flex flex-wrap items-center gap-x-8\\">\\n                <img class=\\"w-auto h-48 my-10\\" src=\\"/logos/logo-lcau.png\\" />\\n                <img class=\\"w-auto h-48 my-10\\" src=\\"/logos/logo-duspmit.png\\" />\\n                <img class=\\"w-auto h-48 my-10\\" src=\\"/logos/logo-df-pink.png\\" />\\n            </div>\\n        </div>\\n\\n        <div class=\\"flex justify-between py-8\\">\\n            <div class=\\"chapter-link\\">\\n                <a href={`../${$locale}/chapter3`}>\\n                    {@html $t(\\"method.go_back\\")}\\n                    <span class=\\"pink font-bold\\"\\n                        >{@html $t(\\"method.back_chapter\\")}\\n                    </span>\\n                </a>\\n            </div>\\n            <div class=\\"chapter-link\\">\\n                <a href={`../${$locale}`}>\\n                    <span class=\\"pink font-bold\\">\\n                        {@html $t(\\"method.home\\")}\\n                    </span> 🏡\\n                </a>\\n            </div>\\n        </div>\\n    </div>\\n</section>\\n\\n<style>\\n    section {\\n        background: #f0b123;\\n        background: linear-gradient(to bottom, #f0b123 0%, #f58fd2 100%);\\n        padding: 0px 10px 0px 10px;\\n        color: #000000;\\n    }\\n\\n    .content {\\n        max-width: 960px;\\n        margin: auto;\\n    }\\n\\n    .chapter-header {\\n        text-align: center;\\n    }\\n\\n    h1,\\n    h2,\\n    h3,\\n    h4,\\n    ul {\\n        color: black;\\n    }\\n\\n    h1 {\\n        font-size: 42pt;\\n    }\\n\\n    h3 {\\n        font-size: 16pt;\\n        padding-bottom: 8px;\\n        text-indent: -60px;\\n        @media (max-width: 1000px) {\\n            text-indent: 0px;\\n        }\\n    }\\n\\n    h2 {\\n        font-size: 18pt;\\n        @media (max-width: 1000px) {\\n            text-indent: 14px;\\n        }\\n    }\\n\\n    h4 {\\n        font-style: normal;\\n        font-weight: 600;\\n    }\\n\\n    .yellow {\\n        color: #efb215;\\n    }\\n\\n    .pink {\\n        color: #e529de;\\n    }\\n\\n    figcaption {\\n        color: black;\\n        font-style: oblique;\\n        font-size: 12pt;\\n        @media (max-width: 640px) {\\n            font-size: 10pt;\\n        }\\n    }\\n\\n    p.text-para {\\n        padding-bottom: 20px;\\n        color: black;\\n        font-family: \\"Noto Sans\\", sans-serif;\\n        font-size: 12pt;\\n    }\\n\\n    .chapter-link {\\n        font-size: 16pt;\\n        font-family: \\"Laila\\";\\n        color: #ffffff;\\n        @media (max-width: 1000px) {\\n            font-size: 14pt;\\n        }\\n    }\\n\\n    .intext-emphasis {\\n        font-weight: 800;\\n    }\\n\\n    li {\\n        margin: 0;\\n        padding: 1em;\\n        text-align: left;\\n        font-family: \\"Noto Sans\\", sans-serif;\\n        /* list-style-type: none; */\\n        cursor: pointer;\\n        color: black;\\n    }\\n\\n    h4,\\n    h2 {\\n        cursor: pointer;\\n    }\\n\\n    .inline-quote {\\n        font-weight: 600;\\n        font-style: italic;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAwGI,sBAAQ,CACJ,UAAU,CAAE,OAAO,CACnB,UAAU,CAAE,gBAAgB,EAAE,CAAC,MAAM,CAAC,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,IAAI,CAAC,CAChE,OAAO,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,IAAI,CAC1B,KAAK,CAAE,OACX,CAEA,uBAAS,CACL,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IACZ,CAEA,8BAAgB,CACZ,UAAU,CAAE,MAChB,CAGA,iBAAE,CACF,iBAEG,CACC,KAAK,CAAE,KACX,CAMA,iBAAG,CACC,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,KAAK,CAClB,OAAO,YAAY,MAAM,CAAC,CAAC;AACnC,YAAY,aAAa,GAAG;AAC5B,SACI,CAEA,iBAAG,CACC,SAAS,CAAE,IAAI,CACf,OAAO,YAAY,MAAM,CAAC,CAAC;AACnC,YAAY,aAAa,IAAI;AAC7B,SACI,CAWA,oBAAM,CACF,KAAK,CAAE,OACX,CAWA,CAAC,yBAAW,CACR,cAAc,CAAE,IAAI,CACpB,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,SAAS,CAAE,IACf,CAEA,4BAAc,CACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,OAAO,CACpB,KAAK,CAAE,OAAO,CACd,OAAO,YAAY,MAAM,CAAC,CAAC;AACnC,YAAY,WAAW,IAAI;AAC3B,SACI,CAMA,iBAAG,CACC,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,IAAI,CAChB,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CAEpC,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,KACX,CAGA,iBAAG,CACC,MAAM,CAAE,OACZ"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$result.css.add(css);
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `${$$result.head += `<!-- HEAD_svelte-1l8ufen_START -->${$$result.title = `<title>${escape($t("method.title"))}</title>`, ""}<meta${add_attribute("name", $t("method.title"), 0)}${add_attribute("content", $t("method.page_title"), 0)}><!-- HEAD_svelte-1l8ufen_END -->`, ""} <section class="svelte-1czrbj3"><div class="content svelte-1czrbj3"><div class="chapter-header py-8 svelte-1czrbj3"><h2 class="svelte-1czrbj3">${escape($t("method.title"))}</h2></div> <p class="text-para svelte-1czrbj3"><!-- HTML_TAG_START -->${$t("method.para_1")}<!-- HTML_TAG_END --></p> <div class="pb-10"><p class="text-para svelte-1czrbj3">${escape($t("method.para_2"))}</p> <ol><li class="svelte-1czrbj3">${escape($t("method.bullet_1"))}</li> <li class="svelte-1czrbj3">${escape($t("method.bullet_2"))}</li> <li class="svelte-1czrbj3">${escape($t("method.bullet_3"))}</li></ol></div> <div class="pb-10"><h3 class="svelte-1czrbj3">${escape($t("method.subheader_1"))}</h3> <p class="text-para svelte-1czrbj3">${escape($t("method.para_3"))}</p></div>  <div class="pb-10"><h3 class="svelte-1czrbj3">️${escape($t("method.subheader_2"))}</h3> <p class="text-para svelte-1czrbj3"><!-- HTML_TAG_START -->${$t("method.para_4")}<!-- HTML_TAG_END --></p> <p class="text-para svelte-1czrbj3"><!-- HTML_TAG_START -->${$t("method.para_5")}<!-- HTML_TAG_END --></p> <p class="text-para svelte-1czrbj3"><!-- HTML_TAG_START -->${$t("method.para_6")}<!-- HTML_TAG_END --></p> <p class="text-para svelte-1czrbj3"><!-- HTML_TAG_START -->${$t("method.para_7")}<!-- HTML_TAG_END --></p> <p class="text-para svelte-1czrbj3"><!-- HTML_TAG_START -->${$t("method.para_8")}<!-- HTML_TAG_END --></p> <div class="flex flex-wrap items-center gap-x-8" data-svelte-h="svelte-v5hvx3"><img class="w-auto h-48 my-10" src="/logos/logo-lcau.png"> <img class="w-auto h-48 my-10" src="/logos/logo-duspmit.png"> <img class="w-auto h-48 my-10" src="/logos/logo-df-pink.png"></div></div> <div class="flex justify-between py-8"><div class="chapter-link svelte-1czrbj3"><a${add_attribute("href", `../${$locale}/chapter3`, 0)}><!-- HTML_TAG_START -->${$t("method.go_back")}<!-- HTML_TAG_END --> <span class="pink font-bold svelte-1czrbj3"><!-- HTML_TAG_START -->${$t("method.back_chapter")}<!-- HTML_TAG_END --></span></a></div> <div class="chapter-link svelte-1czrbj3"><a${add_attribute("href", `../${$locale}`, 0)}><span class="pink font-bold svelte-1czrbj3"><!-- HTML_TAG_START -->${$t("method.home")}<!-- HTML_TAG_END --></span> 🏡</a></div></div></div> </section>`;
});
export {
  Page as default
};
