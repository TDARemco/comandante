const discord = require("discord.js");
module.exports = {
    name: 'teaminfolol',
    category: 'server',
    description: 'Teaminfolol for a new team',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("What do i do now?")
            .setDescription(`    
            > What do we want you to do?
            > 
            > 1: Share your op.gg link in this chat for your teammates.
            > 2: Start chatting in your team chat.
            > 3: Start playing with your team mate(s)
            > 4: We will add people later on if not 5 already.
            > 5: You will be in charge of the tryouts if not 5.
            > 6: If any issues let us know.
            > 
            > Important:
            > - Make sure you use the chat and follow the steps above.
            > - Make sure to start playing with team mates.
            > - If 5 start planning your first training, if you need help with this let us know.
            > - Pick a teamname if you want, we pref you to use the words: Solar in the team name. (you can also do this step later)
            
            > Not following the steps above will resolve in you being kicked from this team.

            > You are placed in a team with 2 (two) people. This means that we will add more soon!
            > The 2 of u will be able to judge people in tryouts if wanted.

            > Kind regards,
            
            > Solar `)
            .setColor("#306678")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
