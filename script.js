
var $window = $(window),
$content = $("#content"),
$chenge = $("#change"),
$up = $("#up"),
topContent = $content.offset().top;

var sticky = false;

 $window.on("scroll", function () {
      if ($window.scrollTop() > topContent) {
           if ( sticky === false ){
                $chenge.slideDown();
                $up.slideDown();
                sticky = true;
           }
      } else {
           if (sticky === true ){
                $chenge.slideUp();
                $up.slideUp();
                sticky = false;
           }
      }
 });
 $window.trigger("scroll");

 $(function() {


     $("#up img").click(function () {
         $('html,body').animate({ scrollTop: 0 }, 'fast');
         return false;
     });

 });
