$(document).ready(function() {
	var showYear = $(".showYear");
	var year = new Date().getFullYear();
	var range = year - 2008;
	var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

	$.each(showYear, function(key, value) {
		var insertTxt = year + 1 - key;
		if ((insertTxt > year) || (insertTxt < 2008)) {
			$(this).html(insertTxt);
		} else {
			if (tempDisableGear(insertTxt)) {
				$(this).html("<a href='https://ppt.cc/fZP67x'>" + insertTxt + "</a>");
			} else {
				if (insertTxt == "2016") {
					$(this).html("<a href='https://garymomo" + insertTxt + ".github.io/redirection'>" + insertTxt + "</a>");
				} else {
					$(this).html("<a href='https://garymomo" + insertTxt + ".github.io'>" + insertTxt + "</a>");
				}
			}
		}
	});

	var rotationSnap = 45;

	Draggable.create("#controlGear", {
		type : "rotation",
		bounds : {
			minRotation : 0,
			maxRotation : rotationSnap * range
		},
		throwProps : true,
		snap : function(endValue) {
			var result = Math.round(this.rotation / rotationSnap);

			$.each(showYear, function(key, value) {
				var insertTxt = year + 1 - key - result;
				if ((insertTxt > year) || (insertTxt < 2008)) {
					$(this).html(insertTxt);
				} else {
					if (tempDisableGear(insertTxt)) {
						$(this).html("<a href='https://ppt.cc/fZP67x'>" + insertTxt + "</a>");
					} else {
						if (insertTxt == "2016") {
							$(this).html("<a href='https://garymomo" + insertTxt + ".github.io/redirection'>" + insertTxt + "</a>");
						} else {
							$(this).html("<a href='https://garymomo" + insertTxt + ".github.io'>" + insertTxt + "</a>");
						}
					}
				}
			});

			return result * rotationSnap;
		},
		onDrag : function() {

		}
	});
});

function tempDisableGear(txt) {
	var notOK = 2017
	if (parseInt(txt) <= notOK) {
		return true;
	}
	return false;
}
