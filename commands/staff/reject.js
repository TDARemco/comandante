const Discord = require("discord.js");
module.exports = {
    name: 'reject',
    category: 'announcements',
    description: 'reject',
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
                .setTitle("SOLAR - APPLICATIONS")
                .setDescription(`Unfortunately your application has been rejected. There are many reasons for rejections, though in many cases it is because we found your drive lacking on this occasion. If you have any questions or want to know exact reasons why your application has been rejected, please contact the staff team. The easiest way to do this is by creating a ticket or by joining the voice support waiting room. You can always make a new application once you have received your feedback, and it often works out well!

                                 **Applicant:** ${dUser}
                                 **Rejected By:** ${message.author}`)
                .setColor("#e67070")
                .setFooter(`${dMessage}`)
                .setThumbnail("https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/48/caution-icon.png")

            dUser.send(`${dUser} a application status update by ${message.author}
        Your application has been rejected.
        There are many reasons for rejections,
        Though in many cases it is because we found your drive lacking on this occasion.

        If you have any questions or want to know exact reasons why your application has been rejected,
        then please contact the staff team. The easiest way to do this is by creating a ticket or by joining the voice support waiting room.
        You can always make a new application once you have received your feedback, and it often works out well!

        Notes made by ${ message.author}: ${dMessage}`)

            message.author.send(`${message.author} You have rejected ${dUser} application`)

            return message.channel.send(botEmbed);
        }
}