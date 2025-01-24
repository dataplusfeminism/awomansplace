<div class="accordion">
	<blockquote>
		<div class="quote-text mb-4"><slot name="text"></slot></div>
		<span class="quote-attrib"
			><span class="quote-name"><slot name="person"></slot></span>
			<slot name="org"></slot></span
		>
	</blockquote>
</div>

<style>
	blockquote {
		margin: 20px 0px 20px 10px;
		padding-left: 10px;
		border-left: 5px solid #e529de;
		font-family: "Laila", serif;
		font-size: 14pt;

		@media (max-width: 640px) {
			font-size: 12pt;
		}
	}

	.quote-text {
		font-weight: 500;
		font-style: italic;
	}

	.quote-name {
		font-weight: 400;
		@media (max-width: 640px) {
			font-size: 14pt;
		}
	}
</style>
