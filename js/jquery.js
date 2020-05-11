$(document).ready(function(e) {
    $('.gce-event-day .gce-feed').each(function() {
        var url = $.trim($(this).find("span:contains('Description:')").parent().find("a:last").html());
        var title =$.trim($(this).find(".gce-list-event").html());
        if (url) {
            $(this).find(".gce-list-event").html("<a class='gce-list-event' href='"+url+"' target='_blank'>"+title+"</a>");

        }

    console.log('url: '+url);
    
    });



});

    


    