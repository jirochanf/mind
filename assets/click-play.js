// JavaScript Document
AFRAME.registerComponent('click-play', {
init: function () {
	var v = document.querySelector('#video');
this.el.addEventListener('mouseup', function (event) {
//クリック時の処理
v.play();
});
}
});