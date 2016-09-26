====================================================================
(function(){
var i=0;
function addCon(){
  if($('.bt-request-buffed')[i]){
  	window.scrollBy(0,200);
    $('.bt-request-buffed')[i].click();
    i++;
  }else if(!$('.bt-request-buffed')[i] && i!=0){
    i=0;
  }else{
    clearInterval(massAddInterval);
    location.reload();
  }
}
var massAddInterval = setInterval(addCon,2000);

})();
====================================================================
