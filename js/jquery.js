var ysel = document.getElementsByName("year")[0],
  msel = document.getElementsByName("month")[0],
  dsel = document.getElementsByName("day")[0];
for (var i = 2018; i >= 1985; i--) {
  var opt = new Option();
  opt.value = opt.text = i;
  ysel.add(opt);
}
ysel.addEventListener("change", validate_date);
msel.addEventListener("change", validate_date);
setInitialDays();
$("form.dayname-form").submit(function (event) {
  var fulldate = $(this).find("#month").val() + "/" + $(this).find("#day").val() + "/" + $(this).find("#year").val();
  //var fulldate = dsel+"/"+msel+"/"+ysel;
  console.log(fulldate);

  $(".dayname span").html(DayName(fulldate, $(this).find("#gender").val()));
  event.preventDefault();
});


function loadjs() {

  $('ul#mobile_menu li.menu-item-has-children > a').append('<span class="mysub">3</span>');
  $('.logo_container').prepend('<span id="et-info-phone"><a href="tel:+1 617 833 5207">617.833.5207</a></span>');

  $('ul#mobile_menu li.menu-item-has-children > a').find('span.mysub').on("click", function (event) {
    event.stopPropagation();
    event.preventDefault();

    $(this).closest('li').toggleClass('mymobile_sub_open');

    if ($(this).closest('li').hasClass('mymobile_sub_open')) {
      $(this).text('3');
    }
    else {
      $(this).text('3');
    }

  });
}
window.onload = loadjs;
$(document).ready(function(){
  $('.page-id-9581 .gform_footer #gform_submit_button_21').removeClass('gform_button button');
  $('.page-id-9581 .gform_footer #gform_submit_button_21').addClass('et_pb_promo_button et_pb_button');
  $('.page-id-9581 .gform_footer #gform_save_21_link').removeClass('gform_save_link');
  $('.page-id-9581 .gform_footer #gform_save_21_link').addClass('button_alter et_pb_promo_button et_pb_button');
  });

  $(document).ready(function(){
    $('.userpro-profile-img.userpro-force-center a').removeAttr('href');
    });
