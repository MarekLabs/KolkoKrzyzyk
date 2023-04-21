let gracz = "X";
let cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
	cell.addEventListener("click", () => {
		if (cell.textContent === "") {
			cell.textContent = gracz;
			if (win(gracz)) {
				alert(gracz + " wygrał!");
				resetGame();
			} else if (remis()) {
				alert("Remis!");
				resetGame();
			} else {
				gracz = gracz === "X" ? "O" : "X";
			}
		}
	});
});

function win(player) {
	let winPatterns = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6]
	];
	return winPatterns.some(pattern => {
		return pattern.every(index => cells[index].textContent === player);
	});
}
function remis() {
	return [...cells].every(cell => cell.textContent !== "");
}
function resetGame() {
	cells.forEach(cell => cell.textContent = "");
	gracz = "X";
}
