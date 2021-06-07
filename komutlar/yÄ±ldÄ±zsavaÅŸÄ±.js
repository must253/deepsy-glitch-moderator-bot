
const Discord = require('discord.js');const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');
exports.run = async (client, message, args) => {
  
  this.fighting = new Set();
  
	let must = message.mentions.users.first()
	if (!must) return message.reply("Oynamak istediğin kişiyi etiketlemelisin!")
  
  if (must.bot) return message.reply('Botlar ile oynayamazsın!');
  if (must.id === message.author.id) return message.reply('Kendin ile Yıldız Savaşı Atamazsın');
		if (this.fighting.has(message.channel.id)) return message.reply('Kanal başına sadece bir Yıldız Savaşı meydana gelebilir.');
		this.fighting.add(message.channel.id);
		try {
			if (!must.bot) {
                await message.channel.send(`${must}, Yıldız Savaşı isteği geldi. Yıldız Savaşını kabul ediyor musun? (\`evet\` veya \`hayir\` olarak cevap veriniz.)`);
				const verification = await verify(message.channel, must);
				if (!verification) {
					this.fighting.delete(message.channel.id);
					return message.channel.send(`Yıldız Savaşı kabul edilmedi...`);
				}
			}
			let userHP = 1000;
			let mustHP = 1000;
			let userTurn = false;
			let guard = false;
			const reset = (changeGuard = true) => {
				userTurn = !userTurn;
				if (changeGuard && guard) guard = false;
			};
			const dealDamage = damage => {
				if (userTurn) mustHP -= damage;
				else userHP -= damage;
			};
			const forfeit = () => {
				if (userTurn) userHP = 0;
				else mustHP = 0;
			};
			while (userHP > 0 && mustHP > 0) { // eslint-disable-line no-unmodified-loop-condition
				const user = userTurn ? message.author : must;
				let choice;
				if (!must.bot || (must.bot && userTurn)) {
					await message.channel.send(stripIndents`
						${user}, ne yapmak istersin? \`lazer\`, \`bariyer\`, \`yardım gemisi\`, veya \`kaç\`?
						**${message.author.username}**: ${userHP} :heartpulse:
						**${must.username}**: ${mustHP} :heartpulse:
					`);
					const filter = res =>
						res.author.id === user.id && ['lazer', 'bariyer', 'yardım gemisi', 'kaç'].includes(res.content.toLowerCase());
					const turn = await message.channel.awaitMessages(filter, {
						max: 1,
						time: 30000
					});
					if (!turn.size) {
						await message.reply(`Üzgünüm ama, süre doldu!`);
						reset();
						continue;
					}
					choice = turn.first().content.toLowerCase();
				} else {
					const choices = ['lazer', 'bariyer', 'yardım gemisi'];
					choice = choices[Math.floor(Math.random() * choices.length)];
				}
				if (choice === 'lazer') {
					const damage = Math.floor(Math.random() * (guard ? 100 : 250)) + 1;
					await message.channel.send(`${user}, TCG Enterprise gemisinin lazer topundan lazer ışını fırlattı ve **${damage}** hasar vurdu!`);
					dealDamage(damage);
					reset();
				} else if (choice === 'bariyer') {
					await message.channel.send(`${user},  2. komutan Spock'un yardımıyla tüm enerjiyi kalkanlarına yönlendirdi ve hasarı azalttı`);
					guard = true;
					reset(false);
				} else if (choice === 'yardım gemisi') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
						const damage = randomRange(100, guard ? 250 : 450);
						await message.channel.send(`${user}, TCG Pardus Yıldız Gemi'si imdadına yetişti ve onun desteğiyle **${damage}** hasar vurdun!!`);
						dealDamage(damage);
					} else {
						await message.channel.send(`${user}, TCG Pardus'un ışık hızı motorunda bir arıza meydana geldi ve yardımına gelemedi!`);
					}
					reset();
				} else if (choice === 'kaç') {
					await message.channel.send(`${user}, Yıldız Gemisinin tüm enerjisini Işık hızı motoruna enerjiyi yönlendirip savaştan kaçtı`);
					forfeit();
					break;
				} else {
					await message.reply('Ne yapmak istediğini anlamadım.');
				}
			}
			this.fighting.delete(message.channel.id);
            const winner = userHP > mustHP ? message.author : must;
			return message.channel.send(`Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${must.username}**: ${mustHP} :heartpulse:`);
		} catch (err) {
			this.fighting.delete(message.channel.id);
			throw err;
		}
  }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ys', 'uzaysavaşı', 'usvş','uzaysavaşıı'],
  permLevel: `Yetki gerekmiyor.`
};
exports.help = {
  name: 'ys',
  category: "eğlence",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'ys <@kullanıcı>'
};
