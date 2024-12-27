import { REST, Routes } from 'discord.js';

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
    {
        name: 'create',
        description:'Creates a Short Url for the given url',
    },
];

const rest = new REST({ version: '10' }).setToken("TOKEN");

try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands("CLIENT_ID"), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
} catch (error) {
    console.error(error);
}