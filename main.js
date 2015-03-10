// Start of jquery

// This section for the smooth scroll to different sections of the page
$(document).ready(function() {
  function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
        var targetOffset = $target.offset().top;
        $(this).click(function(event) {
          event.preventDefault();
          $(scrollElem).animate({scrollTop: targetOffset}, 1000, function() {
            location.hash = target;
          });
        });
      }
    }
  });
 
  // use the first element that is "scrollable"
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
 
});

$(document).scroll(function(){
  var y = $(this).scrollTop();

  if (y > 200) {
    $('nav').fadeIn();
  } else {
    $('nav').fadeOut();
  }
});

$(document).ready(function(){

  var hello = $('.hello-background');

  var backgrounds = new Array(
      'url(Optimized-bwforrest.jpg)',
      'url(Optimized-camera.jpeg)',
      'url(Optimized-coffee.jpg)',
      'url(Optimized-concert.jpeg)',
      'url(Optimized-flock.jpg)'
    );

  var current = 0;

  function nextBackground() {
    current++;
    current = current % backgrounds.length;
    hello.css('background-image', backgrounds[current]);
  }

  setInterval(nextBackground, 5000);

  hello.css('background-image', backgrounds[0]);
});

// End of jquery section















