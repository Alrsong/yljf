var url="https://www.iblog-zh.com";
//手机正则
var phonereg = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
app.controller('home',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.url = "https://www.iblog-zh.com";
	//alert 优化
    $scope.alertshow=0;
    $scope.alerttxt=function(arr,brr){
    	$scope.alerttxts=arr;
        $scope.alertshow=brr;
      	if(brr==1){
      		$timeout(function() {
	      		$scope.alerttxt('',0);
	      	}, 1000);
      	}
    }
    //回到顶部或者某个位置
    $scope.scrolltop=function(arr){
        $("html,body").stop().animate({scrollTop:arr},300);
    }
	
})

// 首页
.controller('homes',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);
	$scope.bannerimg=[{'img':'images/1.png'},{'img':'images/2.png'},{'img':'images/3.png'}]
	console.log($scope.bannerimg)

	$scope.swiper=function(){
		$timeout(function(){
			var swiper = new Swiper('.swiper-container', {
			    pagination: '.swiper-container .swiper-pagination',
			    slidesPerView: 1,
			    paginationClickable: true,
			    spaceBetween: 30,
			    loop: true,
			    autoplayDisableOnInteraction : false,
			    autoplay:2000,		    
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
			});
		})
	}

})
// 银来金服
.controller('yljf',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 新手帮助
.controller('help',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 产品
.controller('chanpin',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 风险评测
.controller('fxpc',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 评测结果
.controller('pcend',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 产品详情
.controller('chanpinxq',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 收款计算器
.controller('calc',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 相关协议
.controller('xgxy',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 基金详情
.controller('jijinxq',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 发现
.controller('faxian',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 会员
.controller('vip',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 会员特权
.controller('hytq',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 特权详情
.controller('tqxq',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 签到
.controller('qd',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);
	$scope.getday=function(year,month){
		$scope.year=year;
		$scope.month=month;
		var date=year+'-'+month+'-1';//当月第一天
		var mydate = new Date(date);
		$scope.week=mydate.getDay(); //获取当月第一天是 星期X(0-6,0代表星期天)
		console.log($scope.week)
		var m = parseInt(month, 10);  
  		var d= new Date(year, month, 0); 
  		$scope.daynum=d.getDate();//获取当月有几天
  		console.log($scope.daynum)
  		$scope.tbox=[];
  		if($scope.week>0){
  			for(var i=0;i<$scope.week;i++){
	  			$scope.tbox.push(i-7);
	  		}
  		}
  		for(var i=0;i<$scope.daynum;i++){
  			$scope.tbox.push(i*1+1*1);
  		}
  		$scope.tk=7*1-1*($scope.week*1+$scope.daynum*1)%7;//补全格子
  		if($scope.tk!=0){
  			for(var b=0;b<$scope.tk;b++){
	  			$scope.tbox.push(b-14);
	  		}
  		}
  		console.log($scope.tbox);
	}
	$scope.getday(2017,8);

})
// 积分商城
.controller('jfsc',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);
	$scope.bannerimg=[{'img':'images/1.png'},{'img':'images/2.png'},{'img':'images/3.png'}]
	console.log($scope.bannerimg)

	$scope.swiper=function(){
		$timeout(function(){
			var swiper = new Swiper('.swiper-container', {
			    pagination: '.swiper-container .swiper-pagination',
			    slidesPerView: 1,
			    paginationClickable: true,
			    spaceBetween: 30,
			    loop: true,
			    autoplayDisableOnInteraction : false,
			    autoplay:2000,		    
				observer:true,//修改swiper自己或子元素时，自动初始化swiper
				observeParents:true,//修改swiper的父元素时，自动初始化swiper
			});
		})
	}

})
// 商品详情
.controller('shopxq',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 确认订单
.controller('qrdd',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 兑换成功
.controller('dhcg',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 兑换记录
.controller('dhjl',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 选择收货地址
.controller('seladd',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 地址管理
.controller('add',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 删除地址
.controller('deladd',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 添加地址
.controller('tjdz',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);
	

})
// 积分
.controller('jf',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
.directive("jftab", [function () {  //  选择尺寸，颜色
	return{
	    link: function (scope, element, attributes) {
	        element.click(function () {
	            element.addClass("act");
	            element.siblings().removeClass("act");
	            element.parents('.jf-tab').siblings('.jf-tab-box').hide().eq(element.index()).show();
	        });
	    }
	}
}])
// 我的
.controller('core',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 定期理财
.controller('dqlc',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 申购详情
.controller('sgxq',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 收款详情
.controller('skxq',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 可续投订单
.controller('kxtdd',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 续投记录
.controller('xtjl',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 续投记录详情
.controller('xtjlxq',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 到账收益
.controller('dzsy',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 账户设置
.controller('zhsz',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 绑定信息
.controller('bdxx',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 实名信息
.controller('smxx',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 我的手机
.controller('wdsj',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 我的银行卡
.controller('bank',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 更换银行卡
.controller('ghyhk',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 更换银行卡2
.controller('ghyhk2',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 消息中心
.controller('xxzx',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 我的福利
.controller('wdfl',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 个人信息
.controller('grxx',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 安全口令
.controller('aqkl',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 月账单
.controller('zd',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);
	var myChart = echarts.init(document.getElementById('main'));

	refreshEcharts();
	function refreshEcharts() {	   
	     myChart.setOption(option = {
		    title: {
		        text: '持有资产（万元）',
		        textStyle:{
		        	fontSize:'13'
		        }
		    },
		    toolbox: {
		    	show:false,
		        feature: {
		            saveAsImage: {}
		        }
		    },
		    grid: {
		        left: '-6%',
		        right: '4%',
		        bottom: '3%',
		        containLabel: true
		    },
		    xAxis : {
	            type : 'category',
	            boundaryGap : false,
	            data : ['7月','8月','9月','10月','11月'],
	            axisTick:{
	            	show:false
	            }

	        },
		    yAxis :  {
		    	show:false,
	            type : 'value'
	        },
		    series : {
	            name:'持有资产',
	            type:'line',
	            stack: '总量',
	            label: {
	                normal: {
	                    show: true,
	                    position: 'top'
	                }
	            },
	            data:[820, 932, 101, 934,820]
	        },
	        color:['#F7B52B']

		});

	}

})
// 认证 实名信息
.controller('rz',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 认证 实名信息2
.controller('rz2',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 密码登录
.controller('login',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);
	$scope.phone='';
	$scope.pwd='';
	$scope.loginbg=0;
	$scope.login=function(){		
		$scope.alerttxt('登录失败！',1)
	}
	//change
	$scope.inputchange=function(){
		if($scope.phone==null||$scope.pwd==''){
			$scope.loginbg=0;
		}else{
			$scope.loginbg=1;
		}
	}
})
// 验证码登录
.controller('yzmlogin',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);

})
// 注册
.controller('register',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 重置密码
.controller('czmm',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 重置密码2
.controller('czmm2',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
// 修改密码
.controller('xgmm',function($scope, $rootScope, $location, $timeout, $http, $cookies, $cookieStore){
	$scope.scrolltop(0);


})
//判断循环是否结束
.directive('repeatFinish',function(){
	return {
	  link: function(scope,element,attr){if(scope.$last == true){
	          console.log('ng-repeat执行完毕');
	          scope.swiper( attr.repeatFinish );
	      }
	  }
	}
})
//tab切换
.directive("tab", [function () {  //  选择尺寸，颜色
	return{
	    link: function (scope, element, attributes) {
	        element.click(function () {
	            element.addClass("act");
	            element.siblings().removeClass("act")
	        });
	    }
	}
}])
//tab切换2
.directive("tab2", [function () {  //  选择尺寸，颜色
	return{
	    link: function (scope, element, attributes) {
	        element.click(function () {
	            element.find('span').addClass("act");
	            element.siblings().find('span').removeClass("act")
	        });
	    }
	}
}])


//
//兼容苹果
function titlename(arr){
    var $body = $('body');
    document.title = arr;
    // hack在微信等webview中无法修改document.title的情况
    var $iframe = $('<iframe src="/favicon.ico"></iframe>');
    $iframe.on('load',function() {
     	setTimeout(function() {
    		$iframe.off('load').remove();
     	}, 0);
    }).appendTo($body);
}

