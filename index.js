require('dotenv').config()
const fs = require('fs')
const { Client, Intents, Collection } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.commands = new Collection()

client.once('ready', () => {
	console.log('Ready!');
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, {
            command: command
        });
    
    }
    console.log('registered commands')
    for(const guild of client.guilds.cache){
        setSlashCommands(guild.id)
    }
});

client.on('interactionCreate', interaction => {
    if (!interaction.isCommand()) return;
	console.log(interaction);
});

client.login(process.env.TOKEN);

// Registering Slash commands
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
function setSlashCommands(id){
    const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

		await rest.put(
			Routes.applicationGuildCommands(client.user.id, id),
			{ body: client.commands.map(e => {return { name: e.name, description: e.description}}).array() },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();
}