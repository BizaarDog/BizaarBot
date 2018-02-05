const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "b"

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'hi bizaarbot') {
    	message.channel.send('Hello');
  	}
});

client.on('message', message => {
    if (message.content === 'bizaarbot') {
    	message.channel.send('Hello there, you called for me?');
  	}
});

client.on('message', message => {
    if (message.content === 'BizaarBot') {
    	message.channel.send('Hello there, you called for me?');
  	}
});

client.on('message', message => {
    if (message.content === 'Yes I did call for you BizaarBot') {
    	message.channel.send('What do you want? Im trying to poop');
  	}
});

client.on('message', message => {
    if (message.content === 'yes I did call for you bizaarbot') {
    	message.channel.send('What do you want? Im trying to poop');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
