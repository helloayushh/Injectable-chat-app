const socket = io("http://localhost:3000");

socket.on("receive-user-message", (msg) => {
  addMessage("User", msg);
});

function send() {
  const input = document.getElementById("adminInput");
  if (input.value.trim() === "") return;

  socket.emit("admin-message", input.value);
  addMessage("Admin", input.value);
  input.value = "";
}

function addMessage(sender, msg) {
  const div = document.createElement("div");
  div.innerHTML = `<b>${sender}:</b> ${msg}`;
  document.getElementById("messages").appendChild(div);
}
