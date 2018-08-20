$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";
	var linkDownOffset = 50;
	var linkShowId = "";
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

		if (linkShowId != "" && linkShowId != null) {
			var itemTop = $("#" + linkShowId).position().top;
			var itemOHeight = $("#" + linkShowId).outerHeight(true);
			var footerTop = $("footer").position().top;
			var linkDownTop = (itemTop + itemOHeight) + linkDownOffset;
			$(".link-info-down").css("top", linkDownTop + "px");
			$(".link-info-down").css("height", (footerTop - linkDownTop - linkDownOffset) + "px");
			if ((footerTop - linkDownTop - linkDownOffset) < 100) {
				$(".link-info-down-btn span").css("top", "0px");
			} else {
				$(".link-info-down-btn span").css("top", "-" + (footerTop - linkDownTop - linkDownOffset)/(1.5) + "px");
			}
		}
	}

	$(".link-items").on("click tap", function() {
		var itemTop = $(this).position().top;
		var linkUpHeight =  parseInt($(".link-info-up").css("height").substring(0, $(".link-info-up").css("height").indexOf("px")));
		$(".link-info-up").css(
			"height", (linkUpHeight + itemTop) + "px"
		);console.log(linkUpHeight);
		$("#link-info-up-title").text("測試上");

		$(".link-info-up-base").show();
		$(".link-info-up").show();

		itemTop = $(this).position().top;
		var itemOHeight = $(this).outerHeight(true);
		var footerTop = $("footer").position().top;
		var linkDownTop = (itemTop + itemOHeight) + linkDownOffset;
		$(".link-info-down").css("top", linkDownTop + "px");
		$(".link-info-down").css("height", (footerTop - linkDownTop) + "px");
		$(".link-info-down-btn span").css("top", "-" + (footerTop - linkDownTop - linkDownOffset) + "px");

		$(".link-info-down").show();
		$(".link-info-down-base").show();

		linkShowId = $(this).attr("id");
	});

	$(".glyphicon-remove").on("click tap", function() {
		$(".link-info-up-base").hide();
		$(".link-info-up").hide();
		$(".link-info-down").hide();
		$(".link-info-down-base").hide();
		$(".link-info-up").css("height", "150px");
	});
});