<script lang="ts">
	import { AttPot, type CharConfig } from '$lib/types';

	export let charConfig: CharConfig;
</script>

<div class="flex flex-col">
	<h2 class="h2">Config</h2>
	<div class="flex flex-row">
		<span>Att Pot</span>
		<select class="select" bind:value={charConfig.attPot} on:change={() => console.log(charConfig)}>
			{#each Object.keys(AttPot).filter((key) => Number.isNaN(Number(key))) as pot}
				<option selected={pot === AttPot[charConfig.attPot]} value={pot}>{pot}</option>
			{/each}
		</select>
	</div>
	<div class="flex flex-row">
		<span>Sharp Eyes</span>
		<input class="input" type="checkbox" bind:checked={charConfig.sharpEyes} />
	</div>
	<div>
		<span>Booster</span>
		<input class="input" type="checkbox" bind:checked={charConfig.booster} />
	</div>
	<div>
		<span>SI</span>
		<input class="input" type="checkbox" bind:checked={charConfig.si} />
	</div>
</div>
