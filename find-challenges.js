/** @param {NS} ns **/
export async function main(ns) {
	const {
		getHostname,
		scan,
		sleep,
		ls,
	} = ns;

	const debug = false;

	ns.disableLog("ALL");

	let startingServer = 0;
	let allServers = scan(getHostname());
	let challenges;
	while (true) {
		challenges = {};
		await sleep(5)
		let servers = allServers;
		let server;
		if (startingServer == allServers.length) startingServer = 0;
		for (server = startingServer; server < servers.length; server++) {
			await sleep(5)
			
			const foundChallenges = ls(servers[server]).filter(x => /cct$/.test(x));

			if (foundChallenges.length) {
				challenges[servers[server]] = foundChallenges
			}

			let newServers = scan(servers[server]);
			for (let newServer = 0; newServer < newServers.length; newServer++) {
				let isNewServer = true;
				for (let checkServer = 0; checkServer < allServers.length; checkServer++) {
					if (newServers[newServer] == 'home' || newServers[newServer] == allServers[checkServer]) {
						isNewServer = false;
					}
				}
				if (isNewServer) allServers = allServers.concat(newServers[newServer]);
			}
		}
		startingServer = server;
		displayStats();
	}

	function displayStats() {
		ns.clearLog();
		log("--- Finding challenges ---");
		log("Challenges: " + JSON.stringify(challenges, null, 2));
	}

	function log(str) {
		if (debug) {
			ns.tprint(str);
		} else {
			ns.print(str);
		}
	}
}