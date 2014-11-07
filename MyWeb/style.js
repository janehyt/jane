$(function ()
{ $("#search-query").popover({
		html: true,
		placement: "bottom",
		container: "body",
		delay: {"hide":200},
		content: function() {
			return $("#popover-content").html()
		}
	})
});