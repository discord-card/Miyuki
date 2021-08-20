module.exports = {
    name: 'custom',
    args: false,
    description: 'Shows you a custom card',
    commands: ['custom'],

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