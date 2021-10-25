exports.run = async (client, message) => {
  
  
  message.channel.messages.fetch().then(messages=> {
    
    if(!message.member.hasPermission("BAN_MEMBERS"))  return message.react('x')

const botlar = messages.filter(msg=> msg.author.bot) 
message.channel.bulkDelete(botlar)
    message.delete({timeout: 1500})
message.react(`${client.emojiler.evet}`)
  
  message.reply(` **${messages.filter(msg=> msg.author.bot).size}** adet bot mesajı başarıyla silindi <:deepsy_ok:${client.emojiler.evet}>`).then(msg => msg.delete({timeout: 1500}));})
  
  };

exports.conf = {
		enabled: true,
		guildOnly: false,
		aliases: ['must'],
		permLevel: 0
	};
	  
	exports.help = {
		name: 'must',
		description: 'mat',
		usage: 'mst sorusu sorar.',
    
	};
