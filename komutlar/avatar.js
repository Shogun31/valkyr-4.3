const Discord = require('discord.js');

exports.run = async (client, message, args)=> {

let vinniecode = message.mentions.users.first();
let userid;
if(isNaN(args[0])){
  if(!vinniecode){
    userid = message.author.id;
  }else{
    userid = vinniecode.id;
  }
}else{
  userid = args[0];
}
try{//Vinnie tarafından kodlanmıştır.
let user = await client.users.fetch(userid);
let avatar = user.displayAvatarURL({dynamic: true, size: 1024})
if(avatar.endsWith(".gif?size=1024")) {//Vinnie tarafından kodlanmıştır.

let vinniecode = new Discord.MessageEmbed()
.setAuthor(user.tag + '', user.displayAvatarURL())
.setDescription(`**[[GIF]](${user.displayAvatarURL({ format: 'gif', size: 1024 })}) İndirmek için tıkla!**`)
.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor("#9a00ff")
message.channel.send(vinniecode)
  
//Vinnie tarafından kodlanmıştır.
} else {

  let vinniecode = new Discord.MessageEmbed()
.setAuthor(user.tag + '', user.displayAvatarURL())
.setImage(user.displayAvatarURL({dynamic: true, size: 1024}))
.setColor("#9a00ff")
.setDescription(`**[[PNG]](${user.displayAvatarURL({ format: 'png',  size: 1024 })}) İndirmek için tıkla!**`)
message.channel.send(vinniecode)
  message.delete();

}
}catch{
  message.channel.send(new Discord.MessageEmbed().setColor("#19b9c9").setDescription("🚫 Kullanıcıyı bulamadım!"));
  message.delete();
  return;
}

}//Vinnie tarafından kodlanmıştır.

 exports.conf = {
  enabled: true,
  guildOnly: false,//Vinnie tarafından kodlanmıştır.
  aliases: ['avatarım'],
  permLevel: 0,
  kategori: "Genel"
};

exports.help = {
  name: 'avatar',
  description: 'Kullanıcı avatarını gösterir.',
  usage: 'avatar'
};//Vinnie tarafından kodlanmıştır.