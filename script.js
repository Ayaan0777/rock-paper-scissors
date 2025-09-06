let p1 = null, p2 = null;
let p1Locked = false;

function choose(choice, player) {
  if (player === 1) {
    p1 = choice;
    p1Locked = true;
    document.getElementById("p1Choice").innerText = "Choice: 🔒";
    document.getElementById("winner").innerText = "Player 1 has chosen... Waiting for Player 2!";
  } else {
    if (!p1Locked) {
      document.getElementById("winner").innerText = "⚠️ Player 1 must choose first!";
      return;
    }
    p2 = choice;
    document.getElementById("p2Choice").innerText = `Choice: ${emoji(choice)}`;
    revealAndDecide();
  }
}

function revealAndDecide() {
  document.getElementById("p1Choice").innerText = `Choice: ${emoji(p1)}`;

  let result = "";

  if (p1 === p2) {
    result = "🤝 It's a tie!";
  } else if (
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock") ||
    (p1 === "scissors" && p2 === "paper")
  ) {
    result = "🎉 Player 1 Wins!";
  } else {
    result = "🏆 Player 2 Wins!";
  }

  document.getElementById("winner").innerText = result;

  // Reset for next round
  p1 = null;
  p2 = null;
  p1Locked = false;
}

function emoji(choice) {
  if (choice === "rock") return "✊";
  if (choice === "paper") return "✋";
  if (choice === "scissors") return "✌️";
}
