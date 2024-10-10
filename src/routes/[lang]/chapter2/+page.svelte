<script>
	import { t, locale, locales } from "$lib/translations";
</script>

<svelte:head>
	<title>Chapter 2 - What is our vision of a safe city?</title>
	<meta
		name="Chapter 2 - What is our vision of a safe city? "
		content="A woman's place is in a safe city"
	/>
</svelte:head>

<section>
	<div class="content">
		<div class="chapter-header py-20">
			<h3 class="chapter-size">
				{$t("chapter2.chapter_no")}
				<h2 class="yellow">{$t("chapter2.chapter_title")}</h2>
			</h3>
		</div>

		<figure class="py-8">
			<img src="/illustrations/{$t('chapter2.fem_utopia_ver')}" />
		</figure>

		<h3 class="py-8">{$t("chapter2.subheader_1")}</h3>

		<p class="text-para">
			{@html $t("chapter2.para_1")}
		</p>

		<p class="text-para">
			{@html $t("chapter2.para_2")}
		</p>

		<p class="text-para">
			{@html $t("chapter2.para_3")}
		</p>

		<p class="text-para">
			{@html $t("chapter2.para_4")}
		</p>

		<p class="text-para">
			{@html $t("chapter2.para_5")}
		</p>

		<p class="text-para">
			{@html $t("chapter2.para_6")}
		</p>

		<blockquote class="my-6">
			<div class="quote-text mb-4">
				{@html $t("chapter2.quote")}
			</div>
			<span class="quote-attrib"
				><span class="quote-name"
					>{$t("chapter2.name")}, <br />
				</span>{$t("chapter2.org")}</span
			>
		</blockquote>

		<div class="flex justify-between py-8">
			<div class="chapter-link">
				<a href={`../${$locale}`}
					>{$t("chapter2.go_back")}
					<span class="yellow font-bold"
						>{$t("chapter2.back_chapter")}</span
					>
				</a>
			</div>
			<div class="chapter-link">
				<a href={`../${$locale}/chapter3`}>
					<span class="pink font-bold">
						{$t("chapter2.to_chapter")}</span
					>
					{$t("chapter2.go_to")}
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background: #bd46a0;
		background: linear-gradient(
			to bottom,
			#bd46a0 0%,
			#b27eca 25%,
			#8e9eca 50%,
			#6eb1c0 75%
		);
		padding: 0px 10px 0px 10px;
	}

	.content {
		max-width: 960px;
		margin: auto;
	}

	.chapter-header {
		text-align: center;
	}

	.chapter-size {
		color: white;
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
		font-size: 20pt;
		text-indent: -60px;
		@media (max-width: 1000px) {
			text-indent: 0px;
		}
	}

	h2 {
		font-size: 24pt;
	}

	.yellow {
		color: #efb215;
	}

	.pink {
		color: #e529de;
	}

	p.text-para {
		padding-bottom: 20px;
		color: black;
		font-family: "Noto Sans", sans-serif;
		font-size: 12pt;
	}

	blockquote {
		margin-left: 20px;
		padding-left: 10px;
		border-left: 5px solid #e529de;
		font-family: "Laila", serif;
		font-size: 16pt;

		@media (max-width: 640px) {
			font-size: 14pt;
		}
	}

	.quote-text {
		font-weight: 500;
		font-style: italic;
	}

	.quote-attrib {
		text-align: right;
		@media (max-width: 640px) {
			font-size: 14pt;
		}
	}

	.quote-name {
		font-weight: 400;
		@media (max-width: 640px) {
			font-size: 14pt;
		}
	}

	.chapter-link {
		font-size: 16pt;
		font-family: "Laila";
		color: #ffffff;
		@media (max-width: 1000px) {
			font-size: 14pt;
		}
	}
</style>
