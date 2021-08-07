const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (args[0] === "aç") {
    db.set(`${message.guild.id}.motion`, true);
    message.channel.send(
      "Küfür engel sistemi başarılı şekilde \`Aktif\` edildi."
    );
    return;
  }          //Vinnie tarafından kodlanmıştır.
  if (args[0] === "kapat") {
    db.delete(`${message.guild.id}.motion`);     
    message.channel.send(
      "Küfür engel sistemi başarılı şekilde \`Devre Dışı\` edildi."
    );//Vinnie tarafından kodlanmıştır.
    return;
  }
  message.channel.send(           
    "Küfürengel \`Aç\` ya da \`kapat\` yazmalısınız."
  );
};
exports.conf = {
  enabled: true,//Vinnie tarafından kodlanmıştır.
  guildOnly: false,
  aliases: ["küfürengel", "küfür-engel", "küfür"],     //Vinnie tarafından kodlanmıştır.
  permLevel: 0
};

exports.help = {
  name: "küfür-engel",
  description: "Küfürü açar ya da kapatır.",
  usage: ""
};

