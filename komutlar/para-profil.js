
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  let user = message.mentions.users.first() || message.author;
  let boksE = await db.fetch(`boksE_${user.id}`);
  let kalem = await db.fetch(`kalem_${user.id}`);
  let kapışC = await db.fetch(`kapışC_${user.id}`);
  let rozet = await db.fetch(`memberBadge6_${user.id}`);
   let u = message.mentions.users.first() || message.author;

    let balance = await db.fetch(`paracık_${u.id}`);

  let altin = await db.fetch(`altıncıklar_${u.id}`);
  let altinim;
  if (altin == null) altinim = '0'
  else altinim = ''+ altin +''

let elmas = await db.fetch(`elmascıklar_${u.id}`);
let maaş = await db.fetch(`meslek_${u.id}`);
let meslekA = await db.fetch(`meslekA_${u.id}`);
let pref = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setThumbnail(user.displayAvatarURL  ({dynamic:true}))
  .addField(':diamond_shape_with_a_dot_inside:  Elmas:', `${elmas === null ? "0" : `${elmas}`}`, true)
  .addField(`${client.emojis.cache.get(`${client.emojiler.gold}`)} Altın:`, altinim, true)
  .addField(':moneybag: Para: ', `${balance === null ? "0" : `${balance} TL`}`, true)
  .addField(`:ribbon:  **Rozet:**`, `${rozet === null  ? "Alınmamış" : `Alınmış`}`)
  .addField(`:pen_ballpoint: **Kalem:**`, `${kalem === null ? "Alınmamış" : `Alınmış`}`)
  .addField(`:punch: **Boks Eldiveni:**`, `${boksE === null ? "Alınmamış" : `Alınmış`}`)
  .addField(`Meslek:`, `Çalıştığı meslek: **${meslekA === null  ? "Herhangi Bir Meslekte Çalışmıyor" : `${meslekA}`}**\nMaaş: **${maaş === null  ? "0" : `${maaş}`}** `)
message.channel.send(embed)
    
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'profil',
  description: 'Aldığınız eşyaları gösterir.',
  usage: 'çanta'
};
