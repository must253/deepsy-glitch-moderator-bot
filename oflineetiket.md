client.on('message', message => {
if(client.bot) return

 const user = message.mentions.users.first();
    const ben = message.author.username
    if(user)
      {
        let offlineetiket = db.fetch(`offline_${message.guild.id}`)
        
        const paras = new Discord.MessageEmbed()

        .setDescription(`[Mesaja gitmek için tıkla](${message.url})`)
        .setAuthor(`${ben}, ${message.guild.name} Sunucusunda ${message.channel.name} kanalında sizi etiketledi.`, message.author.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
        const kanalid = message.channel.id
        const statu = user.presence.status
  if(statu === 'offline')
    {
      return user.send(paras)
      
    }

        
      }

  }); 
