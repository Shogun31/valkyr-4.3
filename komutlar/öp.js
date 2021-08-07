const Discord = require("discord.js");

exports.run = function(client, message) {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
  const etiketlenenkisi = message.mentions.users.first();

  if (!etiketlenenkisi)
    return message.channel.send(
      "🚫 Lütfen öpmek istediğiniz kişiyi etiketleyin."//Vinnie tarafından kodlanmıştır.
    );

  const vinniecode = new Discord.MessageEmbed()
  .setColor("9a00ff")//Vinnie tarafından kodlanmıştır.

    .setDescription(
      `:kiss: ${etiketlenenkisi},  `  +  
          `**${message.author.username}   seni öptü!**`
    )
    .setImage(
      "https://media.giphy.com/media/g8xRqXeh6lOHS/source.gif"    //Vinnie tarafından kodlanmıştır.
    );

  return message.channel.send(vinniecode);
  
};
//Vinnie tarafından kodlanmıştır.
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["öpücük"],
  permLevel: 0,
  kategori: "Eğlence"//Vinnie tarafından kodlanmıştır.
};

exports.help = {
  name: "öp",
  description: "Belirttiğiniz kişiyi öpersiniz. ",
  usage: "-yumruk"
};
//Vinnie tarafından kodlanmıştır.