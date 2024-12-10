let words = ["pencil", "computer", "good", "apple", "games", "watermelon", 'chess', 'sun', "phone"];

function random() {
  let word = words[Math.floor(Math.random() * words.length)];
  for (let i = 0; i < word.length; i++) {
    if (i % 2 == 0) {
      $(".letter").eq(i).val(word[i]);
      $(".letter").eq(i).addClass("pc");
      $(".letter").eq(i).attr("disabled");
      $(".letter").eq(i).attr("disabled", "disabled");
    }

    $(".letter").eq(i).addClass("active");
  }
  return word;
}
const word = random();

$(".active").keyup(function () {
    let index = $('.letter').index(this)
    let correctLetter = word[index]
  if ($(this).val() ==  correctLetter) {
      $(this).next().next().focus();
  }

  let userWord = ''
  $('.letter').each(function () {
    userWord += $(this).val()
  })

  if (userWord == word) {
    alert ('you win')
      location.reload ()

  } 

});



let seconds = 0 
let minutes = 0  


setInterval(() => {
  seconds++
  $ ('.seconds').text(seconds)
  if (seconds < 10) {
    $ ('.seconds').text('0'+ seconds)
  }

  if (seconds == 60) {
    minutes ++
    seconds = 0
    $ ('.seconds').text('00')
    $ ('.minutes').text(minutes)
    if (minutes < 10) {
      $ ('.minutes').text('0'+ minutes)
    }

  }



  if (minutes == 1 && seconds == 1) {
    alert ('you lose')
    location.reload ()
  }

  
}, 1000);
