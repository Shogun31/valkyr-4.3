const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const axios = require('axios');
exports.run = async (client, message, args) => {

if (!args.length) {
            axios.get('https://corona.lmao.ninja/v2/all')
                .then((response) => {
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor("#9a00ff")
                        .setTitle('Dünya Geneli COVID-19 Bilgileri')
                        .setDescription('Tanı konulan vakalar, ölümler ve dünya çapında gelişmeler \n Ülkeler hakkında bilgi almak için ' + ` \`${ayarlar.prefix}covid turkey\` `)
                        .addField(`Tanı Konulan Hasta Sayısı`,response.data.cases)
            .addField(`Toplam Ölüm`,response.data.deaths)
            .addField(`Toplam İyileşen`,response.data.recovered)
                        

                    message.channel.send(exampleEmbed);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        else {
            axios.get(`https://corona.lmao.ninja/v2/countries/${args[0]}`)
                .then((response) => {
                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#9a00ff')
                        .setTitle(`${args[0]} - Covid-19 Bilgileri`)
                        .addField(`Ülke`,response.data.country)
                    
            .addField(`:skull_crossbones: Toplam Ölüm`,response.data.deaths ,true)
            .addField(`:microbe: Tanı Konulan`,response.data.cases ,true)
            .addField(`:test_tube: Toplam Test`,response.data.tests ,true)
            .addField(`:microbe: Bugünkü Vaka`,response.data.todayCases,true)
            .addField(`:shield: İyileşen Hasta`,response.data.recovered ,true)
            .addField(`:microbe: Aktif Vaka`,response.data.active ,true)
                        
            .setThumbnail(response.data.countryInfo.flag)
          console.log(response)
                    message.channel.send(exampleEmbed);
                })
                .catch((error) => {
          message.channel.send(':no_entry: Lütfen ülke girerken global olarak giriniz! Örnek: Turkey veya Germany şeklinde girebilirsiniz. ')
                    console.log(error);
                });
        }
}
    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["corona", "covid", "covid19", "covıd", "virüs", "coronavirüs"],
  permLevel: 0
};

exports.help = {
  name: 'korona',
  description: 'Ülkelerdeki COVID-19 vakalarını inceyelebilirsiniz',
  usage: 'korona <ülke>'
};