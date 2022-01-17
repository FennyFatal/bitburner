/** @param {NS} ns **/
export async function main(ns) {
	const {
		getHostname,
		getServerRequiredHackingLevel,
		getServerNumPortsRequired,
		getHackingLevel,
		nuke,
		scan,
		hasRootAccess,
		isRunning,
		scp,
		exec,
		sleep,
	} = ns;
	let startingServer = 0;
	let allServers = scan(getHostname());
	while (true) {
		await sleep(5)
		let servers = allServers;
		let server;
		if (startingServer == allServers.length) startingServer = 0;
		for (server = startingServer; server < servers.length; server++) {
			await sleep(5)
			if (getHackingLevel() >= getServerRequiredHackingLevel(servers[server])) {
				if (hasRootAccess(servers[server]) == false && getServerNumPortsRequired(servers[server]) == 0) {
					nuke(servers[server]);
				}
				if (hasRootAccess(servers[server]) == true) {
					if (isRunning('loop-hack.script', servers[server]) == false) {
						await scp('loop-hack.script', servers[server]);
						exec('loop-hack.script', servers[server], 1);
					}
					if (isRunning('loop-grow.script', servers[server]) == false) {
						await scp('loop-grow.script', servers[server]);
						for (let t = 10; t > 0; t--) {
							exec('loop-grow.script', servers[server], t);
						}
					}
				}
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
	}
}
