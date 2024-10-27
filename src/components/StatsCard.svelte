<script lang="ts">
	import { range, ttDamage } from '$lib/damage';
	import { AttPot, Job, type Character, type CharConfig, type GearSet } from '$lib/types';

	export let charConfig: CharConfig;
	export let char: Character;
	export let gearSet: GearSet;

	const { averageDps, averageDamage, maxHit } = ttDamage(gearSet, charConfig, char);

	let { minRange, maxRange } = range(gearSet, charConfig, char);
</script>

<div class="flex flex-col border rounded-md text-center">
	<h2 class="h2">Stats</h2>
	<div>
		<span>range: {minRange} - {maxRange}</span>
	</div>
	<div>
		<span>dps: {averageDps}</span>
	</div>
	<div>
		<span>Average hit: {averageDamage}</span>
	</div>
	{#if charConfig.sharpEyes || [Job.NL].includes(char.job)}
		<div>
			<span>Max hit (Crit): {maxHit}</span>
		</div>
	{/if}
</div>
