const chatbox = document.getElementById("chatbox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
  const userText = input.value.trim();
  if (userText === "") return;

  // User message
  const userDiv = document.createElement("div");
  userDiv.className = "user-msg";
  userDiv.innerText = userText;
  chatbox.appendChild(userDiv);

  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;

  // Bot reply after delay
  setTimeout(() => {
    const reply = getBotReply(userText.toLowerCase());
    typeBotMessage(reply);
  }, 500);
}

function getBotReply(text) {
  if (text.includes("help") || text.includes("issue") || text.includes("support") ||text.includes("emergency")) return "You can request assistance in the Patient Support section.";
  if (text.includes("volunteer")) return "You can register as a volunteer from the Volunteer section.";
  if (text.includes("contact")) return "You can contact us through the Contact form.";
  return "Thank you for reaching out. Our support team will assist you soon.";
}

function typeBotMessage(text) {
  const botDiv = document.createElement("div");
  botDiv.className = "bot-msg";
  chatbox.appendChild(botDiv);

  let i = 0;

  const interval = setInterval(() => {
    if (text.charAt(i) === " ") {
      botDiv.innerHTML += "&nbsp;";
    } else {
      botDiv.innerHTML += text.charAt(i);
    }

    i++;
    chatbox.scrollTop = chatbox.scrollHeight;

    if (i >= text.length) clearInterval(interval);
  }, 40);
}
