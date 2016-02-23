
var $window = $(window),
$content = $("#content"),
$chenge = $("#change"),
topContent = $content.offset().top;

var sticky = false;

 $window.on("scroll", function () {
      if ($window.scrollTop() > topContent) {
           if ( sticky === false ){
                $chenge.slideDown();
                sticky = true;
           }
      } else {
           if (sticky === true ){
                $chenge.slideUp();
                sticky = false;
           }
      }
 });
 $window.trigger("scroll");

function on() {
  alert("OK");
}
