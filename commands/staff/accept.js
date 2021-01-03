const Discord = require("discord.js");
module.exports = {
    name: 'event',
    category: 'announcements',
    description: 'event',
    run: async (bot, message, args) => {

        const discord = require("discord.js");

            const sayMessage = args.join(" ");
            let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!dUser) return message.channel.send("Can't find user!")
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't you that command!")
            let dMessage = args.join(" ").slice(22);
            let successfullyembed = new Discord.MessageEmbed()
            message.delete().catch(err => console.log(err));
            message.channel.send(sayMessage);

            var botIcon = bot.user.displayAvatarURL;

            var botEmbed = new discord.MessageEmbed()
                .setTitle("EWA - EVENT")
                .setDescription(`Een nieuw event is geplanned

                                 **Door:** ${dUser}
                                 **Wanneer:** Datum`)
                .setFooter("Reageer met ✅ om je deelname aan te geven")
                .setColor("#6cf567")
                .setThumbnail("https://cdn.discordapp.com/attachments/777316504878317618/777905038768078868/EWA_Discord.png")

            return message.channel.send(botEmbed);
        }
}