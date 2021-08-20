const { welcomeImage } = require('discord-welcome-card');

module.exports = {
    name: 'Welcome',
    args: false,
    description: 'Shows you the welcome card',
    commands: ['welcome'],

    /**
     *@document
     * @this
     * @param {Message} msg 
     * @param {String[]} args 
     */
    async execute(msg) {
        const image = await welcomeImage(message.member);
        message.channel.send({ files: new Discord.MessageAttachment(image, 'welcome.png') })
    }
};