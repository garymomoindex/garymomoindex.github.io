$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var videoWidth = null;
	var value = 0;
	var indexVideoToggle = false;
	var indexVideoTL = null;
	var indexVideoTL2 = null;

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;

		if (width != ori_width) {
			if (width > 767) {
				$(".navbar").css("display", "none");
				$("#yearGear").css("display", "");
				$(".left-video").css("width", "55%");
			} else {
				$(".navbar").css("display", "");
				$("#yearGear").css("display", "none");
				$(".left-video").css("width", "100%");
			}

			videoWidth = $(".left-video").css("width");
			value = parseInt(videoWidth.substring(0, videoWidth.indexOf("px")));

			if (indexVideoToggle) {
				$(".left-video").css("left", value * (-1));
			}
		}
		ori_width = width;
	}

	$(".left-video figure").on("click", function() {
		if (indexVideoToggle) {
			indexVideoTL = new TimelineMax();

			indexVideoTL.to($(".left-video"), 2, {
				left : 0,
				ease : Back.easeOut
			});
			indexVideoToggle = false;
		} else {
			indexVideoTL2 = new TimelineMax();

			indexVideoTL2.to($(".left-video"), 3, {
				left : value * (-1),
				ease : Bounce.easeOut
			});
			indexVideoToggle = true;
		}
	});
});