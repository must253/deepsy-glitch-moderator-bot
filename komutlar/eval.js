const Discord = require('discord.js');
const client = new Discord.Client();
const conf = require('../ayarlar.json');
const db = require("quick.db");
const Levels = require("discord-xp");
const Levels2 = require("discord-xp");



exports.run = function(client, message, args ,msg) { 
  
  

if(message.author.id !== "638324859818213380") return message.channel.send("Bu Komutu Sadece Must Kullanabilir") ;
  if (!args[0] || args[0].includes('token') || args[0].includes('discordVoice') || args[0].includes('process.env.mongodb')||args[0].includes('token2') || args[0].includes('token3')||args[0].includes('token4')) return message.channel.send("Kod belirtilmedi `" + this.help.name + "`__`<kod>`__")
  
	const code = args.join(' ');
	function clean(text) {
		if (typeof text !== 'string')
			text = require('util').inspect(text, { depth: 0 })
		text = text
			.replace(/`/g, '`' + String.fromCharCode(8203))
			.replace(/@/g, '@' + String.fromCharCode(8203))
		return text;
	};
    try {
		  var evaled = clean( eval(code));
      if(evaled.match(new RegExp(`${client.token}`, 'g'))) evaled.replace("token", "Yasaklı komut").replace(client.token, "Yasaklı komut").replace("mongodb", "Yasaklı komut").replace(process.env.mongodb, "Yasaklı komut");
		  message.channel.send(`${evaled.replace(client.token, "Yasaklı komut").replace(process.env.mongodb, "Yasaklı komut")}`, {code: "js", split: true});
    } catch(err) { message.channel.send(err, {code: "js", split: true}) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Ping/Pong komutu. Bunun ne işe yaradığını merak ediyorum?',
  usage: 'eval'
};