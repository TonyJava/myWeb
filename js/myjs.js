// JavaScript Document

$(function () {
	// setTimeout(function(){
	// 	//$(document).ready(function(e) {
	//     	//$('.loading').fadeOut();
	// 	//});
	// },6000);

	$('.screen01').removeClass('start');

	//首页下拉按钮
	$('.screen01 .scroll-down').click(function () {
		$('.doc').stop().animate({ top: -100 + '%' }, 400);
		$('.nav_in ul li').eq(1).addClass('current').siblings().removeClass('current');
		$('.gps li').eq(1).addClass('current').siblings().removeClass('current');
		$('.doc>div').eq(1).removeClass('start').siblings().addClass('start');
		num = index;
	});

	//封装钢琴模块的背景音乐控制
	function bgmc() {
		if (num == 6) {
			$('audio').eq(0)[0].pause();
			musicbox.style.background = "url(images/music_c.png)";
			musicbox.style.backgroundSize = "100%";
			musicbox.style.animation = "music 4s infinite linear paused";
		}/*else{
			$('audio').eq(0)[0].play();
			musicbox.style.background = "url(images/music.png)";
			musicbox.style.backgroundSize = "100%";
			musicbox.style.animation = "music 4s infinite linear running";
		}*/
	}

	//封装钢琴入场动画
	// function mcruchang(){
	// 	clearInterval(ruchang);
	// 	var nums=0;
	// 	var ruchang=null;
	// 	if(num==6){
	// 		ruchang=setInterval(function(){
	// 			$('.mc_audio').eq(nums)[0].play();
	// 			$('.all ul li span').eq(nums).stop().animate({top:0},300).animate({top:100+'%'},300);
	// 			nums++;
	// 			if(nums>8){clearInterval(ruchang)}
	// 		},150);
	// 	}
	// }

	$('.gps li').click(function () {
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.doc').stop().animate({ top: -index * 100 + '%' }, 400);
		$('.doc>div').eq(index).removeClass('start').siblings().addClass('start');
		$('.nav_in ul li').eq(index).addClass('current').siblings().removeClass('current');
		num = index;
		bgmc();
		// mcruchang();
	});
	$('.nav_in ul li').click(function () {
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.doc').stop().animate({ top: -index * 100 + '%' }, 400);
		$('.doc>div').eq(index).removeClass('start').siblings().addClass('start');
		$('.gps li').eq(index).addClass('current').siblings().removeClass('current');
		num = index;
		bgmc();
		// mcruchang();
	});

	var num = 0;
	var timer = null;
	$(window).mousewheel(function (event, delta) {
		clearTimeout(timer);
		timer = setTimeout(function () {
			num -= delta;
			if (num > 4) { num = 0 };
			if (num < 0) { num = 0 };
			$('.gps li').eq(num).addClass('current').siblings().removeClass('current');
			$('.doc').stop().animate({ top: -num * 100 + '%' }, 400);
			$('.doc>div').eq(num).removeClass('start').siblings().addClass('start');
			$('.nav_in ul li').eq(num).addClass('current').siblings().removeClass('current');
			bgmc();
			// mcruchang();
		}, 300);
	});

	//流星雨
	var timeryu = null;
	setTimeout(function () {
		function yu() {
			for (var i = 0; i < 4; i++) {//for循环控制每排的雨滴数量
				var y = parseInt(Math.random() * 20 + 50);//用于控制雨滴的长度
				var j2 = parseInt(Math.random() * 300 + 1200);//用于控制每个雨滴的下落时间 1200到1500
				var j = parseInt(Math.random() * 1600);//用于随机小盒子的left坐标 0到1600
				var j1 = parseInt(Math.random() * 300 + 300);//一个300到600之间的随机数
				var n = parseInt(Math.random() * 10 + (-10));//用于随机小盒子的top坐标 -10到0
				$('.div').prepend('<div></div>')//插入小盒子
				$('.div').children('div').eq(0).css({ 'left': j, 'top': n, 'width': y });//设置每轮雨滴的初始位置
				//控制每个雨滴的轨迹和动画时间
				$('.div').children('div').eq(0).animate({ 'left': j - j1, 'top': $(window).height() + 50 }, j2);
			}
		}
		//控制每轮雨滴的间隔时间
		function st() {
			timeryu = setInterval(function () {
				yu();
			}, 400);
		}
		st();
		//盒子回收机制
		setInterval(function () {
			for (var j = 0; j < $('.div>div').size() / 4; j++) {
				$('.div>div').eq($('.div>div').size() - j).remove();
			}
		}, 600)
	}, 1200);

	//锁住滑动
	$('body').bind('touchmove', function (event) {
		event.preventDefault();
	})

	//作品TAB栏
	/*$('.worksul li').mouseover(function(){
		$(this).addClass('current').siblings().removeClass('current');
	});*/

	$('.worksul li').eq(0).click(function () {
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.allworks li').eq(index).fadeIn(500).siblings().stop().fadeOut(500);
		$('.app').stop().fadeOut(500);
		$('.appbox').stop().fadeOut();
	});
	$('.worksul li').eq(3).click(function () {
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.allworks li').eq(index).fadeIn(500).siblings().stop().fadeOut(500);
		$('.app').stop().fadeOut(500);
		$('.appbox').stop().fadeOut();
	});
	$('.worksul li').eq(2).click(function () {
		var index = $(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.allworks li').eq(index).fadeIn(500).siblings().stop().fadeOut(500);
		$('.app').stop().fadeOut(500);
		$('.appbox').stop().fadeOut();
	});
	/*$('.allworks li dt').hover(function(){
		$(this).css('opacity','1');
	},function(){
		$(this).css('opacity','0.7');
	});*/
	$('.worksul li').eq(1).click(function () {
		$(this).addClass('current').siblings().removeClass('current');
		clearInterval(timerlunbo);
		$('.appbox').removeClass('autobox');
		$('.app').stop().fadeIn(500);
		$('.allworks li').stop().fadeOut();
		$('.appbox').stop().fadeIn(500);
	});

	var bignum = 0;
	$('.allworks li:eq(0) dt').click(function () {
		var index = $(this).parent().index() + 9;
		$('.motai_in').css('background', 'rgba(134,134,134,0.5) url(images/wk0' + index + '.jpg) no-repeat center center');
		$('.motai').fadeIn();
		bignum = index;
	});
	$('.allworks li:eq(1) dt').click(function () {
		var index = $(this).parent().index() + 13;
		$('.motai_in').css('background', 'rgba(134,134,134,0.5) url(images/wk0' + index + '.jpg) no-repeat center center');
		$('.motai').fadeIn();
		bignum = index;
	});
	$('.allworks li:eq(2) dt').click(function () {
		var index = $(this).parent().index() + 5;
		$('.motai_in').css('background', 'rgba(134,134,134,0.5) url(images/wk0' + index + '.jpg) no-repeat center center');
		$('.motai').fadeIn();
		bignum = index;
	});
	$('.allworks li:eq(3) dt').click(function () {
		var index = $(this).parent().index() + 1;
		$('.motai_in').css('background', 'rgba(134,134,134,0.5) url(images/wk0' + index + '.jpg) no-repeat center center');
		$('.motai').fadeIn();
		bignum = index;
		if (bignum === 1 || bignum === 2 || bignum === 3) { $('.motai_in .go').css('display', 'block'); } else {
			$('.motai_in .go').css('display', 'none');
		}
	});

	$('.motai_in span').eq(0).click(function () {
		$('.motai').fadeOut();
		bignum = 0;
		xibo = 1;
		meisong = 1;
		banner = 1;
	});

	var xibo = 1;
	var meisong = 1;
	var banner = 1;
	$('.motai_in .gor').click(function () {
		if (bignum == 1) {
			xibo++;
			if (xibo > 24) { xibo = 24 }
			$('.motai_in').css('background', 'rgba(134,134,134,0.5) url(images/xibo' + xibo + '.jpg) no-repeat center center');
		}
		if (bignum == 2) {
			meisong++;
			if (meisong > 25) { meisong = 25 }
			$('.motai_in').css('background', 'rgba(134,134,134,0.5) url(images/ms' + meisong + '.jpg) no-repeat center center');
		}
		if (bignum == 3) {
			banner++;
			if (banner > 6) { banner = 6 }
			$('.motai_in').css('background', 'rgba(134,134,134,0.5) url(images/banner' + banner + '.jpg) no-repeat center center');
		}
	});
	$('.motai_in .gol').click(function () {
		if (bignum == 1) {
			xibo--;
			if (xibo < 1) { xibo = 1 }
			$('.motai_in').css('background', 'rgba(134,134,134,0.5) url(images/xibo' + xibo + '.jpg) no-repeat center center');
		}
		if (bignum == 2) {
			meisong--;
			if (meisong < 1) { meisong = 1 }
			$('.motai_in').css('background', 'rgba(134,134,134,0.5) url(images/ms' + meisong + '.jpg) no-repeat center center');
		}
		if (bignum == 3) {
			banner--;
			if (banner < 1) { banner = 1 }
			$('.motai_in').css('background', 'rgba(134,134,134,0.5) url(images/banner' + banner + '.jpg) no-repeat center center');
		}
	});

	//留言
	$('.clickliuyan').click(function (e) {
		if ($(this).html() == '我要留言') {
			if ($(window).width() <= 1366) {
				$(this).html('关闭留言').css('transform', 'translateY(200px)');
				$('.liuyan').stop().fadeToggle();
				return false;
			}
			$(this).html('关闭留言').css('transform', 'translateX(300px)');
		} else {
			$(this).html('我要留言').css('transform', 'translate(0px,0px)');
		}
		$('.liuyan').stop().fadeToggle();
	});

	//联系
	$('.lianxi li').hover(function () {
		var index = $(this).index();
		$('.fangshi li').eq(index).css({ 'opacity': '1' });
	}, function () {
		var index = $(this).index();
		$('.fangshi li').eq(index).css({ 'color': '#ebebeb' });
	});

	//音乐
	var musicbox = document.getElementById("music");
	var oaudio = document.getElementsByTagName("audio");

	musicbox.onclick = function () {
		if (oaudio[0].paused == true) {
			oaudio[0].play();
			musicbox.style.background = "url(images/music.png)";
			musicbox.style.backgroundSize = "100%";
			musicbox.style.animation = "music 4s infinite linear running";
		} else {
			oaudio[0].pause();
			musicbox.style.background = "url(images/music_c.png)";
			musicbox.style.backgroundSize = "100%";
			musicbox.style.animation = "music 4s infinite linear paused";
		}
	}

	//手机主题轮播
	var timerlunbo = null;
	var lunbonum = 0;
	function st() {
		timerlunbo = setInterval(function () {
			lunbonum++;
			if (lunbonum > 9) { lunbonum = 0; }
			$('.gui ul').animate({ 'left': -lunbonum * 100 + '%' });
		}, 2000);
	}
	$('.gui ul').hover(function () {
		clearInterval(timerlunbo);
	}, function () {
		st();
	});

	//app动效
	; (function () {

		var num = 0;
		var apptimer = null;
		$('.appbox_in02 .right').click(function (e) {
			num++
			if (num > 8) { num = 8 }
			if (num > -1) {
				$('.appbox_in02 .left').fadeTo(300, 1)
				$('.shadow').fadeTo(1000, 1)
			}
			if (num > 7) {
				$('.appbox_in02 .right').fadeTo(300, 0)
				$('.shadow01').fadeTo(300, 0)
			}
			$('.swiper-container ul').stop().animate({ left: -179 * num + 'px' }, 600)
			$('.swiper-container ul li').eq(num + 1).addClass('current').siblings().removeClass('current')
			$('.appbox .iphone .GUI').css({ 'background': 'url(images/zhuti' + (num + 2) + '.jpg) no-repeat center center', 'background-size': 'cover' });
			if (num == 0) {
				$('.appbox .iphone .GUI').css({ 'background': 'url(images/zhuti2.jpg) no-repeat center center', 'background-size': 'cover' });
			}
		});

		$('.appbox_in02 .left').click(function (e) {
			num--
			if (num < -1) {
				num = -1
			}
			if (num < 0) {
				$('.appbox_in02 .left').fadeTo(300, 0)
				$('.shadow').fadeTo(300, 0)
			}
			if (num < 8) {
				$('.appbox_in02 .right').fadeTo(300, 1)
				$('.shadow01').fadeTo(1000, 1)
			}
			$('.swiper-container ul').stop().animate({ left: -179 * num + 'px' }, 600)
			$('.swiper-container ul li').eq(num + 1).stop().addClass('current').siblings().stop().removeClass('current')

			$('.appbox .iphone .GUI').css({ 'background': 'url(images/zhuti' + (num + 2) + '.jpg) no-repeat center center', 'background-size': 'cover' });
			if (num == 0) {
				$('.appbox .iphone .GUI').css({ 'background': 'url(images/zhuti2.jpg) no-repeat center center', 'background-size': 'cover' });
			}
		});

		$('.swiper-container ul li img').faceCursor();

		function st1() {
			clearInterval(apptimer);
			apptimer = setInterval(function () {
				num++;
				if (num > 8) { num = -1; }
				if (num > -1) {
					$('.appbox_in02 .left').fadeTo(300, 1)
					$('.shadow').fadeTo(1000, 1)
				}
				if (num > -2) { $('.appbox_in02 .right').fadeTo(300, 1) }
				if (num > 7) {
					$('.appbox_in02 .right').fadeTo(300, 0)
					$('.shadow01').fadeTo(300, 0)
				}
				$('.swiper-container ul').stop().animate({ left: -179 * num + 'px' }, 600)
				$('.swiper-container ul li').eq(num + 1).addClass('current').siblings().removeClass('current')
				$('.appbox .iphone .GUI').css({ 'background': 'url(images/zhuti' + (num + 2) + '.jpg) no-repeat center center', 'background-size': 'cover' });
				if (num == 0) {
					$('.appbox .iphone .GUI').css({ 'background': 'url(images/zhuti2.jpg) no-repeat center center', 'background-size': 'cover' });
				}
			}, 2000);
		}
		$('.swiper-container').hover(function () {
			clearInterval(apptimer);
		}, function () {
			st1();
		});
		$('.worksul li').eq(1).click(function () {
			clearInterval(timerlunbo);
			st();
			st1();
		});
	})();

	//友情链接钢琴
	var colors = ['skyblue', 'gold', 'tan', 'pink', 'purple', 'springgreen', 'violet', 'tomato', 'teal'];
	var ospan = document.getElementsByClassName('mc');
	for (var i = 0; i < ospan.length; i++) {
		ospan[i].style.background = colors[i];
	}

	; (function () {
		$('.all li').hover(function (e) {
			var index = $(this).index() + 1;
			$('audio')[index].currentTime = 0;
			$('audio').eq(index)[0].play();
			$(this).children('span').stop().animate({ top: 0 + '%' }, 300);
		}, function () {
			$(this).children('span').stop().animate({ top: 100 + '%' }, 300);
		});

		$(document).keydown(function (event) {
			if (event.keyCode == 49) {
				$('.mc_audio')[0].currentTime = 0;
				$('.mc_audio')[0].play();
				$('.all ul li span').eq(0).stop().animate({ top: 0 }, 300).animate({ top: 100 + '%' }, 300);
			}
			else if (event.keyCode == 50) {
				$('.mc_audio')[1].currentTime = 0;
				$('.mc_audio')[1].play();
				$('.all ul li span').eq(1).stop().animate({ top: 0 }, 300).animate({ top: 100 + '%' }, 300);
			}
			else if (event.keyCode == 51) {
				$('.mc_audio')[2].currentTime = 0;
				$('.mc_audio')[2].play();
				$('.all ul li span').eq(2).stop().animate({ top: 0 }, 300).animate({ top: 100 + '%' }, 300);
			}
			else if (event.keyCode == 52) {
				$('.mc_audio')[3].currentTime = 0;
				$('.mc_audio')[3].play();
				$('.all ul li span').eq(3).stop().animate({ top: 0 }, 300).animate({ top: 100 + '%' }, 300);
			}
			else if (event.keyCode == 53) {
				$('.mc_audio')[4].currentTime = 0;
				$('.mc_audio')[4].play();
				$('.all ul li span').eq(4).stop().animate({ top: 0 }, 300).animate({ top: 100 + '%' }, 300);
			}
			else if (event.keyCode == 54) {
				$('.mc_audio')[5].currentTime = 0;
				$('.mc_audio')[5].play();
				$('.all ul li span').eq(5).stop().animate({ top: 0 }, 300).animate({ top: 100 + '%' }, 300);
			}
			else if (event.keyCode == 55) {
				$('.mc_audio')[6].currentTime = 0;
				$('.mc_audio')[6].play();
				$('.all ul li span').eq(6).stop().animate({ top: 0 }, 300).animate({ top: 100 + '%' }, 300);
			}
			else if (event.keyCode == 56) {
				$('.mc_audio')[7].currentTime = 0;
				$('.mc_audio')[7].play();
				$('.all ul li span').eq(7).stop().animate({ top: 0 }, 300).animate({ top: 100 + '%' }, 300);
			}
			else if (event.keyCode == 57) {
				$('.mc_audio')[8].currentTime = 0;
				$('.mc_audio')[8].play();
				$('.all ul li span').eq(8).stop().animate({ top: 0 }, 300).animate({ top: 100 + '%' }, 300);
			}
		});
	})();
})

