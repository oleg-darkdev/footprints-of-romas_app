<script>
	export let data;
</script>

<a
	href={data.link}
	class=" my-2 mb-12 flex w-full  cursor-pointer flex-col  overflow-hidden  bg-white hover:bg-neutral-100  lg:h-[350px] lg:flex-row "
>
	<!-- font-oswald-medium  font-notoSans-normal -->

	<img
		class=" h-96  object-cover md:h-auto  md:w-48 md:rounded-none  lg:w-[460px]"
		src={data.img}
		alt=""
	/>

	<div class="flex h-full  flex-col justify-between py-6 px-4">
		<div class="font-notoSans-normal  mb-6 flex  space-x-1 text-xs text-neutral-700">
			<time datetime={data.date}> {data.date} </time>
			<span aria-hidden="true"> · </span>
		</div>
		<div class="mt-2 block flex  flex-col">
			<hr class="mb-6 h-1 border-0 bg-neutral-900 " />

			<h3 class="font-oswald-normal  mb-6 text-2xl leading-8  text-neutral-900">
				{data.title}
			</h3>
			<p class="font-notoSans-normal text-sm  text-neutral-700">{data.desc}</p>
		</div>
	</div>
</a>
