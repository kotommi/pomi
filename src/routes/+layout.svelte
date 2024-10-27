<script lang="ts">
	import '../app.postcss';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<svelte:head>
	<title>Path of Mapleing</title>
	<meta name="robots" content="noindex nofollow" />
	<html lang="en" />
</svelte:head>
<slot />
