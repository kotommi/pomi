<script lang="ts">
	import { Job } from '$lib/types';

	type Stats = {
		str: number;
		dex: number;
		luk: number;
		int: number;
	};
	const getStats = (job: Job): Stats => {
		return defaultStats[job];
	};
	const defaultStats: Record<Job, Stats> = {
		[Job.NL]: { str: 4, dex: 25, luk: 997, int: 4 },
		[Job.Shad]: { str: 4, dex: 25, luk: 997, int: 4 }
		// Add other jobs here
	};

	const char = {
		name: 'Maple',
		job: Job.NL
	};

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
		<select class="select" bind:value={char.job} on:change={onChange}>
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
					class="input"
					title="str"
					type="text"
					value={getStats(char.job).str}
					minlength="1"
					maxlength="3"
					size="3"
				/>
			</li>
			<li>
				<label class="label" for="dex">DEX</label>
				<input
					id="dex"
					class="input"
					title="dex"
					type="text"
					value={getStats(char.job).dex}
					minlength="1"
					maxlength="3"
					size="3"
				/>
			</li>
			<li>
				<label class="label" for="int">INT</label>
				<input
					id="int"
					class="input"
					title="int"
					type="text"
					value={getStats(char.job).int}
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
					value={getStats(char.job).luk}
					minlength={1}
					maxlength={3}
					size={4}
				/>
			</li>
		</ul>
	</div>
</div>
