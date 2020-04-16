var Discord = require("discord.js");
var prefix = "rice";
var client = new Discord.Client();

client.on("ready", () => {
  console.log("ready to rumble!");
});

var bannedwords = "nigger,nig,chink,fag,faggot".split(",");

client.on("message", msg => {
  if (msg.guild === null) return;

  for (i=0;i<bannedwords.length;i++) {
    if (msg.content.toLowerCase().includes(bannedwords[i])) {
      msg.delete();
      msg.reply("STFU, that's not even funny :neutral_face: ");
      return;
    }
  }

  if (msg.author.bot) return;
  if (!msg.member.hasPermission("ADMINISTRATOR")) return;

  if (!msg.content.toLowerCase().startsWith(prefix)) return;
  msg.delete();
  if (msg.content.toLowerCase().startsWith(prefix + "kick ")) {
    var mem = msg.mentions.members.first();
    mem.kick().then(() => {
      msg.channel.send(mem.displayName + " Bye whore :middle_finger: :neutral_face: :middle_finger: " + msg.author.username + "!");
    }).catch(e => {
      msg.channel.send("Har Har :pensive:");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "ban ")) {
    var mem = msg.mentions.members.first();
    var mc = msg.content.split(" ")[2];
    mem.ban(mc).then(() => {
      msg.channel.send(mem.displayName + " GTFO bitch " + msg.author.username + " for " + mc + " days!");
    }).catch(e => {
      msg.channel.send("I'll get you next time whore :rage: ");
    });
  }
  if (msg.content.toLowerCase().startsWith(prefix + "mute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.addRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " Stfu, you're so annoying whore!");
      }).catch(e => {
        msg.channel.send("uh oh :see_no_evil:");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "unmute")) {
    var mem = msg.mentions.members.first();
    if (msg.guild.roles.find("name", "Muted")) {
      mem.removeRole(msg.guild.roles.find("name", "Muted")).then(() => {
        msg.channel.send(mem.displayName + " Hope you're gonna shut up or ill mute u again, whore");
      }).catch(e => {
        msg.channel.send("Oooooops :see_no_evil: ");
        console.log(e);
      });

    }
  }
  if (msg.content.toLowerCase().startsWith(prefix + "purge")) {
    var mc = msg.content.split(" ")[1];
    msg.channel.bulkDelete(mc);
  }
  if (msg.content.toLowerCase().startsWith(prefix + "eval")) {
    var sc = msg.content.substring(msg.content.indexOf(" "));
    eval(sc);
  }
  if (msg.content.toLowerCase().startsWith(prefix + "calc")) {
    var ca = msg.content.substring(msg.content.indexOf(" "));
    msg.reply(ca + " is " + eval(ca).toFixed(2));
  }
});

client.login(NzAwMjAzMTU1MjM2OTc4NzU5.XpfhPw.sVtD4ptxNmlnLhMjObIdAvDFE5Y);
