/* =========================================
 * loading page
 *  =======================================*/

document.getElementsByTagName("html")[0].style.overflow = "hidden";

$(window).load(function () {
  $(".loader").fadeOut("slow");
  document.getElementsByTagName("html")[0].style.overflow = "auto";
});
