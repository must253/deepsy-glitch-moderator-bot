client.on("userUpdate", async (oldUser, newUser, msg) => {
  
const tag_kanal = "TAG_ALINCA_YAZILACAK_LOG"
const sunucu_tag = "TAG"
const taglı_rol = "TAGLI_ROL"
const sunucu_id = "SUNUCU_ID"
const taglılar = members.filter(s => !s.user.bot).filter(member => member.user.username.includes(sunucu_tag)).size;

//Tag alındığında rol verilir...


const tagı_aldı = new Discord.MessageEmbed()
.setDescription(`**Eski İsmi => ${oldUser.username}, Yeni İsmi => ${newUser.username} Tagımızı ( \`${sunucu_tag}\`) alarak aramıza katıldı! <@&${sunucu_tag}> Rolüne sahip oldu! Sunucuda Toplam **`)
.setTimestamp()
.setFooter('')
.setColor('RANDOM')

if(oldUser.username !== newUser.username) {
if(newUser.username.includes() && !client.channels.cache.get(sunucu_id).members.cache.get(newUser.id).roles.cache.has(tag_rolü_id)) {
 client.guilds.cache.get(sunucu_id).members.cache.get(newUser.id).roles.add(tag_rolü_id);
   client.channels.cache.get(sunucu_id).send(tagı_aldı);

}