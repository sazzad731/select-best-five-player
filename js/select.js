const playerNamesBox = document.getElementById("item-box");

// step-1: adding event handlers on card items select button
document.getElementById("card-container").addEventListener("click", (e) => {
  if (e.target.innerText === "SELECT") {
    if (playerNamesBox.childNodes.length - 1 === 5) {
      alert("You can not select more than 5 players")
      return;
    }
      
    const playerNames = e.target.parentNode.childNodes[3].innerText;
    const li = document.createElement('li');
    playerNamesBox.appendChild(li);
    li.classList.add("my-3", "text-xl");
    li.innerText = playerNames;
    e.target.setAttribute("disabled", "");
    e.target.classList.add("bg-sky-700");
    e.target.classList.remove("bg-sky-500");
  }
  // console.log(playerNamesBox.childNodes.length);
})
