const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.MessageEmbed()
     .setAuthor("Valkyr",client.user.avatarURL())
     .setTitle('Valkyr Bot')
     .setURL('https://discord.gg/ANwNR9mpC9')
     .setColor('#9a00ff')
     .setDescription("\`Genel komutların bulunduğu bölüm;\`")  
     .addField('-havadurumu <şehir>', ' Hava durumu hakkında bilgi verir.')
     .addField('-profil <@kullanıcı>', 'Kullanıcı profili hakkında bilgi verir.')
     .addField('-avatar <@kullanıcı>',' Kullanıcının profil fotoğrafını gösterir.')
     .addField('-sunucubilgi','Sunucu hakkında bilgi verir.') 
     .addField('-sunucuresmi','Sunucunun profil fotoğrafını gösterir.')
     .addField('-covid <ülke>','Covid-19 vaka sayılarını gösterir. ') 
     .addField('-id',"Belirttiğiniz kişinin ID'sini gösterir") 
     .addField('-çekiliş <süre> <#kanal> <ödül>','Sunucuda çekiliş başlatırsınız.') 
     .addField('-davetlerim','Belirttiğiniz kişinin davet sayısını gösterir.') 
     .setFooter('© Valkyr Bot',client.user.avatarURL())
     .setTimestamp()
     message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['genelhelp','genel'],
  permLevel: 0
};

module.exports.help = {
  name: 'genel',
  description: '',
  usage: ''
};