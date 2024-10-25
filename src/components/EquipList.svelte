<script lang="ts">
	import type { Equip, EquipSet, EquipType, GearSet } from '../lib/types';
	// instance-level logic goes here

	interface Props {
		equipSet?: EquipSet[];
		equippedGear?: GearSet;
	}

	let { equipSet = [], equippedGear = $bindable({
		top: null,
		bot: null,
		helm: null
	}) }: Props = $props();
</script>

<!-- markup (zero or more items) goes here -->
<div class="flex-auto border rounded-md p-1 m-5">
	<h1 class="h1">Equips</h1>
	<ul class="list">
		<li class="flex-auto">
			<span class="badge bg-primary-500">👕</span>
			<span>Top</span>
			<select
				class="select"
				bind:value={equippedGear.top}
				onchange={() => console.log(equippedGear)}
			>
				{#each equipSet[0]?.equips as equip}
					<option value={equip}>{equip.name}</option>
				{/each}
				<option value={null}>--</option>
			</select>
		</li>
		<li>
			<span class="badge bg-primary-500">👖</span>
			<span>Bottom</span>
			<select
				class="select"
				bind:value={equippedGear.bot}
				onchange={() => console.log(equippedGear.bot)}
			>
				{#each equipSet[1]?.equips as equip}
					<option value={equip} selected={equip.name === equippedGear?.bot?.name}
						>{equip.name}</option
					>
				{/each}
				<option value={null}>--</option>
			</select>
		</li>
		<li>
			<span class="badge bg-primary-500">🎩</span>
			<span>Helm</span>
			<select
				class="select"
				bind:value={equippedGear.helm}
				onchange={() => console.log(equippedGear)}
			>
				{#each equipSet[2]?.equips as equip}
					<option value={equip}>{equip.name}</option>
				{/each}
			</select>
		</li>
	</ul>
</div>
