<script>
    import { t, locale, locales } from "$lib/translations";
    import { base } from "$app/paths";
</script>

<svelte:head>
	<title>{$t("method.title")}</title>
	<meta
		name={$t("method.title")}
        content={$t("method.page_title")}
    />
</svelte:head>

<section>
    <div class="content">
        <div class="chapter-header py-8">
            <h2>{$t("method.title")}</h2>
        </div>

        <p class="text-para">
            {@html $t("method.para_1")}
        </p>

        <div class="pb-10">
            <p class="text-para">{$t("method.para_2")}</p>
            <ol>
                <li>
                    {$t("method.bullet_1")}
                </li>
                <li>
                    {$t("method.bullet_2")}
                </li>
                <li>
                    {$t("method.bullet_3")}
                </li>
            </ol>
        </div>
        <div class="pb-10">
            <h3>{$t("method.subheader_1")}</h3>
            <p class="text-para">
                {$t("method.para_3")}
            </p>
        </div>

        <!-- <div class="py-10">
            <h3 class="py-8">{@html $t("method.subheader_3")}</h3>
            <ul class="py-8">
                <li>
                    {@html $t("method.fr_link_1")}
                </li>
                <li>
                    {@html $t("method.fr_link_2")}
                </li>
                <li>
                    {@html $t("method.fr_link_3")}
                </li>
            </ul>
        </div> -->

        <div class="pb-10">
            <h3>️{$t("method.subheader_2")}</h3>
            <p class="text-para">
                {@html $t("method.para_4")}
            </p>
            <p class="text-para">
                {@html $t("method.para_5")}
            </p>
            <p class="text-para">
                {@html $t("method.para_6")}
            </p>
            <p class="text-para">
                {@html $t("method.para_7")}
            </p>
            <p class="text-para">
                {@html $t("method.para_8")}
            </p>

            <div class="flex flex-wrap items-center gap-x-8">
                <img class="w-auto h-48 my-10" src="/logos/logo-lcau.png" />
                <img class="w-auto h-48 my-10" src="/logos/logo-duspmit.png" />
                <img class="w-auto h-48 my-10" src="/logos/logo-df-pink.png" />
            </div>
        </div>

        <div class="flex justify-between py-8">
            <div class="chapter-link">
                <a href={`${base}/${$locale}/chapter3`}>
                    {@html $t("method.go_back")}
                    <span class="pink font-bold"
                        >{@html $t("method.back_chapter")}
                    </span>
                </a>
            </div>
            <div class="chapter-link">
                <a href={`${base}/${$locale}`}>
                    <span class="pink font-bold">
                        {@html $t("method.home")}
                    </span> 🏡
                </a>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        background: #f0b123;
        background: linear-gradient(to bottom, #f0b123 0%, #f58fd2 100%);
        padding: 0px 10px 0px 10px;
        color: #000000;
    }

    .content {
        max-width: 960px;
        margin: auto;
    }

    .chapter-header {
        text-align: center;
    }

    h1,
    h2,
    h3,
    h4,
    ul {
        color: black;
    }

    h1 {
        font-size: 42pt;
    }

    h3 {
        font-size: 16pt;
        padding-bottom: 8px;
        text-indent: -60px;
        @media (max-width: 1000px) {
            text-indent: 0px;
        }
    }

    h2 {
        font-size: 18pt;
        @media (max-width: 1000px) {
            text-indent: 14px;
        }
    }

    h4 {
        font-style: normal;
        font-weight: 600;
    }

    .yellow {
        color: #efb215;
    }

    .pink {
        color: #e529de;
    }

    figcaption {
        color: black;
        font-style: oblique;
        font-size: 12pt;
        @media (max-width: 640px) {
            font-size: 10pt;
        }
    }

    p.text-para {
        padding-bottom: 20px;
        color: black;
        font-family: "Noto Sans", sans-serif;
        font-size: 12pt;
    }

    .chapter-link {
        font-size: 16pt;
        font-family: "Laila";
        color: #ffffff;
        @media (max-width: 1000px) {
            font-size: 14pt;
        }
    }

    .intext-emphasis {
        font-weight: 800;
    }

    li {
        margin: 0;
        padding: 1em;
        text-align: left;
        font-family: "Noto Sans", sans-serif;
        /* list-style-type: none; */
        cursor: pointer;
        color: black;
    }

    h4,
    h2 {
        cursor: pointer;
    }

    .inline-quote {
        font-weight: 600;
        font-style: italic;
    }
</style>
