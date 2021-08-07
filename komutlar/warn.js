const Discord = require('discord.js')
const data = require('quick.db')
////////////////////////////////////

exports.run = async (client, message, args) => { 
let uyarilog = data.fetch(`uyarilog_${message.guild.id}`)
if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply(":no_entry: Bu komutu kullanabilmek için `Üyeleri At` yetkisine ihtiyacın var.")
if(!args[0]) return message.channel.send("🚫 Kimi uyaracağımı belirtmelisin.")


let kullanıcı = message.mentions.users.first()
if(!args[0]) return message.reply("Lütfen bir üye etiketle")
if(!kullanıcı) return message.reply(`Kullanıcı Sunucuda Bulunamadı (` + args[0] + `)`)
if(kullanıcı.bot) return message.reply(`:no_entry: Botları uyaramazsın! `) 
if(kullanıcı.id === message.author.id) return message.reply(`Kendini uyaramazsın,başka bir kullanıcı etiketle`)
 if(kullanıcı.permissions <= client.permissions) return message.reply(":no_entry: Yetkili üyeleri uyaramam");
data.add(`uyarı.${message.guild.id}.${kullanıcı.id}`, +1)
const syı = await data.fetch(`uyarı.${message.guild.id}.${kullanıcı.id}`)

let reason = args.slice(1).join(' ')

if(!reason) {
await message.channel.send(new Discord.MessageEmbed()//Vinnie tarafından kodlanmıştır.
                          .setColor("#9a00ff")
                          .setAuthor(kullanıcı.tag + " Uyarıldı")
                          .setDescription("**Sebep:** Belirtilmedi"))
if(uyarilog) {//Vinnie tarafından kodlanmıştır.
  message.guild.channels.cache.get(uyarilog.id).send(new Discord.MessageEmbed()
                          .setColor("#9a00ff")
                          .setTitle("Uyarı Sistemi")
                          .setDescription(`**${kullanıcı}** kullanıcısı **${message.author.tag}** tarafından **sebepsizce** uyarıldı!`)
                          .setTimestamp())
}
return
}

if(reason) {
await message.channel.send(new Discord.MessageEmbed()//Vinnie tarafından kodlanmıştır.
                          .setColor("#9a00ff")
                          .setAuthor(kullanıcı.tag + " Uyarıldı")
                          .setDescription("**Sebep:** "+ reason))
if(uyarilog) {
  message.guild.channels.cache.get(uyarilog.id).send(new Discord.MessageEmbed()
                          .setColor("#9a00ff")
                          .setTitle("Uyarı Sistemi")
                          .setDescription(`**${kullanıcı}** kullanıcısı **${message.author.tag}** tarafından **${reason}** sebebiyle uyarıldı!`)
                          .setTimestamp())
}
  return
} 

}//Vinnie tarafından kodlanmıştır.





//Vinnie tarafından kodlanmıştır.

exports.conf = {
    enabled: true,//Vinnie tarafından kodlanmıştır.
    guildOnly: false,
    aliases: ["warn"],
    permLevel: 2,
  kategori: "Moderasyon"
};

exports.help = {//Vinnie tarafından kodlanmıştır.
  name: 'warn',
  description: 'Belirtilen kullanıcıyı uyarır.',
  usage: '!warn <@kullanıcı>'
};