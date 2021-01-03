const discord = require("discord.js");
module.exports = {
    name: 'statuscsgo',
    category: 'status',
    description: 'statuscsgo',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("CSGO")
            .setDescription(`Apply here by using this link:
            https://bit.ly/2YgrmH8`)
            .setFooter("Status: Applications Open")
            .setColor("#70ff63")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
