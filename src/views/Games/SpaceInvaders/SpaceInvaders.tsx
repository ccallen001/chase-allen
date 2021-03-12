import { useEffect } from 'react';

import './SpaceInvaders.scss';

function SpaceInvaders() {
  useEffect(() => {
    const resultsDisplay = document.querySelector('.results');

    let currentShooterIndex = 200;
    let gridWidth = 15;
    let direction = 1;
    let goingRight = true;
    let aliensRemoved: any[] = [];
    let score = 0;
    let gameLoop: any;

    const squares = document.querySelectorAll('.grid div');

    const alienInvaders = Array.from({ length: 38 }, (_, i) => i);

    function draw() {
      for (let i = 0; i < alienInvaders.length; i++) {
        if (!aliensRemoved.includes(i)) {
          squares[alienInvaders[i]]?.classList.add('invader');
        }
      }
    }

    draw();

    function remove() {
      for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]]?.classList.remove('invader');
      }
    }

    squares[currentShooterIndex]?.classList.add('shooter');

    function moveShooter(e: KeyboardEvent) {
      squares[currentShooterIndex]?.classList.remove('shooter');

      switch (e.key) {
        case 'ArrowLeft':
          if (currentShooterIndex % gridWidth !== 0) {
            currentShooterIndex -= 1;
          }

          break;
        case 'ArrowRight':
          if (currentShooterIndex % gridWidth < gridWidth - 1) {
            currentShooterIndex += 1;
          }

          break;
      }

      squares[currentShooterIndex]?.classList.add('shooter');
    }

    document.addEventListener('keydown', moveShooter);

    function moveInvaders() {
      const leftEdge = alienInvaders[0] % gridWidth === 0;
      const rightEdge =
        alienInvaders[alienInvaders.length - 1] % gridWidth === gridWidth - 1;

      remove();

      if (rightEdge && goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
          alienInvaders[i] += gridWidth + 1;
          direction = -1;
          goingRight = false;
        }
      }

      if (leftEdge && !goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
          alienInvaders[i] += gridWidth - 1;
          direction = 1;
          goingRight = true;
        }
      }

      for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction;
      }

      draw();

      if (
        resultsDisplay &&
        squares[currentShooterIndex]?.classList.contains('invader')
      ) {
        resultsDisplay.textContent = 'Game Over';
        clearInterval(gameLoop);
      }

      for (let i = 0; i < alienInvaders.length; i++) {
        if (resultsDisplay && alienInvaders[i] > squares.length) {
          resultsDisplay.textContent = 'Game Over';
          clearInterval(gameLoop);
        }
      }

      if (resultsDisplay && aliensRemoved.length === alienInvaders.length) {
        resultsDisplay.textContent = 'You Win!';
        clearInterval(gameLoop);
      }
    }

    gameLoop = setInterval(moveInvaders, 500);

    function shoot(e: KeyboardEvent) {
      let laser: any;
      let currentLaserIndex = currentShooterIndex;

      function moveLaser() {
        squares[currentLaserIndex]?.classList.remove('laser');
        currentLaserIndex -= gridWidth;
        squares[currentLaserIndex]?.classList.add('laser');

        if (
          resultsDisplay &&
          squares[currentLaserIndex]?.classList.contains('invader')
        ) {
          squares[currentLaserIndex]?.classList.remove('laser');
          squares[currentLaserIndex]?.classList.remove('invader');
          squares[currentLaserIndex]?.classList.add('boom');

          setTimeout(
            () => squares[currentLaserIndex]?.classList.remove('boom'),
            100
          );

          clearInterval(laser);

          const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
          aliensRemoved.push(alienRemoved);
          score++;
          resultsDisplay.textContent = score.toString();
        }
      }

      switch (e.key) {
        case 'ArrowUp':
          laser = setInterval(moveLaser, 100);
      }
    }

    document.addEventListener('keydown', shoot);
  });

  return (
    <div className="game SpaceInvaders">
      <h4>Space Invaders</h4>
      <h2 className="results">0</h2>
      <div className="grid">
        {Array.from({ length: 225 }).map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
    </div>
  );
}

export default SpaceInvaders;
