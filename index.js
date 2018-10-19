 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } 


	jQuery(document).ready(function($) {
		$(".scroll").click(function(event){		
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});
	});

// validate RSVP form
function confirm(){
					var n = document.forms["myForm"]["name"].value;
					var t = document.forms["myForm"]["telephone"].value;
					var p = document.forms["myForm"]["postcode"].value;
					var e = document.forms["myForm"]["email"].value;
					
    				if (n == "" || n == "Name") {
        			alert("Name must be filled out");
						return false;
						
					}
					
					
					if (t == "" || t == "Telephone") {
        			alert("Telephone must be filled out");
        			return false;
					} 
						
						
					if(p == "" || p == "Post code"){
						alert("Post Code must be filled out");
						return false;
					}
					if(e == "" || e == "Email"){
						alert("Post Code must be filled out");
						alert("Post Code must be filled out");
						return false;
					}
					
   			alert("Thank you, your RSVP has been noted and you will receive festival updates.")
				}
				