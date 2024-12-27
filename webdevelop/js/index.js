			imglist=document.querySelector(".imglist");
					var epre=document.querySelector('.prev');
					var enext=document.querySelector('.next');
					var esico=document.getElementById('icolist').getElementsByTagName('li');
					var eicolist=document.querySelector('#icolist');
					var eimglist=document.querySelector('#imglist');
					var left=0;
					var timer;
					run();
					function run(){
						if(left<=-2480){
							left=0;
						}
						var m=Math.floor(-left/620);
						imglist.style.marginLeft=left+'px';
						var n=(left%620==0)?n=1400:n=10;
						left-=10;
						timer=setTimeout(run, n);
						icochange(m)
					}
					
					function imgchange(n){
						let lt=-(n*620);
						imglist.style.marginLeft=lt+'px';
						left=lt;
					}
					epre.onclick=function(){
						let prevgo=Math.floor(-left/620)-1;
						if(prevgo==-1){
							prevgo=3;
						}
						imgchange(prevgo);
					}
					enext.onclick=function(){
						let nextgo=Math.floor(-left/620)+1;
						if(nextgo==4){
							prevgo=0;
						}
						imgchange(nextgo);
					}
					function icochange(m){
						for(let index=0;index<esico.length;index++){
							esico[index].style.backgroundColor='';
						}
						if(m<esico.length){
							esico[m].style.backgroundColor='red';
						}
					}
					eicolist.onclick=function(){
						var tg=event.target;
						let ico=tg.innerHTML-1;
						imgchange(ico);
						icochange(ico);
					}
					eimglist.onmouseover=function(){
						clearTimeout(timer);
					}
					eimglist.onmouseout=function(){
						run();
					}