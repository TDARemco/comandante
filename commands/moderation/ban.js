const Discord = require("discord.js");
module.exports= {
  name: 'ban',
  category: 'moderation',
  description: 'ban a members',
  run: async(client,message,args,guild) => {
    let banned = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");

      message.delete().catch(err => console.log(err));

    if (!banned) {
      let baninfoembed = new Discord.MessageEmbed()
        .setTitle("Command: ban")
        .setDescription(
          `**Description:** Ban a member, optional time limit. \n` +
            "**Sub Commands:**\n" +
            "-ban save | Ban a user and save their messages in chat. \n" +
            "**Usage:**\n" +
            "-ban [user] (limit) (reason) \n" +
            "-ban save [user] (limit) (reason) \n" +
            "**Examples:** \n" +
            "-ban <@597253939469221891> 48h spam \n" +
            "-ban save <@597253939469221891> 48h spam "
        )
          .setColor("#9614c9")
      message.channel.send(baninfoembed);
  
      return;
    }
  
    if (message.author === banned) {
      let sanctionyourselfembed = new Discord.MessageEmbed()
          .setTitle(`Avoc Strafcenter`)
          .setDescription(`Je kan je zelf niet straffen!`)
          .setColor("#9614c9")
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
        let noreasonembed = new Discord.MessageEmbed()
        .setTitle(`Avoc Strafcenter`)
        .setDescription(`Waarom is deze persoon stout?`)
        .setColor("#9614c9")
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("BAN_MEMBERS")) {
        let nopermsembed = new Discord.MessageEmbed()
        .setTitle(`Avoc Strafcenter`)
        .setDescription(
          "Je kunt deze spreuk nog niet uitvoeren, even oefenen dus!"
        )
          .setColor("#66f3c9")
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
          .setDescription(
            "Je kunt deze spreuk nog niet uitvoeren, even oefenen dus!"
        )
          .setColor("#66f3c9")
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.members.ban(banned, { reason: reason });
  
    let successfullyembed = new Discord.MessageEmbed()
        .setColor("#a539a8")
        .setTitle(`${banned.tag} Youuuuuu have been banned`)
        .setDescription(`**Banned user:** ${banned.tag}
        **Banned by:** ${message.author}
        **Reason:** ${reason}`)
        .setThumbnail("https://cdn.discordapp.com/attachments/773961994217979905/794685850373455902/464-4641772_glitchtale-ban-hammer-hd-png-download.png")
        .setImage("https://cdn.discordapp.com/attachments/773961994217979905/794684659685392384/tenor.gif")
  
    message.channel.send(successfullyembed);
  }
}
