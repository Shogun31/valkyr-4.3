const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor("#9a00ff")
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()//Vinnie tarafından kodlanmıştır.
    .setColor("#9a00ff")
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Gif Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const vinniecode = new Discord.MessageEmbed()
    .setAuthor(message.author.username + " sana tokenimi gerçekten vereceğimi mi sandın ?  ")
    .setColor('#9a00ff')//Vinnie tarafından kodlanmıştır.
    .setDescription('')
    .setImage(
      "https://media.giphy.com/media/3xz2BLBOt13X9AgjEA/source.gif")
      
    return message.channel.send(vinniecode);
      
    }//Vinnie tarafından kodlanmıştır.
};

exports.conf = {
  enabled: true,
  guildOnly: false,//Vinnie tarafından kodlanmıştır.
  aliases: [],
  permLevel: 0,
   kategori: "Eğlence" 
};

exports.help = {//Vinnie tarafından kodlanmıştır.
  name: 'token',
  description: 'Botun Tokenini Gösterir. ',
  usage: 'token'
};
