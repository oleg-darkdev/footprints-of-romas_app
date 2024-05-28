<script>
	import { locations } from '$lib/shared';
	import { onMount } from 'svelte';
	import mapboxgl from 'mapbox-gl';

	let map;
	$: isMobile = false;

  let showContent = false;
	onMount(() => {
        function hideHero() {
        var heroElement = document.querySelector('.hero');
        if (heroElement) {
            heroElement.classList.add('slide-right');
        }
    }

    function hide() {
        var heroElement = document.querySelector('.hero');
        if (heroElement) {
            heroElement.style.display = 'none';
        }

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
			map.loadImage('', (error, image) => {
				// if (error) throw error;

				// map.addImage('custom-marker', image);

				locations.forEach((point) => {
					const customIcon = document.createElement('div');
					customIcon.className = 'custom-marker';

					new mapboxgl.Marker()
						.setLngLat(point.coordinates)
						.addTo(map)
						.getElement()
						.addEventListener('click', () => {
							handleMarkerClick(point);
						});
				});
			});
		});    }

    setTimeout(hideHero, 2800);
    setTimeout(hide, 5000);




		window.innerWidth <= 490 ? (isMobile = 'sm') : (isMobile = 'md');

		
	});

	function handleMarkerClick(point) {
		console.log('click');
		console.log(point);
		selectedLocation = point;
		shortDesc = `${selectedLocation.desc.slice(0, 130)}...`;

		selectedLocation.title.length < 20
			? (textTitle = 'text-xl')
			: selectedLocation.title.length > 20 && selectedLocation.title.length < 50
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

	$: textTitle = 'text-xl';

	$: selectedLocation = {
		title: '',
		desc: `Уничтожение ромского население проводилось по всей территории Беларуси, как под гражданским, так и под военным управлением. Наличие мест уничтожения во всех областях современной Беларуси указывает на массовый характер геноцида рома в Беларуси во время немецкой оккупации с 1941 по 1944 годы. Карта мест уничтожения составлена на основании немецких документов, а также актов ЧГК, которые содержат факты уничтожения ромского населения. Архивные документы не всегда дают точное количество жертв, поэтому данные о количестве жертв могут быть приблизительными либо и вовсе отсутствовать.`,
		coordinates: ['27.561879', '53.902334'],
		link: '/articles/fuck-the-strapicms',
		iconUrl: '/images/map/1.png'
	};

	let showLocationIndex = -1;
	let showFull = false;

	$: shortDesc = 'Tap on any point on the map.';


</script>

<section class=" hero h-screen w-full bg-[#292828]">
	<div id="container" class='w-full'>
		<div class="wrap w-full">
			<div class="footprint  z-10 h-40 w-96 mb-20">
				<img src="/images/right-shoes.svg" class='w-full h-full' alt="footprintLeft" />
			</div>
			<div class="footprint right  z-10 h-40 w-96">
				<img src="/images/right-shoes.svg" class='w-full h-full' alt="footprintRight" />
			</div>
		</div>
	</div>
</section>


<header class:hidden={showContent} class="h-[75vh] border-[#dc2626] bg-[#292828] w-full border-b-8 pt-10">
	<div class="mx-auto max-w-3xl">
		<div class="container flex flex-row items-center justify-center">
			<img src="/logos/logo.svg" class=" h-32" alt="" />
			<h2 class="logo">Footprints of Romas</h2>
		</div>
	</div>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
		<div class="mb-12 flex w-full flex-col text-center">
			<p class="mx-auto max-w-xl text-center text-base leading-relaxed text-gray-200">
				Исследовательский проект, представленный в виде интерактивной карты, на которой отмечены
				места репрессий ромов в Беларуси в период Второй мировой войны.
			</p>

			<a
				class="text-[#e83611] mx-auto mt-8 text-sm font-semibold hover:text-neutral-400"
				title="read more"
			>
				Подробнее о истории ром в Беларуси »
			</a>
		</div>
	</div>

	<!-- <h1
		class="font-oswald-bold z-10 mx-4 max-w-[230px] text-xl uppercase leading-snug text-neutral-900"
	>
		Геноцид рома во время Второй мировой войны в Беларуси 1941-1944 гг
	</h1> -->
</header>


<section class:hidden={showContent} class="-mb-64 -mt-40 flex min-h-screen flex-col pb-20 md:flex-col  lg:flex-row">
	<div class="mx-auto flex w-10/12 flex-row">
		<div
			id="map"
			class="{isMobile == 'sm' && showFull
				? 'hidden'
				: ''} z-2 rounded-l-box h-full w-full md:h-screen lg:h-screen"
		>
			<!-- <div class="absolute top-8 left-4 h-auto max-w-sm">
				<h1
					class="font-oswald-bold z-10 mx-4 max-w-[230px] text-xl uppercase leading-snug text-neutral-100"
				>
					Геноцид рома во время Второй мировой войны в Беларуси 1941-1944 гг
				</h1>
			</div> -->
		</div>

		<div class="rounded-tr-box flex h-auto flex-col bg-neutral-200 lg:h-screen">
			<!-- <div class="flex lg:h-40 md:h-40 h-20 w-full items-center justify-center bg-black bg-neutral-900 py-6 lg:px-4 md:px-4 px-2">
			<h3 class="font-oswald-normal text-md uppercase md:text-xl lg:text-xl ">
				Места уничтожения рома
			</h3>
		</div> -->
			{#if !showFull}
				<div
					class="max-w-[400px] lg:max-w-[500px] rounded-tr-box bg-neutral-200 px-8 pt-10 text-neutral-900 shadow-2xl md:px-4 lg:px-4"
				>
					<h3 class="font-oswald-normal mb-4 {textTitle} text-neutral-900">
						{selectedLocation.title}
					</h3>
					<p
						class="font-notoSans-normal mb-2 h-auto text-dimInHuj {selectedLocation.desc.length >
						581
							? ''
							: 'limited-text'} text-neutral-900"
					>
						{selectedLocation.desc}
					</p>

					<div class="flex flex-row flex-wrap {selectedLocation.title.length ? 'mb-8' : 'pb-2'}  ">
						{#if selectedLocation.title.length}
							<button
								class="mb-6 flex h-12 w-full flex-row items-center justify-center rounded-md border-2 border-neutral-900 px-4 py-2 text-center text-sm text-neutral-900"
								on:click={() => {
									showFull = !showFull;
								}}
							>
								<img src="./images/map/down_arow.svg" class="mr-2 h-4 w-4" alt="" />

								Развернуть</button
							>
						{/if}
					</div>
				</div>
				<div
					class="list points xl:max-h-[600px] flex max-w-sm flex-col items-center overflow-y-scroll bg-neutral-300 px-4 px-6 py-2 py-4 md:h-full"
				>
					{#each locations as location, i}
						<div
							on:click={() => {
								handleMarkerClick(location);
								showLocationIndex = i;
							}}
							class="  mx-auto mb-1 flex w-full flex-row items-center {showLocationIndex == i
								? 'rounded-md  border-b-2 border-gray-700 bg-red-600'
								: 'delay-550 duration-600 hover:scale-140 border-b-2 border-solid border-gray-700  bg-neutral-300 transition ease-in-out hover:-translate-y-1 hover:rounded-md  hover:bg-white   hover:shadow-lg'}  px-4 py-5"
						>
							<img
								src="./images/map/fire.svg"
								class="mr-2"
								style="width: 18px; height: 18px;"
								alt=""
							/>
							<h3 class="font-notoSans-normal max-w-sm text-sm text-neutral-900">
								{location.title}
							</h3>
						</div>
					{/each}
				</div>
			{:else}
				<div class=" h-screen w-full bg-neutral-200 px-8 pt-8 text-neutral-900 shadow-2xl">
					<div class="mb-2 flex justify-end">
						<button
							on:click={() => {
								showFull = !showFull;
							}}
							class="btn btn-circle"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="black"
								viewBox="0 0 24 24"
								stroke="#e83611"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M6 18L18 6M6 6l12 12"
								/></svg
							>
						</button>
					</div>
					<h3 class="font-oswald-normal mb-4 {textTitle} text-neutral-900">
						{selectedLocation.title}
					</h3>
					<p
						class="font-notoSans-normal mb-2 h-auto h-full overflow-y-auto text-dimInHuj text-neutral-900"
					>
						{selectedLocation.desc}
					</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<footer class:hidden={showContent} class="bg-[#292828] h-[40vh] flex w-full flex-row content-end items-end justify-center py-6">
	<ul class=" flex max-w-2xl flex-row items-center justify-center">
		<li
			class="mr-2 transform pt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-6"
		>
			<a target="_blank" href="https://github.com/oleg-darkdev/romas_history">
				<img src="/images/contact/github.svg" class="h-10" />
			</a>
		</li>
		<li
			class="mr-2 transform pt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-6"
		>
			<a target="_blank" href="https://www.linkedin.com/in/oleg-darkdev">
				<img src="/images/contact/linkedin.svg" class="h-10" />
			</a>
		</li>
		<li
			class="mr-2 transform pt-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-6"
		>
			<a target="_blank" href="mailto:darkdev_brand@riseup.net">
				<img src="/images/contact/email.svg" class="h-10" />
			</a>
		</li>
		<li>
			<a target="_blank" class="group m-auto" href="https://darkdev-progect.vercel.app/">
				<h2
					class="text-md text-[#dc2626] -mb-2 max-w-sm transform text-start font-thin transition delay-150 duration-300 ease-in-out group-hover:translate-x-6"
				>
					Development by
				</h2>
				<img
					src="/logos/darkdev.svg"
					class=" h-16 transform transition delay-150 duration-300 ease-in-out group-hover:translate-x-6"
					alt="DarkDEV Foundation logo"
				/>
			</a>
		</li>
	</ul>
</footer>


<!--
<section class="bg-neutral-200 py-4 px-2 md:px-5 lg:px-5">
	<div
		class="font-['Noto sans'] prose-2xl prose-blue prose mx-auto w-full max-w-6xl  px-2 py-8 text-justify  lg:px-6 lg:text-left "
	>
		<div class="mx-auto w-full ">
			<div class="mx-auto flex w-full flex-wrap items-start py-2 md:px-2 lg:px-2">
				<div class="w-full  lg:w-1/2 lg:max-w-lg">
					<div>
						<div class="relative w-full max-w-lg">
							<figure class="relative">
								<img
									class="mx-auto  object-cover object-center shadow-2xl"
									alt=""
									src="https://static01.nyt.com/images/2016/04/21/blogs/21-lens-armenian-slide-FMS2/21-lens-armenian-slide-FMS2-superJumbo.jpg?quality=75&auto=webp&disable=upscale"
								/>
								<figcaption
									class="font-notoSans-medium  w-full text-justify text-sm text-neutral-900  md:text-left     lg:text-left"
								>
									Ромские узники в концлагере «Белжец», из архива Мемориального музея истории
									Холокоста (США)
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
				<div
					class=" mt-4 mb-8 flex flex-col items-start text-left md:mb-0 md:pl-6 lg:w-1/2 lg:flex-grow lg:pl-6 "
				>
					<span class="font-notoSans-italic  mb-6 leading-8  tracking-tighter  text-neutral-600 ">
						'В регионе Вильно и Новогрудка, наоборот, образ жизни рома практически не изменился в
						течении всего межвоенного периода.',
					</span>

					<p
						class="font-notoSans-medium my-2 text-justify text-base leading-8  text-gray-700 md:text-left lg:text-left"
					>
						'Как показывают данные устной истории и этнографии, большинство рома Новогрудского и
						Виленского воеводств вели кочевой или полукочевой образ жизни, который заключался в
						договорных отношениях с местными помещиками и крестьянами.',
					</p>
					<p
						class="font-notoSans-medium my-2 text-justify text-base leading-8  text-gray-700 md:text-left lg:text-left"
					>
						'Исторически, образ жизни и профессия даже кочевых рома в Беларуси были тесно связаны с
						местной экономикой и обществом.В соседнем БССР, где была запущена программа
						индустриализации и коллективизации сельского хозяйства, некоторые кочевые рома уже
						перешли на оседлый образ жизни.'
					</p>
				</div>
			</div>

			<div class=" mt-4 mb-8 flex flex-col items-start    md:mb-0 ">
				<p
					class="font-notoSans-medium my-2 text-justify text-xl leading-8 text-gray-700 lg:text-left"
				>
					'Как показывают данные устной истории и этнографии, большинство рома Новогрудского и
					Виленского воеводств вели кочевой или полукочевой образ жизни, который заключался в
					договорных отношениях с местными помещиками и крестьянами.',
				</p>
				<p
					class="font-notoSans-medium my-2 text-justify text-xl leading-8 text-gray-700 lg:text-left"
				>
					'Исторически, образ жизни и профессия даже кочевых рома в Беларуси были тесно связаны с
					местной экономикой и обществом.В соседнем БССР, где была запущена программа
					индустриализации и коллективизации сельского хозяйства, некоторые кочевые рома уже перешли
					на оседлый образ жизни.',
				</p>
				<p
					class="font-notoSans-medium my-2 text-justify text-xl leading-8 text-gray-700 lg:text-left"
				>
					'Как показывают данные устной истории и этнографии, большинство рома Новогрудского и
					Виленского воеводств вели кочевой или полукочевой образ жизни, который заключался в
					договорных отношениях с местными помещиками и крестьянами.',
				</p>
				<p
					class="font-notoSans-medium my-2 text-justify text-xl leading-8 text-gray-700 lg:text-left"
				>
					'Исторически, образ жизни и профессия даже кочевых рома в Беларуси были тесно связаны с
					местной экономикой и обществом.В соседнем БССР, где была запущена программа
					индустриализации и коллективизации сельского хозяйства, некоторые кочевые рома уже перешли
					на оседлый образ жизни.'
				</p>
			</div>

			<div class="mx-auto flex w-full flex-wrap items-start py-2 md:px-2 lg:px-2">
				<div class="w-full  lg:w-1/2 lg:max-w-lg">
					<div>
						<div class="relative w-full max-w-lg">
							<figure class="relative">
								<img
									class="mx-auto  object-cover object-center shadow-2xl"
									alt=""
									src="https://static01.nyt.com/images/2016/04/21/blogs/21-lens-armenian-slide-FMS2/21-lens-armenian-slide-FMS2-superJumbo.jpg?quality=75&auto=webp&disable=upscale"
								/>
								<figcaption
									class="font-notoSans-medium  w-full text-justify text-sm text-neutral-900  md:text-left     lg:text-left"
								>
									Ромские узники в концлагере «Белжец», из архива Мемориального музея истории
									Холокоста (США)
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
				<div
					class=" mt-4 mb-8 flex flex-col items-start text-left md:mb-0 md:pl-6 lg:w-1/2 lg:flex-grow lg:pl-6 "
				>
					<span class="font-notoSans-italic  mb-6 leading-8  tracking-tighter  text-neutral-600 ">
						'В регионе Вильно и Новогрудка, наоборот, образ жизни рома практически не изменился в
						течении всего межвоенного периода.',
					</span>

					<p
						class="font-notoSans-medium my-2 text-justify text-base leading-8  text-gray-700 md:text-left lg:text-left"
					>
						'Как показывают данные устной истории и этнографии, большинство рома Новогрудского и
						Виленского воеводств вели кочевой или полукочевой образ жизни, который заключался в
						договорных отношениях с местными помещиками и крестьянами.',
					</p>
					<p
						class="font-notoSans-medium my-2 text-justify text-base leading-8  text-gray-700 md:text-left lg:text-left"
					>
						'Исторически, образ жизни и профессия даже кочевых рома в Беларуси были тесно связаны с
						местной экономикой и обществом.В соседнем БССР, где была запущена программа
						индустриализации и коллективизации сельского хозяйства, некоторые кочевые рома уже
						перешли на оседлый образ жизни.'
					</p>
				</div>
			</div>
		</div>
	</div>
</section> -->
<!--
<section class="bg-gray-200 py-6 px-2">
	<div class="mx-auto flex  max-w-7xl flex-col">
		<div class="md:px-6 lg:px-8 ">
			<h2 class="font-oswald-normal text-2xl uppercase text-neutral-900">новости</h2>
			<hr class="mb-6 h-1 border-0 bg-neutral-900 " />
		</div>

		<div style="justify-content: space-between;" class="flex flex-row flex-wrap md:px-6 lg:px-8  ">
			<a
				href="/"
				class=" my-2 mb-12 flex w-full  cursor-pointer flex-col  overflow-hidden  bg-white hover:bg-neutral-100  lg:h-[350px] lg:flex-row "
			>

				<img
					class=" h-96  object-cover md:h-auto  md:w-48 md:rounded-none  lg:w-[460px]"
					src="https://media.cnn.com/api/v1/images/stellar/prod/111229095637-9-11-memorial.jpg?q=x_0,y_199,h_1968,w_3499,c_crop/h_653,w_1160/f_webp"
					alt=""
				/>

				<div class="flex h-full  flex-col justify-between py-6 px-4">
					<div class="font-notoSans-normal  mb-6 flex  space-x-1 text-xs text-neutral-700">
						<time datetime="03 АВГУСТА 2021, 10:51"> '03 АВГУСТА 2021, 10:51' </time>
						<span aria-hidden="true"> · </span>
					</div>
					<div class="mt-2 block flex  flex-col">
						<hr class="mb-6 h-1 border-0 bg-neutral-900 " />

						<h3 class="font-oswald-normal  mb-6 text-2xl leading-8  text-neutral-900">
							'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа'
						</h3>
						<p class="font-notoSans-normal text-sm  text-neutral-700">
							'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисовской центральной
							районной библиотеке им. И.Х.Колодеева 10 августа. Об этом корреспонденту БЕЛТА
							рассказала директор учреждения Елена Копыток...'
						</p>
					</div>
				</div>
			</a>

			<a
				href="/"
				class=" my-4 mb-12 flex  cursor-pointer flex-col  overflow-hidden  bg-white hover:bg-neutral-100  md:max-w-xl lg:h-[350px] lg:flex-row "
			>
				<img
					class=" h-96  w-auto  object-cover md:h-auto md:w-48 md:rounded-none"
					src="https://media.cnn.com/api/v1/images/stellar/prod/111229095637-9-11-memorial.jpg?q=x_0,y_199,h_1968,w_3499,c_crop/h_653,w_1160/f_webp"
					alt=""
				/>

				<div class="flex h-full   w-auto flex-col justify-between py-6 px-4">
					<div class="font-notoSans-normal  mb-6 flex  space-x-1 text-xs text-neutral-700">
						<time datetime="03 АВГУСТА 2021, 10:51"> '03 АВГУСТА 2021, 10:51"</time>
						<span aria-hidden="true"> · </span>
					</div>
					<div class="mt-2 block flex  flex-col">
						<hr class="mb-6 h-1 border-0 bg-neutral-900 " />

						<h3 class="font-oswald-normal text-xl leading-8 tracking-wide text-neutral-900">
							'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа'
						</h3>
					</div>
				</div>
			</a>
		</div>
	</div>
</section> -->

<!-- <section class="bg-gray-300 py-6 px-2">
	<div class="mx-auto flex  max-w-7xl flex-col">
		<div class="md:px-6 lg:px-8 ">
			<h2 class="font-oswald-normal text-2xl uppercase text-neutral-900">мероприятия</h2>
			<hr class="mb-6 h-1 border-0 bg-neutral-900 " />
		</div>

		<div style="justify-content: space-between;" class="flex flex-row flex-wrap md:px-6 lg:px-8  ">
			<div
				class=" my-4  mb-12 flex h-[500px] cursor-pointer  flex-col overflow-hidden bg-white hover:bg-neutral-100 md:max-w-sm"
			>
				<div class="flex-shrink-0 ">
					<img
						class="h-48 w-full  object-cover"
						src="https://media.cnn.com/api/v1/images/stellar/prod/111229095637-9-11-memorial.jpg?q=x_0,y_199,h_1968,w_3499,c_crop/h_653,w_1160/f_webp"
						alt=""
					/>
				</div>

				<div class="flex flex-1 flex-col justify-between px-4 py-6">
					<div class="flex flex-1 flex-col justify-between  ">
						<a href="/" class="">
							<div class="font-notoSans-normal  mb-6 flex  space-x-1 text-xs text-neutral-700">
								<time datetime="03 АВГУСТА 2021, 10:51"> '03 АВГУСТА 2021, 10:51"</time>
								<span aria-hidden="true"> · </span>
							</div>
						</a>
						<a href="/" class="mt-2 block w-10/12 space-y-6">
							<h3 class="font-oswald-normal text-xl leading-8 tracking-wide text-neutral-900">
								'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа'
							</h3>

							<hr class="mb-6 h-1 border-0 bg-neutral-900 " />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section> -->
<style>
  @keyframes slideRight {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}

.hero.slide-right {
    animation: slideRight 2s forwards;
}

  /* Background */
	.wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		min-height: 100vh;
	}
	/* Footprint */
	.footprint {
		position: absolute;
		top: 20%;
		left: 0;

		animation: walk 5s steps(10, end) infinite, walkopacity 2s ease-out infinite;
		text-align: center;
	}
	/* Image Size */
	.footprint img {
		transform: rotate(45deg);
	}
	/* Right Footprint */
	.right {
		margin: 5rem;
		animation-delay: 250ms;
	}
	/* Walking Animation */
	@keyframes walk {
		to {
			transform: translateX(100vw);
		}
	}
	/* Opacity During Walking */
	@keyframes walkopacity {
		0%,
		100% {
			opacity: 0;
		}
		50% {
			opacity: 0.4;
		}
	}

	.text-animation {
		opacity: 0;  
	}

	.text-animation.fade-in {
		opacity: 1;  
		transition: opacity 1s ease; 
	}

	.hero {
		transition: opacity 5s ease; 
		opacity: 1;  
	}

	#container-hero {
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		justify-content: center;
	}

	.wrap svg {
		display: block;
		max-height: 100vh;
		height: 400px;
	}

	:root {
		--color-1: #fff;
		--color-2: #dc2626;
		--color-3: #dc2626;
		--color-4: #fff;
		--color-5: #fff;
	}

	.logo {
		font-family: 'Exo', sans-serif;
		font-size: 2vh;
		font-weight: 900;
		text-align: end;
		width: -webkit-min-content;
		width: -moz-min-content;
		width: min-content;
		line-height: 0.8;
		/* margin: auto; */
		text-transform: uppercase;
		background: linear-gradient(
			219deg,
			var(--color-1) 19%,
			transparent 19%,
			transparent 20%,
			var(--color-2) 20%,
			var(--color-2) 39%,
			transparent 39%,
			transparent 40%,
			var(--color-3) 40%,
			var(--color-3) 59%,
			transparent 59%,
			transparent 60%,
			var(--color-4) 60%,
			var(--color-4) 79%,
			transparent 79%,
			transparent 80%,
			var(--color-5) 80%
		);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	.container {
		padding: 1.5rem;
		text-align: center;
		/* background: radial-gradient(circle at 1.4% 1.4%, var(--color-1) 0.8%, transparent 0.8%),
			radial-gradient(circle at 5.5% 3%, var(--color-2) 0.45%, transparent 0.45%),
			radial-gradient(circle at 2.5% 3.5%, var(--color-3) 0.5%, transparent 0.5%),
			radial-gradient(circle at 4.5% 1.2%, var(--color-4) 0.25%, transparent 0.25%),
			radial-gradient(circle at 98% 98%, var(--color-1) 0.8%, transparent 0.8%),
			radial-gradient(circle at 95% 95%, var(--color-2) 0.45%, transparent 0.45%),
			radial-gradient(circle at 94.5% 97.5%, var(--color-3) 0.5%, transparent 0.5%),
			radial-gradient(circle at 98.5% 95.5%, var(--color-4) 0.25%, transparent 0.25%); */
	}

	@media screen and (min-width: 768px) {
		.logo {
			font-size: 4rem;
		}
	}

	.custom-marker {
		background-image: url('images/map/pointer.svg');
		background-size: cover;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		cursor: pointer;
	}

	#map {
		height: 100vh;
		/* width: 100%; */
	}

	@media screen and (max-width: 450px) {
		#map {
			max-height: 656px;
			overflow: hidden;
			width: 100%;
		}
	}

	@media screen and (max-width: 1000px) {
		.list {
			display: none;
		}

		.points {
			max-height: 100%;
		}
	}

	.limited-text {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		-webkit-line-clamp: 5;
	}
</style>
