
const Discord = require("discord.js");

const must1 = require("quick.db");

exports.run = (client, message, args) => {

if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için \`MANAGE_GUILD\` yetkisine sahip olman gerekli!`)

  let must = args.slice(0).join(" ");

  if (!must)

    return message.channel.send("Lütfen bir tag girin!")



  message.channel.send(`Oto tag \`${must}\` Olarak Ayarlandı.`);

}

exports.conf = {

   enabled: true,

   guildOnly: false,

   aliases: [],

   permlevel: 0

}

exports.help = {

  name: "ototag",

  description: 'Sunucuya katılan kullanıcılara oto tag verebilirsiniz.',

  usage: 'ototag <tag>'

}
