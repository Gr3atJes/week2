// * To change this license header, choose License Headers in Project Properties.
// * To change this template file, choose Tools | Templates
// * and open the template in the editor.
// */


// JavaScript Document

jQuery(document).ready(function(e) {
   
   // rewrite google calendar event items
   jQuery('.gce-event-day .gce-feed').each(function() {
       // add URL link to event title
       var url = jQuery.trim(jQuery(this).find("span:contains('Description:')").parent().find("a:last").html());
       var title = jQuery.trim(jQuery(this).find(".gce-list-event").html());
       if (url) {
               jQuery(this).find(".gce-list-event").html("<a class='gce-list-event' href='"+url+"' target='_blank'>"+title+"</a>");
               //console.log(title+': '+url)
       }

       console.log('url: '+url);
   });
 
 
 
});

// day name generator functions
function validate_date() {
   var y = +ysel.value, m = msel.value, d = dsel.value;
   if (m === "2")
       var mlength = 28 + (!(y & 3) && ((y % 100) !== 0 || !(y & 15)));
   else var mlength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
   dsel.length = 0;
   for (var i = 1; i <= mlength; i++) {
       var opt = new Option();
       opt.value = opt.text = i;
       if (i == d) opt.selected = true;
       dsel.add(opt);
   }
}
function setInitialDays() {
   d = dsel.value;
   for (var i = 1; i <= 31; i++) {
       var opt = new Option();
       opt.value = opt.text = i;
       if (i == d) opt.selected = true;
       dsel.add(opt);
   }
}
function DayName(dt,gender) {
   // set names to days
   // supply birth date in field (MM/DD/YY)
   // convert to date format; getDay from date; display
   var name = ''; dayofweek = ''; var audio = '';
   var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
   var days_abbr = ['Sun','Mon','Tues','Wed','Thu','Fri','Sat'];
   var female_names = ['Akosua','Adjoa','Abenaa','Akua','Yaa','Afia','Amma'];
   var male_names = ['Kwasi','Kodjo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
   var dt = new Date(dt);
   var day = dt.getDay();
   if (day != null) {
        if (gender == 'male') {
           name = male_names[day];
       }
       else {
           name = female_names[day];
       }
       var gender_day = gender+'-'+days[day].toLowerCase();
       var audio_output = jQuery('.custom-table').find('.'+gender_day).html();
       console.log(gender_day);
       return '<p>Your day name is <strong>'+name+'</strong>, which means you were born on a <strong>'+days[day]+'</strong>.</p><div><strong>Listen:</strong> '+audio_output+'</div>';
   }
   else {
       return 'You did not select a proper date. Please try again.';	
   }
  
}
