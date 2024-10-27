<script lang="ts">
	import { EquipType, type EquipSet, type GearSet } from '$lib/types';

	let newEquip = {
		name: '',
		type: EquipType.Helm,
		stats: {
			str: 0,
			dex: 0,
			int: 0,
			luk: 0,
			w_att: 0,
			m_att: 0
		}
	};

	export let equippedGear: GearSet;
	export let equipSet: EquipSet[];

	const statKeys: (keyof typeof newEquip.stats)[] = Object.keys(
		newEquip.stats
	) as (keyof typeof newEquip.stats)[];

	const handleClick = () => {
		equipSet.find((set) => set.type === newEquip.type)?.equips.push(newEquip);
		equippedGear[newEquip.type.toLowerCase() as keyof GearSet] = newEquip;
		newEquip = {
			name: '',
			type: EquipType.Helm,
			stats: {
				str: 0,
				dex: 0,
				int: 0,
				luk: 0,
				w_att: 0,
				m_att: 0
			}
		};
	};
</script>

<div class="p-4 m-4 border rounded-md">
	<h1 class="h1">Item Creator</h1>
	<div class="flex flex-col p-4 m-4">
		<div class="flex items-center space-between">
			<label class="label" for="itemName">Name</label>
			<input id="itemName" class="input" type="text" bind:value={newEquip.name} />
		</div>
		<div class="flex items-center space-between">
			<label class="label" for="itemType">Type</label>
			<select id="itemType" class="select" bind:value={newEquip.type}>
				{#each Object.keys(EquipType) as type}
					<option value={type}>{type}</option>
				{/each}
			</select>
		</div>
		{#each statKeys as stat}
			<div class="flex items-center space-between p-1 m-1">
				<label class="label" for={stat}>{stat}</label>
				<input
					id={stat}
					class="input text-center"
					type="number"
					bind:value={newEquip.stats[stat]}
					min={0}
					max={255}
					minlength={1}
					maxlength={3}
					size={1}
				/>
			</div>
		{/each}
		<button class="badge variant-filled-primary" on:click|preventDefault={handleClick}>Add</button>
	</div>
</div>
