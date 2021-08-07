const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
  
   
  
  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    message.channel.send(':no_entry: Kanalkoruma \`Aç\` ya da \`Kapat\` yazmalısın.')
    .setTimestamp()
    .setColor("#9a00ff")
    return message.channel.send(sa)
    
  }
  if (args[0] === 'aç') {
    
    db.set(`kanalk_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`:white_check_mark: Kanal Koruma Başarıyla Açıldı!`)
    .setTimestamp()
       .setColor('#9a00ff')
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`kanalk_${message.guild.id}`)
       const vinnie = new Discord.MessageEmbed()
    .setDescription(`:no_entry: Kanal Koruma Başarıyla Kapatıldı!`)
    .setTimestamp()
       .setColor('#9a00ff')
    return message.channel.send(vinnie)
  }
};

exports.conf = {
  aliases: [],
  permLevel: 0,
  kategori: "Moderasyon"
};
exports.help = {
  name: 'kanalkoruma',
  description: "Küfür korumasını açar ya da kapatır.",
  usage: ""
}; 
