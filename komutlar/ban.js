const Discord = require('discord.js');
const db = require('quick.db');



exports.run = async(client, message, args) => {
  
  
   const disbut = require('discord-buttons'); // Requiring discord-buttons and binding it to the initialised client.
const { MessageButton } = require("discord-buttons");
  
  let evet = new MessageButton()
      .setLabel("Banla")
    .setEmoji('843074468750295040')
    .setStyle('grey')
    .setID('evet');
  let hayır = new MessageButton()
      .setLabel("Banlama")
    .setEmoji('843074510013464576')
    .setStyle('grey')
    .setID('hayır');
  
  let row = new disbut.MessageActionRow()
    .addComponent(evet)
      .addComponent(hayır)
  
 

   client.on('clickButton', async (button) => {
      if (button.id === 'evet') {
       await button.reply.send('My message'); //normal message, you can use also embed, buttons etc

await button.reply.send('My messsage', true); //ephemeral message

await button.reply.send('My message', { embed: embed, ephemeral: true }); //send embed with ephemeral message

await button.reply.edit('My new reply'); //you can use the options which are above
await button.reply.fetch(); 

      }
        if (button.id === 'hayır') {
        button.channel.send(new Discord.MessageEmbed().setFooter( "UMEF-EK / Discord'da Yeni Devrim!", client.user.avatarURL()) .setDescription(`[Oy Linkim](https://www.umefek.tk/oyver)`).setColor("BLUE").setAuthor("Oy Linki"));
      } })
  
	let rol = '842418432926679070';
  const embed = new Discord.MessageEmbed().setDescription('Ban yetkili Rolüne sahip değilsin.')
	if(!message.member.roles.cache.has(rol)&& !message.member.hasPermission("BAN_MEMBERS"))  return message.channel.send(embed)
	let banlog = '842418436054843441'
	if(!banlog) return message.channel.send('Ban log sistemi ayarlanmamış.')
    let user = message.mentions.users.first() 
    let sebep = args.slice(1).join(' ') || "Belirtilmemiş."
     if(!user) return message.channel.send(' ``Bir kişi etiketlemelisin.``')
     if(user.id === message.author.id) return message.channel.send(' ``Kendini banlayamazsın.``')
     if(user.id === client.user.id) return message.channel.send(' ``Botu banlayamazsın.``')
  if(user.id === message.guild.ownerID) return message.channel.send(' ``Sunucu sahibini banlayamazsın.``')
    if (!message.guild.member(user).bannable) return message.reply(' ``Bu kişinin rolü senden üstte veya `Üyeleri yasakla` yetkisine sahip.``');

   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle banlamak istediğine eminmisin ?' , { component: row }).then(async m => {
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