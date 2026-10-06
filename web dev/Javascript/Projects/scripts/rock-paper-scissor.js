// Get score from localStorage
    // If score doesn't exist, create a new object
    let score = JSON.parse(localStorage.getItem('score')) || {
      wins: 0,
      losses: 0,
      ties: 0
    };


    // Display score when page loads
    updateScoreElement();


    function playGame(playerMove) {

      const computermove = pickcomputerMove();

      console.log(computermove);

      let result = '';


      // SCISSOR
      if (playerMove === 'scissor') {

        if (computermove === 'paper') {
          result = 'You Won!';
        }

        else if (computermove === 'rock') {
          result = 'You lose!';
        }

        else if (computermove === 'scissor') {
          result = 'Tie!';
        }
      }


      // PAPER
      else if (playerMove === 'paper') {

        if (computermove === 'paper') {
          result = 'Tie!';
        }

        else if (computermove === 'rock') {
          result = 'You Won!';
        }

        else if (computermove === 'scissor') {
          result = 'You lose!';
        }
      }


      // ROCK
      else if (playerMove === 'rock') {

        if (computermove === 'paper') {
          result = 'You lose!';
        }

        else if (computermove === 'rock') {
          result = 'Tie!';
        }

        else if (computermove === 'scissor') {
          result = 'You Won!';
        }
      }


      // Update score
      if (result === 'You Won!') {
        score.wins += 1;
      }

      else if (result === 'You lose!') {
        score.losses += 1;
      }

      else if (result === 'Tie!') {
        score.ties += 1;
      }


      // Save updated score in localStorage
      localStorage.setItem('score', JSON.stringify(score));


      // Update score on webpage
      updateScoreElement();

      // display reslut on page
      document.querySelector('.js-result')
        .innerHTML = result;

      // displey moves
      document.querySelector('.js-moves')
        .innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="design-icon">
    <img src="images/${computermove}-emoji.png" class="design-icon">
    Computer`;

    }

    // update score on webpage
    function updateScoreElement () {
      document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;      
    }


    // Computer randomly selects a move
    function pickcomputerMove() {

      const randomnumber = Math.random();

      let computermove = '';


      if (randomnumber >= 0 && randomnumber < 1 / 3) {

        computermove = 'rock';

      }

      else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {

        computermove = 'paper';

      }

      else if (randomnumber >= 2 / 3 && randomnumber < 1) {

        computermove = 'scissor';

      }


      return computermove;
    }