const axios = require('axios');

// Your bot token
const botToken = '7390155978:AAHqXfNHkrHBl3buU3beQt2b0BE-2Efa02A';
// Your web app URL
const webAppUrl = 'https://0xjaqbek.github.io/Lotus4ever/';
// Your chat ID or user ID
const chatId = 'USER_CHAT_ID';

// Send the message with a web app button
axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
  chat_id: chatId,
  text: "Click the button to play Lotus4ever!",
  reply_markup: {
    inline_keyboard: [[
      {
        text: "Play Lotus4ever",
        web_app: { url: webAppUrl }
      }
    ]]
  }
})
.then(response => {
  console.log('Message sent:', response.data);
})
.catch(error => {
  console.error('Error sending message:', error);
});
