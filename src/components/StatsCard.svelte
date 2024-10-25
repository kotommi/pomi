<script lang="ts">
	import { range, ttDamage } from '$lib/damage';
	import { AttPot, type Character, type CharConfig, type GearSet } from '$lib/types';

	export let charConfig: CharConfig;
	export let char: Character;
	export let gearSet: GearSet;

	console.log(char);

	const helper = () => {
		console.log(char.stats.luk);
		const deeps = ttDamage(gearSet, charConfig, char).averageDps;
		console.log(deeps);
		console.log(gearSet);
		console.log(charConfig);
		console.log(char);
		return ttDamage(gearSet, charConfig, char).averageDps;
	};

	let { minRange, maxRange } = range(gearSet, charConfig, char);
</script>

<div class="flex flex-col border rounded-md">
	<h2 class="h2">Stats</h2>
	<div>
		<span>range: {minRange} - {maxRange}</span>
	</div>
	<div>
		<span>dps: {helper()}</span>
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
