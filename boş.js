client.on("userUpdate", async (oldUser, newUser) => {
  
const tag_kanal = "TAG_ALINCA_YAZILACAK_LOG"
const sunucu_tag = "TAG"
const taglı_rol = "TAGLI_ROL"
const sunucu_id = "SUNUCU_ID"


const taglılar =  client.guilds.cache.get(sunucu_id).members.cache.filter(s => !s.user.bot).filter(member => member.user.username.includes(sunucu_tag)).size;



const sunucu = client.guilds.cache.get(sunucu_id)

//Tag alındığında rol verilir...


const tagı_kaldırdı = new Discord.MessageEmbed()
.setDescription(`** <@${newUser.id  }> Tagımızı ( \`${sunucu_tag}\`)  bırakarak aramızdan ayrıldı! <@&taglı_rol> Rolü geri alındı!**`)
.setTimestamp()
.setFooter('')
.setColor('RANDOM')

if (!newUser.username.includes(sunucu_tag) && sunucu.members.cache.get(newUser.id).roles.cache.has(taglı_rol)) {
 sunucu.members.cache.get(newUser.id).roles.remove(taglı_rol);
  
      client.channels.cache.get(tag_kanal).send(tagı_kaldırdı);

}})




