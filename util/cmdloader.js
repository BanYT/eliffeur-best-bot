const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

module.exports = async (client) => {
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    client.elifCommands = new Discord.Collection();


const elifFiles = await readdir("./commands/");




elifFiles.forEach(f => {
    if (!f.endsWith(".js")) return;
		let elif = require(`../commands/${f}`);
    client.moderationCommands.set(elif.help.name, elif);
    client.commands.set(elif.help.name, elif);
	client.aliases.set(elif.help.alias, elif);
	});

console.log(`loaded ${client.commands.size} commands`);
console.log(`loaded ${client.aliases.size} aliases`);
}
