
  
  
  
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
  
 
   message.channel.send('<@'+ user.id + '> Kişisini **'+ sebep+ '** Sebebiyle banlamak istediğine eminmisin ?' , { component: row }).then(async m => {

   client.on('clickButton', async (button) => {
      
     if(button.clicker.user.id === message.author.id){
     
     if (button.id === 'evet') {
m.delete()
await button.reply.send('Banlandı ', true); //ephemeral message
         
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

      }
        if (button.id === 'hayır') {
          const embed2 = new Discord.MessageEmbed().setDescription('Banlanma işlemi iptal edildi ')
             	m.delete()
await button.reply.send('Banlanma işlemi iptal edildi '); 
         

        } }
     
     if(button.clicker.user.id === !message.author.id){
               

       await button.reply.send('Yazan kişi sen değilsin', true);
       
       
     }


  
})



 })