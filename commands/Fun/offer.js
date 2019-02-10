let Discord = require('discord.js');


exports.run = (client,message,args)=>{
    var rbug = args.slice(0).join(" ")
    if(!rbug) return message.reply("What's the bug?")
        client.guilds.get("543895016976941078").channels.get("544101126035996701").send("Elifeur Got An Offer And It Is                                                                                                                                                                                    "+ rbug + "                                                                                                                                                                                                           This Offer Sent By <@" + message.author.id + ">")
    message.channel.send("Your Offer Is Sent !")
}

module.exports.help = {
	name: "offer",
	alias: "OFFER"
}
