const discord = require("discord.js");
module.exports = {
    name: 'INFO2',
    category: 'server',
    description: 'INFO2',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Regels Nederlands")
            .setDescription(`    
            **1.** Heb respect voor iedereen in deze discord

            **2.** Geen racisme/discriminerend

            **3.** Geen intimidatie in deze chat

            **4.** No Spamming`)
            .setColor("#4EF0E8")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
