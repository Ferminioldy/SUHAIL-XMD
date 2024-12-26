const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_06_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwLFxuICAgICAgICA1MixcbiAgICAgICAgMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDExMCxcbiAgICAgICAgODksXG4gICAgICAgIDIxLFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUzLFxuICAgICAgICA0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDgwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDU5LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAzMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDQ0LFxuICAgICAgICAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAxODUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzEsXG4gICAgICAgIDgyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDcyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICA2NixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDk5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZmtDdHlESW5ZQ2VpT2VQbHRjSmRrekROOHNGMFJKeTVWeWhwbitMODVvRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjUwNTAwMTYxODk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwOEVGM0M2NTg4MDQwNURENzMxMkQwMkE5RTQ3MzUwQlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUyMTQ3NzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjUwNTAwMTYxODk2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2QTg2MUUwQ0I5NjVENDI2NzM5MTAwQjU5QTkxMzdGMlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUyMTQ3NzJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaFdTaTBha3hRbnlpLWVnTFNleUNxZ1wiLFxuICBcInBob25lSWRcIjogXCI3YjRmMDlmOS1jMjRiLTQ1MDYtYjc1ZS03N2JjYWIxYzY1ZThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIwLFxuICAgICAgNDQsXG4gICAgICAyMzMsXG4gICAgICA5MCxcbiAgICAgIDIzMCxcbiAgICAgIDYyLFxuICAgICAgMTE0LFxuICAgICAgMjM5LFxuICAgICAgMjI1LFxuICAgICAgMTc3LFxuICAgICAgNDEsXG4gICAgICAxMzEsXG4gICAgICAxNzAsXG4gICAgICAyMTcsXG4gICAgICA4MixcbiAgICAgIDE2NixcbiAgICAgIDUwLFxuICAgICAgMTkxLFxuICAgICAgMCxcbiAgICAgIDkyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDksXG4gICAgICA3MCxcbiAgICAgIDExMyxcbiAgICAgIDQsXG4gICAgICAxOTEsXG4gICAgICAxMjgsXG4gICAgICAxNTUsXG4gICAgICAxNTksXG4gICAgICA0NCxcbiAgICAgIDE1MixcbiAgICAgIDUzLFxuICAgICAgMTE3LFxuICAgICAgMjA3LFxuICAgICAgNTMsXG4gICAgICAxODMsXG4gICAgICA0OCxcbiAgICAgIDc2LFxuICAgICAgMTcsXG4gICAgICAxNDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFhFNk1GSDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTA1MDAxNjE4OTY6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk3Mzg4OTcwNjc2MzM5OjE3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKZqO+4j01yIE9pbSBMZHkg8J+GkvCfmI5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdTJvV0FRcTQyMXV3WVlEaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldFR21FN0FKMnQ2NDRYdG9wTFhYcmJwMVk0RVErYWs3VGhIRmQ1ZFZielE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOG9vWE13dERUZnJ2Y08zdXJFUmxRdTVNUEFBdEc5U0JYRDVXVDZsSTZqNEduNEZIaDRSRE5Jb1ViVklPL1g1bXNJb3RFMWNacDRzelNVSW1zaHVxQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY0grNy90OU14UDE5Q2ZRcGJjcU9reXBhbElDZWx5TXZabHFON3Q1TlVLVnFHWm1tQzJITVdCdWl3dkZiaVFnN2FjWEV1bVRXUVBYMDlFakZ3T2pWQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1MDUwMDE2MTg5NjoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTIxNDc2OCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVB0RlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHRGLmpzb24iOiAie1wia2V5RGF0YVwiOlwiLzJmVWRBd1g5QitNaHN1c2FIdXBJaGdUOXI1bGRTOStUbjRVa0hwcHR4OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDE4NzQyODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "€",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "♨️Mr Oim Ldy 🆒😎",
  packname: process.env.PACK_NAME || "♨️Mr Oim Ldy 🆒😎",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "♨️Mr Oim Ldy 🆒😎",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
