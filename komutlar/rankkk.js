const Levels = require("discord-xp");


exports.run = async (client, message) => {

  
  
const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5); // We grab top 10 users with most xp in the current server.

if (rawLeaderboard.length < 1) return reply("Henüz skor tablosunda kimse yok.");

const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.
  

const target = message.mentions.users.first() || message.author; // Grab the target.

const user = await Levels.fetch(target.id, message.guild.id); // Selects the target from the database.

if (!user) return message.channel.send("Görünüşe göre bu kullanıcı şimdiye kadar hiç xp kazanmamış."); // If there isnt such user in the database, we send a message in general.

message.channel.send(`> **${target.tag}** Şuanki Seviyen ${user.level} Şuanki XP Sayın ${user.xp.toLocaleString()}.`); // We show the level.
  
}
	exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['rankkk'],
		permLevel: 4,
    kategori: "ayarlar",
	};
	  
	exports.help = {
		name: 'rankkk',
		description: 'Küfür engelleme sistemini açıp kapatmanızı sağlar.',
		usage: 'rankkk',
    
	};