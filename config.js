//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923192173398";
global.owner = process.env.OWNER_NUMBER || "923192173398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURxMnVIVEM3QVNjbUl3UTRzMW84aENIdm50QXNIZktYa2FEZnZUWWFWRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjhTUVFpQnRxSVU4R004N1hJUEh3RlN4NU53M2toYjNINXdrdW9xV2owUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtTVV4d2htY3B3b1ZOclQrejR1U0RQc2s0cm5vanFFakZjdUM5M0J2R240PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLcUNERjY3b1krazBGTjFSbmlORjYzc0V2TVhzU0R5NTl0akVYY0FlL1JVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVLKzhsTG9mRWRObG1ia2wrbjNVVnFUTkwvVmFtUXRxZ3J0dk1qMkRqVUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpBUUdrOFRwdmZ0WU0rVG9ha1ZqR3M4SHhEQVVwS0VSZFdUTGZVV1Q4RDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xXRGZYLzNSZmFxWVR0MFlpQm9QR1R1TTFRNWJqTjF1Tkcva2ZQR1kzbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQXA2NG5GQmZaN01iOHZaN0VMRnpLYWI5SmNBTHNmc256Qmw4Q1RzUm55Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV3VDMvaG1kL0ZjcWpub1hRU0JMWTFMN1hjZ01tZGpMWjVGZXpDcXB3VE4zMDNmMG03M2pqdDlybE03dGRUZ3hma0J0dXRFMXRtZ2tYWkZkMElvYWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTEsImFkdlNlY3JldEtleSI6InlzNTMxQ2JKd2xaSFV0OVdWSUgwbmFTZEsyQ2t1cHhsaW1lRytBcWJuNkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODQxOTkxOTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOUNCMDNGRDAxM0E0MDM1MUY2MTlFNkRDRDc2RjUzQTgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzYyMzU2NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODQxOTkxOTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDQ1MDM3NERGNzI4QTZFODAyQzE2MUU2NTlCMTU2MjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzYyMzU2NH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODQxOTkxOTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0Y4RTVGODlFRENCQjkwMjY0NTA2QkY2RTc5NzY1NTYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzYyMzU2Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODQxOTkxOTdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRTg2RTkyNEJGMjBENjBDOTY3RjdFN0Q3QzdCNDEyOTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzYyMzU2N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiYVJ4M2RDQzFRalN1b3pOT3lTSFhUdyIsInBob25lSWQiOiIzOTlkMDAxOS0zMjgzLTRlNjItODdiMy0yNzBhZGVjNzQzNTEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibkJTU2hrUG9xa0gzQUJWWVh5dHJIamVSWTBVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNrWHFlRHlva1pndVdMVjdHYzRDMmNXQ1JqYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWQ0FEWDNSTSIsIm1lIjp7ImlkIjoiOTQ3ODQxOTkxOTc6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwn5KUIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNS2crRTBRL2YzVHVnWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJRU3JLL1UxK0JrRk5sNTUvTnl4S0YvY1FkazhLbkNsOFlacUZvd0ZRVEFBPSIsImFjY291bnRTaWduYXR1cmUiOiJjcVpNTGtBQ3FKL0piaUVScWRPeWMrS1BWNVVZMHpMdmt2QlpCQTVTRmp4Vk9wTUlDQmFlRGVZTHFXbVhSdldweUt5TFdQcUxwZGQrR1FPUkxwSk9EUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSkNxR0hWMkxQdW1MY1o4ZVlWZllBVk9IallCcW5teWRQQnpyV1gxSW5ma3luTFpSZlM3Y3ZnWWhyVytqVSt1SjVkRW55UEcyR2FMRk1EZXFTN3BSaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NDE5OTE5NzozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlVFcXl2MU5mZ1pCVFplZWZ6Y3NTaGYzRUhaUENwd3BmR0dhaGFNQlVFd0EifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM2MjM1NjIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQitHIn0=";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
