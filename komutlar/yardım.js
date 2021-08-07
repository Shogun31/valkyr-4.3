const Discord = require('discord.js'); 
 
exports.run = async(client, message, args) => {
 
 const Embed = new Discord.MessageEmbed()
 .setTimestamp()
 .setAuthor("Valkyr", client.user.avatarURL())
.setColor("#9a00ff")
.setTitle("Valkyr Bot")
 .setURL("https://discordapp.com/oauth2/authorize?client_id=647386467844227074&scope=bot&permissions=8")
 .setDescription(`

**-yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \`-sohbetaç\`
Botu davet etmek için: \`-davet\`
`)

 .addField("-genel (10)", `
Herkesin kullanabileceği standart komutlar;
\`anket\` \`sunucubilgi\` \`sunucuresmi\` \`avatar\` \`profil\` \`havadurumu\` \`covid\` \`çekiliş\` \`id\` \`davetlerim\`
`)
 
 
  .addField("-bot (6)", `
Bot için kullanabileceğiniz bilgi komutları;
\`destek\` \`ping\` \`versiyon\` \`yapımcı\` \`davet\` \`thanks\` 
`)
 
 .addField("-moderasyon (11)", `
Yetkililer için moderasyon komutları;
\`sohbetkapat\` \`sohbetaç\` \`reklamengelle\` \`ban\` \`unban\` \`capslock\` \`kick\` \`slowmode\` \`warn\` \`sil\` \`capslock\`
`)
 
  .addField("-koruma (4)", `
Sunucunuz için koruma sistemleri;
\`rolkoruma\` \`kanalkoruma\` \`banlimit\` \`banlimitsıfırla\`
`)
 
 .addField("-eğlence (11)", `
herkesin kullanabileceği eğlence komutları;
\`kralol\` \`napim\` \`aşkölçer\` \`öp\` \`gay\` \`balıktut\` \`token\` \`espiri\` \`yumruk\` \`kaçcm\` \`yıkık\`
`)
 

 
 .setFooter("© Valkyr Bot", client.user.avatarURL())
 message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["y","help","h","help"],
  permLevel: 0
};

module.exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'y'
};
