const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const vinniecode = new Discord.MessageEmbed()
  .addField(`:heart:  » B1ta#0001` ,`Bot komutlarının test aşamasında yardımcı oldu.`,true)
.addField(`:heart:  » Whatan#1337` ,`Bota mute ve mute rol komutlarını ekledi.`,true)

.setColor("#9a00ff")
  message.channel.send(vinniecode)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0,
  kategori: "Bot"
  
};

exports.help = {
  name: 'thanks',
  description: 'Botun yapımcısı hakkında bilgi verir.',
  usage: '!thanks'
}; 