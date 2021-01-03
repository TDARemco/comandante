const Discord = require("discord.js");
module.exports= {
  name: 'kick',
  category: 'moderation',
  description: 'kick a members',
  run: async(client,message,args,guild) => {

    let kicked = message.mentions.users.first() || client.users.resolve(args[0]);
    let reason = args.slice(1).join(" ");
  
    // MESSAGES

      message.delete().catch(err => console.log(err));
  
    if (!kicked) {
      let kickinfoembed = new Discord.MessageEmbed()
        .setTitle("Command: kick")
        .setDescription(
          `**Description:** Kick a member. \n` +
            "**Sub Commands:**\n" +
            "\n" +
            "**Usage:**\n" +
            "-kick [user] (reason) \n" +
            "**Examples:** \n" +
            "-kick <@597253939469221891> spam"
        )
          .setColor("#66f3c9");
      message.channel.send(kickinfoembed);
  
      return;
    }
  
    if (message.author === kicked) {
        let sanctionyourselfembed = new Discord.MessageEmbed()
           .setTitle(`EWA Punishment`)
           .setDescription(`You cannot sanction yourself`)
           .setColor("#66f3c9");
      message.channel.send(sanctionyourselfembed);
  
      return;
    }
  
    if (!reason) {
      let noreasonembed = new Discord.MessageEmbed()
        .setDescription(`Enter a reason`)
        .setColor("#66f3c9")
        .setTitle(`EWA Punishment`)
      message.channel.send(noreasonembed);
  
      return;
    }
  
    if (!message.member.permissions.has("KICK_MEMBERS")) {
      let nopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "You do not have permission `KICK MEMBERS` contact an administrator"
        )
          .setColor("#66f3c9");
      message.channel.send(nopermsembed);
  
      return;
    }
  
    if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
      let botnopermsembed = new Discord.MessageEmbed()
        .setDescription(
          "I do not have `KICK MEMBERS` permission, please contact an administrator"
        )
          .setColor("#66f3c9");
      message.channel.send(botnopermsembed);
  
      return;
    }
  
    message.guild.member(kicked).kick(reason);
  
    let successfullyembed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle(`${kicked.tag} has been successfully kicked.`)
        .setDescription(`Kicked user: ${kicked.tag}
        Kicked by: ${message.author}
        Reason: ${reason}`)

    message.channel.send(successfullyembed);

  }
}
