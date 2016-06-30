
window.onload = function(){
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];

    //当音乐播放完停止时候，自动停止光盘旋转效果
	audio.addEventListener("ended" ,function(event){
		music.setAttribute("class","");
        //this.style.animationPlayState = "paused";
        //this.style.webkitAnimationPlayState = "paused";

	},false);
	//点击音乐图标，控制音乐播放效果
	//music.onclick = function (){
	//	if(audio.paused){
	//		audio.play();
	//		//this.setAttribute("class","play");    //停止时图片回到原始的地方
     //       this.style.animationPlayState = "running";   //兼容不好，安卓4.4以上版本，iOS不能用
	//		this.style.webkitAnimationPlayState = "running";
	//	}else{
	//		audio.pause();
	//		//this.setAttribute("class","");
     //       this.style.animationPlayState = "paused";
	//		this.style.webkitAnimationPlayState = "paused";
	//	}
	//}
    music.addEventListener("touthstart",function(event){
        if(audio.paused){
            audio.play();
            this.setAttribute("class","play");
        }else {
            audio.pause();
            this.setAttribute("class","");
        };
    },false);
};
