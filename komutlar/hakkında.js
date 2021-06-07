
const Discord = require("discord.js");

const moment = require("moment");


   


exports.run = function(client, message, args) { 
  
   let kur = {
			"01": "Ocak",
			"02": "Şubat",
			"03": "Mart",
			"04": "Nisan",
			"05": "Mayıs",
			"06": "Haziran",
			"07": "Temmuz",
			"08": "Ağustos",
			"09": "Eylül",
			"10": "Ekim",
			"11": "Kasım",
			"12": "Aralık"
    }
   
   
   
   
     
  
const member = message.mentions.users.first() || message.author || message.guild.members.get(args[0])
  
  
  
   const kurulus = new Date().getTime() - member.createdAt.getTime();
    const gün = moment(kurulus).format("dddd");
    var kontrol;
    if (kurulus > 1296000000) kontrol = "Bu Kullanıcı Güvenli!";
    if (kurulus < 1296000000) kontrol = "Bu Kullanıcı Güvenli Değil!";
  
  
  const embed = new Discord.MessageEmbed()
  .setAuthor(member.tag)
  .addField(`ID`, member.id, true)
  .addField(`Discord İsmi`,`${member.username}`,true)
  .setColor('RANDOM')
  .setThumbnail(member.displayAvatarURL  ({dynamic:true}))
  .setDescription(`${moment(member.createdTimestamp).format("DD")} ${kur[moment(member.createdTimestamp).format('MM')]} ${moment(member.createdTimestamp).format('YYYY h:mm:ss')} zamanında açılmış.  (${moment(member.createdTimestamp).add(5, 'second').fromNow().replace("months ago", "Ay Önce ").replace("years ago","yıl önce").replace("a year ago.","bir yıl önce").replace("a months ago","bir ay önce").replace("minutes ago","dakika önce").replace("days ago","gün önce").replace("a days ago","bir gün önce").replace("a minutes ago","bir dakika önce")}.)`)
  .addField(`Güvenirlik => `, kontrol,true)
 message.channel.send(embed)

}


  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hakkında',
  description: 'Ping/Pong komutu. Bunun ne işe yaradığını merak ediyorum?',
  usage: 'hakkında'
};