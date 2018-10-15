$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";
	var linkOffset = 30;
	var linkShowId = "";
	var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

	resize();
	$(window).on("resize", resize);

	function resize() {
		width = window.innerWidth;

		if (linkShowId != "" && linkShowId != null) {
			var itemTop = $("#" + linkShowId).position().top;
			var itemOHeight = $("#" + linkShowId).outerHeight(true);
			var footerTop = $("footer").position().top;
			var linkDownTop = (itemTop + itemOHeight) + linkOffset;
			$(".link-info-down").css("top", linkDownTop + "px");
			$(".link-info-down").css("height", (footerTop - linkDownTop - linkOffset) + "px");

			itemTop = $("#" + linkShowId).position().top;
			$(".link-info-up").css(
					"height", (itemTop - linkOffset) + "px"
			);

			var fs1 = $("#link-info-up-title").css("font-size");
			var fs2 = $("#link-info-up-subtitle").css("font-size");
			var diff = parseInt(fs1.substring(0, fs1.indexOf("px"))) + parseInt(fs2.substring(0, fs2.indexOf("px")));
			if (width <= 639) {
				$("#link-info-up-zone").css(
						"top", (itemTop - linkOffset - 3*diff) + "px"
				);
			} else {
				$("#link-info-up-zone").css(
						"top", (itemTop - linkOffset - 2*diff) + "px"
				);
			}
		} else {
			$(".mainContain").css("height","auto");
			if($(window).height() > $(".mainContain").css("height").substring(0, $(".mainContain").css("height").indexOf("px"))) {
				setheight = $(window).height();
				$(".mainContain").css("height", setheight);
			}
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

	$(".link-items").on("click tap", function() {
		if (linkShowId == null || linkShowId == "") {
			$(".link-show-info").hide();
			$(this).show().addClass("animated pulse infinite");

			var itemTop = $(this).position().top;
			var itemOHeight = $(this).outerHeight(true);
			var footerTop = $("footer").position().top;
			var linkDownTop = (itemTop + itemOHeight) + linkOffset;
			$(".link-info-down").css("top", linkDownTop + "px");
			$(".link-info-down").css("height", (footerTop - linkDownTop) + "px");

			$(".link-info-down").show();
			$("#link-info-down-main").css("animation-duration", "1.5s").
			addClass("animated fadeInUp");

			itemTop = $(this).position().top;
			$(".link-info-up").css(
				"height", (itemTop - linkOffset) + "px"
			);

			linkShowId = $(this).attr("id");
			if (linkShowId == "link1") {
				$("#link-info-up-title").text("官方網站");
				$("#link-info-goto").attr("href", "http://www.momoclo.net/");
			} else if (linkShowId == "link2") {
				$("#link-info-up-title").text("官方會員專區");
				$("#link-info-up-subtitle").text("(日本)");
				$("#link-info-goto").attr("href", "https://fc.momoclo.net/pc/login.php");
			} else if (linkShowId == "link3") {
				$("#link-info-up-title").text("海外會員專區");
				$("#link-info-up-subtitle").text("(海外-英語)");
				$("#link-info-goto").attr("href", "http://fc.momoclo.net/pc/demo/");
			} else if (linkShowId == "link4") {
				$("#link-info-up-title").text("官方周邊商店");
				$("#link-info-goto").attr("href", "http://harue-shouten.jp/");
			} else if (linkShowId == "link5") {
				$("#link-info-up-title").text("EVILLINE");
				$("#link-info-up-subtitle").text("隸屬國王唱片獨立品牌");
				$("#link-info-goto").attr("href", "http://www.evilline.com/momoclo/");
			} else if (linkShowId == "link6") {
				$("#link-info-up-title").text("星塵的偶像行星");
				$("#link-info-up-subtitle").text("隸屬星塵事務所");
				$("#link-info-goto").attr("href", "http://www.stardustplanet.jp/");
			} else if (linkShowId == "link7") {
				$("#link-info-up-title").text("星塵事務所");
				$("#link-info-goto").attr("href", "http://www.stardust.co.jp/stardustplanet/");
			} else if (linkShowId == "link8") {
				$("#link-info-up-title").text("官方推特");
				$("#link-info-goto").attr("href", "https://twitter.com/momorikobuta517");
			} else if (linkShowId == "link9") {
				$("#link-info-up-title").text("官方推特");
				$("#link-info-up-subtitle").text("Live專用");
				$("#link-info-goto").attr("href", "https://twitter.com/information_mcz");
			} else if (linkShowId == "link10") {
				$("#link-info-up-title").text("官方推特");
				$("#link-info-up-subtitle").text("經紀人kwkm自肥");
				$("#link-info-goto").attr("href", "https://twitter.com/momowgp");
			} else if (linkShowId == "link11") {
				$("#link-info-up-title").text("EVILLINE推特");
				$("#link-info-up-subtitle").text("隸屬國王唱片獨立品牌");
				$("#link-info-goto").attr("href", "https://twitter.com/evillinerecords");
			} else if (linkShowId == "link12") {
				$("#link-info-up-title").text("國王唱片專區推特");
				$("#link-info-goto").attr("href", "https://twitter.com/momoclo_king_pr");
			} else if (linkShowId == "link13") {
				$("#link-info-up-title").text("星塵的偶像行星推特");
				$("#link-info-up-subtitle").text("隸屬星塵事務所");
				$("#link-info-goto").attr("href", "https://twitter.com/stapla_official");
			} else if (linkShowId == "link14") {
				$("#link-info-up-title").text("官方專頁");
				$("#link-info-goto").attr("href", "https://www.facebook.com/momoirocloverzofficial/");
			} else if (linkShowId == "link15") {
				$("#link-info-up-title").text("官方頻道");
				$("#link-info-goto").attr("href", "https://www.youtube.com/user/MCZofficial");
			} else if (linkShowId == "link16") {
				$("#link-info-up-title").text("官方生活頻道");
				$("#link-info-goto").attr("href", "https://www.youtube.com/channel/UC7pcEjI2U2vg6CqgbwIpjgg/");
			} else if (linkShowId == "link17") {
				$("#link-info-up-title").text("官方頻道");
				$("#link-info-goto").attr("href", "http://www.ustream.tv/channel/momoclotv");
			} else if (linkShowId == "link18") {
				$("#link-info-up-title").text("星塵YouTube頻道");
				$("#link-info-goto").attr("href", "https://www.youtube.com/user/stardustdigital");
			} else if (linkShowId == "link19") {
				$("#link-info-up-title").text("舊官方部落格");
				$("#link-info-up-subtitle").text("含6人，記錄2011-1-31以前");
				$("#link-info-goto").attr("href", "http://star-studio.jp/momoclo/");
			} else if (linkShowId == "link20") {
				$("#link-info-up-title").text("星塵Channel");
				$("#link-info-goto").attr("href", "http://stardust-ch.jp/movie/tag/?searchWord=%E3%82%82%E3%82%82%E3%81%84%E3%82%8D%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%90%E3%83%BCZ");
			} else if (linkShowId == "link21") {
				$("#link-info-up-title").text("舊3B YouTube頻道");
				$("#link-info-goto").attr("href", "https://www.youtube.com/user/3BjuniorOfficial");
			}

			var fs1 = $("#link-info-up-title").css("font-size");
			var fs2 = $("#link-info-up-subtitle").css("font-size");
			var diff = parseInt(fs1.substring(0, fs1.indexOf("px"))) + parseInt(fs2.substring(0, fs2.indexOf("px")));
			if (width <= 639) {
				$("#link-info-up-zone").css(
					"top", (itemTop - linkOffset - 3*diff) + "px"
				);
			} else {
				$("#link-info-up-zone").css(
					"top", (itemTop - linkOffset - 2*diff) + "px"
				);
			}

			$(".link-info-up").show();
			resize();
			$("html, body").animate({scrollTop: $("#top").offset().top}, 200);
			$("#link-info-up-main").css("animation-duration", "1s").
			addClass("animated fadeInRight");
			$("#link-info-up-title").css("animation-duration", "1s").
			addClass("animated fadeInDown delay-1s");
			$("#link-info-up-subtitle").css("animation-duration", "1s").
			addClass("animated fadeInDown delay-2s");
		}
	});

	$(".glyphicon-remove").on("click tap", function() {
		$("#link-info-up-title").text("").removeClass("animated fadeInDown delay-1s");
		$("#link-info-up-subtitle").text("").removeClass("animated fadeInDown delay-2s");
		$("#link-info-goto").attr("href", "javascript:void(0);");
		$(".link-info-up").hide().removeClass("animated fadeInRight");
		$(".link-info-down").hide().removeClass("animated fadeInUp");
		$(".link-show-info").show();
		$("#" + linkShowId).removeClass("animated pulse infinite");
		$("html, body").animate({scrollTop: $("#" + linkShowId).offset().top}, 0);
		linkShowId = null;
		resize();
	});

	$(".glyphicon-remove").on(animationEnd, addMyAnimation);

	function addMyAnimation() {
		$(this).removeClass("rotateIn").off(animationEnd).on(animationEnd, addMyAnimationNext);
	}

	function addMyAnimationNext() {
	    setTimeout(function () {
	    	$(this).addClass("rotateIn").off(animationEnd).on(animationEnd, addMyAnimation);
	    }, 1000);
	}
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