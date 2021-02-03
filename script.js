// JavaScript
document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('MenuButton').addEventListener("click", function () {

		this.classList.toggle("active");

		document.getElementById("Spmenu").classList.toggle("active");

		document.getElementById("Spmenu-container").classList.toggle("active");
	})

	document.getElementById("Spmenu-container").addEventListener("click", function() {

  		this.classList.toggle("active");

  		document.getElementById("Spmenu").classList.toggle("active");

  		document.getElementById("MenuButton").classList.toggle("active");

	})
});

// jQuery
$(function() {

	$('#main-title').fadeIn(2000);

	$('#sub-title').fadeIn(2000);

	$('#About').fadeIn(2000);

	$('.Home-scroll').click(function() {
		$("html,body").animate({scrollTop:0
		},'1000');
	});

	$('.About-scroll').click(function() {
		$("html,body").animate({scrollTop:$('#About').offset().top -100
		},'1000');
	});

	$('.Offer-scroll').click(function() {
		$("html,body").animate({scrollTop:$('#Offer').offset().top -100
		},'1000');
	});

	$('.Contact-scroll').click(function() {
		$("html,body").animate({scrollTop:$('#Contact').offset().top -100
		},'1000');
	});
});
