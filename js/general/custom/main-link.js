$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";
	var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;

		$(".mainContain").css("height","auto");
		if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
			setheight = $(window).height();
			$(".mainContain").css("height", setheight);
		}

		if (width != ori_width) {
			if (width > 767) {
				$("#yearList").css("display", "none");
				$(".container-fluid").css("padding-right", "0px");
				$(".container-fluid").css("padding-left", "0px");
			} else {
				$("#yearList").css("display", "");
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
			}
		}
		ori_width = width;
	}

//	$(".link-items").on("mouseenter taphold", function() {
//		$(".link-info-up").show();
//		$(".link-info-down").show();
//	});
//
//	$(".link-items").on("mouseleave taphold", function() {
//		$(".link-info-up").hide();
//		$(".link-info-down").hide();
//	});

	$(".link-items").on("swipe", function() {
		$(".link-info-up").show();
		$(".link-info-down").show();
		console.log("123");
	});
});