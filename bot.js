const Discord = require("discord.js");



const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const discord_xp = require("discord-xp");
const Levels = require("discord-xp");
const ayarlar = require("./ayarlar.json");

const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
require("./util/eventLoader.js")(client);
const db = require("quick.db");
const queue = new Map();
const ytdl = require("ytdl-core");
Levels.setURL(process.env.mongodb);





//-----------------------------------------------\\
const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " PİNGLENDİ ");
  response.sendStatus(200);
});
app.listen(8000);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
//-----------------------------------------------\\

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.token1);




//tag alana rol verme
const options = require('./ayarlar.json');


client.on("userUpdate", async (oldUser, newUser, msg) => {

const sunucu = client.guilds.cache.get(options.sunucu_id)

//Tag alındığında rol verilir...


const tagı_aldı = new Discord.MessageEmbed()
.setDescription(`** <@${newUser.id  }> Tagımızı ( \`${options.sunucu_tag}\`) alarak aramıza katıldı! <@&842418432926679063> Rolüne sahip oldu!**`)
.setTimestamp()
.setFooter('')
.setColor('RANDOM')

if(oldUser.username !== newUser.username) {
if(newUser.username.includes(options.sunucu_tag) && !sunucu.members.cache.get(newUser.id).roles.cache.has(options.tag_rolü_id)) {
 sunucu.members.cache.get(newUser.id).roles.add(options.tag_rolü_id);
   client.channels.cache.get(options.tag_kanal).send(tagı_aldı);

}

//Tag kaldırıldığında rol alınır...
  
  
  const tagı_kaldırdı = new Discord.MessageEmbed()
.setDescription(`** <@${newUser.id  }> Tagımızı ( \`${options.sunucu_tag}\`)  bırakarak aramızdan ayrıldı! <@&842418432926679063> Rolü geri alındı!**`)
.setTimestamp()
.setFooter('')
.setColor('RANDOM')

if (!newUser.username.includes(options.sunucu_tag) && sunucu.members.cache.get(newUser.id).roles.cache.has(options.tag_rolü_id)) {
 sunucu.members.cache.get(newUser.id).roles.remove(options.tag_rolü_id);
    let register = '842418432937951264';

  if(sunucu.members.cache.get(newUser.id).roles.cache.has(register)){ 
  sunucu.members.cache.get(newUser.id).roles.remove('842418432937951264')
      sunucu.members.cache.get(newUser.id).roles.remove('842418432937951265')
    sunucu.members.cache.get(newUser.id).roles.remove('842418432937951266')
        sunucu.members.cache.get(newUser.id).roles.remove('842418432937951267')
    sunucu.members.cache.get(newUser.id).roles.remove('842418432937951268')
    sunucu.members.cache.get(newUser.id).roles.remove('842418432951058482')
    sunucu.members.cache.get(newUser.id).roles.remove('842418432937951271')
  }
  
      client.channels.cache.get(options.tag_kanal).send(tagı_kaldırdı);

}}})

//tag alana rol verme

   
client.on("guildMemberRemove", async member => {
  var must = '842418433261830234'
    if(!must) return;
    const embed = new Discord.MessageEmbed()
    .setTitle('Güle Güle!')
    .setDescription(`<@${member.id}> sunucudan ayrıldı güle güle!`)
    .setColor('RANDOM')
    client.channels.cache.get(must).send(embed);
  })
client.on('guildMemberAdd', async member => {
  
  let devtr_kod = await db.fetch(`devtr_oto_tag_${member.guild.id}`);
  let devtr1;
  if (devtr_kod == null) devtr1 = member.setNickname(`${member.user.username}`)
  else devtr1 = member.setNickname(`${devtr_kod} ${member.user.username}`)
});


//ototag sistemi //
client.on('guildMemberAdd', async member => {

  

  let emran = await db.fetch(`ototag.${member.guild.id}`);

  let tanersins;

  if (emran == null) tanersins = member.setNickname(`${member.user.username}`)

  else tanersins = member.setNickname(`${emran} ${member.user.username}`)

});


// Reklam Engel //
//bot sese girme
client.on("ready", () => {
  client.channels.cache.get('842418432989069348').join();
  console.log('Bot Ses Kanalına Giriş Yaptı')
  });
//bot sese girme

////reklam-engel

const reklam = [
        ".com",
        ".net",
        ".xyz",
        ".tk",
        ".pw",
        ".io",
        ".me",
        ".gg",
        "www.",
        "https",
        "http",
        ".gl",
        ".org",
        ".com.tr",
        ".biz",
        "net",
        ".rf",
        ".gd",
        ".az",
        ".party",
		".gf"
      ];
client.on("messageUpdate", async (oldMessage, newMessage) => {
  
    if (oldMessage.content != newMessage.content) {
 let y = ''
 if(!y) return;
      
      if (reklam.some(word => newMessage.content.includes(word))) {
       //if (ayarlar.gelistiriciler.includes(newMessage.author.id)) return ;
 const embed = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(` ${newMessage.author} , **Mesajını Editleyerek Reklam Yapmaya Çalıştı!**`)
            .addField("Reklamı:",newMessage)
        
            newMessage.delete();
            const embeds = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(` ${newMessage.author} , **Mesajı Editleyerek Reklam Yapamana İzin Veremem!**`) 
          client.channels.cache.get(y).send(embed)
            newMessage.channel.send(embeds).then(msg => msg.delete({timeout:5000}));
          
      }
    } else {
    
  
  }
});

client.on("message", async msg => {

     
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;
         let y = ''
   
          if(!y) return;

              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
       //if (ayarlar.gelistiriciler.includes(newMessage.author.id)) return ;
     msg.delete({timeout:750});
                    const embeds = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(` <@${msg.author.id}> , **Bu Sunucuda Reklam Yapmak Yasak!**`)
      msg.channel.send(embeds).then(msg => msg.delete({timeout: 5000}));
                const embed = new Discord.MessageEmbed() .setColor("#ff7e00") .setDescription(` ${msg.author} , **Reklam Yapmaya Çalıştı!**`) .addField("Mesajı:",msg)
               client.channels.cache.get(y).send(embed)
                               
                } catch(err) {
                  console.log(err);
                }
              }
         
});


//reklam engel son //

client.on("message", async msg => {
  //const args = msg.content.slice.split(' ');
  const args = msg.content.trim().split(/ +/g);
  const fAK = await db.fetch(`filtreAK_${msg.guild.id}`);
  let mesaj = args.slice(1).join(" ");
  const filtre = await db.fetch(`filtre_${msg.guild.id}`);
  const kufur = [
    "mk",
    "göt",
    "amk",
    "amq",
    "aq",
    "orospu",
    "oruspu",
    "oç",
    "sikerim",
    "yarrak",
    "piç",
    "amq",
    "sik",
    "amcık",
    "çocu",
    "sex",
    "seks",
    "amına",
    "orospu çocuğu",
    "sg",
    "siktir git"
  ];

  const reklam = [
    ".ml",
    "discord.gg",
    "invite",
    "discordapp",
    "discordgg",
    ".com",
    ".net",
    ".xyz",
    ".tk",
    ".pw",
    ".io",
    ".me",
    ".gg",
    "www.",
    "https",
    "http",
    ".gl",
    ".org",
    ".com.tr",
    ".biz",
    ".party",
    ".rf.gd",
    ".az",
    "glitch.me",
    "glitch.com"
  ];

  let kufures = await db.fetch(`kuyarr_${msg.author.id}`);
  let linkes = await db.fetch(`luyarr_${msg.author.id}`);
  let ads = msg.author.id;
  if (fAK == "acik") {
    const fltr = filtre;
    if (fltr.some(word => msg.content.includes(word))) {
      if (!msg.member.hasPermission("BAN_MEMBERS")) {
        msg.delete();

        var k = new Discord.RichEmbed()
          .setColor("#01CFFE")
          .setAuthor("Filtre Sistemi")
          .setDescription(
            `Bu sunucuda yasaklanmış bir kelimeyi kullandınız, bu yüzden mesajınızı sildim.`
          );
        msg.channel.send(k).then(message => message.delete(5000));

        return;
      }
    }
  }});

//küfür engel son //
// canvaslı giriş //

//tag alana rol verme



//tag alana rol verme


//////////////
//ROL VE KANAL KORUMA
client.on("roleCreate", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());
  let rol = await db.fetch(`rolrol_${role.guild.id}`);
  let kontrol = await db.fetch(`dil_${role.guild.id}`);
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  if (kontrol == "agayokaga") {
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == role.guild.owner.id) return;
    role.delete();

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Açıldı!`)
      .setColor("BLACK")
      .addField(`Açan`, entry.executor.tag)
      .addField(`Açılan Rol`, role.name)
      .addField(`Sonuç`, `Rol Geri Silindi!`);
    client.channels.cache.get(kanal).send(embed);
  } else {
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == role.guild.owner.id) return;
    role.delete();

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Açıldı!`)
      .setColor("BLACK")
      .addField(`Rolu Açan`, entry.executor.tag)
      .addField(`Açılan Rol`, role.name)
      .addField(`Sonuç`, `Açılan Rol Geri Silindi!`);
    client.channels.cache.get(kanal).send(embed);
  }
});

client.on("channelDelete", async channel => {
  let kontrol = await db.fetch(`dil_${channel.guild.id}`);
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (!kanal) return;
  if (kontrol == "agayokaga") {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.guild.channels.create(channel.name, channel.type, [
      {
        id: channel.guild.id,
        position: channel.calculatedPosition
      }
    ]);

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Silindi!`)
      .addField(`Silen`, entry.executor.tag)

      .addField(`Silinen Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Açıldı!`)

      .setColor("BLACK");
    client.channels.cache.get(kanal).send(embed);
  } else {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.guild.channels.create(channel.name, channel.type, [
      {
        id: channel.guild.id,
        position: channel.calculatedPosition
      }
    ]);

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Silindi!`)
      .addField(`Kanalı Silen`, entry.executor.tag)
      .setColor("BLACK")
      .addField(`Silinen Kanal`, channel.name)
      .addField(`Sonuç`, `Silinen Kanal Geri Açıldı!`);
    client.channels.cache.get(kanal).send(embed);
  }
});

client.on("channelCreate", async channel => {
  let kontrol = await db.fetch(`dil_${channel.guild.id}`);
  let kanal = '845013836552994827'
  if (!kanal) return;
  if (kontrol == "agayokaga") {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_CREATE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == '638324859818213380') return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Açıldı!`)
      .setColor("BLACK")
      .addField(`Açan`, entry.executor.tag)
      .addField(`Açılan Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Silindi!`);
    client.channels.cache.get(kanal).send(embed);
  } else {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_CREATE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
      if (entry.executor.id == '638324859818213380') return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.delete();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Kanal Açıldı!`)
      .setColor("BLACK")
      .addField(`Kanalı Açan`, entry.executor.tag)
      .addField(`Açılan Kanal`, channel.name)
      .addField(`Sonuç`, `Açılan Kanal Geri Silindi`);
    client.channels.cache.get(kanal).send(embed);
  }
});
// Ban ve Rol Koruma Devam
client.on("guildBanAdd", async (guild, user) => {
  let kontrol = await db.fetch(`dil_${guild.id}`);
  let kanal = '845013836552994827'
  let rol = '842418432926679070'
  if (!kanal) return;
  if (kontrol == "agayokaga") {
    const entry = await guild
      .fetchAuditLogs({ type: "GUILD_BAN_ADD" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == guild.owner.id) return;
    guild.members.unban(user.id);
    guild.members.cache.get(entry.executor.id).kick();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Biri Yasaklandı!`)
      .setColor("BLACK")
      .addField(`Yasaklayan`, entry.executor.tag)
      .addField(`Yasaklanan Kişi`, user.name)
      .addField(
        `Sonuç`,
        `Yasaklayan kişi sunucudan Atıldı!\nve yasaklanan kişinin yasağı kalktı!`
      );
    client.channels.cache.get(kanal).send(embed);
  } else {
    const entry = await guild
      .fetchAuditLogs({ type: "GUILD_BAN_ADD" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == guild.owner.id) return;
    guild.members.unban(user.id);
    guild.members.cache.get(entry.executor.id).kick();
    const embed = new Discord.MessageEmbed()
      .setTitle(`Biri Yasaklandı!`)
      .setColor("BLACK")
      .addField(`Yasaklayan`, entry.executor.tag)
      .addField(`Yasaklanan Kişi`, user.name)
      .addField(
        `Sonuç`,
        `Yasaklayan Kişi Sunucudan Atıldı ve yasaklanan kişinin yasağı kalktı `
      );
    client.channels.cache.get(kanal).send(embed);
  }
});
client.on("roleDelete", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  let rol = '842418432989069346'
  let kontrol = await db.fetch(`dil_${role.guild.id}`);
  let kanal = '845013836552994827'
  if (!kanal) return;
  if (kontrol == "TR_tr") {
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == role.guild.owner.id) return;
    role.guild.roles
      .create({
        data: {
          name: role.name
        }
      })
      .then(r => r.setPosition(role.position));

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Silindi!`)
      .setColor("BLACK")
      .addField(`Silen`, entry.executor.tag)
      .addField(`Silinen Rol`, role.name)
      .addField(`Sonuç`, `Rol Geri Açıldı!`);
    client.channels.cache.get(kanal).send(embed);
  } else {
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == role.guild.owner.id) return;
    role.guild.roles
      .create({
        data: {
          name: role.name
        }
      })
      .then(r => r.setPosition(role.position));

    const embed = new Discord.MessageEmbed()
      .setTitle(`Bir Rol Silindi!`)
      .setColor("BLACK")
      .addField(`Silen`, entry.executor.tag)
      .addField(`Silinen Rol`, role.name)
      .addField(`Sonuç`, `Silinen Rol Geri Açıldı!`);
    client.channels.cache.get(kanal).send(embed);
  }
});



// SAYAÇ SİSTEMİ


client.on("guildMemberAdd", async member => {
  let guild = member.guild;
  let user = guild.members.cache.get(member.id);

  const tag = await db.fetch(`banned-tag.${guild.id}`);
  const sayı = await db.fetch(`atıldın.${guild.id}.${user.id}`);
  if (user.user.username.includes(tag)) {
    if (sayı === null) {
      await db.add(`atıldın.${guild.id}.${user.id}`, 1);
      user.send(
        new Discord.MessageEmbed()
          .setColor("RED")
          .setAuthor(guild.name, guild.iconURL)
          .setDescription(
            `Sunucumuzun yasaklı tagında bulunduğunuz için atıldınız, tekrar giriş yapmayı denerseniz **yasaklanacaksınız**!`
          )
      );
      await user.kick();
    }

    if (sayı === 1) {
      await db.delete(`atıldın.${guild.id}.${user.id}`);
      user.send(
        new Discord.MessageEmbed()
          .setColor("RED")
          .setAuthor(guild.name, guild.iconURL)
          .setDescription(
            `Sunucumuzun yasaklı tagında bulunduğunuz için atılmıştınız, tekrar giriş yapmayı denediğiniz için **${guild.name}** sunucusundan kalıcı olarak **yasaklandınız**!`
          )
      );
      await user.ban();
    }
  }
});

//YASAKLI TAG



////RESIMLI GUVENLIK////

client.on('guildMemberAdd',async member => {
  let user = client.users.cache.get(member.id);
  let kanal = client.channels.cache.get(db.fetch(`guvenlik${member.guild.id}`)) 
       const Canvas = require('canvas')
       const canvas = Canvas.createCanvas(360,100);
       const ctx = canvas.getContext('2d');
  
  const resim1 = await Canvas.loadImage('https://i.hizliresim.com/DWmOSd.png')
    const resim2 = await Canvas.loadImage('https://i.hizliresim.com/hIvMtu.png')
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format('dddd');  
    var kontrol;
      if (kurulus > 2629800000) kontrol = resim2
    if (kurulus < 2629800000) kontrol = resim1


     const background = await Canvas.loadImage("https://media.discordapp.net/attachments/789895703978573826/789930343087603752/standard_1.gif");
       ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
   

  const avatar = await Canvas.loadImage(member.user.displayAvatarURL({format: "png"}));
  ctx.drawImage(kontrol,0,0,canvas.width, canvas.height)
  ctx.beginPath();
    ctx.lineWidth = 4;
  ctx.fill()
    ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
    ctx.clip();
  ctx.drawImage(avatar, 143,10, 73, 72  );

   if (!kanal) return
       const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'güvenlik.png');
    kanal.send(attachment)
});

///////////RESIMLI GUVENLIK//////////





  
// az daha araştır 70 de salarız


client.on('message', async (message, msg) => {
  
  
  
  
  
    if(message.content == '.güvenlik') {
      
      const Discord = require("discord.js");

      
         let member = message.mentions.users.first() || message.author
  
   const moment = require("moment");

   
   const user =  message.mentions.users.first() || message.author;
   
   const pp = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`
   
  const Canvas = require("canvas");
  const canvas = Canvas.createCanvas(360, 100);
  const ctx = canvas.getContext("2d");
  const resim1 =  await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/621045237137276929/621046566106431488/tes3.png"
  );
  const resim2 =  await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/621045237137276929/621046061875724298/tes1.png"
  );
  const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format("dddd");
  var kontrol;
  if (kurulus > 1296000000) kontrol = resim2;
  if (kurulus < 1296000000) kontrol = resim1;

  const background =  await Canvas.loadImage(
    "https://cdn.discordapp.com/attachments/621045237137276929/621045305089064980/arka.png"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  const avatar =  await Canvas.loadImage(pp);
  ctx.drawImage(kontrol, 0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(180, 46, 36, 0, 2 * Math.PI);
  ctx.clip();
  ctx.drawImage(avatar, 143, 10, 73, 72);

  message.channel.send({files:[{attachment:canvas.toBuffer(),name:"must.png"}]})
      
    }

  

  

})

///////mod-log

client.on("messageDelete", async (message) => {
  
  
  const must= require("moment");

must.locale("tr")

  
    


  if (message.author.bot || message.channel.type == "dm") return;
  
  db.set(`snipe.${message.guild.id}.${message.channel.id}`, message.content)
  db.set(`snipek.${message.guild.id}.${message.channel.id}`,message.author.id)
    db.set(`snipesaat.${message.guild.id}.${message.channel.id}`, must().add(3, "hours").format("DD MMMM YYYY h:mm:ss"))


  let log = message.guild.channels.cache.get('845039871009751050');

  if (!log) return;

  const embed = new Discord.MessageEmbed()

    .setTitle(message.author.username + " | Mesaj Silindi")

    .addField("Kullanıcı: ", message.author)

    .addField("Kanal: ", message.channel)

    .addField("Mesaj: ", "" + message.content + "")

  log.send(embed)
  
  
     
   

})

client.on("messageUpdate", async (oldMessage, newMessage) => {
  
    if (oldMessage.author.bot || oldMessage.channel.type == "dm") return;


  let modlog = '845039871009751050'

  if (!modlog) return;

  let embed = new Discord.MessageEmbed()

  .setAuthor(oldMessage.author.username, oldMessage.author.avatarURL())

  .addField("**Eylem**", "Mesaj Düzenleme")

  .addField("**Mesajın sahibi**", `<@${oldMessage.author.id}> === **${oldMessage.author.id}**`)

  .addField("**Eski Mesajı**", `${oldMessage.content}`)

  .addField("**Yeni Mesajı**", `${newMessage.content}`)

  .setTimestamp()

  .setColor("RANDOM")

  .setFooter(`Sunucu: ${oldMessage.guild.name} - ${oldMessage.guild.id}`, oldMessage.guild.iconURL())

  .setThumbnail(oldMessage.guild.iconURL)

  client.channels.cache.get(modlog).send(embed)

});

client.on("channelCreate", async(channel) => {

  let modlog = '845013836552994827'

    if (!modlog) return;

    const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());

    let kanal;

    if (channel.type === "text") kanal = `<#${channel.id}>`

    if (channel.type === "voice") kanal = `\`${channel.name}\``

    let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem**", "Kanal Oluşturma")

    .addField("**Kanalı Oluşturan Kişi**", `<@${entry.executor.id}>`)

    .addField("**Oluşturduğu Kanal**", `${kanal}`)

    .setTimestamp()

    .setColor("RANDOM")

    .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL())

    .setThumbnail(channel.guild.iconUR)

    client.channels.cache.get(modlog).send(embed)

    })

client.on("channelDelete", async(channel) => {

  let modlog = '845013836552994827'

    if (!modlog) return;

    const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());

    let embed = new Discord.MessageEmbed()

    .setAuthor(entry.executor.username, entry.executor.avatarURL())

    .addField("**Eylem**", "Kanal Silme")

    .addField("**Kanalı Silen Kişi**", `<@${entry.executor.id}>`)

    .addField("**Silinen Kanal**", `\`${channel.name}\``)

    .setTimestamp()

    .setColor("RANDOM")

    .setFooter(`Sunucu: ${channel.guild.name} - ${channel.guild.id}`, channel.guild.iconURL())

    .setThumbnail(channel.guild.iconURL)

    client.channels.cache.get(modlog).send(embed)

    })

client.on("roleCreate", async(role) => {

let modlog = '845013836552994827'

if (!modlog) return;

const entry = await role.guild.fetchAuditLogs({type: 'ROLE_CREATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.addField("**Eylem**", "Rol Oluşturma")

.addField("**Rolü oluşturan kişi**", `<@${entry.executor.id}>`)

.addField("**Oluşturulan rol**", `\`${role.name}\` **=** \`${role.id}\``)

.setTimestamp()

.setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)

.setColor("RANDOM")

.setThumbnail(role.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("roleDelete", async(role) => {

let modlog = '845013836552994827'

if (!modlog) return;

const entry = await role.guild.fetchAuditLogs({type: 'ROLE_DELETE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem**", "Rol Silme")

.addField("**Rolü silen kişi**", `<@${entry.executor.id}>`)

.addField("**Silinen rol**", `\`${role.name}\` **=** \`${role.id}\``)

.setTimestamp()

.setFooter(`Sunucu: ${role.guild.name} - ${role.guild.id}`, role.guild.iconURL)

.setColor("RANDOM")

.setThumbnail(role.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("emojiCreate", async(emoji) => {

let modlog = '845013836552994827'

if (!modlog) return;

const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem**", "Emoji Oluşturma")

.addField("**Emojiyi oluşturan kişi**", `<@${entry.executor.id}>`)

.addField("**Oluşturulan emoji**", `${emoji} - İsmi: \`${emoji.name}\``)

.setTimestamp()

.setColor("RANDOM")

.setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)

.setThumbnail(emoji.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("emojiDelete", async(emoji) => {

let modlog = '845013836552994827'

if (!modlog) return;

const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem**", "Emoji Silme")

.addField("**Emojiyi silen kişi**", `<@${entry.executor.id}>`)

.addField("**Silinen emoji**", `${emoji}`)

.setTimestamp()

.setFooter(`Sunucu: ${emoji.guild.name} - ${emoji.guild.id}`, emoji.guild.iconURL)

.setColor("RANDOM")

.setThumbnail(emoji.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("emojiUpdate", async(oldEmoji, newEmoji) => {

let modlog = '845013836552994827'

if (!modlog) return;

const entry = await oldEmoji.guild.fetchAuditLogs({type: 'EMOJI_UPDATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem**", "Emoji Güncelleme")

.addField("**Emojiyi güncelleyen kişi**", `<@${entry.executor.id}>`)

.addField("**Güncellenmeden önceki emoji**", `${oldEmoji} - İsmi: \`${oldEmoji.name}\``)

.addField("**Güncellendikten sonraki emoji**", `${newEmoji} - İsmi: \`${newEmoji.name}\``)

.setTimestamp()

.setColor("RANDOM")

.setFooter(`Sunucu: ${oldEmoji.guild.name} - ${oldEmoji.guild.id}`, oldEmoji.guild.iconURL)

.setThumbnail(oldEmoji.guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("guildBanAdd", async(guild, user) => {

let modlog = '845013836552994827'

if (!modlog) return;

const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_ADD"}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem**", "Yasaklama")

.addField("**Kullanıcıyı yasaklayan yetkili**", `<@${entry.executor.id}>`)

.addField("**Yasaklanan kullanıcı**", `**${user.tag}** - ${user.id}`)

.addField("**Yasaklanma sebebi**", `${entry.reason}`)

.setTimestamp()

.setColor("RANDOM")

.setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

.setThumbnail(guild.iconURL)

client.channels.cache.get(modlog).send(embed)

})

client.on("guildBanRemove", async(guild, user) => {

let modlog = '845013836552994827'

if (!modlog) return;

const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_REMOVE"}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()

.setAuthor(entry.executor.username, entry.executor.avatarURL())

.addField("**Eylem**", "Yasak kaldırma")

.addField("**Yasağı kaldıran yetkili**", `<@${entry.executor.id}>`)

.addField("**Yasağı kaldırılan kullanıcı**", `**${user.tag}** - ${user.id}`)

.setTimestamp()
//DarkCode
.setColor("RANDOM")
//DarkCode
.setFooter(`Sunucu: ${guild.name} - ${guild.id}`, guild.iconURL)

.setThumbnail(guild.iconURL)
//DarkCode
//DarkCode
client.channels.cache.get(modlog).send(embed)

})
// mod log son ///





// AYARLANABİLİR KAYIT KANAL //
// AYARLANABİLİR KAYIT KANAL //
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  let kanal = db.fetch(`kayıthg_${member.guild.id}`);
  let kayıtçı = db.fetch(`kayıtçırol_${member.guild.id}`);
  let aylartoplam = {
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
  };
  let aylar = aylartoplam;

  let user = client.users.cache.get(member.id);
  require("moment-duration-format");

  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const ayyy = moment.duration(kurulus).format("M");
  var kontrol = [];

  if (ayyy < 1) {
    kontrol = "**Şüpheli** ";
  }
  if (ayyy > 1) {
    kontrol = "**Güvenilir** ";
  }

  if (!kanal) return;

  ///////////////////////

  let randomgif = [ 
             "https://media.discordapp.net/attachments/744976703163728032/751451554132918323/tenor-1.gif", "https://media.discordapp.net/attachments/744976703163728032/751451693992116284/black.gif", "https://media.discordapp.net/attachments/765870655958548490/765871557993824256/tumblr_ozitqtbIIf1tkflzao1_540.gif", "https://media.discordapp.net/attachments/765870655958548490/765871565257965578/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f32622f61352f31312f32626135313161663865.gif"];

  ///////////////////
  const embed = new Discord.MessageEmbed()
    .setColor("36393F")
    .setImage(randomgif[Math.floor(Math.random() * randomgif.length)])
    .setThumbnail(
      user.avatarURL({
        dynamic: true,
        format: "gif",
        format: "png",
        format: "jpg",
        size: 2048
      })
    )

    .setDescription(
      `<a:welcome:752289859531440159> **Hoşgeldin!** ${
        member.user
      }, seninle beraber **${
        guild.memberCount
      }** kişi olduk! \n <a:elmas:752296630115369010> Kaydının yapılması için  **İsim** ve **Yaş** Yazman Gerek. \n <a:YklenmeGif:753288640121012244> Hesap Kuruluş: **${moment(
        user.createdAt
      ).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(
        user.createdAt
      ).format(
        "YYYY HH:mm:ss"
       )}** \n <a:ykleniyor:752305324588793896> Bu vatandaş: ${kontrol} \n <a:sagadogru:735869816103108689> <@&${kayıtçı}> Rolundeki Yetkililer Sizinle İlgilecektir
  `
    );

  
  client.channels.cache.get(kanal).send(embed);
  client.channels.cache.get(kanal).send(`<@&${kayıtçı}>`);
});
//kayıt kanal son //

//kayıt kanal son //

//sa-as

   const saasembed = new Discord.MessageEmbed()
////.setTitle('Bir Gold Üye Belirdi! ')
.setDescription(' Aleyküm Selam. Hoş Geldin! ')
.setTimestamp()
.setFooter('WoLvEs')
.setColor(0x36393E)
   
   //.then(msg => msg.delete({ timeout: 8000, reason: '.' }));
   
   require("./ExtendedMessage");
   
 client.on("message", async (msg, message) => {
  let saas = await db.fetch(`saas_${msg.guild.id}`);
  if (saas == 'kapali') return;
  if (saas == 'acik') {
    let kanal = "853652065153712158"
if(msg.channel.id === kanal) return;
  if (msg.content.toLowerCase() === 'sa' || msg.content.toLowerCase() == 'selam' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea' || msg.content.toLowerCase() == 'sae' || msg.content.toLowerCase() == 'selamün aleyküm' || msg.content.toLowerCase() == 'saa' || msg.content.toLowerCase() == 'seaa') {
   msg.inlineReply(`**Aleyküm Selam. Hoş Geldin! ** <@${msg.author.id}> `)
  }
  }
});

/// ekonomi sistemi

client.emojiler = {
  gold: "744898834584436736", //?PARAM DAKİ ALTIN EMOJİSİ
  paraGitti: "763316512051691520", // X İŞARETİ
  paraGitmedi: "763316512937082890", // TİK İŞARETİ
  paraROZET: "763321485942063104", // PARA İLE ALINAN YILDIRIM ROZET EMOJİSİ
  onayRozet: "733997295384789023", // ONAY ROZETİ
  modRozet: "763320398301102080", // MOD ROZETİ
  yetkiliRozet: "734004125401874463", // YETKİLİ ROZETİ
  destekçiRozet: "763320039893237790",
  evet: "842538340402069541", // TİK İŞARET
  hayır: "843074510013464576 ", // X İŞARETİ
  acikk: "763322641783455765",
  kapalii: "763322641171218462",
  kendineParaYollama: "763323284040843265", // KENDİNE PARA ATMAYA ÇALIŞANLAR İÇİN SİNİRLİ EMOJİSİ
  konfeti: "763322965060091914", // MESLEK SAHİBİ OLUNCA RENGARENK KONFETİ ATIYOR
  yukleniyor: "763323566346993694", // YÜKLENİYOR EMOJİ İŞTE :D
  sinirli: "763323284040843265", // TİTREYEN SİNİRLİ :D
  mutlu: "763323802863796226", // MUTLU EMOJİ
  rahatsızetme: "763324528361209867"  , // RAHATSIZ ETMEYİN EMOJİSİ
  çevrimiçi: "763324906628055072", // ÇEVRİMİÇİ EMOJİSİ
  yayıncı: "763325119677726720", // YAYINCI EMOJİSİ
  çevrimdışı: "763325323323768853", // ÇEVRİM DIŞI EMOJİSİ
  boşta: "763325616954408970", // BOŞTA EMOJİSİ
  bot: "763325775511683103", // BOT EMOJİSİ
  polis: "763325938208735232", // POLİS EMOJİ
  Yvar: "690266213426790480", // YETKİLERİM KOMUDUNDAKİ TİK İŞARETİ
  Yyok: "690266274336342068", // YETKİLERİM KOMUDUNDAKİ X İŞARETİ
  yan: "735869816103108689", // > GİBİ EMOJİ İŞTE :ç
  kalpSarılmalı: "763326559997526017",
  olumlu: "",
  olumsuz: "",

  // AYARLAR KOMUDUNDAKİ AÇIK KAPALI EMOJİLERİ >>>>>>>>>>>>>>>>>
  kapalıA: "763326997266038794",
  açıkA: "763326993135566848",

  // AÇIK BONUS EMOJİLERİ -------------- >>>>>>>>>>

  açıkB: ":regional_indicator_b: ", // B
  açıkO: ":regional_indicator_o: ", // O
  açıkN: ":regional_indicator_n:", // N
  açıkU: ":regional_indicator_u:", // U
  açıkS: ":regional_indicator_s:", // S

  // KAPALI BONUS EMOJİLERİ ---------------- >>>>>>>>>>>>>
  
  açıkB: ":regional_indicator_b: ", // B
  açıkO: ":regional_indicator_o: ", // O
  açıkN: ":regional_indicator_n:", // N
  açıkU: ":regional_indicator_u:", // U
  açıkS: ":regional_indicator_s:", // S
};

client.ayarlar = {
  official_sahip: "638324859818213380",
  sahip: "638324859818213380",

  yardimcilar: [""],
  isim: "✩ B I T C H E S",
  botD:
    "",
  webS: "",
  web: "",
  site: "",
  dblO: "",
  dbl: "",
  dbltoken:
        "",
  webpanel: "",
  versiyon: "2.0",
  prefix: ".",
  renk: "RANDOM",
  version: "1.0.0"
};

// spam engel başlangıç


var authors = [];
var warned = [];

var messageLog = [];

client.on('message', async  message => {
const spam = await db.fetch(`spam.${message.guild.id}`);
if(!spam) return;
const maxTime = await db.fetch(`max.${message.guild.id}.${message.author.id}`);
const timeout = await db.fetch(`time.${message.guild.id}.${message.author.id}`);
db.add(`mesaj.${message.guild.id}.${message.author.id}`, 1)
if(timeout) {

const sayı = await db.fetch(`mesaj.${message.guild.id}.${message.author.id}`);
if(Date.now() < maxTime) {
      

  const westraaaaam = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`:exclamation:  <@${message.author.id}> , **Bu Sunucuda Spam Yapmak Yasak!**`)
  .setFooter(`Bu mesaj otomatik olarak silinecektir.`)
 message.channel.send(westraaaaam).then(msg => msg.delete({timeout: 1500}));
  return message.delete();
  
}
} else {
db.set(`time.${message.guild.id}.${message.author.id}`, 'ok');
db.set(`max.${message.guild.id}.${message.author.id}`, Date.now()+3000);
setTimeout(() => {
db.delete(`mesaj.${message.guild.id}.${message.author.id}`);
db.delete(`time.${message.guild.id}.${message.author.id}`);
}, 500) // default : 500
}


});

// spam engel bitiş

//otorol

client.on('guildMemberAdd', async (member) => {
  if(db.has(`${member.guild.id}_otorol`)) {
    var rolID = db.fetch(`${member.guild.id}_otorol`)
    member.addR(rolID) } else {
    return;
  }
  
  const user = client.users.get(member.id);
    let aylartoplam = {
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
  };
  
  let aylar = aylartoplam;

  
  if(db.has(`${member.guild.id}_otokanal`)) {
    var kanal = client.channels.get(db.fetch(`${member.guild.id}_otokanal`))
    const embed = new Discord.RichEmbed()
    .setDescription(`Yeni katılan ${member} kullanıcısına <@&${rolID}> rolü verildi`)
    .setTimestamp()
    .addField('Hesap Oluşturma Tarihi', `\`${moment(user.createdAt).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(user.createdAt).format("YYYY")}\``, true)
    kanal.send(embed)
  } else {
    return;
  }
})







client2.on("ready", () => {
  client2.channels.cache.get('842418433261830237').join();
  console.log('2. Bot Ses Kanalına Giriş Yaptı');})

client2.login(process.env.token2);;;



client3.on("ready", () => {
  client3.channels.cache.get('842418433261830238').join();
  console.log('3. Bot Ses Kanalına Giriş Yaptı');})

client3.login(process.env.token3);


client4.on("ready", () => {
  client4.channels.cache.get('842418433261830239').join();
  console.log('4. Bot Ses Kanalına Giriş Yaptı');})

client4.login(process.env.token4);

client5.on("ready", () => {
  client5.channels.cache.get('842418433261830240').join();
  console.log('5. Bot Ses Kanalına Giriş Yaptı');})

client5.login(process.env.token5);



let iltifatlar = [   
  "Biliyor muydun? Antik Yunan'da zengin aile çocukları hayatları boyunca kılsız olmaları için doğdukları anda zeytinyağına batırılırlardı.",
  "Biliyor muydun? Dünyanın en geniş yolu olan Brezilya'daki Anıtsal Eksen'de 160 araba yan yana gidebilir",
  "Biliyor muydun? Hamam böcekleri kafaları kopsa bile birkaç hafta daha yaşayabilirler",
  "Biliyor muydun? Japon balıklarının hatırlama ömürleri yaklaşık 3 saniyedir",
  "Biliyor muydun? Suudi Arabistan'da kadın kocasına kahve yapmazsa boşanma yaşanabilir.",
  "Biliyor muydun? Atlı insan heykellerinde, atın iki ön ayağı da havadaysa kişi savaşta ölmüştür, atın tek ayağı havadaysa kişi savaşta aldığı yaralar yüzünden ölmüştür, atın tüm ayakları yere değiyorsa o kişi doğal sebeplerden ölmüştür.",
  "Biliyor muydun? Her yıl uçak kazalarında ölen insan sayısından daha fazla insan eşekler tarafından öldürülüyor.",
  "Biliyor muydun? Peynir ve bitter çikolata diş çürümesini önlemektedir.",
  "Biliyor muydun? Charles Osborne isimli bir adamın hıçkırığı 69 yıl sürdü.",
  "Biliyor muydun? Dünyanın en sessiz odası -9 desibeldir. Burada bir insan damarlarında akan kanın sesini bile duyabilir.",
  "Biliyor muydun? 18 Şubat 1979 tarihinde Sahra Çölü'ne kar yağmıştır.",
  "Biliyor muydun? Bukalemunların dilleri vücutlarından iki kat daha uzundur.",
  "Biliyor muydun? Doktorların kötü yazıları nedeniyle yılda 7 bin kişi hayatını kaybetmektedir.",
  "Biliyor muydun? Hapşırdığınız zaman, kalbiniz de dahil olmak üzere bütün vücut fonksiyonlarınız bir an için durur. Ayrıca az sayıda da olsa beyin hücrenizi kaybedersiniz.",
  "Biliyor muydun? Bir kişinin ağzında bulunan bakteri sayısı dünya nüfusundan daha fazladır.",
  "Biliyor muydun? Su aygırları üzüldüklerinde terleri kırmızı renk alır.",
  "Biliyor muydun? Mavi rengi görebilen tek kuş türü, baykuştur.",     
"Biliyor muydun? Kaju olarak bildiğimiz çerez aslında kaju meyvesinin sapıdır.",
"Biliyor muydun? Ananas aslında meyve değildir ve tarlada bu şekilde büyür.",
"Biliyor muydun? Su aygırının sütü pembe renklidir.",
"Biliyor muydun? Mavi balinaların kalbi o kadar büyüktür ki bir insan atardamarları içerisinde rahatlıkla yüzebilir.",
"Biliyor muydun? Kuzey Kore ile Finlandiya'yı ayıran tek ülke Rusya'dır.",
"Biliyor muydun? 'Duck Hunt' aslında iki kişilik bir oyundur. İkinci oyuncu ördeği kontrol eder.",
"Biliyor muydun? Plüton keşfedildiği tarihten itibaren bir kez bile güneşin etrafında tam tur dönmemiştir. Bu yüzden artık bir gezegen olarak kabul edilmiyor.",
"Biliyor muydun? Bal güneş görmediği sürece asla bozulmaz.",
"Biliyor muydun? Mario blokları eliyle kırar, kafasıyla değil",
"Biliyor muydun? 19. yüzyıldaki tüm insanlar, şuan 2 dakikada çekilen fotoğraflar kadar fotoğraf çekememişti.",
"Biliyor muydun? Yer fıstığı aslında bir baklagildir ve toprağın altında büyür.",
"Biliyor muydun? Her 5000 bebekten birisi anüsü olmadan (imperforate anus) doğuyor ve hastane ortamında anüs yapılması gerekiyor.",
"Biliyor muydun? Gökyüzündeki yıldız sayısı dünya üzerindeki tüm plajlardaki kum tanesi sayısından fazladır.",
"Biliyor muydun? Bin saniye yaklaşık 16 dakika, bir milyon saniye yaklaşık 11 gün, bir milyar saniye yaklaşık 32 yıl ve bir trilyon saniye yaklaşık 32.000 yıl eder.",
"Biliyor muydun? İnsan DNA'sı %50 oranında muz DNA'sı ile aynıdır.",
"Biliyor muydun? İlk 'Star Wars' Filmi yayınlandığında (25 Mayıs 1977) Fransa'da hala giyotin ile idam yasaldı. Giyotin, kelle vurdurtmaya benzer bişeydir.",
"Biliyor muydun? Rusya, Pluto'dan daha büyük bir yüzölçümüne sahiptir.",
"Biliyor muydun? Ahtapotların üç tane kalbi vardır.",
"Biliyor muydun? Fareler ve atlar kusamaz.",
"Biliyor muydun? Yasalara göre; Belçika'da her ilkokul öğrencisinin mızıka dersi alması zorunludur.",
"Biliyor muydun? Şayet soğan doğrarken sakız çiğnerseniz; evet, ağlamazsınız.",
"Biliyor muydun? İnsanoğlunun vücudundaki en güçlü kas, çene kasıdır.",
"Biliyor muydun? Bir okyanusun en derin yerinde, demir bir topun dibe çökmesi bir saatten uzun sürer.",
"Biliyor muydun? Bugüne kadar ölçülmüş en büyük buz dağı, 200 mil uzunluğunda ve 60 mil genişliğindedir ve Belçika'dan daha büyük bir yüzölçümüne sahiptir.",
"Biliyor muydun? İnsanın gözü tam olarak 576 megapikseldir.",
"Biliyor muydun? Işık saniyede 300.000 km yol alıyor.",
"Biliyor muydun? Su samurları el ele tutuşarak uyuyorlar.",
"Biliyor muydun? Dünyanın en uzun süren trafik sıkışıklığı 12 gün sürdü, 100 km kuyruk oluştu ve araçlar günde 1 kilometre ilerleyebildiler",
"Biliyor muydun? Taklitçi ahtapot isimli ahtapot, sadece renk değiştirmekle kalmıyor, aynı zamanda dil balığı, aslan balığı ve deniz yılanı gibi hayvanların şekline de bürünebiliyor.",
"Biliyor muydun? Kadın Memesi Ellemek Stresi Erkeklerde %70 Azaltıyor.",
  "Gözlerindeki saklı cenneti benden başkası fark etsin istemiyorum.",
  "Yaşanılacak en güzel mevsim sensin.",
  "Sıradanlaşmış her şeyi, ne çok güzelleştiriyorsun.",
  "Gönlüm bir şehir ise o şehrin tüm sokakları sana çıkar.",
  "Birilerinin benim için ettiğinin en büyük kanıtı seninle karşılaşmam.",
  "Denize kıyısı olan şehrin huzuru birikmiş yüzüne.",
  "Ben çoktan şairdim ama senin gibi şiiri ilk defa dinliyorum.",
  "Gece yatağa yattığımda aklımda kalan tek gerçek şey sen oluyorsun.",
  "Ne tatlısın sen öyle. Akşam gel de iki bira içelim.",
  "Bir gamzen var sanki cennette bir çukur.",
  "Gecemi aydınlatan yıldızımsın.",
  "Ponçik burnundan ısırırım seni",
  "Bu dünyanın 8. harikası olma ihtimalin?",
  "fıstık naber?",
  "Sevgi de yetmiyormuş. Çok eskiden rastlaşacaktık.",
"Her kadın saçma sapan bir adam sevmeden olgunlaşmaz. Muhakkak en güzel duygularını, en ruhsuz adamlar öldürür...",
"Verebileceğin en cesurca karar, kalbini ve ruhunu inciten her şeyi bırakmandır.",
"Hava soğudu..Kasımın son günleri kar yağacak, bembeyaz olacak unutmuşluğum.",
"İyi insan ol, fakat bunu ispatlamak  için vakit harcama.",
"Oysa ben hiç insan kaybetmedim. Sadece zamanı geldiğinde vazgeçmeyi bildim o kadar.",
"Seçilmiş bir yalnızlık, insanın sahip olabileceği en büyük lükstür.",
"İyiyim desem inanacak, o kadar habersiz benden.",
"Senin bana nasip olman, şahsi hayatımın en değer biçilmez talihidir.",
"En güvendiğin insanların, bir yanılgıdan ibaret olduğunu anlayınca, köşene çekilirsin.",
"Ve nelere baskın gelmezdi ki seni düşünmenin tadı",
"Tarifini sorsalar...Her baktığımda, ilk defa görüyormuş  gibi... Az kalsın ölüyormuşum gibi",
"Yüzümü elinle silmene muhtacım diyip önünde küçük düşsem de ben böyleyim",
"Bir anım olsa o an ahım tutsa yine istemem incinme sen. Bir hayal kursam içine seni koysam hiç gitme sen",
"Seni sevdim. Seni birden bire değil usul usul sevdim. 'Uyandım bir sabah' gibi değil, öyle değil.",
"Yokluğunda ömrümün yarısı çekip gitmişti belki de, şimdi varlığın tutmalı kayıp yaşlarımın ellerini",
"Ateşe hakiki bir çay koyalım",
"Kenti unutanlardan olalım.",
"Onu kırmış olmalı yaşamında birisi… Dinlendikçe susması, düşündükçe susması… Tek başına iki kişi olmuş kendisiyle gölgesi",
"Uykunun içinde bir rüya, rüyamda bir gece, gecede ben. Bir yere gidiyorum, delice. Aklımda sen",
"Bu kadar az şey söylerken, bu kadar mı çok şey söyleyebilir bir şiir.. Bu kadar 'demeyeceğim' derken, bu kadar mı 'gitme' denebilir.",
  "Dilek tutman için yıldızların kayması mı gerekiyor illa ki? Gönlüm gönlüne kaydı yetmez mi?",
  "Süt içiyorum yarım yağlı, mutluluğum sana bağlı.",
  "Müsaitsen aklım bu gece sende kalacak.",
  "Gemim olsa ne yazar liman sen olmadıktan sonra...",
  "Gözlerimi senden alamıyorum çünkü benim tüm dünyam sensin.",
  "Sabahları görmek istediğim ilk şey sensin.",
  "Mutluluk ne diye sorsalar- cevabı gülüşünde ve o sıcak bakışında arardım.",
  "Hayatım ne kadar saçma olursa olsun, tüm hayallerimi destekleyecek bir kişi var. O da sensin, mükemmel insan.",
  "Bir adada mahsur kalmak isteyeceğim kişiler listemde en üst sırada sen varsın.",
  "Sesini duymaktan- hikayelerini dinlemekten asla bıkmayacağım. Konuşmaktan en çok zevk aldığım kişi sensin.",
  "Üzerinde pijama olsa bile, nasıl oluyor da her zaman bu kadar güzel görünüyorsun? Merhaba, neden bu kadar güzel olduğunu bilmek istiyorum.",
  "Çok yorulmuş olmalısın. Bütün gün aklımda dolaşıp durdun.",
  "Çocukluk yapsan da gönlüme senin için salıncak mı kursam?",
  "Sen birazcık huzur aradığımda gitmekten en çok hoşlandığım yersin.",
  "Hangi çiçek anlatır güzelliğini? Hangi mevsime sığar senin adın. Hiçbir şey yeterli değil senin güzelliğine erişmeye. Sen eşsizsin...",
  "Rotanızı geçen her geminin ışığıyla değil, yıldızlara göre ayarlayın.",
  "Telaşımı hoş gör, ıslandığım ilk yağmursun.",
  "Gülüşün ne güzel öyle- cumhuriyetin gelişi gibi...",
  "Burada ki en zeki ikinci kişisin Must'tan sonra...",
  "Canım ortadan kaybolmak istiyor suc ortağım olur musun?",
  "Gözlerin adeta bir derya icinde boğulduğum...",
  "Falında bir sonsuzluk var o sonsuzlukta benimle kaybolur musun?",
  "İhtişamın gözlerimi büyülüyor hep böyle misindir?",
  "Seviyorsan git konuş bence demişler, evet! seviyorum seni benimle cıkar mısın?",
  "Bu kaşın gözün temeli nereden bu güzelliği allah özene bözene yaratmış maşallah",
  "Soruyorlar bu sözleri nereden buluyorsun... bi anda ilham geliyor.",
  "Cok kızla tanıştım, aşık oldum sandım, ama seni sevince onların yalan olduğunu anladım.",
  "Bazen gülüyorum ansızın... bu busenin sebebi sensin.",
  "Seni görünce icimde kelebekler ucusuyor... sebebi olmak nasıl bir duygu?",
  "Hayatımda, ne kadar saçma olursa olsun, tüm hayallerimi destekleyecek bir kişi var. O da sensin, mükemmel insan.",
"Baharda açan çiçeklerinden bile daha güzelsin. Eğer bir şair olsaydım, güzelliğine adanacak yüzlerce şiir yazabilirdim.",
"İnsanların bana aklımdan ne geçirdiğimi sorduklarında, senden başka hiçbir şey söyleyemiyorum.",
"Bu mesajımı sana kalbimin en şiddetli sesiyle yolluyorum, seni seviyorum...",
"Güneş mi doğmuş yoksa sen mi gülümsedin.",
  "şey utanıyorumda sanaa söylemem gereken bir şey var... ||galiba sana aşık oldum :c||",
  "Aranızdan çıkmadı bir adam / Yolunuza ermedi hiç kafam / Kaçamadım o da benim hatam / Geçmiş olsun şimdi her şey yalan"
];


var iltifatSayi = 0; 
client.on("message", async message => {
  if(message.channel.id !== "842418433756233746" || message.author.bot) return;
  iltifatSayi++
  if(iltifatSayi >= 120) { // 20 yazan yer, 20 mesajda bir iltifat edeceğini gösterir, değiştirebilirsiniz.
    iltifatSayi = 0;
    const must = Math.floor(Math.random() * ((iltifatlar).length - 1) + 1);
    message.reply(`**${(iltifatlar)[must]}**`);
  };
});




//level şeysi


client.on("message", async (message, msg) => {
  if (!message.guild) return;
  if (message.author.bot) return;
  
const randomAmountOfXp = Math.floor(Math.random() * 20) + 1; // Min 1, Max 30
  const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
  if (hasLeveledUp) {
    const user = await Levels.fetch(message.author.id, message.guild.id);
    
    const level = user.level + 1;
    
    const xptoplam = user.xp.toLocaleString();
    const level2 = user.level;
    const sonrakixp = Levels.xpFor(user.level).toLocaleString();
    const sonuç = xptoplam - sonrakixp;
    const sonuç2 = Levels.xpFor(level).toLocaleString();
   const yeter = Levels.xpFor(level2).toLocaleString();
    const budason = sonuç2 - yeter
    const toplamsonuç = sonuç2 - sonuç ;
    
     client.channels.cache.get('843090878452727838').send(`${message.author}, Tebrikler! Seviye Atladın Yeni Seviyen **${user.level}**. \n Bir Sonraki Levele **${budason}** XP Kaldı\n Şuanki XP Sayın **${yeter}**`);
  }
});

//level şeysi




//rainbow
// setInterval(() => { let guild = client.guilds.cache.get("842418432905183242") ; let role = guild.roles.cache.get("842418432980549640") ; role.setColor("RANDOM") }, 65000);
//rainbow




//ses 
//ses



//afk şeysi 
client.on('message', async message => {


 let prefix = await db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 

let kullanıcı = message.mentions.users.first() || message.author


 let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`) 


let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)

 let sebep = afkkullanıcı
 
 if (message.author.bot) return;

 if (message.content.includes(`${prefix}afk`)) return;

 if (message.content.includes(`<@${kullanıcı.id}>`)) {

 if (afkdkullanıcı) { message.channel.send(`\`${message.author.tag}\` adlı kullanıcı artık AFK değil.`) 

db.delete(`afk_${message.author.id}`) } } 


if (!message.content.includes(`<@${kullanıcı.id}>`)) { 


if (afkdkullanıcı) { message.channel.send(`**<@${message.author.id}>** artık AFK değilsin!.`) 

 db.delete(`afk_${message.author.id}`) 
                    const b = message.member.displayName
                 message.member.setNickname(`${b.replace("[AFK]", " ")}`)

} } });

//afk şeysi




client.on("message", async message => {
  
let kullanıcı = message.mentions.users.first() || message.author


 let afkdkullanıcı = await db.fetch(`afk_${message.author.id}`) 


let afkkullanıcı = await db.fetch(`afk_${kullanıcı.id}`)

 let sebep = afkkullanıcı || "Belirtilmemiş..";

  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`${prefix}afk`)) return;


  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${kullanıcı.id}`);

  if (REASON) {
    if (db.has(`üyelikk_${USER.id}`)) {
      message.delete();
      const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")

        .setDescription(
          `${message.author}, **${kullanıcı.tag}** şu anda AFK. \n Sebep : \`${sebep}\``
        );

      message.channel.send(`${message.author}, **${kullanıcı.tag}** şu anda AFK. \n Sebep : \`${sebep}\``).then(msg => msg.delete({timeout: 15000}));
    } else
      
       var embed = new Discord.MessageEmbed()
        .setColor("RANDOM")

        .setDescription(
          `${message.author}, **${kullanıcı.tag}** şu anda AFK. \n Sebep : \`${sebep}\``
        );
      
      
      message.channel
        .send(embed)
  }
});

//afk şeysi


//küfür engelmiş aq

//küfür engelmiş aq 


//offline etiket atılınca yazıcak


//offline etiket atılınca yazıcak



//ses 



//ses 

//yetkili leveli+


 




//yetkili leveli


//yapay zeka

client.on("message", async message => {
  const ai = require('@codare/codare.ai')
let kanal = "853652065153712158"
if(message.channel.id !== kanal) return;
if(message.author.bot == true) return;
let soru = message.content;
ai.sor(soru).then(must => {
return message.inlineReply(must.replace("codere.fun'da","Deepsy'de").replace("<codare-cmd-ses kapatma/>", "<deepsy-cmd-ses kapatma/>").replace("CodAre","Deepsy").replace("codare","deepsy").replace("Furtsy","'Must").replace("Hüseyin'le", "'Must Beyefendi ile")) 

});
})

//yapay zekaF