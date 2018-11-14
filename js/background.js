$(document).ready(function(){
	insertTipButton();
});

function insertTipButton() {
	$(document).ready(function(){
		$(".ProfileTweet-action--favorite").each(function(){
			if($(this).attr("check") == null){
				$(this).after('<div class="ProfileTweet-action ProfileTweet-action"><button style="top: 5px;" class="tipIcon ProfileTweet-actionButton u-textUserColorHover js-actionButton" type="button" ><div class="IconContainer js-tooltip" ><span class="Icon Icon--medium"><a class="tipIconold js-tooltip" data-original-title="Tip" title="Tip"></a></span><span class="u-hiddenVisually">Tip</span></div></button></div>');
			}
			$(this).attr('check', 'true');
		})
	});

	$(document).ready(function(){
		$(".user-actions-follow-button").each(function(){
			if($(this).attr("check")==null){
				$(this).after('<span style="padding: 0 0 0.25em 0.2em;" class="user-actions-follow-button"><a class="tipIcon js-tooltip" data-original-title="Tip" title="Tip"></a></span>');
			}
			$(this).attr('check', 'true');
		})
	});
}

$(document).bind('DOMNodeInserted', function(e) {
	if ($(e.target).find('.ProfileTweet-action--favorite')) {
		if($(e.target).find('.ProfileTweet-action--favorite').attr("check")==null)
		{
			$(e.target).find('.ProfileTweet-action--favorite').not('.u-hiddenVisually').after('<div class="ProfileTweet-action ProfileTweet-action" style="min-width:40px"><button onclick="window.location.href="/page2" style="top:  5px;" class="tipIcon ProfileTweet-actionButton u-textUserColorHover js-actionButton" type="button" ><div class="IconContainer js-tooltip" ><span class="Icon Icon--medium"><a class="tipIconold js-tooltip" data-original-title="Tip" title="Tip"></a></span><span class="u-hiddenVisually">Tip</span></div></button></div>');
			$(e.target).find('.ProfileTweet-action--favorite').attr('check', 'true');
		}
	}
});

$(document).on('click', '.tipIcon', function(event){	
	var screen_name = $(this).closest('div[data-screen-name]').attr("data-screen-name");
	window.open('https://www.xrptipbot.com/u:'+screen_name+'/n:twitter', '_blank');
})