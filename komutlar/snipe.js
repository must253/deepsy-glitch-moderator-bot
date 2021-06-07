
const discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {

       
const snipemesaj = db.get(`snipe.${message.guild.id}.${message.channel.id}`)
const snipekişi = db.get(`snipek.${message.guild.id}.${message.channel.id}`)
const snipesaat = db.get(`snipesaat.${message.guild.id}.${message.channel.id}`)

     
    if(!snipemesaj) {

                message.channel.send(new discord.MessageEmbed()

                      .setColor("RANDOM")

                      .setFooter(`${client.user.username}`, message.author.avatarURL({dynamic:true}))

                      .setDescription(`Herhangi bir mesaj bulunamadı.`))

      return;

    }
     
             const { MessageEmbed } = require('discord.js')

  
   message.inlineReply(new MessageEmbed()

                      .setColor("RANDOM")

                      //.setColor(message.guild.member(message.author).highestRole.hexColor)

                      .setFooter(`${message.author.tag} Tarafından istendi!`, message.author.avatarURL({dynamic:true}))

                      .setDescription(`\`• Mesajı Yazan:\` <@${snipekişi}> (${snipekişi})
                      \`• Mesajın Silinme Tarihi:\` ${snipesaat}
                      \`• Mesaj İçeriği :\` ${snipemesaj}`))
  
  
  
   
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: [],
  permlevel: 0
}
exports.help = {
  name: 'snipe'
}
