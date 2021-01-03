const discord = require("discord.js");
module.exports = {
    name: 'newteam',
    category: 'server',
    description: 'Status for a new team',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Solar - New Team")
            .setDescription(`    
            > Welcome @everyone in this teamchat!
            
            > We placed you into a Solar eSports team.
            > You as a team can start playing together.
            > When we make new teams, we place 2-5 players in to the team.
            
            > If your team does not has 5 members yet,
            > We will work on this and try to add them asap.
            > While we are working hard to do that. 
            > Please start playing together, Duoq or flex, and have some fun!
            > 
            > We did something,
            > I changed your nickname with a number in it, please see organisation chat for more information.
            > Those numbers make everything so much easier for us!
            
            > Solar teams are created based on skill and motivation.
            > This will mean that you should be around the same level in skills and mindset.
            > If there is any problem with this part, please send a message in this channel.
            
            > Again,
            > Welcome to this team!
            > And start having some fun.`)
            .setColor("#34bdeb")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}
