const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(new MessageEmbed().setDescription(`:x: Yetkin yeterli değil!`))
    let user = args[0];
    const banList = await message.guild.fetchBans();//Vinnie tarafından kodlanmıştır.
    if (!user || isNaN(user) || !banList.has(user)) {
        return message.channel.send(new MessageEmbed().setDescription(`:no_entry:: Kullanıcı ID hatalı veya kullanıcı yasaklı değil!`) .setColor('#ff0000'))
    }
    message.guild.members.unban(user);
    message.channel.send(new MessageEmbed().setDescription(`:white_check_mark: Kullanıcının başarılı bir şekilde yasağı kaldırıldı!`) .setColor('#ff0000'))
};

exports.conf = {//Vinnie tarafından kodlanmıştır.
    aliases: ["un-ban"],
  permLevel: 0,
  kategori: "Moderasyon"
};
//Vinnie tarafından kodlanmıştır.
exports.help = {
  name: 'unban',
    description: 'Belirttiğiniz kişinin sunucudan yasağını kaldırır.',
  //Vinnie tarafından kodlanmıştır.
    usage: '!unban'
}