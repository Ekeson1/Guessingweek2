function checkGuess() {
    let guessVal = parseInt(guessInput.value);
    
    if (counter < 10 && guessVal) {
      //add 1 to counter variable
      counter++;
      if (guessVal < randomNumber) {
        //change the status text
        statusOutput.value = "Very small! Try again.";
      }
      if (guessVal > randomNumber) {
        //change the status text
        statusOutput.value = "Very large! Try again.";
      }
      if (guessVal === randomNumber) {
        //change the status text
        statusOutput.value = "You guessed the correct number! It was " + randomNumber + "."
        +  " It only took you " + counter + " tries to get right.";
      }
    }
    //if counter has reached 10
    //10 tries have occurred and user couldn't guess correctly
    else if (counter === 10) {
      //update the status
      statusOutput.value = "You weren't able to guess the correct number, and your computer is going to self destruct! The number was " + randomNumber;
    }
      //puts function out of call stack
      return false;
  }
  //generates numbers from a given minimum to a given maximum, inclusive of both numbers
Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;