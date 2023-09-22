function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nMwEikUEqE":
        Script1();
        break;
  }
}

function Script1()
{
  console.log("page loaded... checking size...");
checkSize();
console.log("size checking complete");

window.addEventListener("resize",checkSize, true);

function checkSize(){
	var player = GetPlayer();
	if (window.innerWidth < 926) {
		console.log("width is less than ideal, setting message...");
		player.SetVar("text_mobileDevice", "If you are using a mobile device, this course is best viewed in landscape mode.");
	} else {
		console.log("width is ideal, removing message...");
		player.SetVar("text_mobileDevice", "");
	}

}
}

