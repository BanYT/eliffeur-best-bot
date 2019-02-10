let Discord = require('discord.js');


exports.run = (client,message,args)=>{
    var rbug = args.slice(0).join(" ")
    if(!rbug) return message.reply("What's the bug?")
        client.guilds.get("531100000151797761").channels.get("531152385653866527").send("a bug!\n Bug:"+ rbug + "\n bug reported by  <@" + message.author.id + ">")
    message.channel.send("bug send!")
}

module.exports.help = {
	name: "bug",
	alias: "BUG"
}
