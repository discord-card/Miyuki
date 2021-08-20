const { CommandInteraction } = require('discord.js')

module.exports = {
    name: 'Ping',
    args: false,
    description: 'Shows you the bots ping latencys',
    commands: ['ping'],

    /**
     *@document
     * @this
     * @param {CommandInteraction} msg 
     * @param {String[]} args 
     */
    async execute(msg) {
        msg.reply("Nope not today")
    }
};