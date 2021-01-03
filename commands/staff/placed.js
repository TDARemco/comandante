const Discord = require("discord.js");
module.exports = {
    name: 'placed',
    category: 'announcements',
    description: 'placed',
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
                .setTitle("APPLICATION - PLACED")
                .setDescription("> Congratulations! You are hereby officially placed in to a team. You are added into a new chat down bellow the voice channels. You will also be tagged in this chat. Please read the information and follow the steps in there.")
                .setColor("#67f5c6")
                .setThumbnail("https://icons.iconarchive.com/icons/inipagi/business-economic/48/team-work-icon.png")

            dUser.send(`Hey ${dUser} a application status update ${dMessage}
        > Congratulations!
        
        > You are hereby officially placed in to a team.
        > You are added into a new chat down bellow the voice channels.

        > You will also be tagged in this chat. Please read the information and follow the steps in there.`)

            message.author.send(`${message.author} Placed ${dUser} in a team`)

            return message.channel.send(botEmbed);
        }
}