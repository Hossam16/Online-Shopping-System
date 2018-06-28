$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.myBtn').fadeIn();
		} else {
			$('.myBtn').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.myBtn').click(function(){
		$('html, body').animate({scrollTop : 0},500);
		return false;
	});
        
        $(".subbtn").hover(function (){
           $(".subbtn").css({"transition":"background-color 1s linear,color 1s linear","background-color":"#86c33e","color":"white"});
        });
        
        $(".subbtn").mouseleave(function (){
            $(".subbtn").css({"transition":"background-color 1s linear,color 1s linear","background-color":"White","color":"#e92c31"});
        });
        
	$(".FB").hover(function() {
            $(".FB").css({"transition":"background-color 1s linear,border 1s linear","background-color":"rgb(66,103,178)","border" :"none", "height":"25px","width": "25px"});
        });
        $(".FB").mouseleave(function() {
            $(".FB").css({"transition":"background-color 1s linear","background-color":"rgb(33,33,33)", "border": "2px solid #fff", "height":"20px","width": "20px"});
        });
        
        $(".GM").hover(function() {
            $(".GM").css({"transition":"background-color 1s linear,border 1s linear","background-color":"rgb(221,75,57)","border" :"none", "height":"25px","width": "25px"});
        });
        $(".GM").mouseleave(function() {
            $(".GM").css({"transition":"background-color 1s linear","background-color":"rgb(33,33,33)", "border": "2px solid #fff", "height":"20px","width": "20px"});
        });
        
        $(".TW").hover(function() {
            $(".TW").css({"transition":"background-color 1s linear,border 1s linear","background-color":"rgb(3,169,244)","border" :"none", "height":"23px","width": "23px"});
        });
        $(".TW").mouseleave(function() {
            $(".TW").css({"transition":"background-color 1s linear","background-color":"rgb(33,33,33)", "border": "2px solid #fff", "height":"20px","width": "20px"});
        });
        
        $(".Signin").click(function (){
            $(".Sign_in").css({"display":"none"});
            $(".Sign_up").fadeIn(1000);
            $(".Signin").css({"display":"none"});
            $(".Signup").css({"display":"block"});
        });
        
        $(".Signup").click(function (){
            $(".Sign_up").css({"display":"none"});
            $(".Sign_in").fadeIn(1000);
            $(".Signup").css({"display":"none"});
            $(".Signin").css({"display":"block"});
        });
        $("#product1").hover(function (){
           $("#cover1").slideDown();
           $("#Btn1").css({"transition":"background-color 1s linear","background-color": "rgb(132,198,57)"});
        });
        $("#cover1").mouseleave(function() {
            $("#cover1").slideUp();
            $("#Btn1").css({"transition":"background-color 1s linear","background-color": "rgb(254, 24, 24)"});
        });
        $("#product2").hover(function (){
           $("#cover2").slideDown(); 
           $("#Btn2").css({"transition":"background-color 1s linear","background-color": "rgb(132,198,57)"});
           
        });
        $("#cover2").mouseleave(function() {
            $("#cover2").slideUp();
            $("#Btn2").css({"transition":"background-color 1s linear","background-color": "rgb(254, 24, 24)"});
        });
        $("#product3").hover(function (){
           $("#cover3").slideDown(); 
           $("#Btn3").css({"transition":"background-color 1s linear","background-color": "rgb(132,198,57)"});
        });
        $("#cover3").mouseleave(function() {
            $("#cover3").slideUp();
            $("#Btn3").css({"transition":"background-color 1s linear","background-color": "rgb(254, 24, 24)"});
        });
       
            var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
});