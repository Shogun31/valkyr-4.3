const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const vinniecode = new Discord.MessageEmbed()
  .addField(`:wrench:  » Yapımcım` ,`Vinnie#0002`,true)
.setColor("#9a00ff")
  message.channel.send(vinniecode)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcı'],
  permLevel: 0,
  kategori: "Bot"
  
};

exports.help = {
  name: 'yapımcı',
  description: 'Botun yapımcısı hakkında bilgi verir.',
  usage: '!yapımcı'
}; 