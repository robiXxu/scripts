====================================================================

var i=0;
function addCon(){
  if($('.bt-request-buffed')[i]){
    $('.bt-request-buffed')[i].click();
    i++;
  }else if(!$('.bt-request-buffed')[i] && i!=0){
    i=0;
  }else{
    clearInterval(massAddInterval);
  }
}
var massAddInterval = setInterval(addCon,2000);

====================================================================
