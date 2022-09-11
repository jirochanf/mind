// JavaScript Document
"use strict";

// Window

	const showInfo = () => {
	const video01 = document.getElementById("my_video01");
	const btn01 = document.getElementById("my_btn01");

	btn01.addEventListener("click", (e)=>{
		if(video01.paused){
			video01.play();
			e.target.setAttribute("src", "#img_play");
		}else{
			video01.pause();
			e.target.setAttribute("src", "#img_pause");
		}
	});
}

