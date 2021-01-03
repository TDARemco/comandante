const discord = require("discord.js");
module.exports = {
    name: 'statusval',
    category: 'status',
    description: 'statusval',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Valorant")
            .setDescription(`Apply here by using this link:
            https://bit.ly/324RINy`)
            .setFooter("Status: Applications Open")
            .setColor("#70ff63")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
