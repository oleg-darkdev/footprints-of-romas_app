<script>
	import { onMount } from 'svelte';
	import axios from 'axios';
	import { LoadingScreen } from '../../index';

	$: allartcile = [
		{
			attributes: {
				banner: { data: { attributes: { url: '' } } }
			}
		}
	];

	const apiUrl = 'http://localhost:1337/api';

	const parseJSON = (resp) => (resp.json ? resp.json() : resp);

	const checkStatus = (resp) => {
		if (resp.status >= 200 && resp.status < 300) {
			return resp;
		}
		return parseJSON(resp).then((resp) => {
			throw resp;
		});
	};
	const headers = {
		'Content-Type': 'application/json'
	};

	async function fetchDataArtcile() {
		try {
			response = await axios.get(`${apiUrl}/articles/?populate=banner`);
			allartcile = response.data.data;
		} catch (e) {
			error = e;
		}
	}

	onMount(() => {
		fetchDataArtcile();
	});

	let error = null,
		response = '';
</script>

<LoadingScreen bind:error bind:response>
	<section>
		<div class="mx-auto max-w-5xl">
			<div class="relative mb-6">
				<div class="relative flex justify-start">
					<h2
						class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-300 md:text-5xl lg:max-w-7xl lg:text-6xl"
					>
						Articles
					</h2>
				</div>
			</div>

			<div class="space-y-8 lg:divide-y lg:divide-gray-100">
				{#each allartcile as article}
					<a target="_blank" href="./articles/{article.attributes.slug}" class=" ">
						<div
							class="transform py-4 px-4 transition duration-500 ease-in-out hover:bg-neutral-900 sm:flex lg:items-end lg:text-2xl"
						>
							<div class="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
								<img
									class="h-32 w-full rounded-md object-cover lg:w-32"
									src={article.attributes.banner.data.attributes.url}
									alt="image"
								/>
							</div>
							<div class=" text-gray-300 ">
								<span class="text-sm text-gray-500">{article.attributes.publishedAt}</span>
								<p class="mt-3 text-2xl font-medium leading-6">
									{article.attributes.titleArticle}
								</p>
								<p class="mt-2 text-lg text-gray-500">
									{article.attributes.shortDesc}
								</p>
							</div>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</section>
</LoadingScreen>
