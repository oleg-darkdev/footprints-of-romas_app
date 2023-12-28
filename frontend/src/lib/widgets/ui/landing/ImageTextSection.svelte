<script>
	export let data;
</script>

<div class="mx-auto flex w-full flex-wrap items-start py-2 md:px-2 lg:px-2">
	<div class="w-full  lg:w-1/2 lg:max-w-lg">
		<div>
			<div class="relative w-full max-w-lg">
				<figure class="relative">
					<img
						class="mx-auto  object-cover object-center shadow-2xl"
						alt={data.alternativeText}
						src={data.url}
					/>
					<figcaption
						class="w-full  font-notoSans-medium text-justify text-sm text-neutral-900  md:text-left     lg:text-left"
					>
						{data.caption}
					</figcaption>
				</figure>
			</div>
		</div>
	</div>
	<div
		class=" mt-4 mb-8 flex flex-col items-start text-left md:mb-0 md:pl-6 lg:w-1/2 lg:flex-grow lg:pl-6 "
	>
		{#if data.title}
			<span class="font-notoSans-italic  mb-6 leading-8  tracking-tighter  text-neutral-600 ">
				{data.title}
			</span>
		{/if}

		{#each data.desc as desc}
			<p class="my-2 text-justify font-notoSans-medium text-base leading-8  text-gray-700 md:text-left lg:text-left">
				{desc}
			</p>
		{/each}
	</div>
</div>
