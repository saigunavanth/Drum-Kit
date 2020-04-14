for(var i=0;i<7;i++){

	document.querySelectorAll("button")[i].addEventListener("click",function (){

		var buttonclicked = this.innerHTML;
		soundmaker(buttonclicked);
		animation(buttonclicked);
	});
}

document.addEventListener("keydown",function(event){
	soundmaker(event.key);
	animation(event.key);
}
)


function soundmaker(key){
	switch(key){
		case "w":
			var tom1 = new Audio("sounds/tom-1.mp3");
			tom1.play();
			break;
		case "a":
			var tom2 = new Audio("sounds/tom-2.mp3");
		 tom2.play();
			break;
		case "s":
			var tom3 = new Audio("sounds/tom-3.mp3");
		 tom3.play();
			break;
		case "d":
			var tom4 = new Audio("sounds/tom-4.mp3");
		 tom4.play();
			break;
		case "j":
			var kickbass = new Audio("sounds/kick-bass.mp3");
		 kickbass.play();
			break;
		case "l":
			var snare = new Audio("sounds/snare.mp3");
		 snare.play();
			break;
		case "k":
			var crash = new Audio("sounds/crash.mp3");
			crash.play();
			break;

	}

}

function animation(clickedbutton){
	var btn = document.querySelector("."+clickedbutton); 

	btn.classList.add("pressed");

  setTimeout(function(){
  	btn.classList.remove("pressed");
  },100);
}

