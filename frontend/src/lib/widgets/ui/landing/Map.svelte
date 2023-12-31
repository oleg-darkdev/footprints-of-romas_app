<script>
	import { Icon, Leaflet, Marker, Popup, TileLayer } from 'leafletjs-svelte';

	const mapURL = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';
	// 'subdomains'  : ['a','b','c','d','e'],';
	const mapOption = {
		center: [53.902330977276755, 27.550098753998842],
		zoom: 7
	};

	const tileLayerOption = {
		attribution: ``,
		maxNativeZoom: 21,
		maxZoom: 20,
		subdomains: 'abcd'
	};

	$: iconSize = [40, 40];
	let radius = 1000;

	$: selectedLocation = {
		title: 'Lorem Ipsum is simply dummy',
		desc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
		coordinateFirst: 53.902330977276755,
		coordinateSecond: 27.550098753998842,
		link: '/articles/fuck-the-strapicms',
		markerIconOptions: {
			iconUrl: '/images/map/1.png'
		}
	};

	let showLocation = false;

	export let locations;

	function handleClick(event) {
		console.log('Pressure:', event.buttons);
		// Обработка события нажатия мыши
	}

	function handleRelease(event) {
		console.log('Released');
		// Обработка события отпускания кнопки мыши
	}
</script>

<section class="grid min-h-screen  grid-flow-row grid-cols-12 ">
	<div class=" col-span-9  h-screen">
		{#if !showLocation}
			<Leaflet options={mapOption}>
				<TileLayer tileURL={mapURL} options={tileLayerOption} />

				{#each locations as point, i}
					<div
						on:mousedown={(event) => handleClick(event)}
						on:mouseup={(event) => handleRelease(event)}
					>
						<Marker latLng={L.latLng([point.coordinateFirst, point.coordinateSecond])}>
							<Popup
								options={{
									content: `<div class="prose-blue prose h-auto min-h-[280px] w-[250px] rounded-xl bg-black p-4 text-white">
                  <h3 class='font-oswald-normal text-base uppercase'>${point.title}</h3>
                  <p class="mb-8  font-notoSans-normal  text-sm">${point.desc}</p>
                  <a href="${point.link}" target="_blank" class="inline-flex flex-grow items-center text-left no-underline ">
                    <span
                      class="pr-12 text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-neutral-600"
                    >
                      more info
                    </span>
                    <span class="ml-auto text-neutral-400 hover:text-neutral-600">»</span>
                  </a>
                </div>`
								}}
							/>
							<Icon options={{ iconSize: iconSize, iconUrl: point.markerIconOptions.iconUrl }} />

							<!-- events={['mouseout', 'mouseover']}
						on:mouseout={(e) => {
							iconSize = [40, 100];
						}}
						on:mouseover={(e) => {
							iconSize = [100, 100];
						}} -->
						</Marker>
					</div>
				{/each}
			</Leaflet>
		{:else}
			<Leaflet
				options={{
					zoom: 14,
					center: [selectedLocation.coordinateFirst, selectedLocation.coordinateSecond]
				}}
			>
				<TileLayer tileURL={mapURL} options={tileLayerOption} />

				<div
					on:mousedown={(event) => handleClick(event)}
					on:mouseup={(event) => handleRelease(event)}
				>
					<Marker
						latLng={L.latLng([selectedLocation.coordinateFirst, selectedLocation.coordinateSecond])}
					>
						<Icon
							options={{ iconSize: iconSize, iconUrl: selectedLocation.markerIconOptions.iconUrl }}
						/>
					</Marker>
				</div>
			</Leaflet>
		{/if}
	</div>

	<div class="col-span-3 flex  h-screen flex-col bg-neutral-200">
		<div class="flex h-40 w-full items-center justify-center bg-black bg-neutral-900 py-20 px-4">
			<h3 class="font-oswald-normal text-xl uppercase ">Места уничтожения рома</h3>
		</div>
		<div
			class="prose-blue prose h-auto w-full border-b border-b-2 border-neutral-900 bg-neutral-100 px-6 pb-6 pt-10 text-neutral-900"
		>
			<h3 class="font-oswald-normal text-2xl text-neutral-900">{selectedLocation.title}</h3>
			<p class="font-notoSans-normal mb-8 text-sm text-neutral-900">{selectedLocation.desc}</p>
			<a
				href={selectedLocation.link}
				target="_blank"
				class="inline-flex flex-grow items-center text-left no-underline "
			>
				<span
					class="pr-12 text-xs font-semibold uppercase tracking-widest text-neutral-800 hover:text-neutral-600"
				>
					more info
				</span>
				<span class="ml-auto text-neutral-800 hover:text-neutral-600">»</span>
			</a>
		</div>
		<div class="flex max-h-[600] flex-col items-center overflow-y-scroll bg-white px-4 py-4">
			{#each locations as location}
				<div
					on:click={() => {
						selectedLocation = location;
						console.log(selectedLocation);
						showLocation = !showLocation;
					}}
					class="mx-auto my-2 w-full rounded-md bg-neutral-300 px-8 py-6"
				>
					<h3 class="font-notoSans-normal text-sm text-neutral-900">{location.title}</h3>
				</div>
			{/each}
		</div>
	</div>
</section>
