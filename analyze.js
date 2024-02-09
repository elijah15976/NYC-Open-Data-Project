function init(){
  sessionStorage.removeItem('key');
}

function analyze(key){
  sessionStorage.removeItem('key');
  sessionStorage.setItem('key', key);

  window.location.href = "Result.html";
}