

module.exports = {
    name: 'Ping',
    args: false,
    description: 'Shows you the bots ping latencys',
    commands: ['ping'],

    /**
     *@document
     * @this
     * @param {Message} msg 
     * @param {String[]} args 
     */
    async execute(msg, args, emb) {
     console.log('A')
    }
};