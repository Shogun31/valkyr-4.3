const Discord = require('discord.js');
//Vinnie tarafından kodlanmıştır.
const client = new Discord.Client();

 exports.run = (client, message) => {//Vinnie tarafından kodlanmıştır.

             message.channel.send('Balık tuttun balığı çekiyorsun.').then(message => {

   var vinniecode = ['``Sazan tuttun!`` :fish:' ,'``Köpek balığı tuttun!`` :shark:' ,'``Uskumru tuttun!`` :fish:' ,'``Mezgit tuttun! Havyarı da var .d`` :) :fish:' ,'``Japon balığı tuttun, yemeyi düşünmüyorsun herhalde?``' ,'``Hamsi tuttun!`` :fish:' ,'``Levrek tuttun!`` :fish:' ,'``Hiçbir şey tutamadın maalesef!``' ,'``Alabalık tuttun!`` :fish:' ,'``Maalesef balık oltadan kaçtı!``' ,'``Yarramı tuttun.`` :eggplant:','``İstavrit tuttun!`` :fish:'];
      var vinnie = vinniecode[Math.floor(Math.random() * vinniecode.length)];
            message.edit(`${vinnie}`);
 });
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balık', 'balıktut', 'balık-tut'],
  permLevel: 0,
  kategori : "Eğlence"
};//Vinnie tarafından kodlanmıştır.

exports.help = {
  name: 'balıktut',
  description: 'Balık tutarsın.',
  usage: 'balıktut'//Vinnie tarafından kodlanmıştır.
};