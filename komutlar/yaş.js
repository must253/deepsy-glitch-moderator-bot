const Discord = require('discord.js');
const data = require('quick.db')
exports.run = async (client, message, args) => {

function calculateAge(birthDay, birthMonth, birthYear)
{
  let todayDate = new Date();
  let todayYear = todayDate.getFullYear();
  let todayMonth = todayDate.getMonth();
  let todayDay = todayDate.getDate();
  let age = todayYear - birthYear;
 
  if (todayMonth < birthMonth - 1)
  {
    age--;
  }
 
  if (birthMonth - 1 == todayMonth && todayDay < birthDay)
  {
    age--;
  }
  return age;
}
  
  if(!args[0]) return message.channel.send('Doğum Gününü Söylermisin \n Örnek: yaş-hesapla 10 Ekim 2005')
  if(isNaN(args[0])) return message.channel.send(' Lütfen Sadece Sayı Kullan\n Örnek: yaş-hesapla 10 Ekim 2005')
  if(!args[1]) return message.channel.send('Bana Doğum Ayını Söylermisin\nÖrnek: yaş-hesapla 10 Ekim 2005')
  if(!args[2]) return message.channel.send('Doğum Gününü Söylermisin \n Örnek: yaş-hesapla 10 Ekim 2005')
  if(isNaN(args[2])) return message.channel.send('Lütfen Sadece Sayı Kullan\n Örnek: yaş-hesapla 10 Ekim 2005')
  
  let ay = args[1].replace('Ocak', '1').replace('Şubat', '2').replace('Mart', '3').replace('Nisan', '4').replace('Mayıs', '5').replace('Haziran', '6').replace('Temmuz', '7').replace('Ağustos', '8')
  .replace('Eylül', '9').replace('Ekim', '10').replace('Kasım', '11').replace('Aralık', '12');
  
  message.channel.send('Sen Tam Olarak : '+calculateAge(args[0],ay,args[2])+' Yaşındasın')
  
  
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['yaşhesapla'],
  permLevel: 0
}

exports.help = {
  name: 'yaş-hesapla'
};