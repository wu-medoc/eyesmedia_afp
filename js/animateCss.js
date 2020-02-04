$.fn.extend({
    animateCss: function (animationName, anotherCss, callback) {
        var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
		var isAdd = anotherCss.substr(0, 1);
		var addCss = anotherCss.substr(1);
		if (isAdd === '+' || isAdd === '-') {
		if (isAdd === '+') {		this.addClass(addCss);}
        this.addClass("animated " + animationName).one(animationEnd, function () {
			if (isAdd === '-') {$(this).removeClass(addCss);}
            $(this).removeClass("animated " + animationName);
            if (callback) callback();
        });
		}
        return this;
    }
});