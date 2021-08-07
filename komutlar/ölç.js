const Discord = require('discord.js');
const client = new Discord.Client();
//Vinnie tarafından kodlanmıştır.
exports.run = (client, message) => {
   message.channel.send('Hemen ölçüyorum 1 saniye..').then(message => {
   var espriler = [' Seninki  **18CM** ' ,'Seninki  **11CM**' ,'Seninki **6KM** ' ,'Seninki **35CM** ' ,'Seninki  **8CM**  ** ' ,'Seninki  **1MM** ' ,'Seninki **5CM**' ,'Seninki **31CM** sj. ' ,'Seninki  **14CM**' ,'Seninki  **1CM**'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });//Vinnie tarafından kodlanmıştır.
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kaçcm', 'cmkaç', 'kaç-cm', 'cm-kaç'],//Vinnie tarafından kodlanmıştır.
  permLevel: 0,
  kategori: "Eğlence"
};
//Vinnie tarafından kodlanmıştır.
exports.help = {
  name: 'kaçcm',
  description: 'Kaç CM olduğunu ölçer.',
  usage: 'kaçcm'
};//Vinnie tarafından kodlanmıştır.