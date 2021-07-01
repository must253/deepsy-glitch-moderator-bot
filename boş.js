client.on("userUpdate", async (oldUser, newUser) => {
  
const tag_kanal = "TAG_ALINCA_YAZILACAK_LOG"
const sunucu_tag = "TAG"
const taglı_rol = "TAGLI_ROL"
const sunucu_id = "SUNUCU_ID"


const taglılar =  client.guilds.cache.get(sunucu_id).members.cache.filter(s => !s.user.bot).filter(member => member.user.username.includes(sunucu_tag)).size;



const sunucu = client.guilds.cache.get(sunucu_id)

//Tag alındığında rol verilir...


const tagı_aldı = new Discord.MessageEmbed()
.setDescription(`**Eski İsmi => ${oldUser.username}, Yeni İsmi => ${newUser.username} Tagımızı ( \`${sunucu_tag}\`) alarak aramıza katıldı! <@&${taglı_rol}> Rolüne sahip oldu! Sunucuda Toplam ${taglılar} Taglı Bulunuyor **`)
.setTimestamp()
.setFooter('')
.setColor('RANDOM')

if(oldUser.username !== newUser.username) {
if(newUser.username.includes(sunucu_tag) && !sunucu.members.cache.get(newUser.id).roles.cache.has(taglı_rol)) {
 sunucu.members.cache.get(newUser.id).roles.add(taglı_rol);
   client.channels.cache.get(tag_kanal).send(tagı_aldı);

}}})