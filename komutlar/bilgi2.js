const Discord = require("discord.js");
const db = require("quick.db");
const moment = require('moment')
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const zaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const vinnie = new Discord.MessageEmbed()
   
    
  .setColor("#9a00ff")
  .setTitle("Ram Kullanım ve Çalışma Süresi")
  .addField(':thermometer: Ram Kullanım Oranı', ` ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}  `, true)
  .addField(':construction_worker_tone1: Çalışma Süresi', zaman,true) 
  
  return message.channel.send(vinnie);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 4
};

exports.help = {
  name: "bilgi2",
  description: "",
  usage: ""
};