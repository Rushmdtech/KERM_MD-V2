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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkhtS1RZWHZtVlh3VTJHbEJ3T1FseUpuSFl1NGYxaG8rL3lrWm9YUzdWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnhQTUV2RkhPV01OOW5aZS9RM1F4UjQrVVF6WUJRbmdEMkVSc3dPQnRIND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSWc0NUYrektGZ1VkVGNQR1Nld00zN2ppbWZ0Qng3aWNxZy9Lc2lrR1hnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2b3Y4d09uTTVkcnFGdi9lcU9QUU1LQnJpMzBwYldabHYvUnlGV2pkeVFrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZPNnNwKzBXNzluNVlSa1E5Ulk5ZTJvSzdXbVg4VVExb2twaEN3MHRPMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMwSnZqVzNuVFdYT0NpSzkwSWZKcmVGdmJNSU8zMkdsWVV3a3h2T0svVUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUtsOFRBeCszRG1aN1RQSkFWRU9Lakw5a1dUVTNIR3djNUEyaDdoOHRrbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUIrcW9aU3NWd0Q1bnJVbXY2UDkvelRsalR5WjFOanNIYmVLbnIxQ0JUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJzY2MyM2l2bEZISGVOcWR5dGJQSXVaaFYzMTEwM3J4RGltMEFHNzF4TWJVWDlMeU9UR3VDS0l0aUNpT1dMOTdGVkxJejc2endpc21HbmZFNFVOZ2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MCwiYWR2U2VjcmV0S2V5IjoiSXJRUG9YZzVwUDZWWGU5RFhoVUVHRHpFYzVmMnIyUytUZmE3Qi9DN1B2UT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLUo4Wk9aOGhTa2lLUVlOR0k5cGUzQSIsInBob25lSWQiOiIzOTU5ZmE1NS02ZTRlLTQ2YjktYTg1MC01OGU4MDQwODdlY2QiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNmxHcXZqYlNKZ0ZiNUNGNmNZMXlkUTFyZFBzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlwR3V1QUNmUURwclE2eW5XTEpKSW1KV1UzST0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJIREFQRldXVCIsIm1lIjp7ImlkIjoiOTQ3ODM2NjQwNDQ6MzRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pPc2o4QUJFUGlFNXJZR0dBUWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVhTU5HR1gzbjBpcjlndys3dGNHeWhmNzZzU1RrYXZMY3BPS0M3MElVM2M9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkF5UVRrSmthbGxXWDF6Tld3Z2FzSVRhcUIvbEhXSTQ5Z0dZQ2huQ2U1WHN4T1haYnhSWlp1eHVLcmpNNzhJMXQ1Qm96eFVWeG9JWEtBSzBHNVNUOEJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxeG1aeCtZVUM5OXZndHZ4dHhUd3lVN002VEN3WFpVVk9zK1ZQY0MwczA4Q0FUS1BwbWNWSy9XMGIvVW55aUhFVnpKeVlROXJCOUl4TkVMWEVHbCtpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzgzNjY0MDQ0OjM0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVXakRSaGw5NTlJcS9ZTVB1N1hCc29YKytyRWs1R3J5M0tUaWd1OUNGTjMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU1MzA3NjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ0o4In0="
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
