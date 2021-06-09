const Discord = require("discord.js");
const Levels = require('discord-xp')
const canvacord = require("canvacord")
const conf = require("../ayarlar.json")

exports.run = async (client, message, args) => {
	let target = message.mentions.users.first() || client.users.cache.get(args[0]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
  let uye = message.guild.member(target);
  const user = await Levels.fetch(target.id, message.guild.id); 
  if (!user) return message.channel.send(":no_entry_sign: Rank kartına bakmak için biraz sohbet et!");

  const req = Levels.xpFor(user.level +1);
  const level = user.level;
  const rank = new canvacord.Rank()
  .registerFonts()
  .setAvatar(target.displayAvatarURL({ format: "png" }))
  .setCurrentXP(user.xp)
  .setRequiredXP(req)
  .setRank(0, "Level", false)
  .setStatus(target.presence.status)
  .setLevel(level)
  .setBackground("IMAGE", "https://cdn.glitch.com/c23f18b0-2c2f-4cf2-8bdc-1bb5fae995b2%2Fabstract-banner-background-with-red-shapes_1361-3348.jpg?v=1620838697944`")
  .setUsername(target.username)
  .setDiscriminator(target.discriminator)
  .setProgressBar("#FFFFFF", "COLOR")

  rank.build()
  .then(data => {
      const attachment = new Discord.MessageAttachment(data, "mustxp.png");
      message.inlineReply(attachment);

      
      
  });
};
exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: [],

  permLevel: 0

};

exports.help = {

  name: 'rank'

};