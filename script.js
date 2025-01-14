let words = [];
let isTime = false;
let level = false;
let amountWords = 0;

let word = ''

function newWord() {
  // Load words for the current level
  if (level == 'easy') {
    words = ["pencil", "computer", "good", "apple", "games", "chess", "sun", "phone", "lamp"];
  }

  if (level == 'normal') {
    words = ["watermelon", "bottom", "energy", "keyboard", "airplane"];
  }

  if (level == 'hard') {
    words = ["london", "application", "language", "eiffeltower", "headphones"];
  }
}




function findLongWord() {
  console.log(level)

  
  if (level == 'easy') {
    return 'computer'
  }
  if (level == 'normal') {
    return 'watermelon'
  }
  if (level == 'hard') {
    return 'application'
  }



}





$(".level-easy").click(function () {
  if (level) {
    return;
  }
  level = "easy";
  $(".level-normal").removeClass("active-level");
  $(".level-hard").removeClass("active-level");
  $(".level-easy").addClass("active-level");

  $(".letter").css("opacity", "1");
  isTime = true;
  newWord(); // Initialize words for the "easy" level

  word = random();
  $(".all").text(words.length);

  $(".active").keyup(function () {
    let index = $(".letter").index(this);
    let correctLetter = word[index];
    if ($(this).val() == correctLetter) {
      $(this).next().next().focus();
    }

    let userWord = "";
    $(".letter").each(function () {
      userWord += $(this).val();
    });

    if (userWord == word) {
      amountWords++;
      $(".current").text(amountWords);
      newWord(); // Get new words for the next level

    if (amountWords == words.length) {
      alert ('you win')
      location.reload ()
    }

      const nextWord = random(); // Get the next word
    }
  });
});

$(".level-normal").click(function () {
  if (level) {
    return;
  }
  level = "normal";
  $(".level-hard").removeClass("active-level");
  $(".level-easy").removeClass("active-level");
  $(".level-normal").addClass("active-level");


  words = ["watermelon", "bottom", "energy", "keyboard", "airplane", 'spoon'];

  words.push('cookie', 'candy')






  isTime = true;
  $(".letter").css("opacity", "1");

  word = random();

  $(".all").text(words.length);

  $(".active").keyup(function () {
    let index = $(".letter").index(this);
    let correctLetter = word[index];
    if ($(this).val() == correctLetter) {
      $(this).next().next().focus();
    }

    let userWord = "";
    $(".letter").each(function () {
      userWord += $(this).val();
    });

    if (userWord == word) {
      amountWords++;
      $(".current").text(amountWords);
      newWord(); // Load new words

      if (amountWords == words.length) {
        alert ('you win')
        location.reload ()
      }

      const nextWord = random(); // Get the next random word
    }
  });
});

$(".level-hard").click(function () {
  if (level) {
    return;
  }
  level = "hard";
  $(".level-normal").removeClass("active-level");
  $(".level-hard").addClass("active-level");
  $(".level-easy").removeClass("active-level");

  words = ["london", "application", "language", "eiffeltower", "headphones"];
  isTime = true;
  $(".letter").css("opacity", "1");

  word = random();

  $(".all").text(words.length);

  $(".active").keyup(function () {
    let index = $(".letter").index(this);
    let correctLetter = word[index];
    if ($(this).val() == correctLetter) {
      $(this).next().next().focus();
    }

    let userWord = "";
    $(".letter").each(function () {
      userWord += $(this).val();
    });

    if (userWord == word) {
    $ ('input').val('')
    amountWords++;
      $(".current").text(amountWords);
      newWord(); // Load new words

      if (amountWords == words.length) {
        alert ('you win')
        location.reload ()
      }

      const nextWord = random(); // Get the next random word
    }
  });
});

function random() {
  $ ('input').val('')
  $ ('input').eq(1).focus()

  if (word == false) {
    word = findLongWord()
  } 
  else {
    word = words[Math.floor(Math.random() * words.length)];
  }

  for (let i = 0; i < word.length; i++) {
    if (i % 2 == 0) {
      $(".letter").eq(i).val(word[i]);
      $(".letter").eq(i).addClass("pc");
      $(".letter").eq(i).attr("disabled", "disabled");
    }
    $(".letter").eq(i).css("display", "block");

    $(".letter").eq(i).addClass("active");
  }

  for (let i = word.length; i < $(".letter").length; i++) {

    $ ('.letter').eq(i).css('display', 'none')

  }


  $ ('input').eq(1).focus()


  return word;
}

$(".active").keyup(function () {
  console.log(word)

  let index = $(".letter").index(this);
  let correctLetter = word[index];
  if ($(this).val() == correctLetter) {
    $(this).next().next().focus();
  }

  let userWord = "";
  $(".letter").each(function () {
    userWord += $(this).val();
  });

  if (userWord == word) {
    amountWords++;
    $(".current").text(amountWords);
    $ ('input').val('')
    newWord(); // New words for the next word

    random(); // Get the next word
  $ ('input').eq(1).focus()


    if (words.length == amountWords) {
      alert("you win");
    }
  }
});

let seconds = 0;
let minutes = 0;

setInterval(() => {
  if (isTime == false) {
    return;
  }
  seconds++;
  $(".seconds").text(seconds);
  if (seconds < 10) {
    $(".seconds").text("0" + seconds);
  }

  if (seconds == 60) {
    minutes++;
    seconds = 0;
    $(".seconds").text("00");
    $(".minutes").text(minutes);
    if (minutes < 10) {
      $(".minutes").text("0" + minutes);
    }
  }

  if (minutes == 1 && seconds == 1) {
    alert("you lose");
    location.reload();
  }
  if (seconds == 20) {
    $(".clock").css("color", "yellow");
  } else if (seconds == 40) {
    $(".clock").css("color", "red");
  } else if (seconds == 1) {
    $(".clock").css("color", "green");
  }
}, 1000);


