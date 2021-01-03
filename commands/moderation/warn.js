const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "warn",
    category: "moderation",
    description: "Warn a user of your choice!",
    usage: "<User mention>",
    run: async (bot, message, args, guild) => {
        message.delete().catch(err => console.log(err));
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
            return message.channel.send(`Je kunt deze spreuk nog niet uitvoeren, even oefenen dus!`);
        let User = message.mentions.users.first() || null;

        if (User == null) {
            return message.channel.send(`Je moet je toverstaff wel op iemand richten!`);
        } else {
            let Reason = message.content.slice(bot.prefix + 22 + 7) || null;
            if (Reason == null) {
                return message.channel.send(
                    `Welke spreuk wil je uitvoeren?`
                );
            }
            let Avatar = User.displayAvatarURL();
            let Channel = message.guild.channels.cache.find(
                (ch) => ch.name === "🗑vergeetput"
            );
            if (!Channel)
                return message.channel.send(
                    `There is no channel in this guild which is called \`warns\``
                );
            let Embed = new MessageEmbed()
                .setTitle(`Nieuwe waarschuwing`)
                .setDescription(
                    `De moderator \`${message.author.tag}\` heeft \`${User.tag}\` een warning gegeven! `
                )
                .setColor(`PURPLE`)
                .setThumbnail(Avatar)
                .addFields(
                    { name: "Mod ID", value: `${message.author.id}`, inline: true },
                    { name: "Mod Tag", value: `${message.author.tag}`, inline: true },
                    { name: "Warned ID", value: `${User.id}`, inline: true },
                    { name: "Warned Tag", value: `${User.tag}`, inline: true },
                    { name: "Reason", value: `\`${Reason.slice(1)}\``, inline: true },
                    {
                        name: "Date (M/D/Y)",
                        value: `${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
                        inline: true,
                    }
                );
            Channel.send(Embed);
        }
    },
};