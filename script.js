var qs=document.getElementById('question');
var punch=document.getElementById('punchline');
if(!navigator.onLnine)
{
punch.innerHTML="SEEMS LIKE YOU ARE OFFLINE<br/> TRY LATER";
punch.style.color="red";
}
function init()
{

  fetch ("https://official-joke-api.appspot.com/random_joke")
  .then(res=>res.json())
  .then(res=>change(res));
}
function change(obj)
{
punch.innerHTML=obj.punchline;
  qs.innerHTML=obj.setup;
  punch.style.color="black";
}
