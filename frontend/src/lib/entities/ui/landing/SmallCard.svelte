<script>
	export let data;
</script>

<div
	class=" my-4  mb-12 flex h-[500px] cursor-pointer  flex-col overflow-hidden bg-white hover:bg-neutral-100 md:max-w-sm"
>
	<div class="flex-shrink-0 ">
		<img class="h-48 w-full  object-cover" src={data.img} alt="" />
	</div>

	<div class="flex flex-1 flex-col justify-between px-4 py-6">
		<div class="flex flex-1 flex-col justify-between  ">
			<a href={data.link} class="">
				<div class="font-notoSans-normal  mb-6 flex  space-x-1 text-xs text-neutral-700">
					<time datetime={data.date}> {data.date} </time>
					<span aria-hidden="true"> · </span>
				</div>
			</a>
			<a href={data.link} class="mt-2 block w-10/12 space-y-6">
				<h3 class="font-oswald-normal text-xl leading-8 tracking-wide text-neutral-900">
					{data.title}
				</h3>

				<hr class="mb-6 h-1 border-0 bg-neutral-900 " />
			</a>
		</div>
	</div>
</div>
