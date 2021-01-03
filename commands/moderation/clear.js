const discord = require("discord.js");
module.exports = {
    name: 'clear',
    category: 'moderation',
    description: 'clear',
    run: async (bot, message, args, guild) => {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Je hebt geen toestemming");

        if (!args[0]) return message.reply("Zet je bril eens op! Je moet wel een aantal toevoegen!");

        if (Number.isInteger(parseInt(args[0]))) {

            var aantal = parseInt(args[0]) + 1;

            message.channel.bulkDelete(aantal).then(() => {

                if (args[0] == 0) {

                    message.reply(`Probeer je nu 0 berichten te verwijderen...`).then(msg => msg.delete({ timeout: 3000 }));

                } else if (args[0] == 1) {

                    message.reply(`Ik heb 1 bericht voor je verwijderd!`).then(msg => msg.delete({ timeout: 3000 }));

                } else {

                    message.reply(`Ik heb ${args[0]} berichten voor je verwijderd.`).then(msg => msg.delete({ timeout: 3000 }));

                }

            });

        } else {
            return message.reply("Zet je bril eens op! Je moet wel een aantal toevoegen!");
        }
    }
}
