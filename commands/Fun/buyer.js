

let Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

message.delete();
    let role = message.guild.roles.find(role => role.name === 'Buyers');
    if (message.channel.name !== 'self-roles') return message.reply('You must go to the channel #self-roles');
    message.member.addRole(role);
    if (message.member.roles.has(role.id)) {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('**You Already Got This Role Before !**')
        return message.channel.send((verifyEmbed));
    } else {
        let verifyEmbed = new Discord.RichEmbed()
            .setAuthor(message.member.displayName, message.author.displayAvatarURL)
            .setColor('#36393f')
            .setDescription('**You Got successfully Got A New Self Role** __This Role Is__ `Buyers`')
        return message.channel.send((verifyEmbed));
    }
}
module.exports.help = {
    name: 'buyer',
    description: 'you must have the Verified role'
}
