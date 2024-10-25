<script lang="ts">
	import { range, ttDamage } from '$lib/damage';
	import { AttPot, type Character, type CharConfig, type GearSet } from '$lib/types';

	interface Props {
		charConfig: CharConfig;
		char: Character;
		gearSet: GearSet;
	}

	let { charConfig, char, gearSet }: Props = $props();

	let { minRange, maxRange } = range(gearSet, charConfig, char);
</script>

<div class="flex flex-col border rounded-md">
	<h2 class="h2">Stats</h2>
	<div>
		<span>range: {minRange} - {maxRange}</span>
	</div>
	<div>
		<span>dps: {ttDamage(gearSet, charConfig, char).averageDps}</span>
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
