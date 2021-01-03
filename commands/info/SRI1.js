const discord = require("discord.js");
module.exports = {
    name: 'INFO1',
    category: 'server',
    description: 'INFO1',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Rules English")
            .setDescription(`    
            **1.** Have respect for everyone in this Discord

            **2.** No racism/discriminating

            **3.** No Harassment talking in chat

            **4.** No Spamming`)
            .setColor("#4EF0E8")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
