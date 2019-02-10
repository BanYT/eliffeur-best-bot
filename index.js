Discord = require("discord.js");
const botconfig = require("./botconfig.json");
const fs = require("fs");
const settings = require("./your_settings.json")
const client = new Discord.Client();
require('./util/cmdloader.js')(client);//requires the command loader
let token = process.env.token;
let prefix = "-";

client.on('ready', async => {
console.log("Elifeur bot is ready!" + "\n" + client.user.tag + "\n" + "Server Count: "  + client.guilds.size + "\n" + "Cached users: " + client.users.size + "\n" + "Enjoy!")
});
client.on('ready', () => {
        client.user.setActivity(`On ${client.guilds.size} Servers With ${client.users.size} Members`, { type: "PLAYING" });
        setTimeout(game2, 20000)
    });
    
    function game1() {
        client.user.setActivity(`${client.guilds.array().length} Servers || With ${client.users.size} Members`, { type: "Watching" });
        setTimeout(game2, 20000)
    }
    
    function game2() {
        client.user.setActivity(`To -help || To Get Full List Of My Commands`, { type: "LISTENING" });
        setTimeout(game3, 20000)
    }
    
    function game3() {
       client.user.setActivity(`To ${client.commands.size} Commands`, { type: "LISTENING" });
        setTimeout(game1, 20000);//these times are in ms, so 30,000 = 30 seconds
    } 

client.on('message', message => {
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    if(command === settings.prefix + settings.rainbowcommand) {
        const rolez = message.mentions.roles.first() || message.guild.roles.find(r=> r.name === args [0])
        if(!rolez) return message.channel.send(settings.messageresponse.rolenotfound).catch(err=> message.channel.send("No response"))
        if(!message.guild.member(client.user.id).hasPermission("MANAGE_ROLES")) return message.channel.send(settings.messageresponse.missingperm).catch(err=> message.channel.send("no response"))
        var colors = settings.rainbowrole
        var rolestart = setInterval(function() {
            var colorsz = colors[Math.floor(Math.random() * colors.length)];
            rolez.setColor(colorsz)
        }, settings.rainbowdelay); 
            message.channel.send(settings.messageresponse.success).catch(err=> message.channel.send("No response"))

    }
    if(command === settings.prefix + settings.rainbowstop) {
            setTimeout(function () {
           process.exit()
            }, 1000);
           
                       message.channel.send(settings.messageresponse.rainbowstop).catch(err=> message.channel.send("No response"))
                       }

});
client.on('message', message => {

	
 if (message.author.bot) return;
 if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);


	
//command handler
let commandfile = client.commands.get(command);
  let alias = client.aliases.get(command);

  if(commandfile){
	  commandfile.run(client,message,args);
  }
  if(alias){
	  alias.run(client,message,args);
  }
//end of handler


});
client.login(process.env.token);
