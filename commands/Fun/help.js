let Discord = require('discord.js');
exports.run = (client, message) => {
let cmd = message.content.split(' ').slice(1,2).join(' ');
let id = message.content.split(' ').slice(1,2).join(' ');
let dMsg = message.content.split(' ').slice(2).join(' ');
if(!cmd||cmd==='1'){
	var embed = new Discord.RichEmbed()
  var embed = new Discord.RichEmbed()
  .addField("**Greeting**","``Hi and Hello my friend im Planet a funny bot and moderation bot  Here is My commands You Can Also Join The Supoort Server Have A Good Time From xBot`` ", true)
  .setTitle("**Planet Bot Commands**")
  .setDescription("**[** `Those Are My Commands Read Them Carefully !` **You Can Also Get Me By Typing .invite** **]**")
  .setColor("RANDOM")
  message.author.send(embed)
  var embed = new Discord.RichEmbed()
  .addField("**Moderation Commands : **","`--------------------------------------------------------------------------`")
  .addField("**Kick/ban**", "`Are Commands To Kick/Ban A User From A Guild`")
  .addField("**Warn/Send/Dm**", "`Are Commands To Send A Direct Message To User With A Warn Message.`")
  .addField("**Others**", "`Clear/Up Are Commands To Delete An Amount Of Messages & Check The Uptime Of The Bot`")
  .addField("**Role Menager**", "`--------------------------------------------------------------------------`")
  .addField("**addrole/removerole/roleinfo**", "`Are Commands To Add A Role To A User / To Remove A Role From A User / To Check The Role Informations`")
  .setColor("RANDOM")
  message.author.send(embed)
  var embed = new Discord.RichEmbed()
  .addField("**Funniest Commands **","`--------------------------------------------------------------------------`")
  .addField("**avatar , slap , clap , cook , heat , gay** " , "`Commands Used With Your Friends` **Example :** `.slap @Lea` **||** `.cook @Lea` **||** `.heat @Lea` **||** `.avatar @Lea` **||** `.clap @Lea` **||** `.gay @Lea`")
  .setColor("RANDOM")
  message.author.send(embed)
  var embed = new Discord.RichEmbed()
  .addField("**Others**", "`--------------------------------------------------------------------------`")
  .addField("**8ball , meme , goodmorning , goodnight , count , ping , gamble , slots **", "`8Ball Question / Read A Meme / Funniest Command / Check The Ping Of The Bot / Check Your Lucky Number / Check Your Luck `")
  .addField("**Information Commands**", "`--------------------------------------------------------------------------`")
  .addField("**botinfo , userinfo , whois , serverinfo , sv , roleinfo **", "`Check My Information`:smile: `/ Check A Member Information / Check The Server Informations / Check The Role Info`")
  .addField("**Updates**", "`Check What's New On Me ! And What My Owner Added On Me By Typing .updates` :smile:")
  .addField("**Support**","``You Can Visit Our Support Community https://discord.gg/93WKw7M`` ", true)
  .addField("**.help 2**"," **Interesting !?**")
  .addField("**[** `If You Need Help With Any Command Just Type help + the command you want <<Ex : help ban >>` **]**")
  .addField("**You Liked ?? Did You Love My Commands ?? Wow !!! Can You Vote For Me ? Thanks** **__Link__** ")
  .setColor("RANDOM")
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.author.send(embed)
  message.react('📥');
  message.react('🔖');
message.reply("**Sent You A Full Dm Of My Commands** :bookmark: `!` **Check Your Dms!** :inbox_tray:")
}
if(cmd === '2'){
  message.reply('')
  var embed = new Discord.RichEmbed()
  .setTitle('**Planet Commands List 2**')
  .addField("**Moderation**","`Moderation :` **[** `.send / .dm === are Commands To Send A Message To The Member You Mentioned To Notify Him For A Dangerous Things Like He spammed in server etc...` **]** **[** `If You Saw Any Abuse With Using This Command From Mods Report To Ban#9153 ` **]**")
  .addField("**There Are Shortcut Commands **"," **[** `Example>>`` **.p === ping command \ whois/info/i === To See A The User Info \ count === to see how many servers I'm in them ! \ serverinfo/.i sv === to See The Server Info** ")
  .addField("**.help 3**","**Interesting !?**")
  .setColor("RANDOM")
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === '3'){
  message.reply('')
  var embed = new Discord.RichEmbed()
  .setTitle('**xBot Commands List 3**')
  .addField("**Moderation**","``Moderation : .help ban/ .help kick/ === are commands to see how to use Kick / ban commands``")
  .addField('**other Help**','``/.help ping / .help cook /  .help heat / .help slap / .help clap / .help warn / .help clear / `')
  .setColor("RANDOM")
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === ('ban'||'BAN')){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Ban Command**")
  .setDescription("**Hi You Need Help With Ban Command ?**")
  .addField("***BAN***","**Help With Ban Command : ban + @user** ``OR`` **b + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'kick'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Kick Command**")
  .setDescription("``Hi You Need Help With Kick Command ?``")
  .addField("**kick**","**Help With Kick Command : kick + @user*** ``OR`` **k + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'slap'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Slap Command**")
  .setDescription("``Hi You Need Help With Kick Command ?``")
  .addField("**Slap**","**Help With Slap Command : Slap + @user*** ``OR`` **s + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'clap'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With Clap Command**")
  .setDescription("``Hi You Need Help With clap Command ?``")
  .addField("**clap**","**Help With clap Command : clap + @user*** ``OR`` **c + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'heat'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With heat Command**")
  .setDescription("``Hi You Need Help With heat Command ?``")
  .addField("**heat**","**Help With Heat Command : heat + @user*** ``OR`` **h + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'cook'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With cook Command**")
  .setDescription("``Hi You Need Help With cook Command ?``")
  .addField("**cook**","**Help With cook Command : cook + @user*** ``OR`` **C + @user** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'ping'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With ping Command**")
  .setDescription("``Hi You Need Help With ping Command ?``")
  .addField("**ping**","**Help With ping Command : ping*** ``OR`` **p** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'addrole'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With addrole Command**")
  .setDescription("``Hi You Need Help With addrole Command ?``")
  .addField("**ping**","**Help With addrole Command : .addrole @user Administrator** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
if(cmd === 'removerole'){
  var embed = new Discord.RichEmbed()
  .setTitle("**The Bot Help With RemoveRole Command**")
  .setDescription("``Hi You Need Help With RemoveRole Command ?``")
  .addField("**ping**","**Help With removeRole Command : .removerole @user Administrator** ", true)
  .setColor('RANDOM')
  .setFooter("Need Support ? Join Our Support Community And Get Help There https://discord.gg/5bgnzME")
  message.channel.sendEmbed(embed);
  message.react('👍');
}
}
module.exports.help = {
	name: "help",
	aliases: ["h", 
		  "HELP", 
		  "Help"
		 ]		
}
