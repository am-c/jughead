const feTurb = document.querySelector("#feturbulence"),
master = new TimelineMax({ paused: true });
var basicTimeline = anime.timeline({
  autoplay: false
});

function sceneTwo() {
  const tl = new TimelineMax();

  tl.fromTo(feTurb, 1, {
    attr: {
      baseFrequency: '0 0' } },
  {
    attr: {
      baseFrequency: '0.8 1.2' },
    ease: Sine.easeOut });

  tl.to(feTurb, 1, {
    attr: {
      baseFrequency: '0 0' },
    ease: Sine.easeIn });

  return tl;
}
//bomb animation
master.add(sceneTwo(), "-=0.3");

  $(".jughead").click(function() {
    $(".jughead").addClass("sway");
    setTimeout(() => {
      $(".jughead").removeClass("sway");
     }, 2000);
  });
  $("input")
  .keyup(function() {
    var value = $(this).val();
    var boomText = "boom";
    if (value.indexOf(boomText) > -1) {
      master.restart();
      setTimeout(() => {
        $(".jughead").hide();
        $(".wrap").hide();
        $("h1").show();
       // $(".am-container").addClass("flash");
         basicTimeline.play();
       }, 2000);
       setTimeout(() => {
        $(".am-container").css({"background-image": "url(bg3.jpg)"});
       }, 2200);
  } 
  })

  // cloud animation
basicTimeline
.add({
  targets: '.cloud',
  opacity:[0,1],
  scale: [0.5, 1.2],
  translateX: 10, 
   translateY: 20,
  easing: 'linear', 
  duration: 400
})
.add({
  targets: '.cloud',
  opacity:[0,1],
  scale: [0.5, 1.5],
  translateX: 0,
  translateY: 0, 
  duration: 400,
  offset: '-=400'
});