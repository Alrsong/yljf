<template>
<div class="wrapper">
	<div class="swiper-container">
	  <div class="swiper-wrapper">
	      <div class="swiper-slide"><img src="../images/1.png" /></div>
	  </div>
	  <!-- Add Pagination -->
	  <div class="swiper-pagination"></div>
	</div>
	<div class="home-item">
		<!-- <a href="#/dqlc"><img src="../images/icon1.png"><span>定期理财</span></a> -->
		<a href="#/add"><img src="../images/icon1.png"><span>地址入口</span></a>
		<a href="#/chanpin"><img src="../images/icon2.png"><span>基金</span></a>
		<a href="#/qd"><img src="../images/icon3.png"><span>积分签到</span></a>
		<a href="#/vip"><img src="../images/icon4.png"><span>会员中心</span></a>
	</div>
	<div id="con">
	  <ul>
	      <li>神山国际度假村产品将于2017年会和经济报道</li>
	      <li>神山国际度假村产品将于2017年会和经济报道</li>
	      <li>神山国际度假村产品将于2017年会和经济报道</li>
	      <li>神山国际度假村产品将于2017年会和经济报道</li>
	      <li>神山国际度假村产品将于2017年会和经济报道</li>
	      <li>神山国际度假村产品将于2017年会和经济报道</li>
	  </ul>
	</div>
	<div class="mt-10 bg-fff bor pad15">
		<div class="home-tit"><img src="../images/tit1.png">新人专享<span>仅限首投</span></div>
		<div class="home-list">
			<a href="">
				<p class="tit pr-50">神山国际度假二期 SSGJ (5万起投)</p>
				<div class="details">
					<ul>
						<li class="ta-l"><span class="red">12.25<small>%</small></span><b>预期年化收益率</b></li>
						<li class="ta-c"><span>360<small>天</small></span><b>期限</b></li>
						<li class="ta-r">
							<div class="outer">
							  <div class="load_left"><span style="transform: rotate(0deg);"></span></div>
							  <div class="load_right"><span style="transform: rotate(80deg);"></span></div>
							  <div class="inner">30%</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="corner">期限最短</div>
			</a>
		</div>
	</div>
	<div class="mt-10 bg-fff bor pad15">
		<div class="home-tit"><img src="../images/tit2.png">今日推荐<span>热销</span></div>
		<div class="home-list">
			<a href="">
				<p class="tit pr-50">神山国际度假二期 SSGJ (5万起投)<span class="orange">满减券</span></p>
				<div class="details">
					<ul>
						<li class="ta-l"><span class="red">12.25<small>%</small></span><b>预期年化收益率</b></li>
						<li class="ta-c"><span>360<small>天</small></span><b>期限</b></li>
						<li class="ta-r">
							<div class="outer">
							  <div class="load_left"><span style="transform: rotate(0deg);"></span></div>
							  <div class="load_right"><span style="transform: rotate(80deg);"></span></div>
							  <div class="inner">30%</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="corner">流动性强</div>
			</a>
		</div>
		<div class="home-list">
			<a href="">
				<p class="tit pr-50">神山国际度假二期 SSGJ (5万起投)</p>
				<div class="details">
					<ul>
						<li class="ta-l"><span class="red">12.25<small>%</small></span><b>预期年化收益率</b></li>
						<li class="ta-c"><span>360<small>天</small></span><b>期限</b></li>
						<li class="ta-r">
							<div class="outer">
							  <div class="load_left"><span style="transform: rotate(0deg);"></span></div>
							  <div class="load_right"><span style="transform: rotate(80deg);"></span></div>
							  <div class="inner">30%</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="corner">流动性强</div>
			</a>
		</div>
	</div>
	<div class="mt-10 bg-fff bor pad15">
		<div class="home-tit"><img src="../images/tit3.png">会员专享<span>会员分级购买</span></div>
		<div class="home-list">
			<a href="">
				<p class="tit pr-50">神山国际度假二期 SSGJ (5万起投)<span class="red">加息券</span><span class="orange">满减券</span></p>
				<div class="details">
					<ul>
						<li class="ta-l"><span class="red">12.25<small>%</small></span><b>预期年化收益率</b></li>
						<li class="ta-c"><span>360<small>天</small></span><b>期限</b></li>
						<li class="ta-r">
							<div class="outer">
							  <div class="load_left"><span style="transform: rotate(0deg);"></span></div>
							  <div class="load_right"><span style="transform: rotate(80deg);"></span></div>
							  <div class="inner">30%</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="corner">收益最高</div>
			</a>
		</div>
	</div>

	<div class="home-btm-a">
		<a class="h-b-1of" href="#/yljf">银来金服</a>
		<a class="h-b-3of" href="#/help">新手帮助</a>
		<a class="h-b-2of" href="">安全保障</a>
	</div>
	<div class="end-box mt-15">
		<span>我们是有底线的</span>
	</div>
	<div class="h50"></div>
	<div class="home-btm">
		<ul>
		  <li class="act"><a class="sy" href="#/home">首页</a></li>     
		  <li><a class="cp" href="#/chanpin">产品</a></li>
		  <li><a class="fx" href="#/faxian">发现</a></li>
		  <li><a class="wd" href="#/core">我的</a></li>
		</ul>
	</div>
</div>
</template>
<script type="text/javascript">
	export default {
	  data () {
	    return {
	      loading: false,
	      post: null,
	      error: null
	    }
	  },
	  created () {
	    // 组件创建完后获取数据，
	    // 此时 data 已经被 observed 了
	    this.fetchData()
	  },
	  watch: {
	    // 如果路由有变化，会再次执行该方法
	    '$route': 'fetchData'
	  },
	  methods: {
	    fetchData () {
	      this.error = this.post = null
	      this.loading = true
	      // replace getPost with your data fetching util / API wrapper
	      console.log(1)
	    }
	  }
	}
</script>