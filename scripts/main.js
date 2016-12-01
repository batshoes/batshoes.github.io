$('document').ready( function() {
  // headerImage();

  titles();
  $(document).on('click', '.gmail', openContact);
  
});

function autoFill() {

  var subject = ["Porcupines are misunderstood", "James, I'm emailing you about a job offer.", "It's dangerous to go alone! Take this", "Pumpkin Spice isn't just for white girls", "X-Files should never have been cancelled", "I am now going to describe my favorite fish to you", "Where do flies go at night?", "I'm huge in Japan"];
      email = ["foo@bar.co", "drworm@suspiciouspractice.com", "hashtagemail@yoloswag.gov", "trump@spectaculartoupee.spree"]
      message = ["Spicy jalapeno bacon ipsum dolor amet tail bacon ut, enim labore anim ribeye picanha tongue sirloin tempor. Ipsum shoulder spare ribs jowl pork in. Tri-tip ground round officia frankfurter. Commodo adipisicing shank capicola nisi kielbasa duis andouille corned beef nulla ball tip non. Laboris tempor leberkas t-bone cupim.", "Irish latte cortado kopi-luwak, et java ut whipped body instant iced. Aged, wings espresso rich, chicory affogato flavour iced barista beans. Robust crema, sit affogato americano a macchiato black. Cultivar, at, caramelization id mug macchiato robusta."]
  
      pickedEmail = getRandom(email)
      pickedSubject = getRandom(subject)
      pickedMessage = getRandom(message)
  
  $('input.email').attr('placeholder', email[pickedEmail]) 
  $('input.subject').attr('placeholder', subject[pickedSubject]) 
  $('textarea.message').attr('placeholder', message[pickedMessage]) 

}

// function headerImage(){
//   var images = ["https://s3.amazonaws.com/batshoes/maps.jpeg"]
//       pickedImage = getRandom(images)

//       url = "url('" + images[pickedImage] + "') center no-repeat;"
//       debugger
//   $('.top').css('background-image', url)
// }

function openContact() {
	// $('#contact-form').scrollTo(3000)
  $('#contact-form').ScrollTo({
    duration: 3000,
    easing: 'linear'
});
  autoFill();
}

function titles() {
  var titleLines = ["James Middlemiss", "Travel", "Whiskey", "Wine", "Writing"];
  var pickTitle = getRandom(titleLines)
  $(document).attr('title',titleLines[pickTitle]);
}

function getRandom(element) {
  var numero = element.length
  return Math.floor(Math.random()*numero); 
}