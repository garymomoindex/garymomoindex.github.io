$(document).ready(function() {
	var width = window.innerWidth;
	var ori_width = "0";
	var setheight = "0";

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
				$(".container-fluid").css("padding-right", "0px");
				$(".container-fluid").css("padding-left", "0px");
			} else {
				$(".container-fluid").css("padding-right", "15px");
				$(".container-fluid").css("padding-left", "15px");
			}
		}
		ori_width = width;
	}

	$(".link-items").on("click tap", function() {
		var target = $(this).attr("id")
		if (target == "link1") {
			$("#link-info-title").text("官方網站");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "http://www.momoclo.net/");
		} else if (target == "link2") {
			$("#link-info-title").text("官方會員專區");
			$("#link-info-subtitle").text("（日本）");
			$("#hiddenTarget").attr("href", "https://fc.momoclo.net/pc/login.php");
		} else if (target == "link3") {
			$("#link-info-title").text("海外會員專區");
			$("#link-info-subtitle").text("（海外-英語）");
			$("#hiddenTarget").attr("href", "http://fc.momoclo.net/pc/demo/");
		} else if (target == "link4") {
			$("#link-info-title").text("官方周邊商店");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "http://harue-shouten.jp/");
		} else if (target == "link5") {
			$("#link-info-title").text("EVILLINE");
			$("#link-info-subtitle").text("隸屬國王唱片獨立品牌");
			$("#hiddenTarget").attr("href", "http://www.evilline.com/momoclo/");
		} else if (target == "link6") {
			$("#link-info-title").text("星塵的偶像行星");
			$("#link-info-subtitle").text("隸屬星塵事務所");
			$("#hiddenTarget").attr("href", "http://www.stardustplanet.jp/");
		} else if (target == "link7") {
			$("#link-info-title").text("星塵事務所");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "http://www.stardust.co.jp/stardustplanet/");
		} else if (target == "link8") {
			$("#link-info-title").text("官方推特");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "https://twitter.com/momorikobuta517");
		} else if (target == "link9") {
			$("#link-info-title").text("官方推特");
			$("#link-info-subtitle").text("Live專用");
			$("#hiddenTarget").attr("href", "https://twitter.com/information_mcz");
		} else if (target == "link10") {
			$("#link-info-title").text("官方推特");
			$("#link-info-subtitle").text("經紀人kwkm自肥");
			$("#hiddenTarget").attr("href", "https://twitter.com/momowgp");
		} else if (target == "link11") {
			$("#link-info-title").text("EVILLINE推特");
			$("#link-info-subtitle").text("隸屬國王唱片獨立品牌");
			$("#hiddenTarget").attr("href", "https://twitter.com/evillinerecords");
		} else if (target == "link12") {
			$("#link-info-title").text("國王唱片專區推特");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "https://twitter.com/momoclo_king_pr");
		} else if (target == "link13") {
			$("#link-info-title").text("星塵的偶像行星推特");
			$("#link-info-subtitle").text("隸屬星塵事務所");
			$("#hiddenTarget").attr("href", "https://twitter.com/stapla_official");
		} else if (target == "link14") {
			$("#link-info-title").text("官方專頁");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "https://www.facebook.com/momoirocloverzofficial/");
		} else if (target == "link15") {
			$("#link-info-title").text("官方頻道");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "https://www.youtube.com/user/MCZofficial");
		} else if (target == "link16") {
			$("#link-info-title").text("官方生活頻道");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "https://www.youtube.com/channel/UC7pcEjI2U2vg6CqgbwIpjgg/");
		} else if (target == "link17") {
			$("#link-info-title").text("官方頻道");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "http://www.ustream.tv/channel/momoclotv");
		} else if (target == "link18") {
			$("#link-info-title").text("星塵YouTube頻道");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "https://www.youtube.com/user/stardustdigital");
		} else if (target == "link19") {
			$("#link-info-title").text("舊官方部落格");
			$("#link-info-subtitle").text("含6人，記錄2011年1月31日以前");
			$("#hiddenTarget").attr("href", "http://star-studio.jp/momoclo/");
		} else if (target == "link20") {
			$("#link-info-title").text("星塵Channel");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "http://stardust-ch.jp/movie/tag/?searchWord=%E3%82%82%E3%82%82%E3%81%84%E3%82%8D%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%90%E3%83%BCZ");
		} else if (target == "link21") {
			$("#link-info-title").text("舊3B YouTube頻道");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "https://www.youtube.com/user/3BjuniorOfficial");
		} else if (target == "link22") {
			$("#link-info-title").text("官方微博");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "https://weibo.com/u/6981492867");
		} else if (target == "link23") {
			$("#link-info-title").text("官方頻道");
			$("#link-info-subtitle").text("");
			$("#hiddenTarget").attr("href", "https://space.bilibili.com/399119683/");
		}
		$("#hiddenTrigger").trigger("click");
	});

	$("#btn-goto").on("click tap", function() {
		$("#hiddenTarget").get(0).click();
		$("#btn-close").trigger("click");
	});

	$("#listModal").on("show.bs.modal", function() {
		var modalTextTL = new TimelineMax();
		modalTextTL.set($("#link-info-subtitle"), { y: -20, opacity: 0 })
		.from($("#link-info-title"), 2, { x: 50, opacity: 0.1 })
		.to($("#link-info-subtitle"), 1, { y: 20, opacity: 1 }, "-=1.2");
	});

	$("#listModal").on("hide.bs.modal", function() {
		$(this).find("#link-info-title").empty();
		$(this).find("#link-info-subtitle").empty();
		$("#hiddenTarget").attr("href", "javascript:void(0);");
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