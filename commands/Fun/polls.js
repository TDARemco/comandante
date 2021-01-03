const Discord = require("discord.js");
module.exports = {
    name: 'vote',
    category: 'announcements',
    description: 'vote',
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
                .setTitle("EWA - VOTE")
                .setDescription(`${dMessage}
                                 
                                 **Posted By:** ${message.author}`)
                .setColor("#71deeb")
                .setFooter("React on this message to vote")
                .setThumbnail("https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-6/48/polls-icon.png")

            dUser.send(`${dUser} A poll has been made by ${message.author}
            poll made by ${ message.author}: ${dMessage}`)

            return message.channel.send(botEmbed);
        }
}