const db = require('quick.db')
const Discord = require('discord.js')
 let ayarlar = ['aç','kapat']
exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('Hey bu ayarı kullanabilmek için `aç` ya da `kapat` yazmalısın.')
  if(!ayarlar.includes(args[0])) return message.channel.send(`Geçerli parametreleri kullanmalısın.\nParametreler: ${ayarlar.join(' - ')}`)
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
 
  if (args[0] == 'aç') {
    if(db.has(`reklam_${message.guild.id}`)) return message.channel.send(`Sistem zaten açık.`)
    db.set(`reklam_${message.guild.id}`, 'acik')
      message.channel.send(':white_check_mark: Reklam engel sistemi başarıyla açıldı!')
  }
  if (args[0] == 'kapat') {
        if(!db.has(`reklam_${message.guild.id}`)) return message.channel.send(`:no_entry: Reklam engel sistemi zaten kapalı.`)
    db.delete(`reklam_${message.guild.id}`)
      message.channel.send(':white_check_mark: Reklam engel sistemi başarıyla kapatıldı!')
  }
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklamengel','reklam'],
  permLevel: 0,
  kategori : "Moderasyon"
};
 
exports.help = {
  name: 'reklam-engelle',
  description: 'Sunucuda reklamı açar ya da kapatır.',
  usage: 'reklam-engelle'
};