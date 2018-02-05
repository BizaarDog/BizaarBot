const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "b!"

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

client.on('message', message => {
    if (message.content === 'what is my avatar') {
        message.reply(message.author.avatarURL);
  	}
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
});

 if(command === "b!kick") {
     if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
         return message.reply("Sorry, you don't have permissions to use this!");

 let member = message.mentions.members.first();    
 if(!member)
     return message.reply("Please mention a valid member of this server");
 if(!member.kickable)
     return message.reply("I cannot kick this user! That user may have a higher role. I may also not have permission to kick that member");
 
 let reason = args.slice(1).join(' ');
 if(!reason)
     return message.reply("Please indicate a reason for the kick!");
 
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);    
     
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
