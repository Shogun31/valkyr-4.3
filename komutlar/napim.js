const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const vinnie = new Discord.MessageEmbed()

.setColor("#9a00ff")
.setImage("https://cdn.discordapp.com/attachments/802911190459744267/803529901445480508/Ej5ZGPkXkAEC56f.png")
.setTitle("napim dedin lafı koydun.");

  message.channel.send(vinnie);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["napim"],
  permLevel: `Yok`,
  kategori : "Eğlence"
};

exports.help = {
  name: "napim",
  description: "Napim de lafı koy.",
  usage: "napim"
};