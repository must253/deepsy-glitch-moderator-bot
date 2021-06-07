exports.run = async(client, message, args) => {

  
const weky = require('weky');

  
  let sebep = args.slice(0).join(' ')
    if (!sebep) return message.channel.send(`Tersine çevrilcek bir yazı yazmalısın.`) 
  
  
  message.channel.send(weky.flip(sebep));

  
  } 
exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases:[],
	permlevel: 0
};

exports.help = {
	name: "çevir"
}