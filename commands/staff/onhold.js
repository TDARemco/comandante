const Discord = require("discord.js");
module.exports = {
    name: 'onhold',
    category: 'announcements',
    description: 'onhold',
    run: async (bot, message, args) => {

        const discord = require("discord.js");

            const sayMessage = args.join(" ");
            let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!dUser) return message.channel.send("Can't find user!")
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You can't you that command!")
            let dMessage = args.join(" ").slice(22);
            let successfullyembed = new Discord.MessageEmbed()
            message.delete().catch(err => console.log(err));

            var botIcon = bot.user.displayAvatarURL;

            var botEmbed = new discord.MessageEmbed()
                .setTitle("SOLAR - APPLICATIONS")
                .setDescription(`we have some questions for you about your application. We would like to ask these questions in a voice conversation. Join the waiting room as soon as you have time. If you have any questions, you can create a ticket in ask-for-help. Your application will not be accepted until this conversation between us has taken place.

                                 **Applicant:** ${dUser}
                                 **Reviewed By:** ${message.author}`)
                .setColor("#f5d442")
                .setThumbnail("https://icons.iconarchive.com/icons/elegantthemes/beautiful-flat/48/cone-icon.png")

            dUser.send(`${dUser} a application status update by ${message.author}
        we have some questions for you about your application. We would like to ask these questions in a voice conversation. Join the waiting room as soon as you have time. If you have any questions, you can create a ticket in ask-for-help. Your application will not be accepted until this conversation between us has taken place.

        Notes made by ${ message.author}: ${dMessage}`)

            message.author.send(`${message.author} You have rejected ${dUser} application`)

            return message.channel.send(botEmbed);
        }
}