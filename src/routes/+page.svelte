<script lang="ts">
	import CharacterCard from '../components/CharacterCard.svelte';
	import EquipList from '../components/EquipList.svelte';
	import { equipSet } from '../lib/data';
	import StatsCard from '../components/StatsCard.svelte';
	import ConfigBox from '../components/ConfigBox.svelte';
	import { AttPot } from '$lib/types';
	import type { CharConfig } from '$lib/types';

	const charConfig: CharConfig = {
		attPot: AttPot.None,
		sharpEyes: false,
		booster: true,
		si: false
	};
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
	<h1 class="h1">Path of Mapleing</h1>
	<EquipList {equipSet} />
	<CharacterCard />
	<StatsCard {charConfig}/>
	<ConfigBox {charConfig} />
</div>
