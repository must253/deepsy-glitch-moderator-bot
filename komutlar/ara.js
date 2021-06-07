exports.run = async(client, message, args)=> {
  
  	let rol = '842418432989069346';
  
  if(!message.member.roles.cache.has(rol)) return message.react('❌')
  
  const isim = args[0]
if(!isim) message.channel.send('aratılıcak kelime giriniz');
  
  const aratılan = `${message.guild.members.cache.filter(s => !s.user.bot).filter(member => member.user.username.includes(`${isim}`)).size}`
  
  if (aratılan == 0){ message.channel.send(`**${isim}** İsminde hiç bir kullanıcı bulamadım`); }
  
  else
  message.channel.send(`**${isim}** isminde toplam ${message.guild.members.cache.filter(s => !s.user.bot).filter(member => member.user.username.includes(`${isim}`)).size} kişi var\n ✅ Emojisine tıklıyarak kişileri görebilirsiniz\n ❌ Emojisine tıklıyarak işlemi iptal edebilirsiniz `).then(async m => {
   	 m.react('✅').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '✅' &&  message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
    m.edit(`**${isim}** isminde bulunan ${message.guild.members.cache.filter(s => !s.user.bot).filter(member => member.user.username.includes(`${isim}`)).size} kişi aşağıda sıralanmıştır \n\n${message.guild.members.cache.filter(s => !s.user.bot).filter(member => member.user.username.includes(`${isim}`)).map(x => `<@${x.id}>`).join('\n')}`)
       })
    })
    await m.react('❌').then(r =>{ 

   const tamam = (reaction,user) => reaction.emoji.name == '❌' && user.id == message.author.id;
      const tamam2 = m.createReactionCollector(tamam)

   tamam2.on('collect', async (r)=>{
m.edit('işlem iptal edildi.')
      })
   })
 })
  
  
  

}
  exports.conf = {
    enabled:false,
    guildOnly: false,
    aliases: ["ara","ara"],
    permLevel: 0
}

exports.help = {
    name: 'ara',

}
