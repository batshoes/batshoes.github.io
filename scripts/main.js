$('document').ready( function() {

  subjectLine();

});

function subjectLine() {

  var emailsubjects = ["Porcupines are Misunderstood", "James, I'm emailing you about a job offer.", "It's dangerous to go alone! Take this", "Pumpkin Spice isn't just for white girls", "X-Files should never have been cancelled", "I am now going to describe my favorite fish to you", "Where do flies go at night?"];

  var pickemailsubject = Math.floor(Math.random()*emailsubjects.length);

  $('a[href="mailto:middlemissj.usa@gmail.com"]').attr("href", "mailto:middlemissj.usa@gmail.com?subject=" + emailsubjects[pickemailsubject]);

}