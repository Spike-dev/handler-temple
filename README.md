![Build](https://s12.directupload.net/images/200907/5j3544ai.png)

---
You need to install [Node.JS](https://nodejs.org/en/download/)
```
 git clone https://github.com/Spike-dev/handler-temple
```
```
npm install 
```
```
 npm start 
```



![Examples Commands ](https://s12.directupload.net/images/200912/ro2er264.png)

```javascript
const BaseCommand = require('../../utils/structures/BaseCommand');
const { Message, Client } = require('discord.js');
module.exports = class NameCommand extends BaseCommand {
  constructor() {
    super('name', 'cateogry', [], 'desc', 'null');
  }

  /***
   * @param {Message} message
   * @param {Client} client
   * @param {Message} e
   * @param {Message} member
   ***/
  async run(client, message, args) {}
};
```

---
![Features](https://s12.directupload.net/images/200907/9m8qldwi.png)
- Events modulated 
- Commands Modulated 
- Easy to use  

Support Discord Server
---
```
https://discord.gg/Trj64yANAh
```
