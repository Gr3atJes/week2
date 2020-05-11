
var ysel = document.getElementsByName("year")[0],
  msel = document.getElementsByName("month")[0],
  dsel = document.getElementsByName("day")[0];
for (var i = 2018; i >= 1900; i--) {
  var opt = new Option();
  opt.value = opt.text = i;
  ysel.add(opt);
}
ysel.addEventListener("change", validate_date);
msel.addEventListener("change", validate_date);
setInitialDays();
jQuery("form.dayname-form").submit(function (
  event
) {
  var fulldate =
    jQuery(this).find("#month").val() +
    "/" +
    jQuery(this).find("#day").val() +
    "/" +
    jQuery(this).find("#year").val();
  //var fulldate = dsel+"/"+msel+"/"+ysel;
  console.log(fulldate);

  jQuery(".dayname span").html(
    DayName(
      fulldate,
      jQuery(this).find("#gender").val()
    )
  );
  event.preventDefault();
});

// $(document).ready(function(e) {
//     $('.gce-event-day .gce-feed').each(function() {
//         var url = $.trim($(this).find("span:contains('Description:')").parent().find("a:last").html());
//         var title =$.trim($(this).find(".gce-list-event").html());
//         if (url) {
//             $(this).find(".gce-list-event").html("<a class='gce-list-event' href='"+url+"' target='_blank'>"+title+"</a>");

//         }

//     console.log('url: '+url);
    
//     });



// });



// function validateDate() { 
//     var y = +ysel.value, m =msel.value, d = dsel.value;
//     if(m === "2")
//     var mlength = 28 + (!(y&3) && ((y % 100) !== 0 || !(y &)))
// }
    


    