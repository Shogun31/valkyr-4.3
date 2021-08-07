const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.MessageEmbed()
     .setAuthor("Valkyr",client.user.avatarURL())
     .setTitle('Valkyr Bot')
     .setURL('https://discord.gg/ANwNR9mpC9')
     .setColor('#9a00ff')
     .setDescription("\`Bot hakkında bilgilerin bulunduğu bölüm;\`")     //ula enayi stark setDesctipyion varken niye addfield ile ortalığı karıştırdın :D
     .addField('-yapımcı', 'Botun yapımcısı hakkın bilgi verir.')
     .addField('-destek', 'Botun destek sunucusunu gösterir.')
     .addField('-thanks', 'Botun yapım aşamasında emeği geçenleri gösterir.')
     .addField('-versiyon','Botun versiyonu hakkında bilgi verir.')
     .addField('-ping','Botun pingini gösterir.') 

     .setFooter('© Valkyr Bot',client.user.avatarURL())
     .setTimestamp()
     message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bothelp','bot'],
  permLevel: 0
};

module.exports.help = {
  name: 'bot',
  description: '',
  usage: ''
};