const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('Bu komutu kullanmak için gerekli yetkiye sahip değilsin')
    if(!args[0]) return message.channel.send("Kullanım şekli; **`*otorol kanal-ayarla/kanal-sıfırla/rol-ayarla/rol-sıfırla`**")
    if(args[0] === 'rol-ayarla') {
        var rol = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1])
        if(!rol) return message.channel.send('Bir rol ismi veya id si girmediniz')
        db.set(`${message.guild.id}_otorol`, rol.id)
        message.channel.send(`Otorol başarılı bir şekilde ${rol} olarak ayarlandı`)
    } else if(args[0] == 'rol-sıfırla') {
        if(!db.has(`${message.guild.id}_otorol`)) return message.channel.send('Zaten otorol ayarlanmamış'); else {
            db.delete(`${message.guild.id}_otorol`)
            message.channel.send('Otorol başarılı bir şekilde sıfırlandı')
        }
    } else if(args[0] === 'kanal-ayarla') {
        var kanal = message.mentions.channels.first()
        if(!kanal) return message.channel.send('Bir kanal etiketlemediniz'); else {
            db.set(`${message.guild.id}_otokanal`, kanal.id)
            message.channel.send(`Otorol kanal başarılı bir şekilde ${kanal} olarak ayarlandı`)
        }
    } else if(args[0] === 'kanal-sıfırla') {
        if(!db.has(`${message.guild.id}_otokanal`)) return message.channel.send('Zaten otorol kanal ayarlanmamış'); else {
            db.delete(`${message.guild.id}_otokanal`)
            message.channel.send('Otorol kanal başarılı bir şekilde sıfırlandı')
        }
    }
}
exports.conf = {
    aliases: ['oto-rol']
}
exports.help = {
    name: "otorol"
}