const Discord = require("discord.js");
module.exports = {
    name: 'acceptacademy',
    category: 'announcements',
    description: 'acceptacademy',
    run: async (bot, message, args) => {

        const discord = require("discord.js");

            const sayMessage = args.join(" ");
            let dUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if (!dUser) return message.channel.send("Can't find user!")
            if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't you that command!")
            let dMessage = args.join(" ").slice(22);
            let successfullyembed = new Discord.MessageEmbed()
            message.delete().catch(err => console.log(err));
            message.channel.send(sayMessage);

            var botIcon = bot.user.displayAvatarURL;

            var botEmbed = new discord.MessageEmbed()
                .setTitle("ACADEMY APPLICATION - ACCEPTED")
                .setDescription("> Congratulations! You are hereby officially accepted as an academy member! We will start looking for a team for you in short order, but for now you have access to all our channels and voice channels. Once we have found a team for you, we will let you know. Do you have questions? The easiest way get help is by creating a ticket or by joining the voice support waiting room.")
                .setColor("#ccb26c")
                .setImage("https://icons.iconarchive.com/icons/oxygen-icons.org/oxygen/48/Categories-applications-education-university-icon.png")
                .setFooter("Official academy application")

            dUser.send(`Hey ${dUser} a application status update ${dMessage}
        > Congratulations!
        
        > You are hereby officially accepted as an academy member!
        > We will start looking for a team for you in short order, but for now you have access to all our channels and voice channels.
        > Once we have found a team for you, we will let you know.

        > Do you have questions?
        > The easiest way to do this is by creating a ticket or by joining the voice support waiting room.`)


            message.author.send(`${message.author} You have accepted ${dUser} as a member`)

            return message.channel.send(botEmbed);
        }
}