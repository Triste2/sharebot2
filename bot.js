const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
  تنورنا :sob::broken_heart:
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
 -       < https://discord.gg/W7SPDyE >  
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
  تنورنا :sob::broken_heart:
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
 -       < https://discord.gg/W7SPDyE > 
**`) 
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);
