const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ",";
const token = 'MzMwMzgxOTg0NzUwODk1MTA2.DDgbeQ.-_tLR_E31bwGTRBCq48rDZKVjbI';

bot.on('ready', () => {
  bot.user.setGame('Official 1.5 Release | ,help')
  console.log('Successful Bootup!');
});

bot.on('message', message => {

 //help Command - do ,help

 if (message.content === prefix + 'help') {
    message.channel.sendMessage('I have a load of commands! To make things easier for you, ive devided the commands into sections. :\n' +
"```diff\n" +
"- ,helpFun | Commands used for fun purposes.\n" +
"- ,helpInformation | Commands used for information purposes\n" +
"- ,helpDescription | Commands used for description purposes\n```");
}

//helpfun Command - do ,helpFun

if (message.content === prefix + 'helpFun') {
message.channel.sendMessage("Because of the overwhelming ammount of fun commands - we've devided those into modules as well.\n" +
"```diff\n" +
"- ,helpFun1 | Displays fun commands for Emotes!\n" +
"- ,helpFun2 | Displays fun commands for Memes!\n" +
"- ,helpFun3 | Displays fund commands for Commands involving numbers!```")
}

//helpFun1 Command - do ,helpFun1

if (message.content === prefix + 'helpFun1') {
message.channel.sendMessage("These fun commands are for Emotes!\n" +
"```diff\n" +
"-=-Emote Commands-=- Commands used -=-purely-=- for emotes!\n" +
",stab | Go on a killing spree!\n" +
",hug | Give a hug!\n" +
",highfive | Go for a highfive!\n" +
",dance | Hey babe, wanna dance?\n" +
",rape | Don't do it!```\n");
}
  if (message.content.startsWith(',stab')) {
    var msg = message.content.replace(",stab" , "");
    let user = message.author.username    
    if (msg == "") { 
message.channel.sendMessage(user + (" has gone on a killing spree!"));
} else {
  let user = message.author.username    
message.channel.sendMessage(user + (" has gone on a killing spree and killed" + (msg) + "! :knife: Rest in peace" + (msg) + "..."));
}}
  if (message.content.startsWith(',hug')) {
    var msg = message.content.replace(",hug" , "");
    let user = message.author.username    
    if (msg == "") { 
message.channel.sendMessage(user + (" has opened their arms for a hug!"));
} else {
  let user = message.author.username    
message.channel.sendMessage("" + user + " has given" + (msg) + " a hug! :heart:");
}}
  if (message.content.startsWith(',highfive')) {
    var msg = message.content.replace(",highfive" , "");
    let user = message.author.username
    if (msg == "") { 
message.channel.sendMessage(user + (" has gone for a highfive! But nobody is there to give them one... :cry:"));
} else {
  let user = message.author.username    
message.channel.sendMessage(user + (" has given" + (msg) + " a highfive!"));
}}
  if (message.content.startsWith(',rape')) {
    var msg = message.content.replace(",rape" , "");
    let user = message.author.username    
    if (msg == "") { 
message.channel.sendMessage(user + (" is on the prowl!"));
} else {
  let user = message.author.username   
message.channel.sendMessage(user + (" has raped" + (msg) + "!"));
}}
  if (message.content.startsWith(',dance')) {
    var msg = message.content.replace(",dance" , "")
    let user = message.author.username
    if (msg == "") { 
message.channel.sendMessage(user + (" is looking for a dance partner! Anybody? Nobody? ... :cry:"));
} else {
  let user = message.author.username   
message.channel.sendMessage(user + (" has cleared the dance floor! " + user + " has started dancing with" + (msg) + "!"));
}}

//helpFun2 commands - do ,helpFun2

if (message.content === prefix + 'helpFun2') {
message.channel.sendMessage("These commands are for memes!\n" +
"```diff\n" +
"-=-Meme commands-=- These commands are used -=-purely-=- for meme purposes!\n" +
",facepalm | Come on man, are you serious?\n" + 
",shrug | I dont know, do you??\n" +
",whocares | Im sorry, but nobody gives a shit!\n" +
",SOTW | Song of the week!\n" +
",imlying | I must be lying, right?```\n");
}
if (message.content === prefix + 'facepalm') {
message.channel.sendFile('mariofacepalm.jpg');
}
if (message.content === prefix + 'imlying') {
message.channel.sendFile('lol.jpg');
}
if (message.content === prefix + 'shrug') {
message.channel.sendFile('shrugmeme.jpg');
}
if (message.content === prefix + 'whocares') {
message.channel.sendMessage("I get what you were saying, but who cares?")
message.channel.sendFile("squidward.png");
}
if (message.content === prefix + 'SOTW') {
message.channel.sendMessage("It's the song of the week! Have fun listening!  https://www.youtube.com/watch?v=i2TUkLrtd9g&list=PL7iEs0owCwSQBuzRI4wE2peN3Mof12Wfe&index=8")
}

//helpFun3 Command - do ,helpFun3

if (message.content === prefix + 'helpFun3') { 
message.channel.sendMessage("These commands are commands involving Math\n" +
"```diff\n" +
"-=-Number Commands-=- Commands used -=-purely-=- for numbers and such!\n" +
",rate | Rates anything you want from 1-10!\n" +
",cf | Flip a coin!\n" +
",insult | Unleash the power of verbal abuse at anything youd like!\n" +
",8ball | Ask the bot a question and it'll answer it!\n" +
",f | Pays your respects on a variable number scale of 1-10000. Get 10000 and get a prize!\n"+
",r | rolls a dice!\n" + 
",pac | Pick a card, any card!```\n");
}
if (message.content === prefix + 'f') {
            var f = Math.floor((Math.random() * 10000) + 1)
            let User = message.author.username
            message.channel.send(User + " has just paid their respects! Respects paid : " + f);       
}
if (message.content === prefix + 'r') {
var r = Math.floor((Math.random() * 6) + 1)
}
if (r == '1') {
message.channel.sendFile("one.png");
}
if (r == '2') {
message.channel.sendFile("two.png");
}
if (r == '3') {
message.channel.sendFile("three.png");
}
if (r == '4') {
message.channel.sendFile("four.png");
}
if (r == '5') {
message.channel.sendFile("five.png");
}
if (r == '6') {
message.channel.sendFile("six.png");
}
if (message.content === prefix + 'pac') {
var pac = Math.floor((Math.random() * 51) + 1)
}
if (pac == '1') {
message.channel.sendFile("aceofclubs.png");
}
if (pac == '2') {
message.channel.sendFile("twoofclubs.png");
}
if (pac == '3') {
message.channel.sendFile("threeofclubs.png");
}
if (pac == '4') {
message.channel.sendFile("fourofclubs.png");
}
if (pac == '5') {
message.channel.sendFile("fiveofclubs.png");
}
if (pac == '6') {
message.channel.sendFile("sixofclubs.png");
}
if (pac == '7') {
message.channel.sendFile("sevenofclubs.png");
}
if (pac == '8') {
message.channel.sendFile("eightofclubs.png");
}
if (pac == '9') {
message.channel.sendFile("nineofclubs.png");
}
if (pac == '10') {
message.channel.sendFile("tenofclubs.png");
}
if (pac == '11') {
message.channel.sendFile("jackofclubs.png");
}
if (pac == '12') {
message.channel.sendFile("queenofclubs.png");
}
if (pac == '13') {
message.channel.sendFile("kingofclubs.png");
}
if (pac == '14') {
message.channel.sendFile("aceofdiamonds.png");
}
if (pac == '15') {
message.channel.sendFile("twoofdiamonds.png");
}
if (pac == '16') {
message.channel.sendFile("threeofdiamonds.png");
}
if (pac == '16') {
message.channel.sendFile("fourofdiamonds.png");
}
if (pac == '17') {
message.channel.sendFile("fiveofdiamonds.png");
}
if (pac == '18') {
message.channel.sendFile("sixofdiamonds.png");
}
if (pac == '19') {
message.channel.sendFile("sevenofdiamonds.png");
}
if (pac == '20') {
message.channel.sendFile("eightofdiamonds.png");
}
if (pac == '21') {
message.channel.sendFile("nineofdiamonds.png");
}
if (pac == '22') {
message.channel.sendFile("tenofdiamonds.png");
}
if (pac == '23') {
message.channel.sendFile("jackofdiamonds.png");
}
if (pac == '24') {
message.channel.sendFile("queenofdiamonds.png");
}
if (pac == '25') {
message.channel.sendFile("kingofdiamonds.jpg");
}
if (pac == '26') {
message.channel.sendFile("aceofhearts.png");
}
if (pac == '27') {
message.channel.sendFile("twoofhearts.png");
}
if (pac == '28') {
message.channel.sendFile("threeofhearts.png");
}
if (pac == '29') {
message.channel.sendFile("fourofhearts.png");
}
if (pac == '30') {
message.channel.sendFile("fiveofhearts.png");
}
if (pac == '31') {
message.channel.sendFile("sixofhearts.png");
}
if (pac == '32') {
message.channel.sendFile("sevenofhearts.png");
}
if (pac == '33') {
message.channel.sendFile("eightofhearts.png");
}
if (pac == '34') {
message.channel.sendFile("nineofhearts.png");
}
if (pac == '35') {
message.channel.sendFile("tenofhearts.png");
}
if (pac == '36') {
message.channel.sendFile("jackofhearts.png");
}
if (pac == '37') {
message.channel.sendFile("queenofhearts.png");
}
if (pac == '38') {
message.channel.sendFile("kingofhearts.png");
}
if (pac == '39') {
message.channel.sendFile("aceofspades.png");
}
if (pac == '40') {
message.channel.sendFile("twoofspades.png");
}
if (pac == '41') {
message.channel.sendFile("threeofspades.png");
}
if (pac == '42') {
message.channel.sendFile("fourofspades.png");
}
if (pac == '43') {
message.channel.sendFile("fiveofspades.png");
}
if (pac == '44') {
message.channel.sendFile("sixofspades.png");
}
if (pac == '45') {
message.channel.sendFile("sevenofspades.png");
}
if (pac == '46') {
message.channel.sendFile("eightofspades.png");
}
if (pac == '47') {
message.channel.sendFile("nineofspades.png");
}
if (pac == '48') {
message.channel.sendFile("tenofspades.png");
}
if (pac == '49') {
message.channel.sendFile("jackofspades.png");
}
if (pac == '50') {
message.channel.sendFile("queenofspades.png");
}
if (pac == '51') {
message.channel.sendFile("kingofspades.png");
}
  if (message.content.startsWith(',8ball')) {
    var msg = message.content.replace(",8ball" , "");
    if (msg == "") {
      message.channel.sendMessage('Invalid arguments! Ask me a question first!');
    } else {
      var answers = [
      'Yes.', 'No.', 'I hope so!', 'Never!',
      'I think so.', 'Im pretty sure, but you should ask again just to be safe.', 'I sure hope not!',
      'I would rather not say.',];
      var answer = answers[Math.floor(Math.random() * answers.length)];
  message.channel.sendMessage(answer);
}}
if (message.content.startsWith(prefix + 'rate')) {
   var rate = Math.floor((Math.random() * 10) + 0)
   var msg = message.content.replace(",rate" , "");
   if (msg == "") {
     message.channel.send({embed: {
  color: 255,
  description: "Invalid arguments given! Do ,rate {message}!"
     }});
} else {
  message.channel.send({embed: {
  color: 255,
  description: ('I rate ' + (msg) + ' a ' + (rate) + ' out of 10.')
}});
}}
if (message.content === prefix + 'cf') {
var cf = Math.floor((Math.random() * 2) + 1)
}
if (cf == '2') {
message.channel.sendFile("tails.png");
message.author.sendMessage("Tails!");
}
if (cf == '1') {
message.channel.sendFile("heads.png");
message.author.sendMessage("Heads!");
}
  if (message.content.startsWith(',insult')) {
    var msg = message.content.replace(",insult" , "");
    if (msg == "") {
      message.channel.sendMessage("Invalid arguments given! Do ,insult {message}!");
    } else {
      var answers = [
      'I dont really feel like it, do it yourself. Quit relying on me so much.', (msg) + ' was dropped on the head as a baby.',
      (msg) + ' is the stupidest thing I have ever seen.', (msg) + ' has the same music taste as Raduino.', (msg) + ' has the same sense of humor as Will Ferrell.',
      (msg) + " has a funny looking avatar picture.", (msg) + " is just downright stupid.",
      (msg) + " needs to die.***", (msg) + " should really GTFO.", (msg) + " needs to find a better use of their time.",
      (msg) + " should be on my 600lb life.", (msg) + " needs to start dieting more.", (msg) + " really should jump off a bridge.",
      (msg) + ' is gay af :joy:', 'I cant insult the love of my life.'];
      var answer = answers[Math.floor(Math.random() * answers.length)];
  message.channel.sendMessage(answer);
}}

//help Information Command - do ,helpInformation

 if (message.content === prefix + 'helpInformation') {
    message.channel.sendMessage('I have some interesting information commands. Heres a list! :\n' +
  "```diff\n" +
  "-=-Information commands-=- | These commands are used -=-purely-=- for informative purposes!\n" +
",ping | Gets the bots response time / ping! You can also use ,PING or ,Ping\n" +
",rules | Guves rules!\n" +
",mi | Gives your information!\n" +
",si | Server information!\n" +
",say | Makes the bot your little bitch and makes it say anything you want! Just do ,say (message)!```");
 }
  var args = message.content.split(/[ ]+/);
if (message.content === prefix + 'Ping') {
   startTime = Date.now();
   message.channel.sendMessage("Aaron has casted upon his magical spells!..").then((message) => {
     endTime = Date.now();
       message.edit("Aaron summons the pings! // " + Math.round(endTime - startTime) + " ms");
     });
}
  var args = message.content.split(/[ ]+/);
if (message.content === prefix + 'ping') {
   startTime = Date.now();
   message.channel.sendMessage("Aaron has casted upon his magical spells!..").then((message) => {
     endTime = Date.now();
       message.edit("Aaron summons the pings! // " + Math.round(endTime - startTime) + " ms");
     });
}
  var args = message.content.split(/[ ]+/);
if (message.content === prefix + 'PING') {
   startTime = Date.now();
   message.channel.sendMessage("Aaron has casted upon his magical spells!..").then((message) => {
     endTime = Date.now();
       message.edit("Aaron summons the pings! // " + Math.round(endTime - startTime) + " ms");
     });
}
if (message.content.startsWith(',say')) {
var msg = message.content.replace(",say", "");
message.delete();
message.channel.sendMessage(msg);
}
if (message.content === prefix + 'rules') {
  message.channel.sendMessage("We have rules for Aaron, please respect them accordingly! :\n" +
"```1) Try to avoid spamming bot commands, as it hurts the bots API.\n" +
"2) Dont ask the owners for the bot token - its not happening.\n" +
"3) Have fun! Use ,BotV to catch up on updates or join our discord via ,aarondiscord !!```\n");
}
if (message.content === prefix + 'mi') {
  var rate = Math.floor((Math.random() * 10) + 0)
message.channel.send({embed: {
  color: 255,
  description: "**User information**\n\n" +
"**Discriminator ID, :** " + message.author.discriminator + '\n' +
"**Client ID, :** " + message.author.id + '\n' +
"**Username, :** " + message.author.username + '\n' +
"**I rate you a " + (rate) + ' out of 10.**\n' +
"**Avatar URL, :** \n" +
message.author.displayAvatarURL
}});
}
if (message.content === prefix + 'si') {
  server = message.guild
  let everyone = message.guild.members.map(m => `${m.user} ${(m.user.bot ? '**`[BOT]`**' : '')}`).sort();
message.channel.send({embed: {
  color: 255,
  description: (`***Server Info:***\n\n**Server Name:** ${server.name}\n**Server ID:** ${server.id}\n**Server Owner:** ${server.owner}\n**Member Count:** ${everyone.length}\n**Server Region:** ${server.region}`)
}})
}

//help Description Command - do ,helpDescription

  if (message.content === prefix + 'helpDescription') {
    message.channel.sendMessage('I have a few commands to give you some bot information. Here they are! :\n' +
"```diff\n" +
"-=-Description Commands-=- | Provides bot descriptions!\n" +
",BotOwner | Gives the bot owner!\n" +
",inviteme | Gives the bot authorization link!\n" +
",Credits | Gives bot credits!\n" +
",aarondiscord | Sends invite to the Aaron Discord!\n" +
",BotVersion | Gives Aaron's official release information!\n" +
",BotLanguage | Bot language... you can also do ,BotLang or ,BotL\n```");
}
if (message.content === prefix + 'BotOwner') {
  message.channel.send({embed: {
  color: 255,
  description: "**Bot Owner Information :**\n\n" +
  "**Bot Owner Username :** TheOneShotSniper\n" +
  "**Bot Owner Discriminator:** #5111\n" +
  "**Bot Owner ClientID:** 290381925796020224\n" +
  "**Bot Owner Current Avatarpic:** https://cdn.discordapp.com/avatars/290381925796020224/9988b9e57333663692e576bc7f6f101b.jpg?size=1024"
}});
}
if (message.content === prefix + 'BotLanguage') {
message.author.sendMessage("This bot is created using Discord.js as well as Visual Studio Code in it's latest and most compatiable version.");
}
if (message.content === prefix + 'BotLang') {
message.author.sendMessage("This bot is created using Discord.js as well as Visual Studio Code in it's latest and most compatiable version.");
}
if (message.content === prefix + 'BotL') {
message.author.sendMessage("This bot is created using Discord.js as well as Visual Studio Code in it's latest and most compatiable version.");
}
if (message.content === prefix + 'inviteme') {
message.author.sendMessage("Add me to your server!   https://discordapp.com/oauth2/authorize?client_id=330381984750895106&scope=bot&permissions=0");
}
if (message.content === prefix + 'Credits') {
message.channel.sendMessage("Aaron | A bot used primarily for fun purposes {not an administration // music bot}");
}
if (message.content.startsWith(',64641337Erin')) {
      game = message.content.replace(",64641337Erin", "");
      bot.user.setGame(game);
}
if (message.content === prefix + 'aarondiscord') {
message.channel.sendMessage('Join our official discord for help across the bot community!*** https://discord.gg/pfXsEUn');
}
if (message.content === prefix + 'BotVersion') {
  message.channel.send({embed: {
  color: 255,
  description: "Aaron is in his 1.6 official release. Plans for next update include :\n" +
             "Adding a new mario theme based command! :wrench:"
}});
}
if (message.content.startsWith(',')) {
let user = message.author.username
var msg = message.content.replace(",,", "");
console.log(user + ' executed command : ' + (msg));
}});

// log our bot in
bot.login(token);
