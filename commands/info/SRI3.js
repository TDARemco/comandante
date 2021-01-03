const discord = require("discord.js");
module.exports = {
    name: 'INFO3',
    category: 'server',
    description: 'INFO3',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Join de stream gezellig!")
            .setDescription(`    
             Kom gezellig de stream in,
             Volg me alvast, Dit kan je hier doen: https://www.twitch.tv/1avoc1
             
             Wil je gezellig met vrienden gamen in mijn discord?
             Dit is een invite link: https://discord.gg/w2dJ3n5tTR
             
             Voel je vrij om je vrienden te invite in mijn discord!`)
            .setColor("#4EF0E8")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
