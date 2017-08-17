// JavaScript Document
window.onload=function(){
	
	var obox=document.getElementById('box');
	var ospans=obox.getElementsByTagName('span');
	for(var i=0;i<ospans.length;i++){
		var num=i*16;
		ospans[i].style.backgroundPosition='0 '+-num+'px'
	}
	var boxs=document.getElementsByClassName('content_r');
	boxs[0].onmouseover=function(){
		boxs[0].style.background='rgba(0,0,0,0.77';
	}
	boxs[0].onmouseout=function(){
		boxs[0].style.background='rgba(0,0,0,0.5';
	}
	
	var onavs=document.getElementById('navs');
	var olis=onavs.getElementsByTagName('li');
	var ocats=document.getElementsByClassName('cat');
	for(var i=0;i<olis.length;i++){
		olis[i].index=i;
		olis[i].onmouseover=function(){
			ocats[this.index].style.opacity='1';
			ocats[this.index].style.top='-4px';
		}
		olis[i].onmouseout=function(){
			for(var i=0;i<olis.length;i++){
				ocats[i].style.opacity='0';
				ocats[i].style.top='0';
			}
		}
	}
	
	var olunbo=document.getElementById('lunbo');
	var olunbolis=olunbo.getElementsByTagName('li');
	var odian=document.getElementById('dian');
	var odianlis=odian.getElementsByTagName('li');
	var timer=null;
	var suoyin=0;
	function st(){
		timer=setInterval(function(){
		suoyin++;
		if(suoyin==6){
			suoyin=0;
		}
		for(var i=0;i<odianlis.length;i++){
				odianlis[i].className='';
				olunbolis[i].style.opacity='0';
				olunbolis[i].style.zIndex='0';
		}
		odianlis[suoyin].className='current';
		olunbolis[suoyin].style.opacity='1';
		olunbolis[suoyin].style.zIndex='10';
		},2000);
	}
	st();
	
	for(var i=0;i<odianlis.length;i++){
		odianlis[i].index=i;
		odianlis[i].onmouseover=function(){
			clearInterval(timer);
			for(var i=0;i<odianlis.length;i++){
				odianlis[i].className='';
				olunbolis[i].style.opacity='0';
				olunbolis[i].style.zIndex='0';
			}
			this.className='current';
			olunbolis[this.index].style.opacity='1';
			olunbolis[this.index].style.zIndex='10';
		}
		odianlis[i].onmouseout=function(){
			suoyin=this.index;
			st();
		}
	}
	var obanner=document.getElementById('banner');
	obanner.onmouseover=function(){
		clearInterval(timer);
	}
	obanner.onmouseout=function(){
		clearInterval(timer);
		st();
	}
	
	
	var con03=document.getElementById('content03');
	var odds=con03.getElementsByTagName('dd');
	var oas=con03.getElementsByTagName('a');
	for(var i=0;i<odds.length;i++){
		odds[i].index=i;
		odds[i].onmouseover=function(){
			oas[this.index].style.width='144px';
			oas[this.index].style.height='144px';
		}
		odds[i].onmouseout=function(){
			oas[this.index].style.width='133px';
			oas[this.index].style.height='133px';
		}
	}
	
	/*团控*/
	var oshowpins=document.getElementsByClassName('showpin');
	var oimgs0=oshowpins[0].getElementsByTagName('img');
	var oimgs1=oshowpins[1].getElementsByTagName('img');
	var oimgs2=oshowpins[2].getElementsByTagName('img');
	var oimgs3=oshowpins[3].getElementsByTagName('img');
	var oimgs4=oshowpins[4].getElementsByTagName('img');
	var oimgs5=oshowpins[5].getElementsByTagName('img');
	
	for(var i=1;i<oimgs0.length;i++){
		oimgs0[i].onmouseover=function(){
			this.style.right='8px';
		}
		oimgs1[i].onmouseover=function(){
			this.style.right='8px';
		}
		oimgs2[i].onmouseover=function(){
			this.style.right='8px';
		}
		oimgs3[i].onmouseover=function(){
			this.style.right='8px';
		}
		oimgs5[i].onmouseover=function(){
			this.style.right='8px';
		}
		oimgs0[i].onmouseout=function(){
			this.style.right='0px';
		}
		oimgs1[i].onmouseout=function(){
			this.style.right='0px';
		}
		oimgs2[i].onmouseout=function(){
			this.style.right='0px';
		}
		oimgs3[i].onmouseout=function(){
			this.style.right='0px';
		}
		oimgs5[i].onmouseout=function(){
			this.style.right='0px';
		}
	}
	for(var i=1;i<oimgs4.length;i++){
		oimgs4[i].onmouseover=function(){
			this.style.right='8px';
		}
		oimgs4[i].onmouseout=function(){
			this.style.right='0px';
		}
	}
	
}