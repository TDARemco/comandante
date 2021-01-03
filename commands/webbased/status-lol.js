const discord = require("discord.js");
module.exports = {
    name: 'statuslol',
    category: 'status',
    description: 'statuslol',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("League of Legends")
            .setDescription(`Apply here by using this link:
            https://bit.ly/328Q8Kw`)
            .setFooter("Status: Applications Open")
            .setColor("#70ff63")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
