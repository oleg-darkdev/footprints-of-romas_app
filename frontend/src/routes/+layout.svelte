<script>
	import AOS from 'aos';
  
	import 'aos/dist/aos.css';
	import '../leafletCustom.css';
	import '../mapbox.css';

	import { onMount } from 'svelte';
	import '../app.css';
	onMount(() => {
		AOS.init();
	});
</script>

<main class="">
	<slot />
</main>

<style>
	/* noto-sans */
	:global(.font-notoSans-normal) {
		font-family: 'Noto-sans';
		font-style: normal;
	}
	:global(.font-notoSans-italic) {
		font-family: 'Noto-sans';
		font-style: italic;
	}
	:global(.font-notoSans-light) {
		font-family: 'Noto-sans';
		font-style: light;
	}
	:global(.font-notoSans-medium) {
		font-family: 'Noto-sans';
		font-style: medium;
	}
	:global(.font-notoSans-semiBold) {
		font-family: 'Noto-sans';
		font-style: semiBold;
	}

	@font-face {
		font-family: 'Noto-sans';

		src: local(''),
			/* Super Modern Browsers url('/fonts/oswald.woff') format('woff'), */ /* Modern Browsers */
				url('/fonts/notoSans/regular.ttf') format('truetype');
		/* Safari, Android, iOS  url('/fonts/oswald.svg') format('svg'); /* Legacy iOS */
		src: local(''),
			/* Super Modern Browsers url('/fonts/oswald.woff') format('woff'), */ /* Modern Browsers */
				url('/fonts/notoSans/regular.ttf') format('truetype');
		/* Safari, Android, iOS  url('/fonts/oswald.svg') format('svg'); /* Legacy iOS */
		src: local(''),
			/* Super Modern Browsers url('/fonts/oswald.woff') format('woff'), */ /* Modern Browsers */
				url('/fonts/notoSans/regular.ttf') format('truetype');
		/* Safari, Android, iOS  url('/fonts/oswald.svg') format('svg'); /* Legacy iOS */
		src: local(''),
			/* Super Modern Browsers url('/fonts/oswald.woff') format('woff'), */ /* Modern Browsers */
				url('/fonts/notoSans/regular.ttf') format('truetype');
		/* Safari, Android, iOS  url('/fonts/oswald.svg') format('svg'); /* Legacy iOS */
		src: local(''),
			/* Super Modern Browsers url('/fonts/oswald.woff') format('woff'), */ /* Modern Browsers */
				url('/fonts/notoSans/regular.ttf') format('truetype');
		/* Safari, Android, iOS  url('/fonts/oswald.svg') format('svg'); /* Legacy iOS */
	}

	/* oswald */
	:global(.font-oswald-normal) {
		font-family: 'Oswald';
		font-style: normal;
	}

	:global(.font-oswald-bold) {
		font-family: 'Oswald';
		font-style: bold;
	}

	:global(.font-oswald-medium) {
		font-family: 'Oswald';
		font-style: medium;
	}

	@font-face {
		font-family: 'Oswald';

		src: local(''),
			/* Super Modern Browsers url('/fonts/oswald.woff') format('woff'), */ /* Modern Browsers */
				url('/fonts/oswald/regular.ttf') format('truetype');
		src: local(''),
			/* Super Modern Browsers url('/fonts/oswald.woff') format('woff'), */ /* Modern Browsers */
				url('/fonts/oswald/regular.ttf') format('truetype');
		/* Safari, Android, iOS  url('/fonts/oswald.svg') format('svg'); /* Legacy iOS */
		/* Safari, Android, iOS  url('/fonts/oswald.svg') format('svg'); /* Legacy iOS */

		src: local(''),
			/* Super Modern Browsers url('/fonts/oswald.woff') format('woff'), */ /* Modern Browsers */
				url('/fonts/oswald/medium.ttf') format('truetype');
		/* Safari, Android, iOS  url('/fonts/oswald.svg') format('svg'); /* Legacy iOS */
	}

	/* @font-face {
		font-family: 'Oswald';
	}

	@font-face {
		font-family: 'Oswald';
		font-style: medium;
	} */
</style>
