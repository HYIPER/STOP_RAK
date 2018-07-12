const Discord = require('discord.js');
const client = new Discord.Client();
var cronJob=require('cron').CronJob;

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
new cronJob('30 * * * * *', function(){
    console.log('Наступила двадцать пятая минута часа');
    client.channels.get(основной).send('My Message');
}
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
