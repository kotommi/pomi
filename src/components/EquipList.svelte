<script lang="ts">
	import type { Equip, EquipSet, EquipType, GearSet } from '../lib/types';
	// instance-level logic goes here
	export let equipSet: EquipSet[];
	export let equippedGear: GearSet;
</script>

<!-- markup (zero or more items) goes here -->
<div class="flex-auto border rounded-md p-1 m-5">
	<h1 class="h1">Equips</h1>
	<ul class="list">
		{#each equipSet as set}
			<li class="flex-auto m-1 p-1">
				<label class="label" for={set.type}>{set.type}</label>
				<select
					id={set.type}
					class="select"
					bind:value={equippedGear[set.type.toLowerCase() as keyof GearSet]}
				>
					{#each set.equips as equip}
						<option
							value={equip}
							selected={equippedGear[set.type.toLowerCase() as keyof GearSet]?.name === equip.name}
							>{equip.name}</option
						>
					{/each}
					<option value={null}>--</option>
				</select>
			</li>
		{/each}
	</ul>
</div>
