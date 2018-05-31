$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var videoWidth = null;
	var value = 0;
	var offset = 10;
	var indexVideoToggle = false;
	var indexVideoTL = null;
	var indexVideoTL2 = null;

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;

		$(".mainContain").css("height","auto");
		if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
			var setheight = $(window).height();
			$(".mainContain").css("height", setheight);
		}

		if (width != ori_width) {
			if (width > 767) {
				$("#yearList").css("display", "none");
				$(".container-fluid").css("padding-right", "0px");
				$(".container-fluid").css("padding-left", "0px");
				$("#yearGear").css("display", "");
				$(".left-video").css("width", "55%");
			} else {
				$("#yearList").css("display", "");
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
				$("#yearGear").css("display", "none");
				$(".left-video").css("width", "90%");
			}

			videoWidth = $(".left-video").css("width");
			value = parseInt(videoWidth.substring(0, videoWidth.indexOf("px"))) - offset;

			if (indexVideoToggle) {
				$(".left-video").css("left", value * (-1));
			}
		}
		ori_width = width;
	}

	$(".left-video figure").on("click", function() {
		if (indexVideoToggle) {
			indexVideoToggle = false;
			indexVideoTL = new TimelineMax();

			indexVideoTL.to($(".left-video"), 0.5, {
				left : 0,
				ease : Back.easeOut
			});
		} else {
			indexVideoToggle = true;
			indexVideoTL2 = new TimelineMax();

			indexVideoTL2.to($(".left-video"), 0.5, {
				left : value * (-1),
				ease : Bounce.easeOut
			});
		}
	});
});