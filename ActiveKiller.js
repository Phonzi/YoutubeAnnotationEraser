function Kill(){
	var types = [
	"annotation-type-highlight",
	"annotation-type-text",
	"annotation-close-button",
	"annotation-link-icon",
	"annotation",
	"ytp-cards-button-icon",
	"ytp-cards-teaser-label",
	"ytp-cards-teaser-text",
	"annotation-shape"];
	for (var i=0;i<types.length;i++){
		for(let o of document.getElementsByClassName(types[i])){
			o.style.display="none";
		}
	}
}
document.addEventListener("mousedown",function(e){
	if(e.which===3){
		Kill();
	}
	});