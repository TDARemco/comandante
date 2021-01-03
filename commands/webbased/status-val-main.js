const discord = require("discord.js");
module.exports = {
    name: 'statusvalmain',
    category: 'status',
    description: 'statusvalmain',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Valorant - MainTeam")
            .setDescription(`[HighElo Only] Apply here by using this link:
            https://shorturl.at/erwDY`)
            .setFooter("Status: Applications temporarily Open")
            .setColor("#D4AF37")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
