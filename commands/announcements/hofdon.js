﻿const Discord = require("discord.js");
module.exports = {
    name: 'hitlist',
    category: 'announcements',
    description: 'hitlist',
    run: async (bot, message, args) => {

        const discord = require("discord.js");

            const sayMessage = args.join(" ");
            let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!dUser) return message.channel.send("Kan deze gebruiker niet vinden")
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Dit mag jij niet gebruiken! Foei.")
            let dMessage = args.join(" ").slice(22);
            let successfullyembed = new Discord.MessageEmbed()
            message.delete().catch(err => console.log(err));
            message.channel.send(sayMessage);

            var botIcon = bot.user.displayAvatarURL;

            var botEmbed = new discord.MessageEmbed()
                .setTitle("HITLIST - COMANDANTE")
                .setDescription(`MARKED PERSON

                                 Je hebt een speler toegevoegd aan de hitlist
                                 hij moet vanaf nu goed opletten!

                                 **Door:** ${dUser}
                                 **Speler:** ${dMessage}`)
                .setFooter("Reageer zodra dit afgerond is met ✅")
                .setColor("#75178f")
                .setThumbnail("https://cdn.discordapp.com/attachments/795329507539943425/795346575232466984/lorenzoicon.png")
                .setImage("https://cdn.discordapp.com/attachments/795329507539943425/795346921979379712/gunpng.png")


            return message.channel.send(botEmbed);
        }
}