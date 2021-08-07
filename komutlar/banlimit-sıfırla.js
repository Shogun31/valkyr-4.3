const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async(client, message, args) => {

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanmak için yeterli izne sahip değilsin!`)
   
    let kisi = message.mentions.users.first()
    let member = message.guild.member(message.author.id)
    let banlog = db.fetch(`bankanal_${message.guild.id}`);

    if (!kisi) return message.reply(`:no_entry: Kullanıcıyı belirtmedin!`)
   
    db.set(`bansayi_${kisi.id}`, 0)

    message.channel.send(`:white_check_mark: ${kisi}, ${member} tarafından ban limitin sıfırlandı!`)        

    client.channels.cache.get(banlog).send(`:white_check_mark: ${kisi}'nin ban limiti ${member} tarafından sıfırlandı!`)  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlimit-sıfırla"],
  permLevel: 0,
  kategori : "Moderasyon"
};

exports.help = {
  name: 'banlimitsıfırla',
  description: 'Ban limitini sıfırlar.',
  usage: 'banlimitsıfırla'
};