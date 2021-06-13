const dc = require('discord.js');
exports.run = async(client, message, args) => {
const embed = new dc.MessageEmbed()
.setColor("RANDOM")
.setFooter(`${message.author.tag} istedi`, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
  message.channel.send(embed.setDescription("Ping değerim hesaplanıyor lütfen bekleyiniz. %20"))
  .then(a => {
    setTimeout(function(){
      a.edit(embed.setDescription("Ping değerim hesaplanıyor lütfen bekleyiniz. %40"))
      .then(b => {
        setTimeout(function(){
          b.edit(embed.setDescription("Ping değerim hesaplanıyor lütfen bekleyiniz. %60"))
          .then(c => {
            setTimeout(function(){
              c.edit(embed.setDescription("Ping değerim hesaplanıyor lütfen bekleyiniz. %80"))
              .then(d => {
                setTimeout(function(){
                  d.edit(embed.setDescription("Ping değerim hesaplanıyor lütfen bekleyiniz. %100"))
                  .then(e => {
                    setTimeout(function(){
                      e.edit(embed.setDescription("Ping değerim hesaplanıyor lütfen bekleyiniz. %100 ."))
                      .then(f => {
                        setTimeout(function(){
                          f.edit(embed.setDescription("Ping değerim hesaplanıyor lütfen bekleyiniz. %100 .."))
                          .then(g => {
                            setTimeout(function(){
                              g.edit(embed.setDescription("Ping değerim hesaplanıyor lütfen bekleyiniz. %100 ..."))
                              .then(h => {
                                setTimeout(function(){
                                  h.edit(embed.setDescription(`Pingim: **${client.ws.ping}** ms!`))
                                }, 500)
                              })
                            }, 500)
                          })
                        }, 500)
                      })
                    }, 500)
                  })
                }, 1000)
              })
            }, 1000)
          })
        }, 1000)
      })
    }, 1000)
  })
};
exports.conf = {
  aliases: ['p'],
  permLevel: 0
};
exports.help = {
  name: "ping"
};