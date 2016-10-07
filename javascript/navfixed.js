/*fonction pour fixer la barre de nav des qu'on sort de la section accueil*/
$(window).scroll(function() {
 var hauteurHeader = $(".entete").height();
  if ($(this).scrollTop() > hauteurHeader){
		$('.containernav').addClass('navfix');
    $('.containernav').css({'display': "block"});

	} else {
		$('.containernav').removeClass('navfix');
    $('.containernav').css({'display': "none"});

	}
});
