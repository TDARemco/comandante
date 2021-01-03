const { MessageEmbed } = require("discord.js");
const api = require("imageapi.js");
module.exports = {
    name: "meme",
    description: "Meme yourself or someone else",
    category: "fun",
    run: async (bot, message, args) => {
        message.delete().catch(err => console.log(err));
        let subreddits = ["comedyheaven", "dank", "meme", "memes"];
        let subreddit =
            subreddits[Math.floor(Math.random() * subreddits.length)];
        let img = await api(subreddit, true);
        const Embed = new MessageEmbed()
            .setTitle(`The meme creator of this meme: ${subreddit}`)
            .setURL(`https://reddit.com/r/${subreddit}`)
            .setColor("RANDOM!")
            .setImage(img);
        message.channel.send(Embed);
    },
};