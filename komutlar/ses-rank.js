exports.run = async (client ,message, args) =>{

const target = message.mentions.users.first() || message.author; // Grab the target.

const user = await client.discordVoice.fetch(target.id, message.guild.id); // Selects the target from the database.

if (!user) return message.channel.send("Seems like this user does not have any Voice Activity so far...")
  
  if (user.data.voiceTime.total === undefined) return message.channel.send("Seems like this user does not have any Voice Activity so far...");
  
  const dk = user.data.voiceTime.total / 60000
  
  message.channel.send(`> **${target.tag}** Şu Anda Toplam  ${dk} Dakika Ses Süresine sahip!`); // We show the voice time. (OPTIONAL: You can also use the ms package here if you want it to be more concise.)

  
}
  
  exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'ses-rank', 
 description: 'ses-rank',
 usage: 'ses-rank' 
};