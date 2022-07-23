(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    //$('#open2').css("display","");
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());
var slide= 0;
function plusSlides(i){
  var hello = $('.slideshow-container').children('.mySlides')
  total = hello.length-1;
  if(i == -1){
    if(slide == 0){
      hello[total].style.display = "";
      hello[slide].style.display = "none";
      slide = total;
    }else{
      hello[slide].style.display = "none";
      hello[slide-1].style.display = "";
      slide = slide -1;
    }
  }else{
    if(slide == total){
      hello[0].style.display = "";
      hello[slide].style.display = "none";
      slide = 0;
    }else{
      hello[slide].style.display = "none";
      hello[slide+1].style.display = "";
      slide = slide +1;
    }
  }

}

$(document).ready(function() {
  var audio = $('.song')[0];
  audio.muted = true;
  audio.play();

});

function playbutton(){
  var text = $('.playbutton').text();
  if(text == "Pause"){
    var audio = $('.song')[0];
        audio.pause();
        $('.playbutton').text("Play");
  }else{
    var audio = $('.song')[0];
        audio.play();
        $('.playbutton').text("Pause");
  }
}

function changelang(){
  Str = '<div class="mySlides fade"><center>'
  Str +=  '<p>வணக்கம், கனகா உங்கள் புதிய பயணத்திற்கு பல வாழ்த்துக்கள்.&nbsp; </p>'
  Str +=  '<p> நீங்கள் உங்கள் பெயரின் அர்த்தம், அதாவது தூய தங்கம். உங்களைப் போன்ற ஒருவரை நான் என் வாழ்நாளில் சந்தித்ததில்லை.<br>  உங்கள் தன்னலமற்ற பங்களிப்புக்கு நான் உண்மையிலேயே நன்றியுள்ளவனாக இருக்கிறேன்இந்த சிறிய பயணத்திற்கு மற்றும் எனது பயணத்தில் என்னை வழிநடத்தியதற்காக  முன்னேற்றம்.' 
  Str += '</p> </center></div>';

   Str += '<div class="mySlides fade" style="display: none;"><center>' 
   Str+= '<p>ஆரம்பத்தில், நான் திட்டத்தில் சேரும்போது, ​​​​அதிகமாக பேசாத ஒரு உள்முக சிந்தனையாளராக இருந்தேன்.</p>'
    Str += '<p>பேசுவதற்கான நம்பிக்கையை எனக்குக் கொடுத்தீர்கள். நீங்கள் எனக்கு நம்பிக்கையை அளித்தது மட்டுமல்லாமல், என் மென்மையை மேம்படுத்தவும் உதவுகிறீர்கள்  திறன்கள் 😉.'
    Str +=  'இன்று நீங்கள் பார்க்கும் எந்த முன்னேற்றமும் நியாயமானது உன்னால். உங்களைப் போன்ற ஒரு குரு இருப்பது எனக்கு பாக்கியம். </p></center></div>'
   
    Str += '<div class="mySlides fade" style="display: none";><center>'
  Str +=  '<p>ஆரம்பத்தில், எனக்கு குறியீட்டு திறன் இருந்தால், பின்னர் என்று நினைத்தேன் மென்மையான திறன்களில் கவனம் செலுத்த வேண்டிய அவசியமில்லை, ஏனென்றால் அது இருக்கும் என்று நான் நினைக்கிறேன் போதும்.&nbsp; </p>'
   Str +=  '<p> ஆனால் உங்களைச் சந்தித்த பிறகு அது எவ்வளவு முக்கியம் என்பதைத் தெரிந்துகொண்டேன். </p> </center></div>'
  
   Str += ' <div class="mySlides fade" style="display: none";><center> <p>இப்போதெல்லாம் உங்களைப் போன்ற சுயநலம் இல்லாதவர்கள் மிகவும் அரிதாகவே காணப்படுகின்றனர்  மற்றவர்களுக்கு உதவுங்கள்.</p>' 
   Str +=  '<br></p> நீங்கள் ஒரு மூத்த சகோதரியைப் போல எனக்கு உதவுகிறீர்கள். 😉.'
   Str +=  'எனவே நீங்கள் எனக்கு தீதி (மூத்த சகோதரி) கற்பித்த அனைத்திற்கும் மிக்க நன்றி. இனிமே உன்னை கனகா தின்னு கூப்பிடுவேன்.</p> </center></div>'

  Str += '<div class="mySlides fade" style="display: none;"><center>'
  Str +=  '<p>இன்று அதை வெளிப்படுத்தும் போது என் கண்களில் ஆனந்தக் கண்ணீர்  அதிர்ஷ்ட உணர்வு வலுவடைகிறது.&nbsp; </p>'
  Str +=  '<p> உங்கள் பணிவு, பொறுமை மற்றும் கருணை ஆகியவற்றை நான் மதிக்கிறேன். இறுதியாக, எனது முட்டாள்தனமான மற்றும் எரிச்சலூட்டும் அனைத்திற்கும் பதிலளித்ததற்கு நன்றி  கேள்விகள். அதற்கும் மன்னிக்கவும்.' 
  Str +=  '<br> நான் எப்போதும் இணைவதால் விடைபெற மாட்டேன் உ கனகா டியுடன்.😉.'
  Str +=  '</p> <p class="signed">வாழ்த்துக்களுடன் <br> Amit Bhagat</p></center></div>'
  Str +='<a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>'
  Str +='<a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>'
  $('.slideshow-container').html(Str);

  $('.lang').css("display","none");
  
}