<script>
	export let title, bg;
</script>

<section class="{bg} py-6 px-2">
	<div class="mx-auto flex  max-w-7xl flex-col">
		<div class="lg:px-8 md:px-6 ">
			<h2 class="text-2xl font-oswald-normal uppercase text-neutral-900">{title}</h2>
			<hr class="mb-6 h-1 border-0 bg-neutral-900 " />
		</div>

		<div style="justify-content: space-between;" class="flex flex-row flex-wrap lg:px-8 md:px-6  ">
			<slot />
		</div>
	</div>
</section>
