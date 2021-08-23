const BaseCommand = require('../../utils/structures/BaseCommand');
const { Message, Client } = require('discord.js');
module.exports = class NameCommand extends BaseCommand {
  constructor() {
    super('name', 'cateogry', [], 'desc', 'null');
  }

  /***
   * @param {Message} message
   * @param {Client} client
   * @param {Class} Variable
   ***/
  async run(client, message, args) {
  
    message.channel.send("Hello U !!!")
  
  }
};
