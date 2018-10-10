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

	var today = new Date();
	var age = today.getFullYear() - parseInt($("#bYear").text());
	var dMonth = today.getMonth() - parseInt($("#bMonth").text());
	if (dMonth < 0 || (dMonth === 0 && today.getDate() < parseInt($("#bDate").text()))) {
        age--;
    }
	$("#bAge").text(age);
	
	load_items();
	// scroll
	$(window).scroll(function() {
		load_items();
	});
});

function load_items() {
	$(".itemBox").each(function(k, v) {
		if(isScrolledToView(this)) {
			var timeBase = 0;
			var id = $(this).attr("id");
			if (id == "t1") {
				timeBase = 1.8;
			} else if (id == "t2") {
				timeBase = 2.4;
			} else if (id == "t3") {
				timeBase = 2.2;
			}
			$(this).css("animation-duration", timeBase+"S").addClass("animated bounceIn");
		}
	});
}

function isScrolledToView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return (elemTop <= docViewBottom);
}

$(window).on("load", function() {
	$(".loader").hide();
});