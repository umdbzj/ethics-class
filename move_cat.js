function moveCat(event){
	var person=document.getElementById("Cat");
	person.setAttribute('transform','translate('+String(event.offsetX) + ',' + String(event.offsetY) + ')');

}

var svg = document.getElementById('AnimatedExample');
svg.addEventListener('click', moveCat);	