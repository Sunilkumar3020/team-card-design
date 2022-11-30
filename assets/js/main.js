$(document).ready(function () {
  $(".member-1.flip-card-front").on("click", function () {
    $(".flip-card-inner-1").addClass("flip");
  });
});

$(document).ready(function () {
  $(".member-2.flip-card-front").on("click", function () {
    $(".flip-card-inner-2").addClass("flip");
  });
});
$(document).ready(function () {
  $(".member-3.flip-card-front").on("click", function () {
    $(".flip-card-inner-3").addClass("flip");
  });
});
$(document).ready(function () {
  $(".member-4.flip-card-front").on("click", function () {
    $(".flip-card-inner-4").addClass("flip");
  });
});
$(document).ready(function () {
  $(".member-5.flip-card-front").on("click", function () {
    $(".flip-card-inner-5").addClass("flip");
  });
});
$(document).ready(function () {
  $(".team-img-box").on("click", function () {
    $(".flip-card-inner").removeClass("flip");
    // alert("hello");
  });
});
