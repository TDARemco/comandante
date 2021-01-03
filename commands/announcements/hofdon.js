const Discord = require("discord.js");
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
                .setThumbnail("https://icons.iconarchive.com/icons/aha-soft/desktop-halloween/64/Hatchet-icon.png")
                .setImage("https://cdn.discordapp.com/attachments/781588863285461012/795342669496320080/62fa3085ebe3c6a5895795eff7349f54.gif")


            return message.channel.send(botEmbed);
        }
}