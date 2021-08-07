const Discord = require("discord.js");

exports.run = function(client, message) {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  //Vinnie tarafından kodlanmıştır.
  const etiketlenenkisi = message.mentions.users.first();

  if (!etiketlenenkisi)
    return message.channel.send(
      ":no_etry: Lütfen yumruk atmak istediğiniz kişiyi etiketleyin."
    );

  const vinniecode = new Discord.MessageEmbed()//Vinnie tarafından kodlanmıştır.
  .setColor("9a00ff")

    .setDescription(
      `:punch_tone1: ${etiketlenenkisi},  `  +  
          `**${message.author.username}   Sana Yumruk Attı!**`
    )
    .setImage(//Vinnie tarafından kodlanmıştır.
      "https://media.giphy.com/media/VM5TVKbYSExcQ/source.gif"
    );
//Vinnie tarafından kodlanmıştır.
  return message.channel.send(vinniecode);
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yumrukat"],//Vinnie tarafından kodlanmıştır.
  permLevel: 0,
  kategori: "Eğlence"
};

exports.help = {
  name: "yumruk",
  description: "Belirttiğiniz kişiye yumruk atarsınız. ",
  usage: "-yumruk"//Vinnie tarafından kodlanmıştır.
};
