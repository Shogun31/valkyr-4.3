const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanmak için yeterli izne sahip değilsin.`)

   if(!args[0]) return message.reply(":no_entry: Limiti girmedin!")
   if(isNaN(args[0])) return message.reply(`:no_entry: Limit sadece bir sayı olabilir.`);

   db.set(`banlimit_${message.guild.id}`, args[0])

  message.channel.send(`:white_check_mark: Ban limiti \`${args[0]}\` sayısına ayarlandı!`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ban-limit'],
  permLevel: 0,
  kategori : "Moderasyon"
};

exports.help = {
  name: 'banlimit',
  description: 'Ban limitini belirler.',
  usage: 'banlimit'

};