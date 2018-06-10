$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";
	var videoWidth = null;
	var value = 0;
	var offset = 10;
	var indexDoorOpen = false;
	var indexVideoToggle = false;
	var gearTL = null;
	var videoGearTL = null;
	var indexVideoTL = null;
	var indexVideoTL2 = null;

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

	$("#lock1").on("click", function() {
		if (!indexDoorOpen) {
			indexDoorOpen = true;
			var doorTL = new TimelineMax({onComplete : nextStep});
			gearTL = new TimelineMax({paused : true});

			var t1 = new TweenMax.to($(".shiftGroup1"), 5, {top : -200, alpha : 0});
			var t2 = new TweenMax.to($(".shiftGroup2"), 5, {top : setheight * (2), alpha : 0});

			gearTL.insert(t1,0).insert(t2,0)
			.to($(".indexOpen2"), 0, {
				zIndex : -5
			}, "-=0.1");

			$.each($(".shiftUp"), function(key, value) {
				var time = 0;
				var count = 0;

				time = Math.floor(Math.random() * 6) + 2;
				count = Math.floor(Math.random() * 3) + 1;
				var tu = new TweenMax.to($(this), time, {top : -200, alpha : 0, rotation:(360*count)});
				gearTL.insert(tu,0);
			});
			
			$.each($(".shiftDown"), function(key, value) {
				var time = 0;
				var count = 0;

				time = Math.floor(Math.random() * 6) + 2;
				count = Math.floor(Math.random() * 3) + 1;
				var td = new TweenMax.to($(this), time, {top : setheight * (2), alpha : 0, rotation:(360*count)});
				gearTL.insert(td, 0);
			});

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
			})
			.to($(".shiftLeft"), 2.5, {
				left : width * (-200),
				alpha : 0,
				ease : Circ.easeIn
			}, "-=0.7")
			.to($(".shiftRight"), 2.5, {
				left : width * (200),
				alpha : 0,
				ease : Circ.easeIn
			}, "-=2.5")
			.to($(".indexOpen1"), 0, {
				zIndex : -5
			}, "-=0.1");
		}
	});

	function nextStep() {
		var tpu = new TweenMax.to($("#myPurple"), 1, {alpha : 1, ease : Circ.easeIn});
		gearTL.insert(tpu, 4.5);
		var tpi = new TweenMax.to($("#myPink"), 1, {alpha : 1, ease : Circ.easeIn});
		gearTL.insert(tpi, 5);
		var tye = new TweenMax.to($("#myYellow"), 1, {alpha : 1, ease : Circ.easeIn});
		gearTL.insert(tye, 5.5);
		var tre = new TweenMax.to($("#myRed"), 1, {alpha : 1, ease : Circ.easeIn});
		gearTL.insert(tre, 6);

		gearTL.play();
	}

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

	$("#myPink").on("click", function() {
		console.log("佐佐木彩夏 Hello!!");
	});
	$("#myRed").on("click", function() {
		console.log("百田夏菜子 Hello!!");
	});
	$("#myYellow").on("click", function() {
		console.log("玉井詩織 Hello!!");
	});
	$("#myPurple").on("click", function() {
		console.log("高城蕾妮 Hello!!");
	});
});