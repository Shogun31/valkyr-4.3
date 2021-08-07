const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.MessageEmbed()
     .setAuthor("Valkyr",client.user.avatarURL())
     .setTitle('Valkyr Bot')
     .setURL('https://discord.gg/ANwNR9mpC9')
     .setColor('#9a00ff')
     .setDescription("\`Developer komutlarının bulunduğu bölüm;\`")     //ula enayi stark setDesctipyion varken niye addfield ile ortalığı karıştırdın :D
     .addField('-yaz', ' Bot belirttiğiniz mesajı yazar')
     .addField('-pm', 'Belirttiğiniz kişiye özel mesaj atar.')
     .addField('-bilgi1', 'Hizmet verilen sunucu ve kullanıcı sayısını gösterir.')
     .addField('-bilgi2','Ram kullanım ve çalışma süresi hakkında bilgi verir.')
     .addField('-ayrıl','Bot sunucudan ayrılır.') 

     .setFooter('© Valkyr Bot',client.user.avatarURL())
     .setTimestamp()
     message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 4
};

module.exports.help = {
  name: 'dev',
  description: '',
  usage: ''
};