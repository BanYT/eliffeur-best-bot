let Discord = require('discord.js');


exports.run = (client,message,args)=>{
    var rbug = args.slice(0).join(" ")
    if (message.author.id === "409351580551479308") {
	    } else {
    
  message.channel.send("``---------`` **Only Elifeur can do that !** ``---------``")
	    }
    if(!rbug) return message.reply("What You Want To Restock?")
        client.guilds.get("542415150347583488").channels.get("542415416040095767").send("Elifeur Restocked :"+ rbug)
    message.channel.send("bug send!")
}

module.exports.help = {
	name: "add",
	alias: "ADD"
}
