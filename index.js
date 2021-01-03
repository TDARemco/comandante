const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
                                                                         

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

["command", "event"].forEach(handler=> {

  require(`./handlers/${handler}`)(client);


});

client.on("ready", async () => {

    console.log(`${client.user.username} is online!`)

    client.user.setActivity('Over his gate', { type: 'WATCHING' });

});

client.login(process.env.token);
