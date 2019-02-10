let Discord = require('discord.js');


exports.run = (client,message,args)=>{
    var rbug = args.slice(0).join(" ")
    if (message.author.id === "409351580551479308") {
	    } else {
    
  message.channel.send("``---------`` **Only Elifeur can do that !** ``---------``")
	    }
    if(!rbug) return message.reply("What You Want To Restock?")
        client.guilds.get("543895016976941078").channels.get("543902542141063179").send("Elifeur Restocked :"+ rbug)
    message.channel.send("bug send!")
}

module.exports.help = {
	name: "bug",
	alias: "BUG"
}
