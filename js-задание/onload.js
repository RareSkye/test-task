function windowLoad(f){
	window.addEventListener('load', f);
}
windowLoad(
	function(){
		alert('Страница загружена')
	}
)