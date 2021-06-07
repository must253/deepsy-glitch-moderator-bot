
const Discord = require('discord.js');
const frenzydb = require("quick.db")
const frenzyms = require('parse-ms')
exports.run = async(client, message, args) => { 
let balance = await frenzydb.fetch(`paracık_${message.author.id}`)
let polisler = ['var', 'yok']
let frenzycode = polisler[Math.floor(Math.random() * polisler.length)];
let kazanlıacak = Math.floor(Math.random() * 578);
  
let fc = await frenzydb.fetch(`DateNowFCsoygun_${message.author.id}`)
if (fc !== null && 600000 - (Date.now() - fc) > 0) {
let time = frenzyms(600000 - (Date.now() - fc));


message.reply(`:exclamation: Başka bir soygun yapmadan önce ${time.minutes} dakika, ${time.seconds} saniye beklemen gerek!`) 
return
}
  
let frenzyuser = message.mentions.users.first()
if(!frenzyuser) return message.reply(':exclamation:  Soymak istediğin kişiyi etiketlemelisin!')
if(frenzyuser.id === message.author.id) return message.reply(' Kendini soyamazsın.')
if(frenzyuser.bot) return message.reply(':exclamation:  Botları soyamazsın!')
  
let para = await frenzydb.fetch(`balance${frenzyuser.id}`)
  

if(balance === null || balance === undefined || !balance) {
frenzydb.add(`paracık_${message.author.id}`, -150) 
frenzydb.add(`paracık_${frenzyuser.id}`, 150) 
frenzydb.set(`DateNowFCsoygun_${message.author.id}`, Date.now()) 
  
message.reply(`:exclamation:  Dostum b*ku yedin. Soyacağın kişinin hiç parası yok ve sen onu soymak istedin bu yüzden de hemen o kişiyi uyandırdın. Seni polise vermemesi için ona 150 TL ödemen gerekti.
Senin paran 150 TL indirildi. Bir dahakine çok dikattli ol! Sende kalan: ${balance}`)
return
}

  
if(frenzycode === 'var') {
let mefta = balance / 10

frenzydb.add(`paracık_${message.author.id}`, -mefta)
frenzydb.set(`DateNowFCsoygun_${message.author.id}`, Date.now()) 

message.reply(`:exclamation:  Dostum polislere yakalandın. Polisler rüşvet istiyior yoksa seni hapse sokacaklar. O yüzden paranın ${mefta} kadarı mefta oldu.`) 
return
}
 
if(frenzycode === 'yok') {

frenzydb.add(`paracık_${message.author.id}`, kazanlıacak)
frenzydb.add(`paracık_${frenzyuser.id}`,-kazanlıacak) 
frenzydb.set(`DateNowFCsoygun_${message.author.id}`, Date.now()) 

message.reply(`:love_you_gesture:  Dostum soygun başarılı tebrikler. Hesabına ${kazanlıacak} para gönderildi.`) 
return
}
};
exports.conf = {
  enabled: false,  
  guildOnly: false, 
  aliases: ['soygunyap','çal'], 
  permLevel: 0
};

exports.help = {
  name: 'soygun'
};
