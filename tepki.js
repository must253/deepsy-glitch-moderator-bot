//tepki rol
let reactions = require("./reactions");

client.on("ready", function() {
  reactions.forEach(e => {
    client.guilds.cache
      .get(e.sunucu)
      .channels.cache.get(e.kanal)
      .messages.fetch(e.mesaj)
      .then(mesaj => {
        mesaj.react(e.emojiid);
      });
  });
});

client.on("messageReactionAdd", (messageReaction, user) => {
  if (!user.bot) {
    let member = messageReaction.message.guild.member(user);
    reactions.forEach(async rs => {
      if (rs.mesaj === messageReaction.message.id) {
        if (messageReaction.emoji.id === rs.emojiid) {
          if (!member.roles.cache.has(rs.rol)) {
            member.roles.add(rs.rol);
          }
        }
      }
    });
  }
});

client.on("messageReactionRemove", (messageReaction, user) => {
  if (!user.bot) {
    let member = messageReaction.message.guild.member(user);
    reactions.forEach(async rs => {
      if (rs.mesaj === messageReaction.message.id) {
        if (messageReaction.emoji.id === rs.emojiid) {
          if (member.roles.cache.has(rs.rol)) {
            member.roles.remove(rs.rol);
          }
        }
      }
    });
  }
});


//tepki rol