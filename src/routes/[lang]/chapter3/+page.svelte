<script>
	import Accordion, {
		createAccordionContext,
	} from "/src/components/Accordion.svelte";

	import Quote from "/src/components/Quote.svelte";
	createAccordionContext();

	import { t, locale, locales } from "$lib/translations";
	import { base } from "$app/paths";
</script>

<svelte:head>
	<title>{$t("chapter3.chapter_no") + " " + $t("chapter3.chapter_title")}</title>
	<meta
		name={$t("chapter3.chapter_no") + " " + $t("chapter3.chapter_title")}
		content={$t("chapter3.title")}
	/>
</svelte:head>

<section>
	<div class="content">
		<div class="chapter-header py-20">
			<h3 class="chapter-size">
				{$t("chapter3.chapter_no")}
				<h2 class="pink">{$t("chapter3.chapter_title")}</h2>
			</h3>
		</div>

		<p class="text-para">
			{@html $t("chapter3.para_1")}
		</p>

		<p class="text-para">
			{@html $t("chapter3.para_2")}
		</p>

		<div class='text-center my-4'><span class='text-center width-auto py-2 px-3 text-md border-2 border-yellow-100 bg-yellow-500 text-white rounded-xl'>
			{$t("chapter3.instruct")}
		</span></div>

		<div class="pb-8">
			<div class="border-image">
				<Accordion>
					<!--- Item-->
					<div slot="title">
						<h4>{$t("chapter3.label_1.title")}</h4>
					</div>
					<div slot="image">
						<figure class="py-8">
							<img src="/illustrations/civic-infra.png" />
						</figure>
					</div>
					<div slot="details">
						<p class="text-para">
							{$t("chapter3.label_1.para_1")}
						</p>

						<Quote>
							<div slot="text">
								{$t("chapter3.label_1.quote_1")}
							</div>
							<div slot="person">
								{$t("chapter3.label_1.name_1")}
							</div>
							<div slot="org">{$t("chapter3.label_1.org_1")}</div>
						</Quote>

						<p class="text-para">
							{$t("chapter3.label_1.para_2")}
						</p>

						<Quote>
							<div slot="text">
								{$t("chapter3.label_1.quote_2")}
							</div>
							<div slot="person">
								{$t("chapter3.label_1.name_2")}
							</div>
							<div slot="org">
								{$t("chapter3.label_1.org_2")}
							</div>
						</Quote>

						<p class="text-para">
							{$t("chapter3.label_1.para_3")}
						</p>
						<Quote>
							<div slot="text">
								{$t("chapter3.label_1.quote_3")}
							</div>
							<div slot="person">
								{$t("chapter3.label_1.name_3")}
							</div>
							<div slot="org">
								{$t("chapter3.label_1.org_3")}
							</div>
						</Quote>
						<p class="text-para">
							{$t("chapter3.label_1.para_4")}
						</p>
					</div>
				</Accordion>
			</div>

			<div class="border-image">
				<Accordion>
					<!--- Item-->
					<div slot="title">
						<h4>
							{$t("chapter3.label_2.title")}
						</h4>
					</div>
					<div slot="image">
						<figure class="py-8">
							<img
								src="/illustrations/awareness-sensitization.png"
							/>
						</figure>
					</div>
					<div slot="details">
						<p class="text-para">
							{$t("chapter3.label_2.para_1")}
						</p>

						<Quote>
							<div slot="text">
								{$t("chapter3.label_2.quote_1")}
							</div>
							<div slot="person">
								{$t("chapter3.label_2.name_1")}
							</div>
							<div slot="org">
								{$t("chapter3.label_2.org_1")}
							</div>
						</Quote>

						<p class="text-para">
							{@html $t("chapter3.label_2.para_2")}
						</p>

						<Quote>
							<div slot="text">
								{@html $t("chapter3.label_2.quote_2")}
							</div>
							<div slot="person">
								{@html $t("chapter3.label_2.name_2")}
							</div>
							<div slot="org">
								{@html $t("chapter3.label_2.org_2")}
							</div>
						</Quote>

						<p class="text-para">
							{@html $t("chapter3.label_2.para_3")}
						</p>
						<Quote>
							<div slot="text">
								{@html $t("chapter3.label_2.quote_3")}
							</div>
							<div slot="person">
								{@html $t("chapter3.label_2.name_3")}
							</div>
							<div slot="org">
								{@html $t("chapter3.label_2.org_3")}
							</div>
						</Quote>
					</div>
				</Accordion>
			</div>

			<div class="border-image">
				<Accordion>
					<!--- Item-->
					<div slot="title">
						<h4>
							{@html $t("chapter3.label_3.title")}
						</h4>
					</div>
					<div slot="image">
						<figure class="py-8">
							<img src="/illustrations/health-counselling.png" />
						</figure>
					</div>
					<div slot="details">
						<p class="text-para">
							{@html $t("chapter3.label_3.para_1")}
						</p>

						<Quote>
							<div slot="text">
								{@html $t("chapter3.label_3.quote_1")}
							</div>
							<div slot="person">
								{@html $t("chapter3.label_3.name_1")}
							</div>
							<div slot="org">
								{@html $t("chapter3.label_3.org_1")}
							</div>
						</Quote>

						<p class="text-para">
							{@html $t("chapter3.label_3.para_2")}
						</p>
					</div>
				</Accordion>
			</div>

			<div class="border-image">
				<Accordion>
					<!--- Item-->
					<div slot="title">
						<h4>{@html $t("chapter3.label_4.title")}</h4>
					</div>
					<div slot="image">
						<figure class="py-8">
							<img
								src="/illustrations/strengthen-reporting.png"
							/>
						</figure>
					</div>
					<div slot="details">
						<p class="text-para">
							{@html $t("chapter3.label_4.para_1")}
						</p>

						<Quote>
							<div slot="text">
								{@html $t("chapter3.label_4.quote_1")}
							</div>
							<div slot="person">
								{@html $t("chapter3.label_4.name_1")}
							</div>
							<div slot="org">
								{@html $t("chapter3.label_4.org_1")}
							</div>
						</Quote>

						<p class="text-para">
							{@html $t("chapter3.label_4.para_2")}
						</p>

						<Quote>
							<div slot="text">
								{@html $t("chapter3.label_4.quote_2")}
							</div>
							<div slot="person">
								{@html $t("chapter3.label_4.name_2")}
							</div>
							<div slot="org">
								{@html $t("chapter3.label_4.org_2")}
							</div>
						</Quote>

						<p class="text-para">
							{@html $t("chapter3.label_4.para_3")}
						</p>
						<Quote>
							<div slot="text">
								{@html $t("chapter3.label_4.quote_3")}
							</div>
							<div slot="person">
								{@html $t("chapter3.label_4.name_3")}
							</div>
							<div slot="org">
								{@html $t("chapter3.label_4.org_3")}
							</div>
						</Quote>
						<p class="text-para">
							{@html $t("chapter3.label_4.para_4")}
						</p>
					</div>
				</Accordion>
			</div>

			<div class="border-image">
				<Accordion>
					<!--- Item-->
					<div slot="title">
						<h4>{@html $t("chapter3.label_5.title")}</h4>
					</div>
					<div slot="image">
						<figure class="py-8">
							<img src="/illustrations/legal-interventions.png" />
						</figure>
					</div>
					<div slot="details">
						<p class="text-para">
							{@html $t("chapter3.label_5.para_1")}
						</p>

						<Quote>
							<div slot="text">
								{@html $t("chapter3.label_5.quote_1")}
							</div>
							<div slot="person">
								{@html $t("chapter3.label_5.name_1")}
							</div>
							<div slot="org">
								{@html $t("chapter3.label_5.org_1")}
							</div>
						</Quote>

						<p class="text-para">
							{@html $t("chapter3.label_5.para_2")}
						</p>

						<Quote>
							<div slot="text">
								{@html $t("chapter3.label_5.quote_2")}
							</div>
							<div slot="person">
								{@html $t("chapter3.label_5.name_2")}
							</div>
							<div slot="org">
								{@html $t("chapter3.label_5.org_2")}
							</div>
						</Quote>
					</div>
				</Accordion>
			</div>

			<div class="border-image">
				<Accordion>
					<!--- Item-->
					<div slot="title">
						<h4>{@html $t("chapter3.label_6.title")}</h4>
					</div>
					<div slot="image">
						<figure class="py-8">
							<img src="/illustrations/civil-society.png" />
						</figure>
					</div>
					<div slot="details">
						<p class="text-para">
							{@html $t("chapter3.label_6.para_1")}
						</p>

						<Quote>
							<div slot="text">
								{@html $t("chapter3.label_6.quote_1")}
							</div>
							<div slot="person">
								{@html $t("chapter3.label_6.name_1")}
							</div>
							<div slot="org">
								{@html $t("chapter3.label_6.org_1")}
							</div>
						</Quote>

						<p class="text-para">
							{@html $t("chapter3.label_6.para_2")}
						</p>

						<Quote>
							<div slot="text">
								{@html $t("chapter3.label_6.quote_2")}
							</div>
							<div slot="person">
								{@html $t("chapter3.label_6.name_2")}
							</div>
							<div slot="org">
								{@html $t("chapter3.label_6.org_2")}
							</div>
						</Quote>
					</div>
				</Accordion>
			</div>
		</div>

		<h3 class="py-8">
			{@html $t("chapter3.subheader_1")}
		</h3>

		<p class="text-para">
			{@html $t("chapter3.para_3")}
		</p>

		<!-- Mumbai orgs-->
		<div class="pb-8">
			<h4>{@html $t("chapter3.mumbai_org")}</h4>
			<table
				class="table-fixed width-fixed border-separate border-spacing-4 border border-pink-500"
			>
				<tbody>
					<tr>
						<td class='w-4/12'>
							<img src="/logos/logo-pov.png" />
						</td>
						<td>
							{@html $t("chapter3.text_pov")}
						</td>
					</tr>
					<tr>
						<td><img src="/logos/logo-rdf.png"/></td>
						<td>{@html $t("chapter3.text_rdf")}</td>
					</tr>
					<tr>
						<td
							><span
								class="font-bold text-xl"
								style="font-family: 'Laila';"
							>
								{$t("chapter3.name_hzm")}
							</span>
						</td>
						<td>{@html $t("chapter3.text_hzm")}</td>
					</tr>
					<tr>
						<td class="place-content-center"
							><img
								class="max-w-64"
								src="/logos/logo-parcham.jpg"
							/></td
						>
						<td>{@html $t("chapter3.text_par")} </td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- Kolkata orgs-->
		<h4>{$t("chapter3.kolkata_org")}</h4>
		<!-- <div class='flex-col border-separate border-spacing-4 border border-pink-500 px-4 py-4'>
			<div class='flex flex-wrap pa-4'>
				<div class=''><img class='max-w-40' src="/logos/logo-sappho.jpeg" /></div>
				<div class=''>{@html $t("chapter3.text_sap")}</div>
			</div>
			<div class='flex flex-wrap pa-4'>
				<div class='w-1/2 sm: w-full'><img src="/logos/logo-swayam.png" /></div>
				<div class='w-1/2'>{@html $t("chapter3.text_swa")}</div>
			</div>
			<div class='flex flex-wrap pa-4'>
				<div class='w-1/2 sm: w-full'><img src="/logos/logo-anandam.jpeg" /></div>
				<div class='w-1/2 sm: w-full'>{@html $t("chapter3.text_ana")}</div>
			</div>
		</div> -->
		<table
			class="table-fixed width-fixed border-separate border-spacing-4 border border-pink-500"
		>
			<tbody>
				<tr>
					<td td class='w-4/12'><img src="/logos/logo-sappho.jpeg" /></td>
					<td>{@html $t("chapter3.text_sap")} </td>
				</tr>
				<tr>
					<td><img src="/logos/logo-swayam.png" /></td>
					<td>{@html $t("chapter3.text_swa")}</td>
				</tr>
				<tr>
					<td><img src="/logos/logo-anandam.jpeg" /></td>
					<td>{@html $t("chapter3.text_ana")}</td>
				</tr>
			</tbody>
		</table>

		<div class="flex justify-between py-8">
			<div class="chapter-link">
				<a href={`${base}/${$locale}/chapter2`}
					>{@html $t("chapter3.go_back")}
					<span class="pink font-bold"
						>{@html $t("chapter3.back_chapter")}</span
					>
				</a>
			</div>
			<div class="chapter-link">
				<a href={`${base}/${$locale}/method`}>
					<span class="pink font-bold">
						{@html $t("chapter3.to_chapter")}
					</span>{@html $t("chapter3.go_to")}
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		background: #56bbb7;
		background: linear-gradient(to bottom, #56bbb7 0%, #efb215 100%);
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
		font-size: 20pt;
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
		font-size: 24px;
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

	.border-image {
		position: relative;
		padding-bottom: 20px; /* Adjust as needed */
	}

	.border-image::after {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: 20px; /* Height of the border */
		background: url("/illustrations/pink-border.png") no-repeat center; /* Adjust as needed */
		background-size: cover; /* or contain */
	}
</style>
