//reaction rol 3 tane 

{

//tepki rol

      const  sunucu =  '842418432905183242'
     const   kanal = '844162105841156096'
      const  mesaj = '857947006882152468'
       const emojiid = '842729099839668244'
      const  rol = '844167402014507008'
    
      const  sunucu2 = '842418432905183242'
       const kanal2 = '844162105841156096'
       const mesaj2 = '857947006882152468'
      const  emojiid2 = '842814045693542430'
      const  rol2 = '844171087163424788'
   
  
       const sunucu3 = '842418432905183242'
      const  kanal3 = '844162105841156096'
      const  mesaj3 = '857947006882152468'
       const emojiid3 = '842729024274563072'
       const rol3 = '844171187957530624'
    

client.on("ready", function() {
    client.guilds.cache
      .get(sunucu)
      .channels.cache.get(kanal)
      .messages.fetch(mesaj)
      .then(mesaj => {
        mesaj.react(emojiid);
      });
});

client.on("messageReactionAdd", (messageReaction, user) => {
  if (!user.bot) {
    let member = messageReaction.message.guild.member(user);
      if (mesaj === messageReaction.message.id) {
        if (messageReaction.emoji.id === emojiid) {
          if (!member.roles.cache.has(rol)) {
            member.roles.add(rol);
          }
        }
      }
  
  }
});

client.on("messageReactionRemove", (messageReaction, user) => {
  if (!user.bot) {
    let member = messageReaction.message.guild.member(user);

      if (mesaj === messageReaction.message.id) {
        if (messageReaction.emoji.id === emojiid) {
          if (member.roles.cache.has(rol)) {
            member.roles.remove(rol);
          }
        }
      }

  }
});


//tepki rol


//tepki rol

client.on("ready", function() {
    client.guilds.cache
      .get(sunucu2)
      .channels.cache.get(kanal2)
      .messages.fetch(mesaj2)
      .then(mesaj => {
        mesaj.react(emojiid2);
      });
});

client.on("messageReactionAdd", (messageReaction, user) => {
  if (!user.bot) {
    let member = messageReaction.message.guild.member(user);

      if (mesaj === messageReaction.message.id) {
        if (messageReaction.emoji.id === emojiid2) {
          if (!member.roles.cache.has(rol2)) {
            member.roles.add(rol2);
          }
        }
      }
  }
});

client.on("messageReactionRemove", (messageReaction, user) => {
  if (!user.bot) {
    let member = messageReaction.message.guild.member(user);
    if (mesaj === messageReaction.message.id) {
        if (messageReaction.emoji.id === emojiid2) {
          if (member.roles.cache.has(rol2)) {
            member.roles.remove(rol2);
          }
        }
      }
  }
});


//tepki rol



//tepki rol

client.on("ready", function() {
    client.guilds.cache
      .get(sunucu3)
      .channels.cache.get(kanal3)
      .messages.fetch(mesaj3)
      .then(mesaj => {
        mesaj.react(emojiid3);
      });
  });

client.on("messageReactionAdd", (messageReaction, user) => {
  if (!user.bot) {
    let member = messageReaction.message.guild.member(user);
    if (mesaj === messageReaction.message.id3) {
        if (messageReaction.emoji.id === emojiid3) {
          if (!member.roles.cache.has(rol3)) {
            member.roles.add(rol3);
          }
        }
      }
  }
});

client.on("messageReactionRemove", (messageReaction, user) => {
  if (!user.bot) {
    let member = messageReaction.message.guild.member(user);
      if (mesaj === messageReaction.message.id3) {
        if (messageReaction.emoji.id === emojiid3) {
          if (member.roles.cache.has(rol3)) {
            member.roles.remove(rol3);
          }
        }
      }
  }
});


//tepki rol


//reaction rol 3 tane 
}