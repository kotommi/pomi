<script lang="ts">
	import { AttPot, type CharConfig } from '$lib/types';

	interface Props {
		charConfig: CharConfig;
	}

	let { charConfig = $bindable() }: Props = $props();
</script>

<div class="flex flex-col">
	<h2 class="h2">Config</h2>
	<div class="flex flex-row">
		<span>Att Pot</span>
		<select class="select" bind:value={charConfig.attPot} onchange={() => console.log(charConfig)}>
			{#each Object.keys(AttPot).filter((key) => Number.isNaN(Number(key))) as pot}
				<option selected={pot === AttPot[charConfig.attPot]} value={pot}>{pot}</option>
			{/each}
		</select>
	</div>
	<div class="flex flex-row">
		<span>se</span>
		<input class="input" type="checkbox" bind:checked={charConfig.sharpEyes} />
	</div>
	<div>
		<span>booster</span>
		<input class="input" type="checkbox" bind:checked={charConfig.booster} />
	</div>
	<div>
		<span>si</span>
		<input class="input" type="checkbox" bind:checked={charConfig.si} />
	</div>
	<div>
		<span>mw</span>
		<input class="input" type="checkbox" bind:checked={charConfig.mw} />
	</div>
</div>
