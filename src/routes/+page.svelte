<script>
	import CharacterCard from '../components/CharacterCard.svelte';
	import EquipList from '../components/EquipList.svelte';
	import { equipSet } from '../lib/data';
</script>

<div class="container h-full mx-auto flex flex-col justify-center items-center">
	<h1 class="h1">Path of Mapleing</h1>
	<EquipList {equipSet} />
	<CharacterCard />
</div>
