$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var videoWidth = null;
	var value = 0;
	var offset = 10;
	var indexDoorOpen = false;
	var indexVideoToggle = false;
	var videoGearTL = null;
	var indexVideoTL = null;
	var indexVideoTL2 = null;

	TweenMax.set(["#lock2", "#lock3", "#lock4", "#lock5", "#lock6"], {
		alpha : 0
	});

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

	$("#lock1").on("click", function() {
		if (!indexDoorOpen) {
			indexDoorOpen = true;
			var doorTL = new TimelineMax();

			doorTL.to($("#lock1"), 0, {
				alpha : 0
			})
			.to($("#lock2"), 0, {
				alpha : 1
			})
			.to($("#lock2"), 0, {
				alpha : 0
			}, "+=1.5")
			.to($("#lock3"), 0, {
				alpha : 1
			})
			.to($("#lock3"), 0, {
				alpha : 0
			}, "+=1.5")
			.to($("#lock4"), 0, {
				alpha : 1
			})
			.to($("#lock4"), 0, {
				alpha : 0
			}, "+=1.5")
			.to($("#lock5"), 0, {
				alpha : 1
			})
			.to($("#lock5"), 0, {
				alpha : 0
			}, "+=1.5")
			.to($("#lock6"), 0, {
				alpha : 1
			})
			.to($(".shiftLeft"), 3, {
				left : width * (-200),
				alpha : 0,
				ease : Circ.easeIn
			}, "+=1.5")
			.to($(".shiftRight"), 3, {
				left : width * (200),
				alpha : 0,
				ease : Circ.easeIn
			}, "-=3");
		}
	});

	$(".left-video figure").on("click", function() {
		if (indexVideoToggle) {
			indexVideoToggle = false;
			videoGearTL = new TimelineMax();
			indexVideoTL = new TimelineMax();

			videoGearTL.to($(".left-video figure img"), 1.5, {
				rotation : 0
			});

			indexVideoTL.to($(".left-video"), 0.5, {
				left : 0,
				ease : Back.easeOut
			});
		} else {
			indexVideoToggle = true;
			videoGearTL = new TimelineMax();
			indexVideoTL2 = new TimelineMax();

			videoGearTL.to($(".left-video figure img"), 1.5, {
				rotation : 360
			});

			indexVideoTL2.to($(".left-video"), 0.5, {
				left : value * (-1),
				ease : Bounce.easeOut
			});
		}
	});
});