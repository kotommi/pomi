<script lang="ts">
	import CharacterCard from '../components/CharacterCard.svelte';
	import EquipList from '../components/EquipList.svelte';
	import { equipSet } from '../lib/data';
	import StatsCard from '../components/StatsCard.svelte';
	import ConfigBox from '../components/ConfigBox.svelte';
	import { AttPot, EquipType, Job } from '$lib/types';
	import type { Character, CharConfig, Equip, GearSet } from '$lib/types';
	import { getStats } from '$lib/utils';

	const char: Character = {
		name: 'Maple',
		job: Job.NL,
		stats: getStats(Job.NL)
	};

	const charConfig: CharConfig = {
		attPot: AttPot.None,
		sharpEyes: false,
		booster: true,
		si: false,
		mw: true
	};

	const top: Equip = {
		name: 'top',
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
	const bot: Equip = {
		name: 'bot',
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

	const helm: Equip = {
		name: 'helm',
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
	const gearSet: GearSet = { top, bot, helm };
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
	<h1 class="h1">Path of Mapleing</h1>
	<EquipList {equipSet} equippedGear={gearSet} />
	<CharacterCard {char} />
	<StatsCard {charConfig} {char} {gearSet} />
	<ConfigBox {charConfig} />
</div>
