function showmod() {
  document.getElementById("modalback").style.opacity="100"
  document.getElementById("modalback").style.display="block";    
}
function hide() {
  document.getElementById("modalback").style.opacity="0" 
  setTimeout(hidedisplay, 500) 
  //document.getElementById("modalback").style.display="none";
}
function hidedisplay() {
  document.getElementById("modalback").style.display="none";
}
