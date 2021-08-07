const Discord = require("discord.js");
const db = require("quick.db");
const moment = require('moment')
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const zaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const vinnie = new Discord.MessageEmbed()
   
    
  .setColor("#9a00ff")
  .setTitle("Sunucular ve Kullanıcılar")
  .addField(":desktop: Toplam Sunucular", bot.guilds.cache.size.toLocaleString(), true)
  .addField(":busts_in_silhouette: Toplam Kullanıcılar",bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  
  return message.channel.send(vinnie);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 4
};

exports.help = {
  name: "bilgi1",
  description: "",
  usage: ""
};