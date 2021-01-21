$(function() {
	$('#main-title').fadeIn(2000);

	$('#sub-title').fadeIn(2000);

	$('#About').fadeIn(2000);

	$('#Home-scroll').click(function() {
		$("html,body").animate({scrollTop:0
		},'500');
	});

	$('#About-scroll').click(function() {
		$("html,body").animate({scrollTop:$('#About').offset().top -100
		},'500');
	});

	$('#Offer-scroll').click(function() {
		$("html,body").animate({scrollTop:$('#Offer').offset().top -100
		},'500');
	});

	$('#Contact-scroll').click(function() {
		$("html,body").animate({scrollTop:$('#Contact').offset().top -100
		},'500');
	});
});
