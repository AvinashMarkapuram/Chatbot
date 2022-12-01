let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");
let sendMsgBtn = document.getElementById("sendMsgBtn");

function MsgToChatBot() {
    let toMsgContainer = document.createElement("div");
    toMsgContainer.classList.add("msg-to-chatbot-container");
    chatContainer.appendChild(toMsgContainer);

    let toMsg = document.createElement("span");
    toMsg.classList.add("msg-to-chatbot");
    toMsg.textContent = userInput.value;
    toMsgContainer.appendChild(toMsg);
    userInput.value = "";
}

function MsgFromBot() {
    let fromMsgContainer = document.createElement("div");
    fromMsgContainer.classList.add("msg-from-chatbot-container");
    chatContainer.appendChild(fromMsgContainer);

    let fromMsg = document.createElement("span");
    fromMsg.classList.add("msg-from-chatbot");
    let lengthOfMsgList = chatbotMsgList.length;
    let k = Math.ceil(Math.random() * lengthOfMsgList);
    fromMsg.textContent = chatbotMsgList[k - 1];
    fromMsgContainer.appendChild(fromMsg);
}

sendMsgBtn.onclick = function() {
    MsgToChatBot();
    MsgFromBot();
}