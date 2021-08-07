const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  message.channel.send(new Discord.MessageEmbed().setColor("9a00ff").setDescription(`**${message.guild.members.cache.random().user.tag}** sunucudaki yıkık sensin.`).setImage('https://media.giphy.com/media/Sid4QgwDxJ8l2/source.gif'));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = { 
  name: 'yıkık', 
  description: '',
  usage: 'yıkık',
};