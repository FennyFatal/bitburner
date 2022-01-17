/** @param {NS} ns **/
export async function main(ns) {
	const {
		fileExists,
		createProgram,
		getHackingLevel,
		sleep,
		isBusy,
	} = ns;

	const programs = [
		['AutoLink.exe', 25],
		['BruteSSH.exe', 50],
		['DeepscanV1.exe', 75],
		['ServerProfiler.exe', 75],
		['FTPCrack.exe', 100],
		['relaySMTP.exe', 250],
		['HTTPWorm.exe', 500],
		['SQLInject.exe', 750],
		['DeepscanV2.exe', 400],
	];

	while (true) {
		await sleep(100);
		programs.forEach(async ([program, cost]) => {
			if (getHackingLevel() > cost && !fileExists(program, 'home') && !isBusy()) {
				createProgram(program, false)
			}
		})
	}
}
