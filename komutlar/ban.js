const Discord = require('discord.js');
const db = require('quick.db');

const ayarlar = require('ayarlar.json')

exports.run = async(client, message, args) => {
  
  let rol = ayarlar.bannerrolid;
  const embed = new Discord.MessageEmbed().setDescription('Ban yetkili Rolüne sahip değilsin.')
	if(!message.member.roles.cache.has(rol)&& !message.member.hasPermission("BAN_MEMBERS"))  return message.channel.send(embed)
  
  	let banlog = ayarlar.modlog
	if(!banlog) return message.channel.send('Ban log sistemi ayarlanmamış.')
    let user = message.mentions.users.first()||message.guild.members.cache.get(args[0])
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send(' ``Bir kişi etiketlemelisin.``')
     if(user.id === message.author.id) return message.channel.send(' ``Kendini banlayamazsın.``')
     if(user.id === client.user.id) return message.channel.send(' ``Botu banlayamazsın.``')
  if(user.id === message.guild.ownerID) return message.channel.send(' ``Sunucu sahibini banlayamazsın.``')
    if (!message.guild.member(user).bannable) return message.reply(' ``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``');
  
  
  
     message.Must('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle banlamak istediğine eminmisin ?').then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
  message.guild.members.cache.get(user.id).ban({
  	reason: `${sebep}`
          })
      let embed = new Discord.MessageEmbed()
    .setColor('0x36393E')
    .setTitle('Kişi banlandı')
    .addField('Yetkili', `${message.author.tag}`)
    .addField('Banlanan kişi', user)
    .addField('Sebep', sebep)
    client.channels.cache.get(banlog).send(embed)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
     m.delete()
message.channel.send('Banlama işlemi iptal edildi.')
      })
    })
 })
        
}             
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "ban"
}
