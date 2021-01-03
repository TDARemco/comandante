const Discord = require("discord.js");
module.exports = {
    name: 'howsub',
    category: 'announcements',
    description: 'howsub',
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
                .setTitle("HALL OF GREAT WIZARDS")
                .setDescription(`YOUUU SHALL PASS

                                 Je hebt een heel moeilijke spell unlockt,
                                 Welkom bij de grootmeesters

                                 **Door:** ${dUser}
                                 **Bits:** 6 Maanden+`)
                .setFooter("Look into the crystal ball! 🔮")
                .setColor("#75178f")
                .setThumbnail("https://icons.iconarchive.com/icons/aha-soft/free-large-boss/48/Wizard-icon.png")
                .setImage("https://cdn.discordapp.com/attachments/773961994217979905/794691452554051634/tenor_1.gif")


            return message.channel.send(botEmbed);
        }
}