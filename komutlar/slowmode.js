const Discord = require('discord.js');
const request = require('request')

exports.run = async(client, message, args) => {
if (message.channel.type !== "text") return;//Vinnie tarafından kodlanmıştır.
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`:no_entry: Doğru kullanım: \`!slowmode [0/120]\``)//Vinnie tarafından kodlanmıştır.
                .setColor("#9a00ff")
                
            message.channel.send({embed})
            return
          }
if (limit > 120) {
    return message.channel.send(new Discord.MessageEmbed().setDescription(":no_entry: Süre limiti maksimum **120** saniye olabilir.").setColor("#19b9c9"));
}
   message.channel.send(new Discord.MessageEmbed().setDescription(`:white_check_mark: Yazma süre limiti **${limit}** saniye olarak ayarlandı!`).setColor("#19b9c9"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit//Vinnie tarafından kodlanmıştır.
    },
    headers: {
        "Authorization": `Bot ${client.token}`
      
    },
})};
  exports.conf = {//Vinnie tarafından kodlanmıştır.
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3,
    kategori : "Moderasyon"
};

exports.help = {
  name: 'slowmode',
  description: 'Sohbete yazı yazma sınırı ekler.',
  usage: 'yavaş-mod [1/120]',
};
//Vinnie tarafından kodlanmıştır.
