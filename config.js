//#RUSH TECH MEKA EDIT KARANNEPA 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/comingsoon";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaicAPo2P59qng5LjY0m";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaicAPo2P59qng5LjY0m";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8c23f1558601c61e24e46.jpg";
global.devs = "https://wa.me/911111111 , https://wa.me/911111111";
global.sudo = process.env.SUDO || "911111111";
global.owner = process.env.OWNER_NUMBER || "94762498519";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8c23f1558601c61e24e46.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rushamda.osc-fr1.scalingo.io/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0w5eVdSb2N1OHNscUhNVllKMFA5WnZiZ0c4ZmFuSjlrWnRMQXBPTGgxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVm1iMHlwNC95TVNNQU91N0dvL2YrQVZyK0ZZaTdvQ3MwTjllZlkrd0RVMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Rll4QlRMSlA4ZTM5NFRPS2NMVE5haVB2Y2pZZGtBMTlpSmtpS3ZSQ2s0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKOFRkQVZaRWdPdmUrOCtKblU1bUp0U3NhRXc3VEx1d0ZSaVQwRlJxemdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndEeVN6dms2cEFjTjFZQitnSWo1K3I4MlNUendGQlBidGdzWGtHUmNaM3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFSU1vdEVFaWdoSWw5N3N2UmRZQjcwODEzcDZxcXNmV0QwVFJ5eHFJejg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUoxL2FGWjNuYm1nYmcwNHVPZzVNZjBVRHZzRE9FS0lqTEpJMXQ1ZG0zdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEo4alBVbFNnVm84cmU5dWlsMUVNb0RvNHEydmkwNWpmY3Z6alNrMjdDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFhU3FtbG05YzZ1WDZra2pTNHVtM1BoN0NSWTZpQ3cwbEN2ME44VGVVdnk0Zjg4emlCQmw5dFcvYVFGK0xDbzZadmhUV2Q4K2dXMkdEd2tQZFN1Smh3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJjY2RPd0NJckE1cWVQN3IvN1o1b2lJaVp0em4yUzQwT3pOTGtKWFVhNGZVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyNDk4NTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM1RURFREZFNUU3QjNDM0Q1RTI3RTMxMDRCMjlGRjA3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjUzNjY3Mjh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyNDk4NTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ3NkMwNDc5RkQ2REVGNDY0QUI5NkJBQzE2REFFMjZCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjUzNjY3MzN9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyNDk4NTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE1RTkzNTRERTYzMjQyOUM4MTM5MTA3NjZCRDMxQjI1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjUzNjY3NDh9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzYyNDk4NTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFGM0JFMDY3ODYyRDhDN0Q0MDY4MkNCQkQwRjdEMzAwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjUzNjY3NjN9XSwibmV4dFByZUtleUlkIjozMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImVZQUJGZVlOUkttelUyVXM0R29BbHciLCJwaG9uZUlkIjoiMzNlOGQwODQtZjVmOS00ZjQzLTllNTctOTFiZGU5NTg3ZDUyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJJTlpXTUlCVFprM1Fhay9RdUkralpHemozdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0UVpXeWVIcmZOVkVReFpRWGdzOVhneGVLSVE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiN0JMQzJTRlAiLCJtZSI6eyJpZCI6Ijk0NzYyNDk4NTE5OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoicnVzaCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUG1meTk0R0VMYUQzTFlHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOGQ3RE1YNDZCT0pYZHo3TG9UdHNqZ052UGhKL1RHZzVjWGhsajVBOUgzRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoianI0ZVU2UVhCcDJKZjlzSVFZbmdYWlM0b0psNDBaTkcwcU1oZDRrem4zU1F5ZHJmZjRHSmtXaEI0R1B4VVFrZEFsdXE0L3psUnJCSGp3SXNmSlJWQ2c9PSIsImRldmljZVNpZ25hdHVyZSI6IlU2TWFnV1R2c3dtSHZ4TkNiN0xBMTM1Z2NVNzY3QXNiU3ZpUnpudnJOR3pYMVE0UEkwV2RHdHc0aXZxRVN0RnpQRHM4alFSb2xFNVNNc0VJMUQzWWdBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjI0OTg1MTk6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmSGV3ekYrT2dUaVYzYyt5NkU3Ykk0RGJ6NFNmMHhvT1hGNFpZK1FQUjl4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MzY2OTEzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVYZCJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "^",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RUSH TECH QEEN NITHU`",
  author: process.env.PACK_AUTHER || "RUSH TECH",
  packname: process.env.PACK_NAME || "RUSH-MD-V1",
  botname: process.env.BOT_NAME || "𝚀𝙴𝙴𝙽 𝙽𝙸𝚃𝙷𝚄",
  ownername: process.env.OWNER_NAME || "𝚁𝚄𝚂𝙷",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "https://platform.openai.com/docs/guides/production-best-practices/api-keys",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "NITHU").toUpperCase(),
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
