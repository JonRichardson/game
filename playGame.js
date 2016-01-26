

function playGame ()
{
  var secretNum=Math.floor(Math.random() * 100) + 1;
  var userGuess;
  var counter=6;

  do
  {
    userGuess=prompt("Enter guess: ");
    if (secretNum < userGuess)
    {
      alert("too high, you have " + counter + " tries left.");
    }
    else
    {
      if (secretNum>userGuess){

        alert("too low, you have " + counter + " tries left.");
    }

      else
    {
        alert("you win!");
    }
  }
    counter=counter-1;
  }
  while (userGuess != secretNum && counter>=0);
}
