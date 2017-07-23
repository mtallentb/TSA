let arrowDiv = document.getElementById("arrow");

window.addEventListener('click', () => {
	
	arrowDiv.innerHTML = "";

	function chooseDirection() {}

		let randomNumber = Math.floor(Math.random() * 2);
		console.log(randomNumber);	

		if (randomNumber % 2 === 0) {

			
			function addLeftArrow() {
				arrow.innerHTML = `<img src="https://maxcdn.icons8.com/Share/icon/win8/Arrows//long_arrow_left1600.png">
								<h2> TURN LEFT </h2>`;
			}

			window.setTimeout(addLeftArrow, 300);

		} else {

			function addRightArrow() {
				arrow.innerHTML = `<img src="https://maxcdn.icons8.com/Share/icon/win8/Arrows//long_arrow_right1600.png">
									<h2> TURN RIGHT </h2>`;
			}

			window.setTimeout(addRightArrow, 300);
		}
});
