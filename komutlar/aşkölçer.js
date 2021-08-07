exports.run = async (client, msg, args) =>  {
    let vinniecode=[
      "Aşkölçer %3 Gösteriyor.",
      "Aşkölçer %6 Gösteriyor.",//Vinnie tarafından kodlanmıştır.
      "Aşkölçer %9 Gösteriyor.",
      "Aşkölçer %12 Gösteriyor.",
      "Aşkölçer %18 Gösteriyor.",
      "Aşkölçer %20 Gösteriyor.",
      "Aşkölçer %23 Gösteriyor.",
      "Aşkölçer %26 Gösteriyor.",//Vinnie tarafından kodlanmıştır.
      "Aşkölçer %29 Gösteriyor.",
      "Aşkölçer %30 Gösteriyor.",
      "Aşkölçer %40 Gösteriyor.",
      "Aşkölçer %50 Gösteriyor.",
      "Aşkölçer %60 Gösteriyor.",//Vinnie tarafından kodlanmıştır.
      "Aşkölçer %70 Gösteriyor.",
      "Aşkölçer %73 Gösteriyor.",
      "Aşkölçer %76 Gösteriyor.",
      "Aşkölçer %79 Gösteriyor.",
      "Aşkölçer %82 Gösteriyor.",
      "Aşkölçer %85 Gösteriyor.",
      "Aşkölçer %88 Gösteriyor.",
      "Aşkölçer %90 Gösteriyor.",
      "Aşkölçer %91 Gösteriyor.",
      "Aşkölçer %92 Gösteriyor.",//Vinnie tarafından kodlanmıştır.
      "Aşkölçer %93 Gösteriyor.",
      "Aşkölçer %94 Gösteriyor.",
      "Aşkölçer %95 Gösteriyor.",
      "Aşkölçer %96 Gösteriyor.",
      "Aşkölçer %97 Gösteriyor.",
      "Aşkölçer %98 Gösteriyor.",
      "Aşkölçer %99 Gösteriyor.",
      "Aşkölçer %100 Gösteriyor.",
    ]
    
      let member = msg.mentions.members.first()
       
     if(!member)return msg.channel.send({embed: {
       
   color: '#ff0000',
   description: ('🚫 Kimi Sevdiğini etiketlemelisin..')
       
  }});
 //Vinnie tarafından kodlanmıştır.
 
 
    else{
      
    msg.channel.send({embed: {
   color: '#ff0000',
   description: (`${member} ${vinniecode[Math.floor(Math.random() * 30)]}.`)
      //Vinnie tarafından kodlanmıştır.
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,//Vinnie tarafından kodlanmıştır.
    aliases: [],
    permLevel: 0,
  kategori: "Eğlence"
   };//Vinnie tarafından kodlanmıştır.
 
  exports.help = {
    name: 'aşkölçer',
    description: 'Belirttiğin kişi ile aşkınızı ölçmeni sağlar.',
    usage: 'aşkölçer'
   }