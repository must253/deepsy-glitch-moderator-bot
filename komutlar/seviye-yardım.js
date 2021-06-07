
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const talkedRecently = new Set();
const db = require("quick.db");
let botid = ('781242601671884820') 
exports.run = async(client, message, args) => {
 let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!"; 
    const embed = new Discord.MessageEmbed()
        .setAuthor(`${client.user.username} `, client.user.displayAvatarURL({dynamic: true}))
        .setColor('#d02090')
       .setTitle(`<a:ykleniyor:752305324588793896> **WoLvEs Bot Seviye Menüsüne Hoşgeldiniz** <a:ykleniyor:752305324588793896>`)
        .setDescription(`
 ▬▬▬▬▬▬▬▬ \`\`\SeviyeKomutlar\`\`\ ▬▬▬▬▬▬▬▬
  **» ${prefix}seviye**  Mevcut Olduğunuz Seviyeyi Gösterir.
  **» ${prefix}seviye-ayarlar**  Sunucuda Aktif Olan Seviye Ayarlarını Gösterir.
  **» ${prefix}seviye-rol**  İstenilen Seviyeye Gelince Verilecek Rolü Ayarlar.
  **» ${prefix}seviye-sıfırla **  Mevcut Seviye Sistemini Sıfırlar
  **» ${prefix}seviye-sınır **  Maksimum Kazanılanabilecek Seviyeyi Belirler.
  **» ${prefix}xp **  Bir Mesaj Başına Verilecek Xp yi ayarlar.
  **» ${prefix}seviye-top **  Sunucuda ki En yüksek 5 Kişiyi Gösterir
  **» ${prefix}seviye-log** Sunucudaki Seviye Logunu Ayarlarsınız
  **» ${prefix}seviye-rütbeler **  Hangi Seviye de Rol Verilecek Onu Gösterir.
`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/735925634336817283/762342094554791936/ezgif.com-optimize_8-1.gif`)
             .addField(`» WoLvEs Bot Bağlantıları`, `  [Bot Davet Linki](https://discord.com/oauth2/authorize?client_id=781242601671884820&scope=bot&permissions=805314622) **|** [Destek Sunucusu](https://discord.gg/8yMbUsj4) **|** [Oy Linki](Ayarlanmadı) `)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.displayAvatarURL({dynamic: true}))
    return message.channel.send(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['seviye-yardım'],
  permLevel: 0,
};

exports.help = {
  name: 'seviye-yardım',
  description: 'davet-sistemi Menüsü',
  usage: 'seviye-yardım'
};
