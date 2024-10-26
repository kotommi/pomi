<script lang="ts">
	import { AttPot, type CharConfig } from '$lib/types';

	export let charConfig: CharConfig;
</script>

<div class="flex flex-col border rounded-md m-4 p-5">
	<h2 class="h2">Config</h2>

	<div class="">
		<div class="flex items-center space-between">
			<label class="label" for="attPot">Potion</label>
			<select
				id="attPot"
				class="select"
				bind:value={charConfig.attPot}
				on:change={() => console.log(charConfig)}
			>
				{#each Object.keys(AttPot).filter((key) => Number.isNaN(Number(key))) as pot}
					<option selected={pot === AttPot[charConfig.attPot]} value={pot}>{pot}</option>
				{/each}
			</select>
		</div>
		<label class="flex items-center">
			<input id="se" class="input" type="checkbox" bind:checked={charConfig.sharpEyes} />
			<p>se</p>
		</label>
		<label class="flex items-center space-x-2">
			<input id="booster" class="input grow" type="checkbox" bind:checked={charConfig.booster} />
			<p>booster</p>
		</label>
		<label class="flex items-center space-x-2">
			<input id="si" class="input" type="checkbox" bind:checked={charConfig.si} />
			<p>si</p>
		</label>
		<label class="flex items-center space-x-2">
			<input id="mw" class="input" type="checkbox" bind:checked={charConfig.mw} />
			<p>mw</p>
		</label>
		<label class="flex items-center space-x-2">
			<input id="echo" class="input" type="checkbox" bind:checked={charConfig.echo} />
			<p>echo</p>
		</label>
	</div>
</div>
