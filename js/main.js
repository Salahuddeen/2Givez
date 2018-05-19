document.getElementById("donateType").addEventListener('change', setupMenu);
function setupMenu(){
  let type = document.getElementById('donateType').value;
  if (type === "seeds"){

  	document.getElementById("tool").style.position = "absolute";
  	document.getElementById("tool").style.visibility = "hidden";

  	document.getElementById("cash").style.position = "absolute";
  	document.getElementById("cash").style.visibility = "hidden";

  	document.getElementById("seedsAmt").style.position = "relative";
  	document.getElementById("seedsAmt").style.visibility = "visible";
  } else if (type=== "tools"){
  	document.getElementById("seedsAmt").style.position = "absolute";
  	document.getElementById("seedsAmt").style.visibility = "hidden";

  	document.getElementById("cash").style.position = "absolute";
  	document.getElementById("cash").style.visibility = "hidden";

  	document.getElementById("tool").style.position = "relative";
  	document.getElementById("tool").style.visibility = "visible";
  } else {
  	document.getElementById("cash").style.position = "relative";
  	document.getElementById("cash").style.visibility = "visible";

  	document.getElementById("tool").style.position = "absolute";
  	document.getElementById("tool").style.visibility = "hidden";

  	document.getElementById("seedsAmt").style.position = "absolute";
  	document.getElementById("seedsAmt").style.visibility = "hidden";
  }
}

