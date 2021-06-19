exports.run = async (client ,message, args) =>{

const target = message.mentions.users.first() || message.author; // Grab the target.

const user = await client.discordVoice.fetch(target.id, message.guild.id); // Selects the target from the database.

if (!user) return message.channel.send("Seems like this user does not have any Voice Activity so far...")
  message.channel.send(`> **${target.tag}** currently has ${user.data.voiceTime.total}ms of Total Voice Time!`); // We show the voice time. (OPTIONAL: You can also use the ms package here if you want it to be more concise.)

  
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