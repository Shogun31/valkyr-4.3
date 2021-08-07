const Discord = require('discord.js');

let botid = ('650739604789395476') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#9a00ff")

     .addField(`Botu Sunucunuza Davet Edin !`, `[Tıkla](https://discord.com/oauth2/authorize?client_id=853328762828750899&scope=bot&permissions=8)`)
    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori : "bot"
};

exports.help = {
  name: 'davet',
  description: 'Botu sunucunuza davet eder.',
  usage: 'davetet'
};
   


