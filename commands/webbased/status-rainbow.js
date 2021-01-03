const discord = require("discord.js");
module.exports = {
    name: 'statusrainbow',
    category: 'status',
    description: 'statusrainbow',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Rainbow")
            .setDescription(`Apply here by using this link:
            https://bit.ly/2CIBlgX`)
            .setFooter("Status: Applications Open")
            .setColor("#70ff63")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
