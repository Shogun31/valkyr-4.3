const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
    message.delete();
  
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`:fire: Yeterli yetki, bulunmamakta!`))
  
  let vinniecode = await db.fetch(`capslock_${message.guild.id}`)
  if (vinniecode) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(new Discord.MessageEmbed()
.setColor('#9a00ff')
.setDescription(`:white_check_mark: \n\n CapsLock engeli başarıyla kapatıldı!`))
  }//Vinnie tarafından kodlanmıştır.
 
  if (!vinniecode) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(new Discord.MessageEmbed()
                         
.setColor('#9a00ff')
.setDescription(`:white_check_mark: \n\n CapsLock engeli başarıyla açıldı!`))
  }//Vinnie tarafından kodlanmıştır.
};

exports.conf = {//Vinnie tarafından kodlanmıştır.
  enabled: true,
  guildOnly: false,
  aliases: ['capslock','cs-engel'],
  permLevel: 3,
  kategori : "Moderasyon"
};//Vinnie tarafından kodlanmıştır.

exports.help = {
  name: 'capslock',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslock-engelleme'
};//Vinnie tarafından kodlanmıştır.