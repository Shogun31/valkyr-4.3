const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
 
exports.run = (client, message, params) => {
   if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  
  const vinniecode = new Discord.MessageEmbed()
  .setColor("#9a00ff")
  .setTitle(`${message.guild.name} Adlı Sunucunun Resmi`)
  .setImage(message.guild.iconURL())
  message.channel.send(vinniecode)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucuresmi"],
	kategori: "Sunucu" //Yardım komutunda hangi kategoride gözükeceğini ayarlarsınız
}


exports.help = {
  name: 'sunucuresmi',
  description: 'Sunucunun resmini gösterir.',
  usage: '-sunucuresmi',
};