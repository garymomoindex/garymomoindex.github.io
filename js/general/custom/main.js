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
	var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

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
	if (urlParam == "true") {
		$(".indexOpen1").hide();
		$(".indexOpen1").css("z-index", "-5");
		$(".indexOpen2").hide();
		$(".indexOpen2").css("z-index", "-5");

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

	$("#lock1").on("click tap", function() {
		if (!indexDoorOpen) {
			indexDoorOpen = true;
			var doorTL = new TimelineMax({onComplete : nextStep1});

			doorTL.to($("#lock1"), 0, {
				alpha : 0
			})
			.to($("#lock2"), 0, {
				alpha : 1
			})
			.to($("#lock2"), 0, {
				alpha : 0
			}, "+=0.5")
			.to($("#lock3"), 0, {
				alpha : 1
			})
			.to($("#lock3"), 0, {
				alpha : 0
			}, "+=0.5")
			.to($("#lock4"), 0, {
				alpha : 1
			})
			.to($("#lock4"), 0, {
				alpha : 0
			}, "+=0.5")
			.to($("#lock5"), 0, {
				alpha : 1
			})
			.to($("#lock5"), 0, {
				alpha : 0
			}, "+=1")
			.to($("#lock6"), 0, {
				alpha : 1
			})
			.to($("#smoke"), 0.7, {
				top : (setheight/3),
				alpha : 0.8,
				scale : 1.5
			})
			.to($("#smoke"), 0.7, {
				top : (setheight*2/3),
				alpha : 0,
				scale : 2
			});
		}
	});

	function nextStep1() {

		$(".shiftLeft").css("animation-duration", "2s").
		addClass("animated slideOutLeft").one(animationEnd, function() {
			$(".indexOpen1").css("z-index", "-5");
		});
		$(".shiftRight").css("animation-duration", "2s").
		addClass("animated slideOutRight").one(animationEnd, function() {
			$(".indexOpen1").css("z-index", "-5");
		});

		nextStep2();
	}

	function nextStep2() {
		var gearTL = new TimelineMax({paused : true});

		$.each($(".shiftUp"), function(key, value) {
			var time = 0;
			var count = 0;

			time = Math.floor(Math.random() * 2) + 2;
			count = Math.floor(Math.random() * 3) + 1;
			var tu = new TweenMax.to($(this), time, {top : -200, alpha : 0, rotation:(360*count)});
			gearTL.insert(tu, 0);
		});

		$.each($(".shiftDown"), function(key, value) {
			var time = 0;
			var count = 0;

			time = Math.floor(Math.random() * 8) + 2;
			count = Math.floor(Math.random() * 3) + 1;
			var td = new TweenMax.to($(this), time, {top : setheight * (2), alpha : 0, rotation:(360*count)});
			gearTL.insert(td, 0);
		});

		var tpu = new TweenMax.to($("#myPurple"), 1, {alpha : 1, ease : Circ.easeIn});
		gearTL.insert(tpu, 4.5);
		var tpi = new TweenMax.to($("#myPink"), 1, {alpha : 1, ease : Circ.easeIn});
		gearTL.insert(tpi, 5);
		var tye = new TweenMax.to($("#myYellow"), 1, {alpha : 1, ease : Circ.easeIn});
		gearTL.insert(tye, 5.5);
		var tre = new TweenMax.to($("#myRed"), 1, {alpha : 1, ease : Circ.easeIn});
		gearTL.insert(tre, 6);

		gearTL.play();

		$(".shiftGroup1").css("animation-duration", "5s").
		addClass("animated fadeOutUp").one(animationEnd, function() {
			$(".indexOpen2").css("z-index", "-5");
		});
		$(".shiftGroup2").css("animation-duration", "5s").
		addClass("animated fadeOutDown").one(animationEnd, function() {
			$(".indexOpen2").css("z-index", "-5");
		});
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
});