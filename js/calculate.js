// step-1: add event handlers to the calculate button

document.getElementById("calculate").addEventListener("click", () => {
  const playerQuantity = document.getElementById("item-box").childNodes.length - 1;
  const totalPlayerCost = getInputValueById("per-player-cost") * playerQuantity;
  if (isNaN(totalPlayerCost) || totalPlayerCost < 0) {
    alert("Please input a valid number")
    return;
  }
  setElementValueById("total-player-cost", totalPlayerCost);
})


document.getElementById("calculate-total").addEventListener("click", () => {
  const getTotalPlayerCost = getElementValueById("total-player-cost");
  const getManagerCost = getInputValueById("manager-cost");
  const getCoachCost = getInputValueById("coach-cost");
  const getTotalCost = getTotalPlayerCost + getManagerCost + getCoachCost;
  if (isNaN(getTotalCost) || getTotalCost < 0) {
    alert("Please input a valid number");
    return;
  }
  setElementValueById("total-cost", getTotalCost);
})