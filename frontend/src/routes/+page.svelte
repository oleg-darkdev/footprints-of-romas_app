<script>
	import { LargeCard, MediumCard, SmallCard } from '$lib/entities';
	import { points } from '$lib/shared';
	import { EventsSection, Header, ImageTextSection, Map } from '$lib/widgets';

	const newsList = [
		{
			title: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа',
			img: 'https://media.cnn.com/api/v1/images/stellar/prod/111229095637-9-11-memorial.jpg?q=x_0,y_199,h_1968,w_3499,c_crop/h_653,w_1160/f_webp',
			date: '03 АВГУСТА 2021, 10:51',
			desc: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисовской центральной районной библиотеке им. И.Х.Колодеева 10 августа. Об этом корреспонденту БЕЛТА рассказала директор учреждения Елена Копыток...',
			link: ''
		},
		{
			title: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа',
			img: 'https://www.gannett-cdn.com/-mm-/e343d3a9ba6e586139ebf7c79231526646f27ce6/c=0-30-3000-1722/local/-/media/USATODAY/GenericImages/2014/07/31/1406832249000-EPA-USA-NEW-YORK-OF-9-11-MUSEUM.jpg?width=2560',
			date: '03 АВГУСТА 2021, 10:51',
			desc: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисовской центральной районной библиотеке им. И.Х.Колодеева 10 августа. Об этом корреспонденту БЕЛТА рассказала директор учреждения Елена Копыток...',
			link: ''
		},

		{
			title: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа',
			img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QuxjGTPRFxEIvuLNPFZ4RQHaEL%26pid%3DApi&f=1&ipt=d9f8b19b07379bfaf2825deb0d91a468a3a5aba0c08b0e8010dc9861d509eaf8&ipo=images',
			date: '03 АВГУСТА 2021, 10:51',
			desc: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисовской центральной районной библиотеке им. И.Х.Колодеева 10 августа. Об этом корреспонденту БЕЛТА рассказала директор учреждения Елена Копыток...',
			link: ''
		}
	];

	const eventsList = [
		{
			title: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа',
			img: 'https://sustainability.tufts.edu/wp-content/uploads/IMG_0347.jpg',
			date: '03 АВГУСТА 2021, 10:51',
			desc: '',
			link: ''
		},
		{
			title: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа',
			img: 'https://iwt.bard.edu/workshops/index.php?action=getfile&id=99975244&disposition=inline&type=image',
			date: '03 АВГУСТА 2021, 10:51',
			desc: '',
			link: ''
		},
		{
			title: 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисове 10 августа',
			img: 'https://www.catanyc.com/cata/wp-content/uploads/2016/06/cata-workshop-events.jpg',
			date: '03 АВГУСТА 2021, 10:51',
			desc: '',
			link: ''
		}
	];
	/**
 *  {
    alternativeText: '',
    url: '',
    caption: '',
    title: '',
    desc: ['', '', '']
  }*/

	const textBlocks = [
		{
			alternativeText: '',
			url: 'https://static01.nyt.com/images/2016/04/21/blogs/21-lens-armenian-slide-FMS2/21-lens-armenian-slide-FMS2-superJumbo.jpg?quality=75&auto=webp&disable=upscale',
			caption:
				'Австрийские рома во время переклички в концлагере Дахау, 1938 г., Германия, фото из Архива места памяти Дахау',
			title:
				'В регионе Вильно и Новогрудка, наоборот, образ жизни рома практически не изменился в течении всего межвоенного периода.',
			desc: [
				'С 1921 по 1939 годы, в составе Польши, эти земли оставались «аграрным раем». Крестьяне доминировали в экономике сельской местности. Крестьянские хозяйства, однако, страдали от недостатка земли и перенаселения. Эти проблемы обострились государственной политикой колонизации региона: тысячи “осадников” из центральной и западной Польши (большинство из которых были офицерами на пенсии) получили землю в восточных пограничных землях.',
				'Много детей из местных бедных семей служили в хозяйствах осадников в качестве пастухов и домашней прислуги. Не редки были случаи смешанных браков.'
			]
		},
		{
			alternativeText: 'lorem',
			url: 'https://www.washingtonpost.com/blogs/worldviews/files/2014/04/Africa111396302317.jpg',
			caption:
				'Ромские узники в концлагере «Белжец», из архива Мемориального музея  истории Холокоста (США)',
			title: '',
			desc: [
				'Как показывают данные устной истории и этнографии, большинство рома Новогрудского и Виленского воеводств вели кочевой или полукочевой образ жизни, который заключался в договорных отношениях с местными помещиками и крестьянами.',
				'Исторически, образ жизни и профессия даже кочевых рома в Беларуси были тесно связаны с местной экономикой и обществом.В соседнем БССР, где была запущена программа индустриализации и коллективизации сельского хозяйства, некоторые кочевые рома уже перешли на оседлый образ жизни.'
			]
		}
	];

	const onlyText = [
		'Как показывают данные устной истории и этнографии, большинство рома Новогрудского и Виленского воеводств вели кочевой или полукочевой образ жизни, который заключался в договорных отношениях с местными помещиками и крестьянами.',
		'Исторически, образ жизни и профессия даже кочевых рома в Беларуси были тесно связаны с местной экономикой и обществом.В соседнем БССР, где была запущена программа индустриализации и коллективизации сельского хозяйства, некоторые кочевые рома уже перешли на оседлый образ жизни.',
		'Как показывают данные устной истории и этнографии, большинство рома Новогрудского и Виленского воеводств вели кочевой или полукочевой образ жизни, который заключался в договорных отношениях с местными помещиками и крестьянами.',
		'Исторически, образ жизни и профессия даже кочевых рома в Беларуси были тесно связаны с местной экономикой и обществом.В соседнем БССР, где была запущена программа индустриализации и коллективизации сельского хозяйства, некоторые кочевые рома уже перешли на оседлый образ жизни.'
	];
</script>

<Header />

<section class="bg-neutral-200 py-4 px-2 md:px-5 lg:px-5">
	<div
		class="font-['Noto sans'] prose-2xl prose-blue prose mx-auto w-full max-w-6xl  px-2 py-8 text-justify  lg:px-6 lg:text-left "
	>
		<div class="mx-auto w-full ">
			<ImageTextSection data={textBlocks[0]} />

			<div class=" mt-4 mb-8 flex flex-col items-start    md:mb-0 ">
				{#each onlyText as text}
					<p
						class="font-notoSans-medium my-2 text-justify text-xl leading-8 text-gray-700 lg:text-left"
					>
						{text}
					</p>
				{/each}
			</div>

			<ImageTextSection data={textBlocks[1]} />
		</div>
	</div>
</section>



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
				<!-- font-oswald-medium  font-notoSans-normal -->

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
</section>

<section class="bg-gray-300 py-6 px-2">
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

				<!-- 'Выставочная экспозиция "Кто ты, народ рома?" откроется в Борисовской центральной районной библиотеке им. И.Х.Колодеева 10 августа. Об этом корреспонденту БЕЛТА рассказала директор учреждения Елена Копыток...' -->
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
</section>

<Map {points} />
