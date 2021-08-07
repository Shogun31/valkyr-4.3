const Discord = require('discord.js');

exports.run = async (client, message, args) => {//Vinnie tarafından kodlanmıştır.

let username = `${message.author.id}`;
if(message.mentions.members.first()) username = message.mentions.members.first().user.username+' is';
if(message.mentions.users.first()) username = message.mentions.users.first().username+' is';//Vinnie tarafından kodlanmıştır.

let random = Math.floor(Math.random(100) * 100);
return message.channel.send(new Discord.MessageEmbed().setColor('#9a00ff').setTitle('Gay Ölçer').setDescription(`<@${username}> Kullanıcısı %${random} gay 🏳️‍🌈`));

};
exports.conf = {//Vinnie tarafından kodlanmıştır.
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,//Vinnie tarafından kodlanmıştır.
  kategori: "Eğlence"
};
//Vinnie tarafından kodlanmıştır.
exports.help = {
  name: 'gay',
  description: 'Gaylık seviyeni ölçer.',
  usage: ''
};