$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";
	var videoWidth = null;
	var value = 0;
	var offset = 10;
	var indexDoorOpen = false;
	var indexVideoToggle = false;
	var videoGearTL = null;
	var indexVideoTL = null;
	var indexVideoTL2 = null;
	var timerIndex = null;

	TweenMax.set(["#lock2", "#lock3", "#lock4", "#lock5", "#lock6", "#smoke", "#myPink", "#myRed", "#myYellow", "#myPurple"], {
		alpha : 0
	});

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
				$("#bkYear").css("display", "");
				$("#yearGear").css("display", "");
				$(".left-video").css("width", "55%");
			} else {
				$("#yearList").css("display", "");
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
				$("#bkYear").css("display", "none");
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

	var urlParam = window.location.search.split("visit=")[1] ? window.location.search.split("visit=")[1] : "false";
	urlParam = "true";

	if (urlParam == "true") {
		
		var skipBkYearTL = new TimelineMax({ repeat: -1, yoyo: true });
		skipBkYearTL.to($("#bkYear"), 1, { scale: 1.2 });

		var skipTL = new TimelineMax({paused : true});

		var sTpu = new TweenMax.to($("#myPurple"), 1, {alpha : 1, ease : Circ.easeIn});
		skipTL.insert(sTpu, 1.5);
		var sTpi = new TweenMax.to($("#myPink"), 1, {alpha : 1, ease : Circ.easeIn});
		skipTL.insert(sTpi, 2);
		var sTye = new TweenMax.to($("#myYellow"), 1, {alpha : 1, ease : Circ.easeIn});
		skipTL.insert(sTye, 2.5);
		var sTre = new TweenMax.to($("#myRed"), 1, {alpha : 1, ease : Circ.easeIn});
		skipTL.insert(sTre, 3);

		skipTL.play();
	}

	$(".left-video figure").on("click tap", function() {
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
				left : (value * (-1) + 3),
				ease : Bounce.easeOut
			});
		}
	});

	$("#myPink").on("click tap", function() {
		if (!indexVideoToggle) {
			$(".left-video figure").trigger("click");
		}
		console.log("佐佐木彩夏 Hello!!");
	});

	$("#myRed").on("click tap", function() {
		if (!indexVideoToggle) {
			$(".left-video figure").trigger("click");
		}
		console.log("百田夏菜子 Hello!!");
	});

	$("#myYellow").on("click tap", function() {
		if (!indexVideoToggle) {
			$(".left-video figure").trigger("click");
		}
		console.log("玉井詩織 Hello!!");
	});

	$("#myPurple").on("click tap", function() {
		if (!indexVideoToggle) {
			$(".left-video figure").trigger("click");
		}
		console.log("高城蕾妮 Hello!!");
	});
});

$(window).on("load", function() {
	$(".loader").hide();
	var setheight = "0";
	$(".mainContain").css("height","auto");
	if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
		setheight = $(window).height();
		$(".mainContain").css("height", setheight);
	}
});