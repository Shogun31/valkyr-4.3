const { MessageEmbed } = require('discord.js')
const ms = require('ms');

exports.run = async (client, message, args) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için \`Yönetici\` yetkisine sahip olmalısınız.`);

if(!args[0]) return message.channel.send(`:no_entry: Hatalı kullanım! Örnek kullanım: \`-çekiliş\` \`süre\` \`kanal\` \`ödül\``)
        if(!args[0].endsWith("d")&&!args[0].endsWith("h")&&!args[0].endsWith("m")) return message.channel.send(`:no_entry: Yanlış zaman girdiniz! Zamanı \`D: Gün, H: Saat, M: Dakika\` olarak belirtiniz. `)
        if(isNaN(args[0][0])) return message.channel.send(`:no_entry: Bir sayı değeri girmelisiniz! Örnek : \`1d\`,\`3m\`,\`4h\` `)
        let channel = message.mentions.channels.first()
        if(!channel) return message.channel.send(`:no_entry: Bir kanal belirtmelisiniz!`)
        let prize = args.slice(2).join(" ")
        if(!prize) return message.channel.send(`:no_entry: Bir ödül belirtmelisiniz!`)
        let Embed = new MessageEmbed()
        .setTitle(`Çekiliş!`)
        .setDescription(`Çekilişi ${message.author} adlı kullanıcı yapıyor.\nÖdülü ise **${prize}** olarak belirledi!`)
        .setFooter(`Bitiş`)
        .setTimestamp(Date.now()+ms(args[0]))
        .setColor("9a00ff")
        let m = await channel.send(Embed)
        m.react("🎉")
        setTimeout(() => {
            if(m.reactions.cache.get("🎉").count<=1){
                message.channel.send(`Çekilişe katılan kişi sayısı: ${m.reactions.cache.get("🎉").count}`)
                return message.channel.send(`:no_entry: Çekilişe yeterli kişi katılmadı!`)
            }
            
            let winner = m.reactions.cache.get("🎉").users.cache.filter(u=>!u.bot).random()
            channel.send(`**${prize}** çekilişinin kazananı: ${winner}`)
        }, ms(args[0]));
    
        
    }
exports.conf = {
	enabled:false,
	guildOnly: false,
	aliases: [],
	permLevel: 0,
}

exports.help = {
	name: 'çekiliş',
	description: '',
	usage: ''
}