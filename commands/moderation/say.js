const discord = require("discord.js");
module.exports = {
    name: 'say',
    category: 'staff',
    description: 'say',
    run: async (bot, message, args, guild) => {

        message.delete().catch(err => console.log(err));

        var botIcon = bot.user.displayAvatarURL;
        var botEmbed = new discord.MessageEmbed()
        const sayMessage = args.join(" ");
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Je kunt deze spreuk nog niet uitvoeren, even oefenen dus!")
        let dMessage = args.join(" ").slice(22);
        let successfullyembed = new discord.MessageEmbed()
        message.delete().catch(err => console.log(err));
        message.channel.send(sayMessage);

    }
}