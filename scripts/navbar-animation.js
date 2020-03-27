$(document).ready(function(){
  // checks if user scrolled down before enabling the navbar class
  $(window).on("scroll",function(){
  	let wn = $(window).scrollTop();
    if(wn > 50){
    	$(".navbar").addClass('bg-dark');
    }
    else{
    	$(".navbar").removeClass('bg-dark');
    }
  });
});