'use strict';

(() => {
    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); 
      };
      const game = (language) => {
        const result = {
            player: 5,
            computer: 5,
        };
        return function start(){
           if (result.computer <= 0 || result.player <= 0){
               alert(`Game over: Компьютер ${result.computer}  Игрок ${result.player}`);
                 console.log(result.player, result.computer);
                 return
           }

           let playerAnswer = prompt(`Введите число от 1 до ${result.player}.`);
           const compAnswer = getRandomIntInclusive(1,2);
           console.log("Ответ компьютера" + '  ' + compAnswer);
           
           if (playerAnswer === null){
            return
           }
           playerAnswer = Number(playerAnswer);
           if (playerAnswer < 1 ||  playerAnswer > result.player || playerAnswer.length == 0  || isNaN(playerAnswer)) {
                 return start()
                }
           if (playerAnswer % 2 === 0 & compAnswer % 2 === 0 || playerAnswer % 2 !== 0 & compAnswer % 2 !== 0){
               result.computer += playerAnswer; result.player -= playerAnswer;
               console.log ('Компьютер' + '  ' + result.computer + '  ' + 'Игрок ' + '  ' + result.player);
               return start()
           }
           else {
            result.player += playerAnswer; result.computer -= playerAnswer;
            console.log ('Компьютер' + '  ' + result.computer + '  ' + 'Игрок ' + '  ' + result.player);
               return start()
           }
        };   
      };
      window.RPS = game;

})()