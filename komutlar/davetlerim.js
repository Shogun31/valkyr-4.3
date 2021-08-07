const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

  let davetlerim = await db.fetch(`davet_${message.author.id}_${message.guild.id}`)
  var user = message.mentions.users.first() || message.author;

const embed = new discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setTitle(`Kullanıcının Davetleri`)
.setColor('#9a00ff')
.setDescription(`Davet Sayısı: **${davetlerim ? davetlerim : "0"}**`)
.setThumbnail(user.avatarURL())
message.channel.send(embed) 

}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'davetlerim'
}
