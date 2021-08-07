const Discord = require('discord.js');
//Vinnie tarafından kodlanmıştır.
exports.run = (client, message, args) => {
  const talkedRecently = new Set();
  
  let mesaj = args.slice(0).join(' ');
  if (message.author.id != "852850835486146600") return message.reply(':no_entry: Bu komutu sadece sahibim kullanabilir.');
if (mesaj.length < 1) return message.reply(':no_entry: Yazmam için herhangi bir şey yazmalısın.');//Vinnie tarafından kodlanmıştır.
  message.delete();
  message.channel.send(mesaj);
  
   if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`5` Saniye de Bir Kullanabilirsin - " + message.author);
    } else {

           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 15000);// Şuan 5 Saniyedir Değiştirebilirsiniz.
    }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yaz'],//Vinnie tarafından kodlanmıştır.
  permLevel: 0,
  kategori: "Sahip"
};

exports.help = {
  name: 'yaz',//Vinnie tarafından kodlanmıştır.
  description: 'Bota yazı yazdırır.',
  usage: 'yaz <yazılacak cümle>'
};//Vinnie tarafından kodlanmıştır.