import { test, describe, expect } from 'vitest';
import { tompsonEquipSet as initialEquipSet, tompsonGear as initialGear } from '$lib/data';
import { AttPot, Job, type Character, type CharConfig } from '$lib/types';
import { getStats } from '$lib/utils';
import { getEquipStats, getTotalWatt, range, totalStats } from '$lib/damage';

test('stats', () => {
	let tg = initialGear;
	let char: Character = {
		name: 'Tompson',
		job: Job.NL,
		stats: getStats(Job.NL)
	};
	char.stats.luk = 995;
	char.stats.dex = 27;
	let charConfig: CharConfig = {
		attPot: AttPot.None,
		sharpEyes: false,
		booster: true,
		si: false,
		mw: false,
		echo: false
	};
	// Tomson equips 238 luk 121 dex 105str
	const equipLuk = getEquipStats(tg, 'luk');
	expect(equipLuk).toBe(238);
	const equipDex = getEquipStats(tg, 'dex');
	expect(equipDex).toBe(121);
	const equipStr = getEquipStats(tg, 'str');
	expect(equipStr).toBe(105);
	// Tompson stats 1233 luk 148 dex 109str
	const { primaryTotal, secondaryStatSum } = totalStats(tg, charConfig, char);
	expect(primaryTotal).toBe(1233);
	expect(secondaryStatSum).toBe(148 + 109);
	// Tompson mw stats 1332 luk 150 dex 109 str
	charConfig.mw = true;
	const { primaryTotal: primaryTotalMW, secondaryStatSum: secondaryStatSumMW } = totalStats(tg, charConfig, char);
	expect(primaryTotalMW).toBe(1332);
	expect(secondaryStatSumMW).toBe(150 + 109);
	// total wa 91 + 31 + 1 + 3 + 7 + 18 + 16 + 21 + 8
	const totalWA = getTotalWatt(tg, charConfig);
	expect(totalWA).toBe(196);
});

test('range', () => {

	let tg = initialGear;
	let char: Character = {
		name: 'Tompson',
		job: Job.NL,
		stats: getStats(Job.NL)
	};
	char.stats.luk = 995;
	char.stats.dex = 27;

	let charConfig: CharConfig = {
		attPot: AttPot.None,
		sharpEyes: false,
		booster: true,
		si: false,
		mw: false,
		echo: false
	};
	// Tompson range 5201-9203 mw 5582-9906 echo+mw 5782-10260 echo+no mw 5387-9532 
	const { minRange, maxRange } = range(tg, charConfig, char);
	expect(minRange).toBe(5201);
	expect(maxRange).toBe(9203);

	charConfig.mw = true;
	const { minRange: minRange2, maxRange: maxRange2 } = range(tg, charConfig, char);
	expect(minRange2).toBe(5582);
	expect(maxRange2).toBe(9906);

	charConfig.echo = true;
	const { minRange: minRange3, maxRange: maxRange3 } = range(tg, charConfig, char);
	expect(minRange3).toBe(5782);
	expect(maxRange3).toBe(10260);

	charConfig.mw = false;
	const { minRange: minRange4, maxRange: maxRange4 } = range(tg, charConfig, char);
	expect(minRange4).toBe(5387);
	expect(maxRange4).toBe(9532);
});
