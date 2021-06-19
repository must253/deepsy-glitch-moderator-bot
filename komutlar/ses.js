const Discord = require('discord.js')
const voice = require("../schemas/voiceInfo");
const moment = require("moment");
require("moment-duration-format");

  /**
   * @param { Client } client
   * @param { Message } message
   * @param { Array<String> } args
   */

  exports.run = async (client, message, args) => {
    const channel = message.guild.channels.cache.get(args[0]);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    if (channel) {
      const data = await voice.find({}).sort({ date: -1 });
      message.channel.send(new Discord.MessageEmbed().setDescription(`
${channel} adlı ses kanalındaki kullanıcıların bilgileri aşağıda verildi.

${channel.members.map((x) => `${x.toString()} • \`${data.find((u) => u.userID === x.user.id) ? moment.duration(Date.now() - data.find((u) => u.userID === x.user.id).date).format("H [saat], m [dakika], s [saniye]") : "Ses bilgisi bulunmuyor."}\``).join("\n")}
      `));
    } else {
      if (!member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setDescription(`${member.toString()} adlı kullanıcı ses kanalında bulunmuyor.`));

      const data = await voice.findOne({ userID: member.user.id });
      message.channel.send(new Discord.MessageEmbed().setDescription(`
${member.toString()} adlı kullanıcı ${member.voice.channel} ses kanalında bulunuyor.

Mikrofon: ${member.voice.mute ? `\`Kapalı\`` : `\`Açık\``}
Kulaklık: ${member.voice.deaf ? `\`Kapalı\`` : `\`Açık\``}

Süre: \`${data ? `${moment.duration(Date.now() - data.date).format("H [saat], m [dakika], s [saniye]")}` : ""} \`
      `));
    }
  },
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'ses', 
 description: 'reklam-engel',
 usage: 'ses' 
};
