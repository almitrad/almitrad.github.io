$(function() {

	$("#one-one-description, #one-two-description, #one-three-description, #two-one-description, #two-two-description, #two-three-description, #three-one-description, #three-two-description, #three-three-description").hide();
	$("#one-one-mandala, #one-two-mandala, #one-three-mandala, #two-one-mandala, #two-two-mandala, #two-three-mandala, #three-one-mandala, #three-two-mandala, #three-three-mandala").hide();
	$(".ligthen").hide();

    	$('.card').hover(function(){ //Open on hover 
        	$(this).find(".grid-icon").fadeOut("fast");
        	$(this).find(".lighten").fadeIn();
        	$(this).find("#one-one-mandala").fadeIn()
        	$(this).find("#one-one-description").fadeIn("fast");
        }, function(){
        	$(this).find("#one-one-description").fadeOut("fast");
        	$(this).find("#one-one-mandala").fadeOut("fast");
        	$(this).find(".lighten").fadeOut();
        	$(this).find(".grid-icon").fadeIn();
    	});

    	$('.card').hover(function(){ //Open on hover 
        	$(this).find(".grid-icon").fadeOut("fast");
        	$(this).find(".lighten").fadeIn();
        	$(this).find("#one-two-mandala").fadeIn()
        	$(this).find("#one-two-description").fadeIn("fast");
        }, function(){
        	$(this).find("#one-two-description").fadeOut("fast");
        	$(this).find("#one-two-mandala").fadeOut("fast");
        	$(this).find(".lighten").fadeOut();
        	$(this).find(".grid-icon").fadeIn();
    	});

    	$('.card').hover(function(){ //Open on hover 
        	$(this).find(".grid-icon").fadeOut("fast");
        	$(this).find(".lighten").fadeIn();
        	$(this).find("#one-three-mandala").fadeIn()
        	$(this).find("#one-three-description").fadeIn("fast");
        }, function(){
        	$(this).find("#one-three-description").fadeOut("fast");
        	$(this).find("#one-three-mandala").fadeOut("fast");
        	$(this).find(".lighten").fadeOut();
        	$(this).find(".grid-icon").fadeIn();
    	});

    	$('.card').hover(function(){ //Open on hover 
        	$(this).find(".grid-icon").fadeOut("fast");
        	$(this).find(".lighten").fadeIn();
        	$(this).find("#two-one-mandala").fadeIn()
        	$(this).find("#two-one-description").fadeIn("fast");
        }, function(){
        	$(this).find("#two-one-description").fadeOut("fast");
        	$(this).find("#two-one-mandala").fadeOut("fast");
        	$(this).find(".lighten").fadeOut();
        	$(this).find(".grid-icon").fadeIn();
    	});

    	$('.card').hover(function(){ //Open on hover 
        	$(this).find(".grid-icon").fadeOut("fast");
        	$(this).find(".lighten").fadeIn();
        	$(this).find("#two-two-mandala").fadeIn()
        	$(this).find("#two-two-description").fadeIn("fast");
        }, function(){
        	$(this).find("#two-two-description").fadeOut("fast");
        	$(this).find("#two-two-mandala").fadeOut("fast");
        	$(this).find(".lighten").fadeOut();
        	$(this).find(".grid-icon").fadeIn();
    	});

    	$('.card').hover(function(){ //Open on hover 
        	$(this).find(".grid-icon").fadeOut("fast");
        	$(this).find(".lighten").fadeIn();
        	$(this).find("#two-three-mandala").fadeIn()
        	$(this).find("#two-three-description").fadeIn("fast");
        }, function(){
        	$(this).find("#two-three-description").fadeOut("fast");
        	$(this).find("#two-three-mandala").fadeOut("fast");
        	$(this).find(".lighten").fadeOut();
        	$(this).find(".grid-icon").fadeIn();
    	});

    	$('.card').hover(function(){ //Open on hover 
        	$(this).find(".grid-icon").fadeOut("fast");
        	$(this).find(".lighten").fadeIn();
        	$(this).find("#three-one-mandala").fadeIn()
        	$(this).find("#three-one-description").fadeIn("fast");
        }, function(){
        	$(this).find("#three-one-description").fadeOut("fast");
        	$(this).find("#three-one-mandala").fadeOut("fast");
        	$(this).find(".lighten").fadeOut();
        	$(this).find(".grid-icon").fadeIn();
    	});

    	$('.card').hover(function(){ //Open on hover 
        	$(this).find(".grid-icon").fadeOut("fast");
        	$(this).find(".lighten").fadeIn();
        	$(this).find("#three-two-mandala").fadeIn()
        	$(this).find("#three-two-description").fadeIn("fast");
        }, function(){
        	$(this).find("#three-two-description").fadeOut("fast");
        	$(this).find("#three-two-mandala").fadeOut("fast");
        	$(this).find(".lighten").fadeOut();
        	$(this).find(".grid-icon").fadeIn();
    	});

    	$('.card').hover(function(){ //Open on hover 
        	$(this).find(".grid-icon").fadeOut("fast");
        	$(this).find(".lighten").fadeIn();
        	$(this).find("#three-three-mandala").fadeIn()
        	$(this).find("#three-three-description").fadeIn("fast");
        }, function(){
        	$(this).find("#three-three-description").fadeOut("fast");
        	$(this).find("#three-three-mandala").fadeOut("fast");
        	$(this).find(".lighten").fadeOut();
        	$(this).find(".grid-icon").fadeIn();
    	});

    	


});