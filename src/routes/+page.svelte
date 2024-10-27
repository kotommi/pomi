<script lang="ts">
	import CharacterCard from '../components/CharacterCard.svelte';
	import EquipList from '../components/EquipList.svelte';
	import StatsCard from '../components/StatsCard.svelte';
	import ConfigBox from '../components/ConfigBox.svelte';
	import { AttPot, Job } from '$lib/types';
	import type { Character, CharConfig, Equip, EquipSet, GearSet } from '$lib/types';
	import { getStats } from '$lib/utils';
	import { tompsonEquipSet as initialEquipSet, tompsonGear as initialGear } from '$lib/data';
	import ItemCreator from '../components/ItemCreator.svelte';

	let ts = initialEquipSet;
	let tg = initialGear;

	let char: Character = {
		name: 'Maple',
		job: Job.NL,
		stats: getStats(Job.NL)
	};

	char.stats.dex = 27;
	char.stats.luk = 995;

	let charConfig: CharConfig = {
		attPot: AttPot.None,
		sharpEyes: true,
		booster: true,
		si: false,
		mw: true,
		echo: false
	};
</script>

<div class="container h-full mx-auto flex flex-row flex-wrap justify-center items-center">
	<div class="flex flex-col">
		<StatsCard bind:charConfig bind:char bind:gearSet={tg} />
		<ConfigBox bind:charConfig />
		<CharacterCard bind:char />
	</div>
	<EquipList bind:equipSet={ts} bind:equippedGear={tg} />
	<ItemCreator bind:equippedGear={tg} bind:equipSet={ts} />
	<button on:click={() => console.log(char, tg, charConfig)}>Click</button>
</div>
