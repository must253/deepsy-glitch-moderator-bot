const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
let isim = args.slice(0).join(' ');
let tag = ayarlar.sunucu_tag
if(![ayarlar.boost_rol].some(thereynrole => message.member.roles.cache.get(thereynrole))) 
return message.channel.send(new Discord.MessageEmbed().setDescription(`${message.author} Komutu kullanmak için sunucumuza boost basmalısın.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp())

if(!isim) return message.channel.send(new Discord.MessageEmbed().setTimestamp().setColor('BLACK').setDescription(`Bir İsim Belirtmelisin.`))

  message.guild.members.cache.get(message.author.id).setNickname(`${tag} ${isim}`)

return message.channel.send(new Discord.MessageEmbed().setDescription(`<@${message.author.id}> Kullanıcı adın \`${tag} ${isim}\` olarak değistirildi.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp())


//.then(x => x.delete({timeout: 5000}));
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bisim'],
    permLevel: 0
}
 
exports.help = {
    name: 'bisim',
    description: '.',
    usage: 'bisim'
}