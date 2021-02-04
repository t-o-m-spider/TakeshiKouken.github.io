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

	// セレクタを取り込む
	const targetElement = document.querySelectorAll(".animationTarget");
	console.log("画面の高さ", window.innerHeight)
	// スクロールした時、常にtargetElementの高さを取得する
	document.addEventListener("scroll", function() {
		for (let i = 0; i < targetElement.length; i++) {
			const getElementDistance = targetElement[i].
			// liの全体の高さの0.6の高さまでスクロールしたらshowクラスをつける
			getBoundingClientRect().top +targetElement[i].clientHeight * .7
			// 現在のブラウザの高さを取得する
			if(window.innerHeight > getElementDistance) {
				// i番目のliが見えた時点でshowというクラスをつける
				targetElement[i].classList.add("show");
			}
		}
	})
});

// jQuery
$(function() {

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
