const discord = require("discord.js");
module.exports = {
    name: 'statuslolmain',
    category: 'status',
    description: 'statuslolmain',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("League of Legends - MainTeam")
            .setDescription(`[HighElo only] Apply here by using this link:
            https://shorturl.at/ikmuJ`)
            .setFooter("Status: Applications temporarily Open")
            .setColor("#D4AF37")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
