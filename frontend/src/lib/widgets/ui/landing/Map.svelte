<script>
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';

	let map;

	onMount(() => {
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

		map.flyTo({
			center: point.coordinates,
			zoom: 12,
			essential: true
		});
	}

	$: iconSize = [40, 40];
	let radius = 1000;

	$: selectedLocation = {
		title: 'Lorem Ipsum is simply dummy',
		desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
		coordinates: ['27.561879', '53.902334'],
		link: '/articles/fuck-the-strapicms',
		iconUrl: '/images/map/1.png'
	};

	let showLocation = false;
	let showFull = false;

	$: shortDesc = 'Tap on any point on the map.';

	export let points;
</script>

<section class="flex min-h-screen  flex-col-reverse  md:flex-row lg:flex-row">
	<div id="map" class=" w-full">
		<!--  -->
	</div>

	<div class="flex lg:h-screen md:h-screen h-auto  lg:w-[450px] md:w-[450px] flex-col bg-neutral-200">
		<div class="flex lg:h-40 md:h-40 h-20 w-full items-center justify-center bg-black bg-neutral-900 py-6 lg:px-4 md:px-4 px-2">
			<h3 class="font-oswald-normal text-md uppercase md:text-xl lg:text-xl ">
				Места уничтожения рома
			</h3>
		</div>
		<div
			class="prose-blue prose h-auto w-full border-b border-b-2 border-neutral-900 bg-neutral-100 px-2 pt-2 text-neutral-900  md:px-4 lg:px-6"
		>
			<h3 class="font-oswald-normal mb-0 text-xl text-neutral-900 md:text-2xl lg:text-2xl">
				{selectedLocation.title}
			</h3>
			<p class="font-notoSans-normal mb-2 h-auto text-sm text-neutral-900">
				{showFull ? selectedLocation.desc : shortDesc}
			</p>

			<div class="flex flex-row flex-wrap pb-2 ">
				<button
					class="btn-neutral btn-active btn  "
					on:click={() => {
						showFull = !showFull;
					}}>Show</button
				>

				<a
					href={selectedLocation.link}
					target="_blank"
					class="inline-flex flex-grow items-center text-left no-underline "
				>
					<span
						class="pl-20 text-xs font-semibold uppercase tracking-widest text-neutral-800 hover:text-neutral-600"
					>
						more info
					</span>
					<span class="ml-auto text-neutral-800 hover:text-neutral-600">»</span>
				</a>
			</div>
		</div>
		<div class="flex lg:max-h-[600px] max-w-sm md:max-h-[600px] max-h-[270px] flex-col items-center overflow-y-scroll bg-white px-4 py-2">
			{#each points as location}
				<div
					on:click={() => {
						// selectedLocation = location;
						handleMarkerClick(location);
						// showLocation = !showLocation;
					}}
					class="mx-auto my-2 lg:my-2 md:my-2 my-1 w-full rounded-md bg-neutral-300 px-8 lg:py-6 md:py-6 py-4"
				>
					<h3 class="font-notoSans-normal text-sm text-neutral-900">{location.title}</h3>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	#map {
		height: 100vh;
		width: 100%;
	}

	@media screen and (max-width: 450px) {
		#map {
			max-height: 260px;
			overflow: hidden;
			width: 100%;
		}
	}
</style>
