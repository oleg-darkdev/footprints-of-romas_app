<script>
	export let point;
</script>

<div class="prose-blue prose h-auto min-h-[350px] w-[250px] rounded-xl bg-black p-4 text-white">
	<h3>${point.title}</h3>
	<p class="mb-8">${point.desc}</p>
	<a href="${point.link}" class="inline-flex flex-grow items-center text-left no-underline ">
		<span
			class="pr-12 text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-neutral-600"
		>
			more info
		</span>
		<span class="ml-auto text-neutral-400 hover:text-neutral-600">»</span>
	</a>
</div>

