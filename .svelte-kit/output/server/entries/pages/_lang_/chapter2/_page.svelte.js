import { s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as add_attribute } from "../../../../chunks/ssr.js";
import { d as t, c as locale } from "../../../../chunks/index2.js";
const css = {
  code: 'section.svelte-d7a7ze{background:#bd46a0;background:linear-gradient(\n			to bottom,\n			#bd46a0 0%,\n			#b27eca 25%,\n			#8e9eca 50%,\n			#6eb1c0 75%\n		);padding:0px 10px 0px 10px}.content.svelte-d7a7ze{max-width:960px;margin:auto}.chapter-header.svelte-d7a7ze{text-align:center}.chapter-size.svelte-d7a7ze{color:white}h2.svelte-d7a7ze,h3.svelte-d7a7ze{color:black}h3.svelte-d7a7ze{font-size:20pt;text-indent:-60px;@media (max-width: 1000px) {\n			text-indent: 0px;\n		}}h2.svelte-d7a7ze{font-size:24pt}.yellow.svelte-d7a7ze{color:#efb215}.pink.svelte-d7a7ze{color:#e529de}p.text-para.svelte-d7a7ze{padding-bottom:20px;color:black;font-family:"Noto Sans", sans-serif;font-size:12pt}blockquote.svelte-d7a7ze{margin-left:20px;padding-left:10px;border-left:5px solid #e529de;font-family:"Laila", serif;font-size:16pt;@media (max-width: 640px) {\n			font-size: 14pt;\n		}}.quote-text.svelte-d7a7ze{font-weight:500;font-style:italic}.quote-attrib.svelte-d7a7ze{text-align:right;@media (max-width: 640px) {\n			font-size: 14pt;\n		}}.quote-name.svelte-d7a7ze{font-weight:400;@media (max-width: 640px) {\n			font-size: 14pt;\n		}}.chapter-link.svelte-d7a7ze{font-size:16pt;font-family:"Laila";color:#ffffff;@media (max-width: 1000px) {\n			font-size: 14pt;\n		}}',
  map: '{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { t, locale, locales } from \\"$lib/translations\\";\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{$t(\\"chapter2.chapter_no\\") + \\" \\" + $t(\\"chapter2.chapter_title\\")}</title>\\n\\t<meta\\n\\t\\tname={$t(\\"chapter2.chapter_no\\") + \\" \\" + $t(\\"chapter2.chapter_title\\")}\\n\\t\\tcontent={$t(\\"chapter2.title\\")}\\n\\t/>\\n</svelte:head>\\n\\n<section>\\n\\t<div class=\\"content\\">\\n\\t\\t<div class=\\"chapter-header py-20\\">\\n\\t\\t\\t<h3 class=\\"chapter-size\\">\\n\\t\\t\\t\\t{$t(\\"chapter2.chapter_no\\")}\\n\\t\\t\\t\\t<h2 class=\\"yellow\\">{$t(\\"chapter2.chapter_title\\")}</h2>\\n\\t\\t\\t</h3>\\n\\t\\t</div>\\n\\n\\t\\t<figure class=\\"py-8\\">\\n\\t\\t\\t<img src=\\"/illustrations/{$t(\'chapter2.fem_utopia_ver\')}\\" />\\n\\t\\t</figure>\\n\\n\\t\\t<h3 class=\\"py-8\\">{$t(\\"chapter2.subheader_1\\")}</h3>\\n\\n\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t{@html $t(\\"chapter2.para_1\\")}\\n\\t\\t</p>\\n\\n\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t{@html $t(\\"chapter2.para_2\\")}\\n\\t\\t</p>\\n\\n\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t{@html $t(\\"chapter2.para_3\\")}\\n\\t\\t</p>\\n\\n\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t{@html $t(\\"chapter2.para_4\\")}\\n\\t\\t</p>\\n\\n\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t{@html $t(\\"chapter2.para_5\\")}\\n\\t\\t</p>\\n\\n\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t{@html $t(\\"chapter2.para_6\\")}\\n\\t\\t</p>\\n\\n\\t\\t<blockquote class=\\"my-6\\">\\n\\t\\t\\t<div class=\\"quote-text mb-4\\">\\n\\t\\t\\t\\t{@html $t(\\"chapter2.quote\\")}\\n\\t\\t\\t</div>\\n\\t\\t\\t<span class=\\"quote-attrib\\"\\n\\t\\t\\t\\t><span class=\\"quote-name\\"\\n\\t\\t\\t\\t\\t>{$t(\\"chapter2.name\\")}, <br />\\n\\t\\t\\t\\t</span>{$t(\\"chapter2.org\\")}</span\\n\\t\\t\\t>\\n\\t\\t</blockquote>\\n\\n\\t\\t<div class=\\"flex justify-between py-8\\">\\n\\t\\t\\t<div class=\\"chapter-link\\">\\n\\t\\t\\t\\t<a href={`../${$locale}`}\\n\\t\\t\\t\\t\\t>{$t(\\"chapter2.go_back\\")}\\n\\t\\t\\t\\t\\t<span class=\\"yellow font-bold\\"\\n\\t\\t\\t\\t\\t\\t>{$t(\\"chapter2.back_chapter\\")}</span\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"chapter-link\\">\\n\\t\\t\\t\\t<a href={`../${$locale}/chapter3`}>\\n\\t\\t\\t\\t\\t<span class=\\"pink font-bold\\">\\n\\t\\t\\t\\t\\t\\t{$t(\\"chapter2.to_chapter\\")}</span\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t{$t(\\"chapter2.go_to\\")}\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style>\\n\\tsection {\\n\\t\\tbackground: #bd46a0;\\n\\t\\tbackground: linear-gradient(\\n\\t\\t\\tto bottom,\\n\\t\\t\\t#bd46a0 0%,\\n\\t\\t\\t#b27eca 25%,\\n\\t\\t\\t#8e9eca 50%,\\n\\t\\t\\t#6eb1c0 75%\\n\\t\\t);\\n\\t\\tpadding: 0px 10px 0px 10px;\\n\\t}\\n\\n\\t.content {\\n\\t\\tmax-width: 960px;\\n\\t\\tmargin: auto;\\n\\t}\\n\\n\\t.chapter-header {\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\t.chapter-size {\\n\\t\\tcolor: white;\\n\\t}\\n\\n\\th1,\\n\\th2,\\n\\th3,\\n\\th4,\\n\\tul {\\n\\t\\tcolor: black;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 42pt;\\n\\t}\\n\\n\\th3 {\\n\\t\\tfont-size: 20pt;\\n\\t\\ttext-indent: -60px;\\n\\t\\t@media (max-width: 1000px) {\\n\\t\\t\\ttext-indent: 0px;\\n\\t\\t}\\n\\t}\\n\\n\\th2 {\\n\\t\\tfont-size: 24pt;\\n\\t}\\n\\n\\t.yellow {\\n\\t\\tcolor: #efb215;\\n\\t}\\n\\n\\t.pink {\\n\\t\\tcolor: #e529de;\\n\\t}\\n\\n\\tp.text-para {\\n\\t\\tpadding-bottom: 20px;\\n\\t\\tcolor: black;\\n\\t\\tfont-family: \\"Noto Sans\\", sans-serif;\\n\\t\\tfont-size: 12pt;\\n\\t}\\n\\n\\tblockquote {\\n\\t\\tmargin-left: 20px;\\n\\t\\tpadding-left: 10px;\\n\\t\\tborder-left: 5px solid #e529de;\\n\\t\\tfont-family: \\"Laila\\", serif;\\n\\t\\tfont-size: 16pt;\\n\\n\\t\\t@media (max-width: 640px) {\\n\\t\\t\\tfont-size: 14pt;\\n\\t\\t}\\n\\t}\\n\\n\\t.quote-text {\\n\\t\\tfont-weight: 500;\\n\\t\\tfont-style: italic;\\n\\t}\\n\\n\\t.quote-attrib {\\n\\t\\ttext-align: right;\\n\\t\\t@media (max-width: 640px) {\\n\\t\\t\\tfont-size: 14pt;\\n\\t\\t}\\n\\t}\\n\\n\\t.quote-name {\\n\\t\\tfont-weight: 400;\\n\\t\\t@media (max-width: 640px) {\\n\\t\\t\\tfont-size: 14pt;\\n\\t\\t}\\n\\t}\\n\\n\\t.chapter-link {\\n\\t\\tfont-size: 16pt;\\n\\t\\tfont-family: \\"Laila\\";\\n\\t\\tcolor: #ffffff;\\n\\t\\t@media (max-width: 1000px) {\\n\\t\\t\\tfont-size: 14pt;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAoFC,qBAAQ,CACP,UAAU,CAAE,OAAO,CACnB,UAAU,CAAE;AACd,GAAG,EAAE,CAAC,MAAM,CAAC;AACb,GAAG,OAAO,CAAC,EAAE,CAAC;AACd,GAAG,OAAO,CAAC,GAAG,CAAC;AACf,GAAG,OAAO,CAAC,GAAG,CAAC;AACf,GAAG,OAAO,CAAC,GAAG;AACd,GAAG,CACD,OAAO,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,IACvB,CAEA,sBAAS,CACR,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IACT,CAEA,6BAAgB,CACf,UAAU,CAAE,MACb,CAEA,2BAAc,CACb,KAAK,CAAE,KACR,CAGA,gBAAE,CACF,gBAEG,CACF,KAAK,CAAE,KACR,CAMA,gBAAG,CACF,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,KAAK,CAClB,OAAO,YAAY,MAAM,CAAC,CAAC;AAC7B,GAAG,aAAa,GAAG;AACnB,GACC,CAEA,gBAAG,CACF,SAAS,CAAE,IACZ,CAEA,qBAAQ,CACP,KAAK,CAAE,OACR,CAEA,mBAAM,CACL,KAAK,CAAE,OACR,CAEA,CAAC,wBAAW,CACX,cAAc,CAAE,IAAI,CACpB,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,SAAS,CAAE,IACZ,CAEA,wBAAW,CACV,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC9B,WAAW,CAAE,OAAO,CAAC,CAAC,KAAK,CAC3B,SAAS,CAAE,IAAI,CAEf,OAAO,YAAY,KAAK,CAAC,CAAC;AAC5B,GAAG,WAAW,IAAI;AAClB,GACC,CAEA,yBAAY,CACX,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACb,CAEA,2BAAc,CACb,UAAU,CAAE,KAAK,CACjB,OAAO,YAAY,KAAK,CAAC,CAAC;AAC5B,GAAG,WAAW,IAAI;AAClB,GACC,CAEA,yBAAY,CACX,WAAW,CAAE,GAAG,CAChB,OAAO,YAAY,KAAK,CAAC,CAAC;AAC5B,GAAG,WAAW,IAAI;AAClB,GACC,CAEA,2BAAc,CACb,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,OAAO,CACpB,KAAK,CAAE,OAAO,CACd,OAAO,YAAY,MAAM,CAAC,CAAC;AAC7B,GAAG,WAAW,IAAI;AAClB,GACC"}'
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  $$result.css.add(css);
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `${$$result.head += `<!-- HEAD_svelte-107drp4_START -->${$$result.title = `<title>${escape($t("chapter2.chapter_no") + " " + $t("chapter2.chapter_title"))}</title>`, ""}<meta${add_attribute("name", $t("chapter2.chapter_no") + " " + $t("chapter2.chapter_title"), 0)}${add_attribute("content", $t("chapter2.title"), 0)}><!-- HEAD_svelte-107drp4_END -->`, ""} <section class="svelte-d7a7ze"><div class="content svelte-d7a7ze"><div class="chapter-header py-20 svelte-d7a7ze"><h3 class="chapter-size svelte-d7a7ze">${escape($t("chapter2.chapter_no"))} <h2 class="yellow svelte-d7a7ze">${escape($t("chapter2.chapter_title"))}</h2></h3></div> <figure class="py-8"><img src="${"/illustrations/" + escape($t("chapter2.fem_utopia_ver"), true)}"></figure> <h3 class="py-8 svelte-d7a7ze">${escape($t("chapter2.subheader_1"))}</h3> <p class="text-para svelte-d7a7ze"><!-- HTML_TAG_START -->${$t("chapter2.para_1")}<!-- HTML_TAG_END --></p> <p class="text-para svelte-d7a7ze"><!-- HTML_TAG_START -->${$t("chapter2.para_2")}<!-- HTML_TAG_END --></p> <p class="text-para svelte-d7a7ze"><!-- HTML_TAG_START -->${$t("chapter2.para_3")}<!-- HTML_TAG_END --></p> <p class="text-para svelte-d7a7ze"><!-- HTML_TAG_START -->${$t("chapter2.para_4")}<!-- HTML_TAG_END --></p> <p class="text-para svelte-d7a7ze"><!-- HTML_TAG_START -->${$t("chapter2.para_5")}<!-- HTML_TAG_END --></p> <p class="text-para svelte-d7a7ze"><!-- HTML_TAG_START -->${$t("chapter2.para_6")}<!-- HTML_TAG_END --></p> <blockquote class="my-6 svelte-d7a7ze"><div class="quote-text mb-4 svelte-d7a7ze"><!-- HTML_TAG_START -->${$t("chapter2.quote")}<!-- HTML_TAG_END --></div> <span class="quote-attrib svelte-d7a7ze"><span class="quote-name svelte-d7a7ze">${escape($t("chapter2.name"))}, <br> </span>${escape($t("chapter2.org"))}</span></blockquote> <div class="flex justify-between py-8"><div class="chapter-link svelte-d7a7ze"><a${add_attribute("href", `../${$locale}`, 0)}>${escape($t("chapter2.go_back"))} <span class="yellow font-bold svelte-d7a7ze">${escape($t("chapter2.back_chapter"))}</span></a></div> <div class="chapter-link svelte-d7a7ze"><a${add_attribute("href", `../${$locale}/chapter3`, 0)}><span class="pink font-bold svelte-d7a7ze">${escape($t("chapter2.to_chapter"))}</span> ${escape($t("chapter2.go_to"))}</a></div></div></div> </section>`;
});
export {
  Page as default
};
