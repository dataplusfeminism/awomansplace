import { s as subscribe, n as null_to_empty } from "../../../../chunks/utils.js";
import { s as setContext, c as create_ssr_component, e as escape, g as getContext, a as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { w as writable } from "../../../../chunks/index.js";
import { d as t, c as locale } from "../../../../chunks/index2.js";
const css$2 = {
  code: 'div.accordion.svelte-1n1bl7m{margin:1rem 0}div.accordion.svelte-1n1bl7m::after{content:"";height:20px;width:100%;background:url("http://lorempixel.com/g/400/100/?example.jpg")}.text.svelte-1n1bl7m{flex:1;display:flex;align-items:center}div.details.svelte-1n1bl7m{background-color:transparent;padding:1rem}.arrow.svelte-1n1bl7m{transition:transform 0.3s;margin-right:0.5rem}.arrow-up.svelte-1n1bl7m{transform:rotate(180deg)}',
  map: '{"version":3,"file":"Accordion.svelte","sources":["Accordion.svelte"],"sourcesContent":["<script context=\\"module\\">\\n    import { setContext, getContext } from \\"svelte\\";\\n    import { writable } from \\"svelte/store\\";\\n\\n    const key = {};\\n\\n    export const getAccordionContext = () => getContext(key);\\n    export const createAccordionContext = () => {\\n        const current = writable(null);\\n        const context = { current };\\n        setContext(key, context);\\n\\n        return context;\\n    };\\n<\/script>\\n\\n<script>\\n    import { quadInOut } from \\"svelte/easing\\";\\n    import { slide } from \\"svelte/transition\\";\\n\\n    export let open = true;\\n\\n    const { current } = getAccordionContext();\\n    const currentKey = {};\\n\\n    createAccordionContext(); // Context for children\\n\\n    function handleClick() {\\n        open = !open;\\n        if (open) $current = currentKey;\\n    }\\n\\n    $: if ($current != currentKey) open = false;\\n<\/script>\\n\\n<div class=\\"accordion\\">\\n    <div class=\\"header\\" on:click={handleClick}>\\n        <div class=\\"text\\">\\n            <span class={`arrow ${open ? \\"arrow-up\\" : \\"\\"}`}>▼</span>\\n            <slot name=\\"title\\"></slot>\\n        </div>\\n        <slot name=\\"image\\"></slot>\\n    </div>\\n\\n    {#if open}\\n        <div\\n            class=\\"details\\"\\n            transition:slide={{ duration: 150, easing: quadInOut }}\\n        >\\n            <slot name=\\"details\\"></slot>\\n        </div>\\n    {/if}\\n</div>\\n\\n<style>\\n    div.accordion {\\n        margin: 1rem 0;\\n    }\\n\\n    div.accordion::after {\\n        content: \\"\\";\\n        height: 20px;\\n        width: 100%; /* or i.e: 500px */\\n        background: url(\\"http://lorempixel.com/g/400/100/?example.jpg\\");\\n    }\\n\\n    div.header {\\n        /* display: flex;\\n        width: 100%; */\\n    }\\n\\n    .text {\\n        flex: 1;\\n        display: flex;\\n        align-items: center; /* Center the arrow and text vertically */\\n    }\\n\\n    div.details {\\n        background-color: transparent;\\n        padding: 1rem;\\n    }\\n\\n    .arrow {\\n        transition: transform 0.3s;\\n        margin-right: 0.5rem; /* Spacing between arrow and text */\\n    }\\n    .arrow-up {\\n        transform: rotate(180deg);\\n    }\\n</style>\\n"],"names":[],"mappings":"AAuDI,GAAG,yBAAW,CACV,MAAM,CAAE,IAAI,CAAC,CACjB,CAEA,GAAG,yBAAU,OAAQ,CACjB,OAAO,CAAE,EAAE,CACX,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,mDAChB,CAOA,oBAAM,CACF,IAAI,CAAE,CAAC,CACP,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACjB,CAEA,GAAG,uBAAS,CACR,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,IACb,CAEA,qBAAO,CACH,UAAU,CAAE,SAAS,CAAC,IAAI,CAC1B,YAAY,CAAE,MAClB,CACA,wBAAU,CACN,SAAS,CAAE,OAAO,MAAM,CAC5B"}'
};
const key = {};
const getAccordionContext = () => getContext(key);
const createAccordionContext = () => {
  const current = writable(null);
  const context = { current };
  setContext(key, context);
  return context;
};
const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $current, $$unsubscribe_current;
  let { open = true } = $$props;
  const { current } = getAccordionContext();
  $$unsubscribe_current = subscribe(current, (value) => $current = value);
  const currentKey = {};
  createAccordionContext();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  $$result.css.add(css$2);
  {
    if ($current != currentKey) open = false;
  }
  $$unsubscribe_current();
  return `<div class="accordion svelte-1n1bl7m"><div class="header svelte-1n1bl7m"><div class="text svelte-1n1bl7m"><span class="${escape(null_to_empty(`arrow ${open ? "arrow-up" : ""}`), true) + " svelte-1n1bl7m"}">▼</span> ${slots.title ? slots.title({}) : ``}</div> ${slots.image ? slots.image({}) : ``}</div> ${open ? `<div class="details svelte-1n1bl7m">${slots.details ? slots.details({}) : ``}</div>` : ``} </div>`;
});
const css$1 = {
  code: 'blockquote.svelte-ygqb2y{margin:20px 0px 20px 10px;padding-left:10px;border-left:5px solid #e529de;font-family:"Laila", serif;font-size:14pt;@media (max-width: 640px) {\n			font-size: 12pt;\n		}}.quote-text.svelte-ygqb2y{font-weight:500;font-style:italic}.quote-name.svelte-ygqb2y{font-weight:400;@media (max-width: 640px) {\n			font-size: 14pt;\n		}}',
  map: '{"version":3,"file":"Quote.svelte","sources":["Quote.svelte"],"sourcesContent":["<div class=\\"accordion\\">\\n\\t<blockquote>\\n\\t\\t<div class=\\"quote-text mb-4\\"><slot name=\\"text\\"></slot></div>\\n\\t\\t<span class=\\"quote-attrib\\"\\n\\t\\t\\t><span class=\\"quote-name\\"><slot name=\\"person\\"></slot></span>\\n\\t\\t\\t<slot name=\\"org\\"></slot></span\\n\\t\\t>\\n\\t</blockquote>\\n</div>\\n\\n<style>\\n\\tblockquote {\\n\\t\\tmargin: 20px 0px 20px 10px;\\n\\t\\tpadding-left: 10px;\\n\\t\\tborder-left: 5px solid #e529de;\\n\\t\\tfont-family: \\"Laila\\", serif;\\n\\t\\tfont-size: 14pt;\\n\\n\\t\\t@media (max-width: 640px) {\\n\\t\\t\\tfont-size: 12pt;\\n\\t\\t}\\n\\t}\\n\\n\\t.quote-text {\\n\\t\\tfont-weight: 500;\\n\\t\\tfont-style: italic;\\n\\t}\\n\\n\\t.quote-name {\\n\\t\\tfont-weight: 400;\\n\\t\\t@media (max-width: 640px) {\\n\\t\\t\\tfont-size: 14pt;\\n\\t\\t}\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AAWC,wBAAW,CACV,MAAM,CAAE,IAAI,CAAC,GAAG,CAAC,IAAI,CAAC,IAAI,CAC1B,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC9B,WAAW,CAAE,OAAO,CAAC,CAAC,KAAK,CAC3B,SAAS,CAAE,IAAI,CAEf,OAAO,YAAY,KAAK,CAAC,CAAC;AAC5B,GAAG,WAAW,IAAI;AAClB,GACC,CAEA,yBAAY,CACX,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MACb,CAEA,yBAAY,CACX,WAAW,CAAE,GAAG,CAChB,OAAO,YAAY,KAAK,CAAC,CAAC;AAC5B,GAAG,WAAW,IAAI;AAClB,GACC"}'
};
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="accordion"><blockquote class="svelte-ygqb2y"><div class="quote-text mb-4 svelte-ygqb2y">${slots.text ? slots.text({}) : ``}</div> <span class="quote-attrib"><span class="quote-name svelte-ygqb2y">${slots.person ? slots.person({}) : ``}</span> ${slots.org ? slots.org({}) : ``}</span></blockquote> </div>`;
});
const css = {
  code: 'section.svelte-wge1qg{background:#56bbb7;background:linear-gradient(to bottom, #56bbb7 0%, #efb215 100%);padding:0px 10px 0px 10px;color:#000000}.content.svelte-wge1qg{max-width:960px;margin:auto}.chapter-header.svelte-wge1qg{text-align:center}h2.svelte-wge1qg,h3.svelte-wge1qg,h4.svelte-wge1qg{color:black}h3.svelte-wge1qg{font-size:20pt;text-indent:-60px;@media (max-width: 1000px) {\n			text-indent: 0px;\n		}}h2.svelte-wge1qg{font-size:18pt;@media (max-width: 1000px) {\n			text-indent: 14px;\n		}}h4.svelte-wge1qg{font-style:normal;font-weight:600;font-size:24px}.pink.svelte-wge1qg{color:#e529de}p.text-para.svelte-wge1qg{padding-bottom:20px;color:black;font-family:"Noto Sans", sans-serif;font-size:12pt}.chapter-link.svelte-wge1qg{font-size:16pt;font-family:"Laila";color:#ffffff;@media (max-width: 1000px) {\n			font-size: 14pt;\n		}}h4.svelte-wge1qg,h2.svelte-wge1qg{cursor:pointer}.border-image.svelte-wge1qg{position:relative;padding-bottom:20px}.border-image.svelte-wge1qg::after{content:"";position:absolute;bottom:0;left:0;right:0;height:20px;background:url("/illustrations/pink-border.png") no-repeat center;background-size:cover}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport Accordion, {\\n\\t\\tcreateAccordionContext,\\n\\t} from \\"/src/components/Accordion.svelte\\";\\n\\n\\timport Quote from \\"/src/components/Quote.svelte\\";\\n\\tcreateAccordionContext();\\n\\n\\timport { t, locale, locales } from \\"$lib/translations\\";\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{$t(\\"chapter3.chapter_no\\") + \\" \\" + $t(\\"chapter3.chapter_title\\")}</title>\\n\\t<meta\\n\\t\\tname={$t(\\"chapter3.chapter_no\\") + \\" \\" + $t(\\"chapter3.chapter_title\\")}\\n\\t\\tcontent={$t(\\"chapter3.title\\")}\\n\\t/>\\n</svelte:head>\\n\\n<section>\\n\\t<div class=\\"content\\">\\n\\t\\t<div class=\\"chapter-header py-20\\">\\n\\t\\t\\t<h3 class=\\"chapter-size\\">\\n\\t\\t\\t\\t{$t(\\"chapter3.chapter_no\\")}\\n\\t\\t\\t\\t<h2 class=\\"pink\\">{$t(\\"chapter3.chapter_title\\")}</h2>\\n\\t\\t\\t</h3>\\n\\t\\t</div>\\n\\n\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t{@html $t(\\"chapter3.para_1\\")}\\n\\t\\t</p>\\n\\n\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t{@html $t(\\"chapter3.para_2\\")}\\n\\t\\t</p>\\n\\n\\t\\t<div class='text-center my-4'><span class='text-center width-auto py-2 px-3 text-md border-2 border-yellow-100 bg-yellow-500 text-white rounded-xl'>\\n\\t\\t\\t{$t(\\"chapter3.instruct\\")}\\n\\t\\t</span></div>\\n\\n\\t\\t<div class=\\"pb-8\\">\\n\\t\\t\\t<div class=\\"border-image\\">\\n\\t\\t\\t\\t<Accordion>\\n\\t\\t\\t\\t\\t<!--- Item-->\\n\\t\\t\\t\\t\\t<div slot=\\"title\\">\\n\\t\\t\\t\\t\\t\\t<h4>{$t(\\"chapter3.label_1.title\\")}</h4>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"image\\">\\n\\t\\t\\t\\t\\t\\t<figure class=\\"py-8\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"/illustrations/civic-infra.png\\" />\\n\\t\\t\\t\\t\\t\\t</figure>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"details\\">\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.para_1\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.quote_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.name_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">{$t(\\"chapter3.label_1.org_1\\")}</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.para_2\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.quote_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.name_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.org_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.para_3\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.quote_3\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.name_3\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.org_3\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_1.para_4\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Accordion>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"border-image\\">\\n\\t\\t\\t\\t<Accordion>\\n\\t\\t\\t\\t\\t<!--- Item-->\\n\\t\\t\\t\\t\\t<div slot=\\"title\\">\\n\\t\\t\\t\\t\\t\\t<h4>\\n\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_2.title\\")}\\n\\t\\t\\t\\t\\t\\t</h4>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"image\\">\\n\\t\\t\\t\\t\\t\\t<figure class=\\"py-8\\">\\n\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\tsrc=\\"/illustrations/awareness-sensitization.png\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t</figure>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"details\\">\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_2.para_1\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_2.quote_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_2.name_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.label_2.org_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_2.para_2\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_2.quote_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_2.name_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_2.org_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_2.para_3\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_2.quote_3\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_2.name_3\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_2.org_3\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Accordion>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"border-image\\">\\n\\t\\t\\t\\t<Accordion>\\n\\t\\t\\t\\t\\t<!--- Item-->\\n\\t\\t\\t\\t\\t<div slot=\\"title\\">\\n\\t\\t\\t\\t\\t\\t<h4>\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_3.title\\")}\\n\\t\\t\\t\\t\\t\\t</h4>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"image\\">\\n\\t\\t\\t\\t\\t\\t<figure class=\\"py-8\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"/illustrations/health-counselling.png\\" />\\n\\t\\t\\t\\t\\t\\t</figure>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"details\\">\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_3.para_1\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_3.quote_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_3.name_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_3.org_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_3.para_2\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Accordion>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"border-image\\">\\n\\t\\t\\t\\t<Accordion>\\n\\t\\t\\t\\t\\t<!--- Item-->\\n\\t\\t\\t\\t\\t<div slot=\\"title\\">\\n\\t\\t\\t\\t\\t\\t<h4>{@html $t(\\"chapter3.label_4.title\\")}</h4>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"image\\">\\n\\t\\t\\t\\t\\t\\t<figure class=\\"py-8\\">\\n\\t\\t\\t\\t\\t\\t\\t<img\\n\\t\\t\\t\\t\\t\\t\\t\\tsrc=\\"/illustrations/strengthen-reporting.png\\"\\n\\t\\t\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t\\t\\t</figure>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"details\\">\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.para_1\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.quote_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.name_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.org_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.para_2\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.quote_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.name_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.org_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.para_3\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.quote_3\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.name_3\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.org_3\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_4.para_4\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Accordion>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"border-image\\">\\n\\t\\t\\t\\t<Accordion>\\n\\t\\t\\t\\t\\t<!--- Item-->\\n\\t\\t\\t\\t\\t<div slot=\\"title\\">\\n\\t\\t\\t\\t\\t\\t<h4>{@html $t(\\"chapter3.label_5.title\\")}</h4>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"image\\">\\n\\t\\t\\t\\t\\t\\t<figure class=\\"py-8\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"/illustrations/legal-interventions.png\\" />\\n\\t\\t\\t\\t\\t\\t</figure>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"details\\">\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_5.para_1\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_5.quote_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_5.name_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_5.org_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_5.para_2\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_5.quote_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_5.name_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_5.org_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Accordion>\\n\\t\\t\\t</div>\\n\\n\\t\\t\\t<div class=\\"border-image\\">\\n\\t\\t\\t\\t<Accordion>\\n\\t\\t\\t\\t\\t<!--- Item-->\\n\\t\\t\\t\\t\\t<div slot=\\"title\\">\\n\\t\\t\\t\\t\\t\\t<h4>{@html $t(\\"chapter3.label_6.title\\")}</h4>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"image\\">\\n\\t\\t\\t\\t\\t\\t<figure class=\\"py-8\\">\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"/illustrations/civil-society.png\\" />\\n\\t\\t\\t\\t\\t\\t</figure>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t<div slot=\\"details\\">\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_6.para_1\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_6.quote_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_6.name_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_6.org_1\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\n\\t\\t\\t\\t\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_6.para_2\\")}\\n\\t\\t\\t\\t\\t\\t</p>\\n\\n\\t\\t\\t\\t\\t\\t<Quote>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"text\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_6.quote_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"person\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_6.name_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t<div slot=\\"org\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.label_6.org_2\\")}\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</Quote>\\n\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t</Accordion>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\n\\t\\t<h3 class=\\"py-8\\">\\n\\t\\t\\t{@html $t(\\"chapter3.subheader_1\\")}\\n\\t\\t</h3>\\n\\n\\t\\t<p class=\\"text-para\\">\\n\\t\\t\\t{@html $t(\\"chapter3.para_3\\")}\\n\\t\\t</p>\\n\\n\\t\\t<!-- Mumbai orgs-->\\n\\t\\t<div class=\\"pb-8\\">\\n\\t\\t\\t<h4>{@html $t(\\"chapter3.mumbai_org\\")}</h4>\\n\\t\\t\\t<table\\n\\t\\t\\t\\tclass=\\"table-fixed width-fixed border-separate border-spacing-4 border border-pink-500\\"\\n\\t\\t\\t>\\n\\t\\t\\t\\t<tbody>\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td class='w-4/12'>\\n\\t\\t\\t\\t\\t\\t\\t<img src=\\"/logos/logo-pov.png\\" />\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t<td>\\n\\t\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.text_pov\\")}\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td><img src=\\"/logos/logo-rdf.png\\"/></td>\\n\\t\\t\\t\\t\\t\\t<td>{@html $t(\\"chapter3.text_rdf\\")}</td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td\\n\\t\\t\\t\\t\\t\\t\\t><span\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"font-bold text-xl\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tstyle=\\"font-family: 'Laila';\\"\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t{$t(\\"chapter3.name_hzm\\")}\\n\\t\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t\\t</td>\\n\\t\\t\\t\\t\\t\\t<td>{@html $t(\\"chapter3.text_hzm\\")}</td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t\\t<td class=\\"place-content-center\\"\\n\\t\\t\\t\\t\\t\\t\\t><img\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"max-w-64\\"\\n\\t\\t\\t\\t\\t\\t\\t\\tsrc=\\"/logos/logo-parcham.jpg\\"\\n\\t\\t\\t\\t\\t\\t\\t/></td\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<td>{@html $t(\\"chapter3.text_par\\")} </td>\\n\\t\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t</tbody>\\n\\t\\t\\t</table>\\n\\t\\t</div>\\n\\n\\t\\t<!-- Kolkata orgs-->\\n\\t\\t<h4>{$t(\\"chapter3.kolkata_org\\")}</h4>\\n\\t\\t<!-- <div class='flex-col border-separate border-spacing-4 border border-pink-500 px-4 py-4'>\\n\\t\\t\\t<div class='flex flex-wrap pa-4'>\\n\\t\\t\\t\\t<div class=''><img class='max-w-40' src=\\"/logos/logo-sappho.jpeg\\" /></div>\\n\\t\\t\\t\\t<div class=''>{@html $t(\\"chapter3.text_sap\\")}</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class='flex flex-wrap pa-4'>\\n\\t\\t\\t\\t<div class='w-1/2 sm: w-full'><img src=\\"/logos/logo-swayam.png\\" /></div>\\n\\t\\t\\t\\t<div class='w-1/2'>{@html $t(\\"chapter3.text_swa\\")}</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class='flex flex-wrap pa-4'>\\n\\t\\t\\t\\t<div class='w-1/2 sm: w-full'><img src=\\"/logos/logo-anandam.jpeg\\" /></div>\\n\\t\\t\\t\\t<div class='w-1/2 sm: w-full'>{@html $t(\\"chapter3.text_ana\\")}</div>\\n\\t\\t\\t</div>\\n\\t\\t</div> -->\\n\\t\\t<table\\n\\t\\t\\tclass=\\"table-fixed width-fixed border-separate border-spacing-4 border border-pink-500\\"\\n\\t\\t>\\n\\t\\t\\t<tbody>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td td class='w-4/12'><img src=\\"/logos/logo-sappho.jpeg\\" /></td>\\n\\t\\t\\t\\t\\t<td>{@html $t(\\"chapter3.text_sap\\")} </td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td><img src=\\"/logos/logo-swayam.png\\" /></td>\\n\\t\\t\\t\\t\\t<td>{@html $t(\\"chapter3.text_swa\\")}</td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t\\t<tr>\\n\\t\\t\\t\\t\\t<td><img src=\\"/logos/logo-anandam.jpeg\\" /></td>\\n\\t\\t\\t\\t\\t<td>{@html $t(\\"chapter3.text_ana\\")}</td>\\n\\t\\t\\t\\t</tr>\\n\\t\\t\\t</tbody>\\n\\t\\t</table>\\n\\n\\t\\t<div class=\\"flex justify-between py-8\\">\\n\\t\\t\\t<div class=\\"chapter-link\\">\\n\\t\\t\\t\\t<a href={\`../\${$locale}/chapter2\`}\\n\\t\\t\\t\\t\\t>{@html $t(\\"chapter3.go_back\\")}\\n\\t\\t\\t\\t\\t<span class=\\"pink font-bold\\"\\n\\t\\t\\t\\t\\t\\t>{@html $t(\\"chapter3.back_chapter\\")}</span\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div class=\\"chapter-link\\">\\n\\t\\t\\t\\t<a href={\`../\${$locale}/method\`}>\\n\\t\\t\\t\\t\\t<span class=\\"pink font-bold\\">\\n\\t\\t\\t\\t\\t\\t{@html $t(\\"chapter3.to_chapter\\")}\\n\\t\\t\\t\\t\\t</span>{@html $t(\\"chapter3.go_to\\")}\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</section>\\n\\n<style>\\n\\tsection {\\n\\t\\tbackground: #56bbb7;\\n\\t\\tbackground: linear-gradient(to bottom, #56bbb7 0%, #efb215 100%);\\n\\t\\tpadding: 0px 10px 0px 10px;\\n\\t\\tcolor: #000000;\\n\\t}\\n\\n\\t.content {\\n\\t\\tmax-width: 960px;\\n\\t\\tmargin: auto;\\n\\t}\\n\\n\\t.chapter-header {\\n\\t\\ttext-align: center;\\n\\t}\\n\\n\\th1,\\n\\th2,\\n\\th3,\\n\\th4,\\n\\tul {\\n\\t\\tcolor: black;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 42pt;\\n\\t}\\n\\n\\th3 {\\n\\t\\tfont-size: 20pt;\\n\\t\\ttext-indent: -60px;\\n\\t\\t@media (max-width: 1000px) {\\n\\t\\t\\ttext-indent: 0px;\\n\\t\\t}\\n\\t}\\n\\n\\th2 {\\n\\t\\tfont-size: 18pt;\\n\\t\\t@media (max-width: 1000px) {\\n\\t\\t\\ttext-indent: 14px;\\n\\t\\t}\\n\\t}\\n\\n\\th4 {\\n\\t\\tfont-style: normal;\\n\\t\\tfont-weight: 600;\\n\\t\\tfont-size: 24px;\\n\\t}\\n\\n\\t.yellow {\\n\\t\\tcolor: #efb215;\\n\\t}\\n\\n\\t.pink {\\n\\t\\tcolor: #e529de;\\n\\t}\\n\\n\\tfigcaption {\\n\\t\\tcolor: black;\\n\\t\\tfont-style: oblique;\\n\\t\\tfont-size: 12pt;\\n\\t\\t@media (max-width: 640px) {\\n\\t\\t\\tfont-size: 10pt;\\n\\t\\t}\\n\\t}\\n\\n\\tp.text-para {\\n\\t\\tpadding-bottom: 20px;\\n\\t\\tcolor: black;\\n\\t\\tfont-family: \\"Noto Sans\\", sans-serif;\\n\\t\\tfont-size: 12pt;\\n\\t}\\n\\n\\t.chapter-link {\\n\\t\\tfont-size: 16pt;\\n\\t\\tfont-family: \\"Laila\\";\\n\\t\\tcolor: #ffffff;\\n\\t\\t@media (max-width: 1000px) {\\n\\t\\t\\tfont-size: 14pt;\\n\\t\\t}\\n\\t}\\n\\n\\t.intext-emphasis {\\n\\t\\tfont-weight: 800;\\n\\t}\\n\\n\\tli {\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 1em;\\n\\t\\ttext-align: left;\\n\\t\\t/* list-style-type: none; */\\n\\t\\tcursor: pointer;\\n\\t\\tcolor: black;\\n\\t}\\n\\n\\th4,\\n\\th2 {\\n\\t\\tcursor: pointer;\\n\\t}\\n\\n\\t.inline-quote {\\n\\t\\tfont-weight: 600;\\n\\t\\tfont-style: italic;\\n\\t}\\n\\n\\t.border-image {\\n\\t\\tposition: relative;\\n\\t\\tpadding-bottom: 20px; /* Adjust as needed */\\n\\t}\\n\\n\\t.border-image::after {\\n\\t\\tcontent: \\"\\";\\n\\t\\tposition: absolute;\\n\\t\\tbottom: 0;\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\theight: 20px; /* Height of the border */\\n\\t\\tbackground: url(\\"/illustrations/pink-border.png\\") no-repeat center; /* Adjust as needed */\\n\\t\\tbackground-size: cover; /* or contain */\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA4dC,qBAAQ,CACP,UAAU,CAAE,OAAO,CACnB,UAAU,CAAE,gBAAgB,EAAE,CAAC,MAAM,CAAC,CAAC,OAAO,CAAC,EAAE,CAAC,CAAC,OAAO,CAAC,IAAI,CAAC,CAChE,OAAO,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,IAAI,CAC1B,KAAK,CAAE,OACR,CAEA,sBAAS,CACR,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,IACT,CAEA,6BAAgB,CACf,UAAU,CAAE,MACb,CAGA,gBAAE,CACF,gBAAE,CACF,gBACG,CACF,KAAK,CAAE,KACR,CAMA,gBAAG,CACF,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,KAAK,CAClB,OAAO,YAAY,MAAM,CAAC,CAAC;AAC7B,GAAG,aAAa,GAAG;AACnB,GACC,CAEA,gBAAG,CACF,SAAS,CAAE,IAAI,CACf,OAAO,YAAY,MAAM,CAAC,CAAC;AAC7B,GAAG,aAAa,IAAI;AACpB,GACC,CAEA,gBAAG,CACF,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IACZ,CAMA,mBAAM,CACL,KAAK,CAAE,OACR,CAWA,CAAC,wBAAW,CACX,cAAc,CAAE,IAAI,CACpB,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,WAAW,CAAC,CAAC,UAAU,CACpC,SAAS,CAAE,IACZ,CAEA,2BAAc,CACb,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,OAAO,CACpB,KAAK,CAAE,OAAO,CACd,OAAO,YAAY,MAAM,CAAC,CAAC;AAC7B,GAAG,WAAW,IAAI;AAClB,GACC,CAeA,gBAAE,CACF,gBAAG,CACF,MAAM,CAAE,OACT,CAOA,2BAAc,CACb,QAAQ,CAAE,QAAQ,CAClB,cAAc,CAAE,IACjB,CAEA,2BAAa,OAAQ,CACpB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,qCAAqC,CAAC,SAAS,CAAC,MAAM,CAClE,eAAe,CAAE,KAClB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $t, $$unsubscribe_t;
  let $locale, $$unsubscribe_locale;
  $$unsubscribe_t = subscribe(t, (value) => $t = value);
  $$unsubscribe_locale = subscribe(locale, (value) => $locale = value);
  createAccordionContext();
  $$result.css.add(css);
  $$unsubscribe_t();
  $$unsubscribe_locale();
  return `${$$result.head += `<!-- HEAD_svelte-14epsix_START -->${$$result.title = `<title>${escape($t("chapter3.chapter_no") + " " + $t("chapter3.chapter_title"))}</title>`, ""}<meta${add_attribute("name", $t("chapter3.chapter_no") + " " + $t("chapter3.chapter_title"), 0)}${add_attribute("content", $t("chapter3.title"), 0)}><!-- HEAD_svelte-14epsix_END -->`, ""} <section class="svelte-wge1qg"><div class="content svelte-wge1qg"><div class="chapter-header py-20 svelte-wge1qg"><h3 class="chapter-size svelte-wge1qg">${escape($t("chapter3.chapter_no"))} <h2 class="pink svelte-wge1qg">${escape($t("chapter3.chapter_title"))}</h2></h3></div> <p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.para_1")}<!-- HTML_TAG_END --></p> <p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.para_2")}<!-- HTML_TAG_END --></p> <div class="text-center my-4"><span class="text-center width-auto py-2 px-3 text-md border-2 border-yellow-100 bg-yellow-500 text-white rounded-xl">${escape($t("chapter3.instruct"))}</span></div> <div class="pb-8"><div class="border-image svelte-wge1qg">${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details"><p class="text-para svelte-wge1qg">${escape($t("chapter3.label_1.para_1"))}</p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org">${escape($t("chapter3.label_1.org_1"))}</div>`;
        },
        person: () => {
          return `<div slot="person">${escape($t("chapter3.label_1.name_1"))}</div>`;
        },
        text: () => {
          return `<div slot="text">${escape($t("chapter3.label_1.quote_1"))}</div>`;
        }
      })} <p class="text-para svelte-wge1qg">${escape($t("chapter3.label_1.para_2"))}</p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org">${escape($t("chapter3.label_1.org_2"))}</div>`;
        },
        person: () => {
          return `<div slot="person">${escape($t("chapter3.label_1.name_2"))}</div>`;
        },
        text: () => {
          return `<div slot="text">${escape($t("chapter3.label_1.quote_2"))}</div>`;
        }
      })} <p class="text-para svelte-wge1qg">${escape($t("chapter3.label_1.para_3"))}</p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org">${escape($t("chapter3.label_1.org_3"))}</div>`;
        },
        person: () => {
          return `<div slot="person">${escape($t("chapter3.label_1.name_3"))}</div>`;
        },
        text: () => {
          return `<div slot="text">${escape($t("chapter3.label_1.quote_3"))}</div>`;
        }
      })} <p class="text-para svelte-wge1qg">${escape($t("chapter3.label_1.para_4"))}</p></div>`;
    },
    image: () => {
      return `<div slot="image" data-svelte-h="svelte-vmkmhs"><figure class="py-8"><img src="/illustrations/civic-infra.png"></figure></div>`;
    },
    title: () => {
      return `<div slot="title"><h4 class="svelte-wge1qg">${escape($t("chapter3.label_1.title"))}</h4></div>`;
    }
  })}</div> <div class="border-image svelte-wge1qg">${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details"><p class="text-para svelte-wge1qg">${escape($t("chapter3.label_2.para_1"))}</p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org">${escape($t("chapter3.label_2.org_1"))}</div>`;
        },
        person: () => {
          return `<div slot="person">${escape($t("chapter3.label_2.name_1"))}</div>`;
        },
        text: () => {
          return `<div slot="text">${escape($t("chapter3.label_2.quote_1"))}</div>`;
        }
      })} <p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_2.para_2")}<!-- HTML_TAG_END --></p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org"><!-- HTML_TAG_START -->${$t("chapter3.label_2.org_2")}<!-- HTML_TAG_END --></div>`;
        },
        person: () => {
          return `<div slot="person"><!-- HTML_TAG_START -->${$t("chapter3.label_2.name_2")}<!-- HTML_TAG_END --></div>`;
        },
        text: () => {
          return `<div slot="text"><!-- HTML_TAG_START -->${$t("chapter3.label_2.quote_2")}<!-- HTML_TAG_END --></div>`;
        }
      })} <p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_2.para_3")}<!-- HTML_TAG_END --></p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org"><!-- HTML_TAG_START -->${$t("chapter3.label_2.org_3")}<!-- HTML_TAG_END --></div>`;
        },
        person: () => {
          return `<div slot="person"><!-- HTML_TAG_START -->${$t("chapter3.label_2.name_3")}<!-- HTML_TAG_END --></div>`;
        },
        text: () => {
          return `<div slot="text"><!-- HTML_TAG_START -->${$t("chapter3.label_2.quote_3")}<!-- HTML_TAG_END --></div>`;
        }
      })}</div>`;
    },
    image: () => {
      return `<div slot="image" data-svelte-h="svelte-16ew6qs"><figure class="py-8"><img src="/illustrations/awareness-sensitization.png"></figure></div>`;
    },
    title: () => {
      return `<div slot="title"><h4 class="svelte-wge1qg">${escape($t("chapter3.label_2.title"))}</h4></div>`;
    }
  })}</div> <div class="border-image svelte-wge1qg">${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details"><p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_3.para_1")}<!-- HTML_TAG_END --></p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org"><!-- HTML_TAG_START -->${$t("chapter3.label_3.org_1")}<!-- HTML_TAG_END --></div>`;
        },
        person: () => {
          return `<div slot="person"><!-- HTML_TAG_START -->${$t("chapter3.label_3.name_1")}<!-- HTML_TAG_END --></div>`;
        },
        text: () => {
          return `<div slot="text"><!-- HTML_TAG_START -->${$t("chapter3.label_3.quote_1")}<!-- HTML_TAG_END --></div>`;
        }
      })} <p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_3.para_2")}<!-- HTML_TAG_END --></p></div>`;
    },
    image: () => {
      return `<div slot="image" data-svelte-h="svelte-iduz1f"><figure class="py-8"><img src="/illustrations/health-counselling.png"></figure></div>`;
    },
    title: () => {
      return `<div slot="title"><h4 class="svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_3.title")}<!-- HTML_TAG_END --></h4></div>`;
    }
  })}</div> <div class="border-image svelte-wge1qg">${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details"><p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_4.para_1")}<!-- HTML_TAG_END --></p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org"><!-- HTML_TAG_START -->${$t("chapter3.label_4.org_1")}<!-- HTML_TAG_END --></div>`;
        },
        person: () => {
          return `<div slot="person"><!-- HTML_TAG_START -->${$t("chapter3.label_4.name_1")}<!-- HTML_TAG_END --></div>`;
        },
        text: () => {
          return `<div slot="text"><!-- HTML_TAG_START -->${$t("chapter3.label_4.quote_1")}<!-- HTML_TAG_END --></div>`;
        }
      })} <p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_4.para_2")}<!-- HTML_TAG_END --></p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org"><!-- HTML_TAG_START -->${$t("chapter3.label_4.org_2")}<!-- HTML_TAG_END --></div>`;
        },
        person: () => {
          return `<div slot="person"><!-- HTML_TAG_START -->${$t("chapter3.label_4.name_2")}<!-- HTML_TAG_END --></div>`;
        },
        text: () => {
          return `<div slot="text"><!-- HTML_TAG_START -->${$t("chapter3.label_4.quote_2")}<!-- HTML_TAG_END --></div>`;
        }
      })} <p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_4.para_3")}<!-- HTML_TAG_END --></p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org"><!-- HTML_TAG_START -->${$t("chapter3.label_4.org_3")}<!-- HTML_TAG_END --></div>`;
        },
        person: () => {
          return `<div slot="person"><!-- HTML_TAG_START -->${$t("chapter3.label_4.name_3")}<!-- HTML_TAG_END --></div>`;
        },
        text: () => {
          return `<div slot="text"><!-- HTML_TAG_START -->${$t("chapter3.label_4.quote_3")}<!-- HTML_TAG_END --></div>`;
        }
      })} <p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_4.para_4")}<!-- HTML_TAG_END --></p></div>`;
    },
    image: () => {
      return `<div slot="image" data-svelte-h="svelte-17ggnod"><figure class="py-8"><img src="/illustrations/strengthen-reporting.png"></figure></div>`;
    },
    title: () => {
      return `<div slot="title"><h4 class="svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_4.title")}<!-- HTML_TAG_END --></h4></div>`;
    }
  })}</div> <div class="border-image svelte-wge1qg">${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details"><p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_5.para_1")}<!-- HTML_TAG_END --></p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org"><!-- HTML_TAG_START -->${$t("chapter3.label_5.org_1")}<!-- HTML_TAG_END --></div>`;
        },
        person: () => {
          return `<div slot="person"><!-- HTML_TAG_START -->${$t("chapter3.label_5.name_1")}<!-- HTML_TAG_END --></div>`;
        },
        text: () => {
          return `<div slot="text"><!-- HTML_TAG_START -->${$t("chapter3.label_5.quote_1")}<!-- HTML_TAG_END --></div>`;
        }
      })} <p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_5.para_2")}<!-- HTML_TAG_END --></p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org"><!-- HTML_TAG_START -->${$t("chapter3.label_5.org_2")}<!-- HTML_TAG_END --></div>`;
        },
        person: () => {
          return `<div slot="person"><!-- HTML_TAG_START -->${$t("chapter3.label_5.name_2")}<!-- HTML_TAG_END --></div>`;
        },
        text: () => {
          return `<div slot="text"><!-- HTML_TAG_START -->${$t("chapter3.label_5.quote_2")}<!-- HTML_TAG_END --></div>`;
        }
      })}</div>`;
    },
    image: () => {
      return `<div slot="image" data-svelte-h="svelte-11qmyf"><figure class="py-8"><img src="/illustrations/legal-interventions.png"></figure></div>`;
    },
    title: () => {
      return `<div slot="title"><h4 class="svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_5.title")}<!-- HTML_TAG_END --></h4></div>`;
    }
  })}</div> <div class="border-image svelte-wge1qg">${validate_component(Accordion, "Accordion").$$render($$result, {}, {}, {
    details: () => {
      return `<div slot="details"><p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_6.para_1")}<!-- HTML_TAG_END --></p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org"><!-- HTML_TAG_START -->${$t("chapter3.label_6.org_1")}<!-- HTML_TAG_END --></div>`;
        },
        person: () => {
          return `<div slot="person"><!-- HTML_TAG_START -->${$t("chapter3.label_6.name_1")}<!-- HTML_TAG_END --></div>`;
        },
        text: () => {
          return `<div slot="text"><!-- HTML_TAG_START -->${$t("chapter3.label_6.quote_1")}<!-- HTML_TAG_END --></div>`;
        }
      })} <p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_6.para_2")}<!-- HTML_TAG_END --></p> ${validate_component(Quote, "Quote").$$render($$result, {}, {}, {
        org: () => {
          return `<div slot="org"><!-- HTML_TAG_START -->${$t("chapter3.label_6.org_2")}<!-- HTML_TAG_END --></div>`;
        },
        person: () => {
          return `<div slot="person"><!-- HTML_TAG_START -->${$t("chapter3.label_6.name_2")}<!-- HTML_TAG_END --></div>`;
        },
        text: () => {
          return `<div slot="text"><!-- HTML_TAG_START -->${$t("chapter3.label_6.quote_2")}<!-- HTML_TAG_END --></div>`;
        }
      })}</div>`;
    },
    image: () => {
      return `<div slot="image" data-svelte-h="svelte-t3b2o1"><figure class="py-8"><img src="/illustrations/civil-society.png"></figure></div>`;
    },
    title: () => {
      return `<div slot="title"><h4 class="svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.label_6.title")}<!-- HTML_TAG_END --></h4></div>`;
    }
  })}</div></div> <h3 class="py-8 svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.subheader_1")}<!-- HTML_TAG_END --></h3> <p class="text-para svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.para_3")}<!-- HTML_TAG_END --></p>  <div class="pb-8"><h4 class="svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.mumbai_org")}<!-- HTML_TAG_END --></h4> <table class="table-fixed width-fixed border-separate border-spacing-4 border border-pink-500"><tbody><tr><td class="w-4/12" data-svelte-h="svelte-duw20z"><img src="/logos/logo-pov.png"></td> <td><!-- HTML_TAG_START -->${$t("chapter3.text_pov")}<!-- HTML_TAG_END --></td></tr> <tr><td data-svelte-h="svelte-ls64ma"><img src="/logos/logo-rdf.png"></td> <td><!-- HTML_TAG_START -->${$t("chapter3.text_rdf")}<!-- HTML_TAG_END --></td></tr> <tr><td><span class="font-bold text-xl" style="font-family: 'Laila';">${escape($t("chapter3.name_hzm"))}</span></td> <td><!-- HTML_TAG_START -->${$t("chapter3.text_hzm")}<!-- HTML_TAG_END --></td></tr> <tr><td class="place-content-center" data-svelte-h="svelte-exhfsc"><img class="max-w-64" src="/logos/logo-parcham.jpg"></td> <td><!-- HTML_TAG_START -->${$t("chapter3.text_par")}<!-- HTML_TAG_END --></td></tr></tbody></table></div>  <h4 class="svelte-wge1qg">${escape($t("chapter3.kolkata_org"))}</h4>  <table class="table-fixed width-fixed border-separate border-spacing-4 border border-pink-500"><tbody><tr><td td class="w-4/12" data-svelte-h="svelte-3sc8l3"><img src="/logos/logo-sappho.jpeg"></td> <td><!-- HTML_TAG_START -->${$t("chapter3.text_sap")}<!-- HTML_TAG_END --></td></tr> <tr><td data-svelte-h="svelte-1uy1r3i"><img src="/logos/logo-swayam.png"></td> <td><!-- HTML_TAG_START -->${$t("chapter3.text_swa")}<!-- HTML_TAG_END --></td></tr> <tr><td data-svelte-h="svelte-x6cx8v"><img src="/logos/logo-anandam.jpeg"></td> <td><!-- HTML_TAG_START -->${$t("chapter3.text_ana")}<!-- HTML_TAG_END --></td></tr></tbody></table> <div class="flex justify-between py-8"><div class="chapter-link svelte-wge1qg"><a${add_attribute("href", `../${$locale}/chapter2`, 0)}><!-- HTML_TAG_START -->${$t("chapter3.go_back")}<!-- HTML_TAG_END --> <span class="pink font-bold svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.back_chapter")}<!-- HTML_TAG_END --></span></a></div> <div class="chapter-link svelte-wge1qg"><a${add_attribute("href", `../${$locale}/method`, 0)}><span class="pink font-bold svelte-wge1qg"><!-- HTML_TAG_START -->${$t("chapter3.to_chapter")}<!-- HTML_TAG_END --> </span><!-- HTML_TAG_START -->${$t("chapter3.go_to")}<!-- HTML_TAG_END --></a></div></div></div> </section>`;
});
export {
  Page as default
};
