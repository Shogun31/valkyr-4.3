const Discord = require('discord.js');

exports.run = (client, message, args) => {//Vinnie tarafından kodlanmıştır.
  if (message.author.id !== "852850835486146600") return message.reply(':no_entry: Sahibim sen değilsin!');
   message.channel.send('İstediğin sunucudan ayrıldım Vinnie!');
   message.guild.leave()
   message.delete();
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,//Vinnie tarafından kodlanmıştır.
  aliases: ['ayrıl'],
  permLevel: 4,
  kategori: "Sahip"
};//Vinnie tarafından kodlanmıştır.

exports.help = {
  name: 'ayrıl',
  description: 'Bot sunucudan ayrılır.',//Vinnie tarafından kodlanmıştır.
  usage: 'ayrıl'
};