
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

 
  let x = /(-)/
  let user = message.mentions.users.first();

  if (!user) return message.reply('<a:reddededee:763326997266038794> Kime elmas yollayacağını etiketlemen lazım!');
  if (user.bot === true) return message.reply('<a:reddededee:763326997266038794> Elmas bir bota yollarsan sen zararlı çıkarsın!');
  
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('<a:reddededee:763326997266038794> Yollayacağın miktarı yazman gerek!');

  if (user.id === message.author.id) return message.reply(`${client.emojis.cache.get(client.emojiler.kendineParaYollama)} Kendine elmasmı yollayacaksın ciddimisin?`);

  if (mesaj.match(x)) return message.reply('<a:reddededee:763326997266038794> Tek zeki sensin zaten!');
if (isNaN(args[1])) return message.channel.send("<a:reddededee:763326997266038794> Lütfen bir sayı gir.")

    
    

  let elmas = await db.fetch(`elmascıklar_${message.author.id}`);
  let altın = await db.fetch(`altıncıklar_${message.author.id}`);
  let para = await db.fetch(`paracık_${message.author.id}`);


  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

 

  if (elmas < mesaj) {
    let bulunanP = await db.fetch(`elmascıklar_${message.author.id}`)
    message.channel.send(`<a:reddededee:763326997266038794> Yeterince elmasın bulunmuyor, sende olan elmas:  ${bulunanP === null  ? "0" : `${bulunanP}`}`)
} else if  (elmas > mesaj) {

  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription(`<a:dorudoru:763326993135566848> ${user} Adlı kullanıcıya elmas yollandı, yollanılan miktar: ${mesaj}`)
  message.channel.send(embed)
  db.add(`elmascıklar_${user.id}`, mesaj)
  db.add(`elmascıklar_${message.author.id}`, -mesaj)
  

}
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['elmas-ver', 'elmasyolla'],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'elmas-yolla',
  description: 'İstediğiniz kişiye elmas yollayabilirsiniz.',
  usage: 'elmas-yolla <@üye> <miktar>'
};
