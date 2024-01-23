<script>
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import { LogoText } from '$lib/shared';

	let map;
	$: isMobile = false;

	onMount(() => {
		window.innerWidth <= 490 ? (isMobile = 'sm') : (isMobile = 'md');

		console.log(isMobile);

		mapboxgl.accessToken =
			'pk.eyJ1Ijoic3RyYXBpLXVzZXIiLCJhIjoiY2xwZTV2YmRrMTk4ejJocmxrN3pqbGEzdCJ9.MQGuqEAPP3qrwfix8Cb--Q';

		map = new mapboxgl.Map({
			container: 'map',
			style: 'mapbox://styles/mapbox/dark-v11',
			center: selectedLocation.coordinates,
			zoom: 7,
			attribution: ``,
			// maxNativeZoom: 21,
			maxZoom: 20
			// subdomains: ['a', 'b', 'c', 'd', 'e']
		});

		map.on('load', () => {
			map.loadImage('/images/map/1.png', (error, image) => {
				// if (error) throw error;

				// map.addImage('custom-marker', image);

				map.addSource('points', {
					type: 'geojson',
					data: {
						type: 'FeatureCollection',
						features: points.map((point) => ({
							type: 'Feature',
							geometry: {
								type: 'Point',
								coordinates: point.coordinates
							},
							properties: {
								title: point.title,
								description: point.description
							}
						}))
					}
				});

				map.addLayer({
					id: 'points',
					type: 'symbol',
					source: 'points',
					layout: {
						'icon-image': 'custom-marker',
						'icon-size': 0.1,
						'icon-allow-overlap': true
						// 'text-field': 'Lorem impsum',
						// 'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
						// 'text-offset': [0, -1.6],
						// 'text-size': 12,
						// 'text-anchor': 'bottom',
						// 'text-offset': [0, 2],
						// 'color': '#ffffff'
					}
				});

				points.forEach((point) => {
					new mapboxgl.Marker()
						.setLngLat(point.coordinates)
						.addTo(map)
						.getElement()
						.addEventListener('click', () => {
							handleMarkerClick(point);
						});
				});
			});
		});
	});

	function handleMarkerClick(point) {
		selectedLocation = point;
		shortDesc = `${selectedLocation.desc.slice(0, 130)}...`;

		selectedLocation.title.length < 16
			? (textTitle = 'text-xl')
			: selectedLocation.title.length > 16 && selectedLocation.title.length < 50
			? (textTitle = 'text-base')
			: (textTitle = 'text-sm');

		map.flyTo({
			center: point.coordinates,
			zoom: 12,
			essential: true
		});
	}

	$: iconSize = [40, 40];
	let radius = 1000;

	$: textTitle = '';

	$: selectedLocation = {
		title:
			'Зона проведения антипартизанской операции «Гамбург», в треугольнике Лида — Барановичи — Волковыск (междуречье рек Немана и Щары), декабрь 1942',
		desc: `В оперативном приказе фюрера СС и полиции Генерального комиссариата «Беларусь» Курта фон Готтберга от 7.12.1942 г. относительно операции «Гамбург» читаем: «задача вверенных мне соединений...`,
		coordinates: ['27.561879', '53.902334'],
		link: '/articles/fuck-the-strapicms',
		iconUrl: '/images/map/1.png'
	};

	let showLocationIndex = -1;
	let showFull = false;

	$: shortDesc = 'Tap on any point on the map.';

	export let points;
</script>

<section class="flex min-h-screen  flex-col md:flex-row lg:flex-row">
	<div
		id="map"
		class="{isMobile == 'sm' && showFull ? 'hidden' : ''} z-2 h-full md:h-screen {isMobile == 'md' &&
		showFull
			? 'w-6/12'
			: ''}  lg:h-screen lg:w-full"
	>
	
		<!-- h-[656px] -->
	</div>

	<div
		class="flex h-auto  w-full flex-col bg-neutral-200 md:h-screen md:w-[368px] lg:h-screen lg:w-[368px]"
	>
		<!-- <div class="flex lg:h-40 md:h-40 h-20 w-full items-center justify-center bg-black bg-neutral-900 py-6 lg:px-4 md:px-4 px-2">
			<h3 class="font-oswald-normal text-md uppercase md:text-xl lg:text-xl ">
				Места уничтожения рома
			</h3>
		</div> -->
		{#if !showFull}
			<div
				class=" h-auto w-full bg-neutral-100 px-8 pt-10 text-neutral-900 shadow-2xl md:px-2  lg:px-2  "
			>
				<h3 class="font-oswald-normal  mb-4 {textTitle}  text-neutral-900">
					{selectedLocation.title}
				</h3>
				<p class="font-notoSans-normal mb-2 h-auto text-xs text-neutral-900">
					{showFull ? selectedLocation.desc : `${selectedLocation.desc.slice(0, 166)}...`}
				</p>

				<div class="flex flex-row flex-wrap pb-2 ">
					<button
						class="mb-6 flex h-12 w-full flex-row items-center justify-center rounded-md border-2 border-neutral-900 py-2 px-4 text-center text-sm text-neutral-900 "
						on:click={() => {
							showFull = !showFull;
						}}
					>
						<img src="./images/map/down_arow.svg" class="mr-2 h-4 w-4" alt="" />

						Развернуть</button
					>
				</div>
			</div>
			<div
				class="list flex  max-w-sm flex-col items-center overflow-y-scroll bg-neutral-300 px-6 py-4 px-4 py-2 md:max-h-[600px] lg:max-h-[600px]"
			>
				{#each points as location, i}
					<div
						on:click={() => {
							handleMarkerClick(location);
							showLocationIndex = i;
						}}
						class="  mx-auto mb-1 flex w-full flex-row  items-center     {showLocationIndex == i
							? 'bg-rose-700'
							: 'delay-550 duration-600 hover:scale-140 border-b-2 border-solid border-gray-700 bg-neutral-300 shadow-lg transition ease-in-out hover:-translate-y-1  hover:rounded-md hover:border-none hover:bg-white'} py-5 px-4  "
					>
						<div class="mr-2 h-4 w-4">
							<img src="./images/map/fire.svg" class="h-full w-full" alt="" />
						</div>
						<h3 class="font-notoSans-normal text-base text-neutral-900">{location.title}</h3>
					</div>
				{/each}
			</div>
		{:else}
			<div class=" h-screen w-full bg-neutral-100  px-8 pt-8  text-neutral-900 shadow-2xl">
				<div class="mb-2 flex justify-end">
					<button
						on:click={() => {
							showFull = !showFull;
						}}
						class="btn-outline btn-circle btn"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/></svg
						>
					</button>
				</div>
				<h3 class="font-oswald-normal  mb-4 {textTitle} text-neutral-900">
					{selectedLocation.title}
				</h3>
				<p class="font-notoSans-normal  mb-2 h-auto overflow-y-scroll text-xs text-neutral-900">
					{selectedLocation.desc}
				</p>
			</div>
		{/if}
	</div>
</section>

<style>
	#map {
		height: 100vh;
		width: 100%;
	}

	@media screen and (max-width: 450px) {
		#map {
			max-height: 656px;
			overflow: hidden;
			width: 100%;
		}

		.list {
			display: none;
		}
	}
</style>
