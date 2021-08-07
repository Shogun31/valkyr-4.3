const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.MessageEmbed()
     .setAuthor("Valkyr",client.user.avatarURL())
     .setTitle('Valkyr Bot')
     .setURL('https://discord.gg/ANwNR9mpC9')
     .setColor('#9a00ff')
     .setDescription("\`Sunucu yönetim komutlarının bulunduğu bölüm;\`")     //ula enayi stark setDesctipyion varken niye addfield ile ortalığı karıştırdın :D
     .addField('-capslock <aç/kapat>','Aşırı büyük harfli yazı kullanımını açar ya da kapatır.')
     .addField('-slowmod <süre>','Bulunduğunuz kanalda belirttiğiniz miktarda yavaş mod açar.') 
.addField('-reklamengelle <aç/kapat>','Sunucunuzda reklam engellemeyi açar ya da kapatır.')
.addField('-sohbet-aç','Bulunduğunuz kanalın sohbetini açarsınız.') 
.addField('-sohbet-kapat','Bulunduğunuz kanalın sohbetini kapatırsınız.') 
.addField('-unban <kullanıcı id>','Etiketlediğiniz kullanıcının yasağını kaldırırsınız.') 
.addField('-kick','Etiketlediğiniz kullanıcıyı atarsınız.') 
.addField('-ban <kullanıcı>','Etiketlediğiniz kullanıcıyı yasaklarsınız.') 
.addField('-sil <sayı>','Belirttiğiniz  miktarda mesajı silersiniz.') 
.addField('-warn <kullanıcı>','Etiketlediğiniz kullanıcıyı uyarır.') 

     .setFooter('© Valkyr Bot',client.user.avatarURL())
     .setTimestamp()
     message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mod'],
  permLevel: 0
};

module.exports.help = {
  name: 'moderasyon',
  description: '',
  usage: ''
};