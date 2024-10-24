<script lang="ts">
	import { AttPot, type CharConfig } from '$lib/types';

	export let charConfig: CharConfig;
</script>

<div class="flex flex-col border rounded-md">
	<h2 class="h2">Stats</h2>
	<div>
		<span>range: </span>
		<span>123</span>
	</div>
	<div>
		<span>dps: </span>
	</div>
	<div>
		<span>Max hit: </span>
	</div>
	{#if charConfig.sharpEyes}
		<div>
			<span>Max hit (SE): </span>
		</div>
	{/if}
	<div>
		<span>Min hit: </span>
	</div>
	{#if charConfig.sharpEyes}
		<div>
			<span>Min crit (SE): </span>
		</div>
	{/if}
</div>
