<script lang="ts">
	import { Job, type Stats, type Character } from '$lib/types';
	import { getStats } from '$lib/utils';

	interface Props {
		char?: Character;
	}

	let { char = $bindable({
		name: 'Maple',
		job: Job.NL,
		stats: getStats(Job.NL)
	}) }: Props = $props();

	const onChange = (e: Event) => {
		const select = e.target as HTMLSelectElement;
		console.log(select.value);
		console.log(char);
	};
</script>

<div class="flex-auto border rounded-md m-1 p-5">
	<h2 class="h2">Character</h2>
	<div class="flex flex-row m-4 p-4">
		<span>Job</span>
		<select class="select" bind:value={char.job} onchange={onChange}>
			{#each Object.values(Job) as job}
				<option selected={job === char.job}>{job}</option>
			{/each}
		</select>
	</div>

	<div class="flex flex-col m-4 p-4">
		<h2 class="h2">Stats</h2>
		<ul class="list">
			<li>
				<label class="label" for="str">STR</label>
				<input
					id="str"
					class="input text-center"
					title="str"
					type="text"
					bind:value={char.stats.str}
					minlength="1"
					maxlength="3"
					size="3"
				/>
			</li>
			<li>
				<label class="label" for="dex">DEX</label>
				<input
					id="dex"
					class="input text-center"
					title="dex"
					type="text"
					bind:value={char.stats.dex}
					minlength="1"
					maxlength="3"
					size="3"
				/>
			</li>
			<li>
				<label class="label" for="int">INT</label>
				<input
					id="int"
					class="input text-center"
					title="int"
					type="text"
					bind:value={char.stats.int}
					minlength="1"
					maxlength="3"
					size="4"
				/>
			</li>
			<li>
				<label class="label" for="luk">LUK</label>
				<input
					id="luk"
					class="input text-center"
					title="luk"
					type="text"
					bind:value={char.stats.luk}
					minlength={1}
					maxlength={3}
					size={4}
				/>
			</li>
		</ul>
	</div>
</div>
