const Discord = require("discord.js");
const { promisify } = require("util");
const readdir = promisify(require("fs").readdir);

module.exports = async (client) => {
    client.commands = new Discord.Collection();
    client.aliases = new Discord.Collection();
    client.funCommands = new Discord.Collection();


const funFiles = await readdir("./commands/Fun/");


funFiles.forEach(f => {
        if (!f.endsWith(".js")) return;
        let fun = require(`../commands/Fun/${f}`);
        client.funCommands.set(fun.help.name, fun);
        client.commands.set(fun.help.name, fun);
        client.aliases.set(fun.help.alias, fun);
        });
console.log(`loaded ${client.commands.size} commands`);
console.log(`loaded ${client.aliases.size} aliases`);
}
