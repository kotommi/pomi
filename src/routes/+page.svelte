<script lang="ts">
	import CharacterCard from '../components/CharacterCard.svelte';
	import EquipList from '../components/EquipList.svelte';
	import StatsCard from '../components/StatsCard.svelte';
	import ConfigBox from '../components/ConfigBox.svelte';
	import { AttPot, EquipType, Job } from '$lib/types';
	import type { Character, CharConfig, Equip, EquipSet, GearSet } from '$lib/types';
	import { getStats } from '$lib/utils';

	let char: Character = {
		name: 'Maple',
		job: Job.NL,
		stats: getStats(Job.NL)
	};

	let charConfig: CharConfig = {
		attPot: AttPot.None,
		sharpEyes: false,
		booster: true,
		si: false,
		mw: true
	};

	let top: Equip = {
		name: 'Red Pirate Top',
		type: EquipType.Top,
		stats: {
			str: 10,
			dex: 10,
			int: 10,
			luk: 10,
			w_att: 10,
			m_att: 10
		}
	};
	let bot: Equip = {
		name: 'Black Pirate Pants',
		type: EquipType.Bot,
		stats: {
			str: 10,
			dex: 10,
			int: 10,
			luk: 10,
			w_att: 10,
			m_att: 10
		}
	};

	let helm: Equip = {
		name: 'Zhelm',
		type: EquipType.Helm,
		stats: {
			str: 10,
			dex: 10,
			int: 10,
			luk: 10,
			w_att: 10,
			m_att: 10
		}
	};
	let equippedGear: GearSet = { top, bot, helm };
	let equipSet: EquipSet[] = [
		{
			type: EquipType.Top,
			equips: [top]
		},
		{
			type: EquipType.Bot,
			equips: [bot]
		},
		{
			type: EquipType.Helm,
			equips: [helm]
		}
	];
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
	<h1 class="h1">Path of Mapleing</h1>
	<EquipList bind:equipSet bind:equippedGear />
	<CharacterCard bind:char />
	<StatsCard bind:charConfig bind:char bind:gearSet={equippedGear} />
	<ConfigBox bind:charConfig />
</div>
