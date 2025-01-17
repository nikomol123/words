let words = [];
let isTime = false;
let level = false;
let amountWords = 0;



let easyWords = ["pencil", "computer", "good", "apple", "games", "chess", "sun", "phone", "lamp",
  "apple", "banana", "cat", "dog", "fish", "house", "milk", "rain", "sun", "tree",
  "water", "bird", "cloud", "grass", "chair", "table", "bread", "light", "smile", "star",
  "book", "pen", "paper", "door", "window", "flower", "happy", "clean", "fast", "kind"
];


let normalWords  = ["watermelon", "bottom", "energy", "keyboard", "airplane",
  "bridge", "candle", "circle", "garden", "animal", "planet", "basket", "pillow", "silver", "purple",
  "dollar", "rocket", "jungle", "bottle", "pencil", "window", "summer", "winter", "autumn", "forest",
  "castle", "coffee", "family", "friend", "bridge", "island", "kitchen", "mirror", "singer", "engine",
  "pirate", "ticket", "shadow", "school", "farmer", "artist", "parrot", "button", "danger", "ladder",
  "market", "butter", "dragon", "cactus", "powder", "travel", "carpet", "whale", "bridge", "helmet",
  "ticket", "camera", "guitar", "rabbit", "circle", "tunnel", "palace", "shower", "cookie", "rocket",
  "nature", "orange", "throat", "prison", "village", "hunter", "rocket", "cannon", "forest", "flower",
  "butter", "danger", "castle", "pillow", "silver", "sunset", "harbor", "monday", "painter", "garden",
  "temple", "bridge", "planet", "wallet", "school", "market", "mirror", "gloves", "jungle", "parrot",
  "singer", "animal", "jacket", "coffee", "hunter", "engine", "shadow", "family", "castle", "forest"
];

let hardWords = ["london", "application", "language", "eiffeltower", "headphones",
  "abdomen", "admiral", "affinity", "alchemy", "ambition", "amplify", "anatomy", "archives", "artisan", "asylum",
  "basilisk", "beacon", "brigade", "calamity", "capstone", "cataclysm", "celestial", "chromatic", "conductor", "conflict",
  "conspiracy", "crescent", "crusader", "custodian", "daunting", "deception", "dedication", "delirium", "descendant", "diligence",
  "discovery", "dominion", "dynasty", "eclipse", "elemental", "enigma", "epiphany", "eternal", "expedition", "fathomless",
  "fortitude", "fraternity", "galactic", "garrison", "genesis", "gladiator", "harmonic", "harmony", "heritage", "horizon",
  "illuminate", "immortal", "inception", "inferno", "infinity", "insignia", "labyrinth", "lamentation", "legacy", "levitate",
  "limestone", "luminary", "magnitude", "manifest", "marauder", "maritime", "melancholy", "mercenary", "metaphor", "monarchy",
  "monolith", "mystical", "nemesis", "obsidian", "ominous", "orchestra", "pandemonium", "paradigm", "paramount", "peninsula",
  "perpetual", "phenomenon", "pilgrimage", "pinnacle", "plethora", "prodigy", "prophecy", "quarantine", "quintessential", "radiance",
  "relic", "resonance", "retribution", "sanctuary", "sentinel", "serenade", "serenity", "sovereign", "spectacle", "specter",
  "symphony", "threshold", "tranquility", "transcend", "trepidation", "tyranny", "umbra", "universe", "valiant", "vanguard",
  "vanquish", "verdant", "vigilance", "wilderness", "zealot", "zenith", "archipelago", "catastrophe", "chandelier", "colossus",
  "constellation", "continuum", "crystalline", "decipher", "euphoric", "evanescent", "expeditionary", "fascination", "incandescent", "ineffable",
  "iridescent", "luminescent", "meticulous", "perception", "persistence", "reclamation", "reverence", "sophisticated", "tapestry", "timeless"
];

let word = ''

function newWord() {
  // Load words for the current level
  if (level == 'easy') {
    words  = easyWords
  }

  if (level == 'normal') {
    words = normalWords
    
    console.log(normalWords);
  }

  if (level == 'hard') {
    words = hardWords
    
    console.log(hardWords);
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
    return 'quintessential'
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
  $(".all").text(10);

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

    if (amountWords == words.length || amountWords == 10) {
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


  words =normalWords

  words.push('cookie', 'candy')






  isTime = true;
  $(".letter").css("opacity", "1");

  word = random();

  $(".all").text(5);

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

      if (amountWords == words.length || amountWords == 5 ) {
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

  words = hardWords
  isTime = true;
  $(".letter").css("opacity", "1");

  word = random();

  $(".all").text(3);

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

      if (amountWords == words.length  || amountWords == 3) {
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


    // if (words.length == amountWords  || amountWords == 7) {
    //   alert("you win");
    // }
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


