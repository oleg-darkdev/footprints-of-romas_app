<script>
	export let data;
</script>

<a
	href={data.link}
	class=" my-4 mb-12 flex  cursor-pointer flex-col  overflow-hidden  bg-white hover:bg-neutral-100  md:max-w-xl lg:h-[350px] lg:flex-row "
>
	<img
		class=" h-96  w-auto  object-cover md:h-auto md:w-48 md:rounded-none"
		src={data.img}
		alt=""
	/>

	<div class="flex h-full   w-auto flex-col justify-between py-6 px-4">
		<div class="font-notoSans-normal  mb-6 flex  space-x-1 text-xs text-neutral-700">
			<time datetime={data.date}> {data.date} </time>
			<span aria-hidden="true"> · </span>
		</div>
		<div class="mt-2 block flex  flex-col">
			<hr class="mb-6 h-1 border-0 bg-neutral-900 " />

			<h3 class="font-oswald-normal text-xl leading-8 tracking-wide text-neutral-900">
				{data.title}
			</h3>
		</div>
	</div>
</a>
