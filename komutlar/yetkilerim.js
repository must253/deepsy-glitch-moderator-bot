
const Discord = require('discord.js');
const { stripIndents } = require('common-tags');

exports.run = (client, msg, args) => {


let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (msg.member.hasPermission("ADMINISTRATOR")) x = ""
    if (!msg.member.hasPermission("ADMINISTRATOR")) x = ""
    
    //Denetim kaydı
    if (msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = ""
    if (!msg.member.hasPermission("VIEW_AUDIT_LOG")) x2 = ""
    
    //Sunucuyu yönet
    if (msg.member.hasPermission("MANAGE_GUILD")) x3 = ""
    if (!msg.member.hasPermission("MANAGE_GUILD")) x3 = ""
    
    //Rolleri yönet
    if (msg.member.hasPermission("MANAGE_ROLES")) x4 = ""
    if (!msg.member.hasPermission("MANAGE_ROLES")) x4 = ""
    
    //Kanalları yönet
    if (msg.member.hasPermission("MANAGE_CHANNELS")) x5 = ""
    if (!msg.member.hasPermission("MANAGE_CHANNELS")) x5 = ""
    
    //üyeleri at
    if (msg.member.hasPermission("KICK_MEMBERS")) x6 = ""
    if (!msg.member.hasPermission("KICK_MEMBERS")) x6 = ""
    
    //üyeleri yasakla
    if (msg.member.hasPermission("BAN_MEMBERS")) x7 = ""
    if (!msg.member.hasPermission("BAN_MEMBERS")) x7 = ""
    
    //mesajları yönet
    if (msg.member.hasPermission("MANAGE_MESSAGES")) x8 = ""
    if (!msg.member.hasPermission("MANAGE_MESSAGES")) x8 = ""
    
    //kullanıcı adlarını yönet
    if (msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = ""
    if (!msg.member.hasPermission("MANAGE_NICKNAMES")) x9 = ""
    
    //emojileri yönet
    if (msg.member.hasPermission("MANAGE_EMOJIS")) x10 = ""
    if (!msg.member.hasPermission("MANAGE_EMOJIS")) x10 = ""
    
    //webhookları yönet
    if (msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = ""
    if (!msg.member.hasPermission("MANAGE_WEBHOOKS")) x11 = ""
     const embed = new Discord.MessageEmbed()
  .setColor('GREEN')
    .setDescription(`${msg.author.tag} İsimli Kullanıcının Yetkileri\n${x} Yönetici \n${x2} Denetim Kaydını Görüntüle\n ${x3} Sunucuyu Yönet \n${x4} Rolleri Yönet \n${x5} Kanalları Yönet \n${x6} Üyeleri At \n${x7} Üyeleri Yasakla \n${x8} Mesajları Yönet \n${x9} Kullanıcı Adlarını Yönet \n${x10} Emojileri Yönet \n${x11} Webhook'ları Yönet`);
 msg.channel.send(embed);

  
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yetkilerim'],
  permLevel: 0,
    kategori: "kullanıcı"
};

exports.help = {
  name: 'yetkilerim',
  description: 'Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.',
  usage: 'yetkilerim'
};
