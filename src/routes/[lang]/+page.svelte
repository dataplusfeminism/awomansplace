<script>
	import { t, locale, locales } from "$lib/translations";
</script>

<svelte:head>
	<title>{$t("home.chapterno") + " " + $t("home.chapter_subtitle")}</title>
	<meta
		name={$t("home.chapterno") + " " + $t("home.chapter_subtitle")}
		content={$t("home.title")}
	/>
</svelte:head>

<section>
	<div class="cover-image">
		<!-- <div class="overlay-cover">
			<img class="overlay" src="/illustrations/collage-cover.png" />
		</div> -->
		<div class="cover-text">
			<h1 class="cover">{@html $t("home.title")}</h1>

			<h2 class="yellow">
				{@html $t("home.subtitle")}
			</h2>

			<p class="byline">{@html $t("home.byline")}</p>
			<div class="image-container pt-4">
				<img
					src="/logos/logo-df-teal.png"
					alt="Centered Image"
					class="centered-image"
				/>
			</div>
		</div>
	</div>
	<div class="content">
		<div class="chapter-header py-20">
			<h3 class="chapter-size">{@html $t("home.chapterno")}</h3>
			<h2 class="yellow">
				{@html $t("home.chapter_subtitle")}
			</h2>
		</div>

		<figure class="py-8">
			<img src="/illustrations/{$t('home.comic_ver')}.png" />
			<figcaption class="px-2 py-2">
				{@html $t("home.fig_cap_1")}
			</figcaption>
		</figure>

		<p class="text-para">
			{@html $t("home.para_1")}
		</p>

		<figure class="py-8 mx-2">
			<img src="/headlines/headlines-1.png" />
			<figcaption class="px-2"></figcaption>
		</figure>

		<p class="text-para">
			{@html $t("home.para_2")}
		</p>

		<figure class="py-8 mx-2">
			<img src="/headlines/headlines-2.png" />
		</figure>

		<!-- ️
		<h3 class="py-8">{@html $t("home.subheader_1")}</h3> -->

		<div class="flex justify-center pt-8 pb-4">
			<!-- {#each { length: 3 } as _, i} -->
			<img
				src="/illustrations/logo.png"
				class="me-3 h-6 sm:h-9 logo"
				alt="Project Logo"
			/>
			<!-- {/each} -->
		</div>

		<p class="text-para">
			{@html $t("home.para_3")}
		</p>

		<p class="text-para">
			{@html $t("home.para_4")}
		</p>

		<div class="my-4">
			<iframe
				src={`https://flo.uri.sh/visualisation/${$t("home.flourish_viz")}/embed`}
				title="Interactive or visual content"
				class="flourish-embed-iframe"
				frameborder="0"
				scrolling="no"
				style="width:100%;height:600px;"
				sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
			></iframe>
			<div
				style="width:100%!;margin-top:4px!important;text-align:right!important;"
			>
				<a
					class="flourish-credit"
					href={`https://public.flourish.studio/visualisation/${$t("home.flourish_viz")}/?utm_source=embed&utm_campaign=visualisation/${$t("home.flourish_viz")}`}
					target="_top"
					style="text-decoration:none!important"
					><img
						alt="Made with Flourish"
						src="https://public.flourish.studio/resources/made_with_flourish.svg"
						style="width:105px!important;height:16px!important;border:none!important;margin:0!important;"
					/>
				</a>
			</div>
		</div>

		<p class="text-para">
			{@html $t("home.para_5")}
		</p>

		<figure class="py-8 mx-2">
			<img src="/headlines/headlines-3.png" />
		</figure>

		<p class="text-para">
			{@html $t("home.para_6")}
		</p>

		<p class="text-para">
			{@html $t("home.para_7")}
		</p>

		<p class="text-para">
			{@html $t("home.para_8")}
		</p>

		<p class="text-para">
			{@html $t("home.para_9")}
		</p>

		<p class="text-para">
			{@html $t("home.para_10")}
		</p>
		
		<div class='text-right'>
			<a href={`../${$locale}/chapter2`}
				><h3 class="py-8 bold">
					{@html $t("home.go_to")}
					<span class="yellow font-bold"
						>{@html $t("home.chapter_no")}
					</span>
				</h3>
			</a>
		</div>
	</div>
</section>

<style>
	section {
		background: linear-gradient(
			to bottom,
			rgba(57, 20, 81, 1) 30%,
			rgba(127, 31, 185, 1) 57%,
			rgba(195, 60, 149, 1) 73%
		);
		padding: 0px;
	}

	.cover-image {
		width: 100%;
		height: 1064px; /* Set the desired fixed height */
		background-image: url("/illustrations/collage-cover.png");

		background: linear-gradient(
				to bottom,
				rgba(222, 48, 35, 0),
				rgba(222, 48, 35, 0.5),
				rgba(132, 29, 107, 0.75),
				rgba(57, 14, 83, 1)
			),
			url("/illustrations/collage-cover.png");
		background-size: cover; /* Ensure the image covers the entire container */
		background-position: center; /* Center the image */
		background-repeat: no-repeat; /* Prevent the image from repeating */
	}

	.content {
		max-width: 1024px;
		margin: auto;
		padding: 10px;
	}

	.chapter-header {
		text-align: center;
	}

	h1,
	h2,
	h3,
	h4,
	ul {
		color: white;
	}

	h1 {
		font-size: 56pt;
	}

	h3 {
		font-size: 20pt;
	}

	h2 {
		font-size: 24pt;
	}

	.yellow {
		color: #efb215;
	}

	figcaption {
		color: white;
		font-style: oblique;
		font-size: 12pt;
		@media (max-width: 640px) {
			font-size: 10pt;
		}
	}

	p.text-para {
		padding-bottom: 20px;
		color: white;
		font-family: "Noto Sans", sans-serif;
		font-size: 12pt;
	}

	a {
		color: white;
	}

	.image-container {
		text-align: center; /* Center the image horizontally */
	}

	.centered-image {
		display: inline-block; /* Allows margin auto to work */
		width: auto;
		max-height: 100px; /* Maintain aspect ratio */
	}
</style>
