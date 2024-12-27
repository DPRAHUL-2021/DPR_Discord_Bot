import { Client,GatewayIntentBits } from 'discord.js';
import shortid from 'shortid';

const client = new Client({ 
    intents: 
    [GatewayIntentBits.Guilds,
     GatewayIntentBits.GuildMessages, 
     GatewayIntentBits.MessageContent,] 
});

client.on("messageCreate",(message)=>{
    if(message.author.bot) return;
    if(message.content.startsWith("create")){
        const url = message.content.split("create")[1];
        const shortUrl = shortid.generate();
        return message.reply({
            content:"Generating ShortId for URL : " + url + " as" +shortUrl,
        })
    };
    message.reply({
        content:"Hello from DP - The Bot",
    });
});


client.on("interactionCreate",(interaction)=>{
    console.log(interaction);
    interaction.reply("pong!!");
})

client.login("TOKEN");