const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message,args) => {
  
const embed = new Discord.MessageEmbed()
     .setAuthor("Valkyr",client.user.avatarURL())
     .setTitle('Valkyr Bot')
     .setURL('https://discord.gg/ANwNR9mpC9')
     .setColor('#9a00ff')
     .setDescription("\`Sunucu koruma sistemlerinin bulunduğu bölüm;\`")     //ula enayi stark setDesctipyion varken niye addfield ile ortalığı karıştırdın :D
     .addField('-kanalkoruma <aç/kapat>', 'Sunucunuzda kanal korumasını açar ya da kapatır.')
     .addField('-banlimit <sayı>', 'Ban limitini belirler. Bu limit aşılırsa bot o üyeyi sunucundan atar.')
     .addField('-banlimitsıfırla <sayı>','Ban limitini sıfırlar. Ban limitini tekrardan ayarlamak isterseniz bunu kullanabilirsiniz.')
     .addField('-rolkoruma <aç/kapat>','Sunucunuzda rol korumasını açar ya da kapatır.```') 

     .setFooter('© Valkyr Bot',client.user.avatarURL())
     .setTimestamp()
     message.channel.send(embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['güvenlikk','koruma'],
  permLevel: 0
};

module.exports.help = {
  name: 'güvenlik',
  description: '',
  usage: ''
};