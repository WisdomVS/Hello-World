<!DOCTYPE html>
<!-- saved from url=(0066)chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/dashboard.html -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>New Tab</title>
<meta name="viewport" content="width=device-width">
<link rel="stylesheet" href="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/css/style.min.css">
<style>
.bookmarks-placeholder { height: 31px; position: fixed; top: 0; left: 0; right: 0; display: none; background-color: #fff; }
		@media (prefers-color-scheme: dark) {
			.bookmarks-placeholder { background-color: rgb(50,54,57); }
		}
</style>
<style type="text/css" id="font-override"></style><style type="text/css">.focuses .control,.focuses .icon-wrapper{vertical-align:top}.focuses{width:100%;font-size:187.5%}.focuses::before{height:335px;width:100%;position:absolute;top:-92px;left:0;z-index:-1;opacity:0;transition:opacity .2s;background:url(../img/overlay-focus.png) 50% 0 no-repeat;background-size:contain;content:" "}.focuses .focus,.focuses .focus p{position:relative}.focuses.shadow::before{opacity:1}.focus-wrapper{display:flex;justify-content:center;min-height:93px}.focuses .focus{width:100%;display:inline-block!important;overflow:visible}.focuses .focus p,.focuses h3{padding:0;margin:0}.focuses input{font-size:120%;line-height:120%}.focuses .prompt{padding-bottom:6px}.focuses .prompt h3{font-size:2.1875rem;font-weight:300}.focuses .prompt input{width:100%;padding-top:4px;display:block;background:0;border:0;border-bottom:2px solid #fff;color:#fff;font-weight:500;outline:0;text-align:center;transition:border-color .2s ease}.focuses .delete,.focuses .icon-wrapper:after{height:30px;width:30px}.focuses .focus h3{margin:17px 0 3px;font-size:70%;line-height:120%;text-transform:uppercase}.focuses .focus-row{display:flex;align-items:baseline;justify-content:center;font-size:120%;line-height:120%}.focuses .todays-focus{max-width:87%;margin:3px 0;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.focuses .complete .todays-focus{text-decoration:line-through;opacity:.85}.focuses .control{display:inline-flex;opacity:0;border-radius:100px;cursor:pointer;transition:all .1s ease;transform-origin:50% 50%}.focus-wrapper:hover .control{opacity:.8}.focuses .checkbox:hover,.focuses .complete .control{opacity:1}.focuses .col-checkbox{justify-content:flex-end}.focuses .checkbox{margin-right:.15em;padding:10px;position:relative;border:none;font-size:80%;line-height:1;text-align:left;text-shadow:0 0 15px rgba(0,0,0,.3)}.focuses .focus-open{margin-left:-1.7px}.focuses .complete .focus-done,.focuses .focus-open{display:block}.focuses .focus-done{display:none}.focuses .complete .focus-done{opacity:.85}.focuses .checkbox .focus-done{position:absolute}.focuses .control .icon-wrapper .icon{opacity:.8}.focuses .icon-wrapper:hover .icon{opacity:1}.focuses .col-delete{padding-top:3px;align-self:center}.focuses .delete{margin-left:14px;align-self:center;font-size:70%}.focuses .delete .icon{height:10px;width:10px;transition:transform .1s ease}.focuses .complete .delete .icon{transform:rotate(45deg)}.focuses .focus-container{width:100%}.focuses .container-height-setter{padding-bottom:6px;display:flex;flex-direction:column;visibility:hidden}.focuses .container-height-setter h3{margin:0;font-weight:300;font-size:2.1875rem;line-height:inherit}.focuses .container-height-setter input{padding:4px 0 1px;border:none;border-bottom:2px solid #fff;font-size:120%}.focuses .focus-content{width:100%;position:absolute;top:0}.focus-message-wrapper{position:relative}.focus-message{display:none;position:absolute;top:10px;right:0;left:0;font-size:1.125rem;line-height:1}.focus-message .loading{margin-right:10px;vertical-align:-5%}.focuses.loading{display:block}.focus-message .retry{margin-left:-2px;padding:4px;cursor:pointer;text-decoration:underline;transition:var(--a-default)}.focus-message .retry:hover{opacity:.7}.focuses .loading input{border-color:rgba(255,255,255,.5);color:transparent}.focuses .cached .control{display:none}.focuses .cached .todays-focus{max-width:none}@media screen and (max-height:650px){.focuses .focus-row{font-size:110%}}@media screen and (max-height:600px){.focuses .prompt input{width:15em}}@media screen and (max-height:550px){.focuses .prompt input{width:17.2em}}</style><style type="text/css">.dashlinks{flex:0 0 auto;order:5}.dashlinks-icon-wrapper{height:100%;min-height:60px;max-height:var(--max-height);padding:0 var(--side-padding);display:inline-flex;align-items:center;opacity:.85;cursor:pointer;filter:drop-shadow(0 1px 5px rgba(0, 0, 0, .1));transition:opacity .1s ease}.dashlinks-icon-wrapper:hover{opacity:1}.dashlinks-icon-wrapper:active{opacity:.9;transition-duration:0s}.dashlinks .dashlinks-icon{height:18px;width:18px;margin:0;fill:#fff!important;vertical-align:-4%}</style><style type="text/css">.weather{order:0}.weather .app-dash{cursor:pointer;order:1}.weather .location{outline:0}.weather .unit{display:block;position:absolute;left:97%;top:5px;animation:fadeout 4s ease 4s 1 normal;animation-fill-mode:forwards;font-size:55%;text-transform:uppercase}.weather .unit.hide,.weather.no-location .metric-stat .weather-degree{display:none}.weather .metric-stat .icon-weather{margin-right:6px}.weather.no-location .metric-stat .icon-weather{margin-right:0}.weather .icon:before{font-family:MeteoconsRegular;content:attr(data-icon)}@font-face{font-family:MeteoconsRegular;src:url(../font/meteocons.woff2) format("woff2");font-weight:400;font-style:normal}.weather .app{width:440px;padding-bottom:calc(var(--app-padding) - 3px);right:7px;box-sizing:border-box}.weather.no-location .app{min-height:230px}.weather.no-location:not(.setting-location) .app{display:flex;flex-direction:column;justify-content:center;align-items:center}.weather .icon-angle-down{position:absolute;top:10px;right:8px;font-size:14px;opacity:0}.weather .active .icon-angle-down{transform:rotate(180deg)}.weather .weather-empty{padding:0;display:none}.weather.no-location:not(.setting-location) .weather-empty{display:flex;flex-direction:column;align-items:center}.weather-empty .title{margin-bottom:10px}.weather-empty .button{display:flex;justify-content:space-between;align-items:center}.weather-empty .button .weather-location-reset-icon{margin-right:6px}.weather-empty .set-manual-location{padding:10px;margin:0;cursor:pointer}.weather-empty .set-manual-location:hover{opacity:.6}.weather .weather-backround-icon{width:100%;position:relative;display:none;color:rgba(255,255,255,.1);font-family:MeteoconsRegular;font-size:110px;align-items:center;justify-content:center}.light .weather .weather-backround-icon{color:rgba(0,0,0,.1)}.weather.setting-location .weather-backround-icon{display:block}.weather .weather-backround-icon>div{padding:20px;position:absolute;top:0;right:0;left:0;text-align:center}.weather-current{padding-top:0!important}.weather-current-header{margin:-3px 0 0;position:relative;display:flex;justify-content:space-between}.weather.no-location:not(.setting-location) .weather-current-header{display:none}.weather-current-location{min-width:0;display:inline-block;flex:0 1 auto}.weather .weather-location{display:flex;align-items:center;transition:opacity .2s}.weather.editing .weather-location{opacity:0}.weather-location-name{min-height:24px;min-width:32px;max-width:310px;margin-right:5px;display:inline;flex:0 1 auto;align-self:baseline;cursor:pointer;font-size:118.75%;outline:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.weather-header-message{margin:0 5px;align-self:baseline;opacity:.5}.weather-current-location .loading-icon{margin-left:6px;display:none;vertical-align:0}.weather-current-location.loading .loading-icon{display:inline-block}.weather-location-icon{padding:3px;cursor:pointer;opacity:0}.weather-current-location:not(.loading) .weather-location-icon:hover{opacity:1}.weather-location-edit{font-size:13px}.weather-location-edit .icon-edit{vertical-align:5%}.weather-current-location:hover .weather-location-edit{opacity:.5}.editing .weather-location-edit{visibility:hidden}.weather .current-location-group{position:absolute;top:-6px;left:0;right:0;z-index:-1;opacity:0;transition:.2s opacity}.weather.editing .current-location-group{z-index:1;opacity:1}.weather .icon-row{position:absolute;top:3px;right:0;display:flex;align-items:center}.weather .weather-location-reset{display:inline-block;opacity:.5}.weather .current-location-group .weather-location-reset:hover,.weather.editing .clear:active,.weather.editing .clear:hover{opacity:.7}.weather .app .weather-location-reset-icon{height:15px;fill:var(--icon-color);vertical-align:-10%}.f--quirky .weather .app .weather-location-reset-icon{vertical-align:-14%}.weather .current-location-group .input-wrapper{position:relative}.weather .current-location{font-size:19px;padding-right:40px}.weather .clear{padding:0 5px;bottom:0;cursor:pointer;font-size:1rem}.weather .clear .icon-wrapper:after{height:22px;width:22px}.weather .typeahead .location-dropdown-list{display:none;max-height:140px;overflow-x:hidden;overflow-y:auto}.weather .search-loading .typeahead .location-dropdown-list{padding:0}.weather .typeahead .location-result{margin-right:2px}.weather .searching{padding:4px 7px;display:none;font-size:87.5%;opacity:.6}.weather.search-loading .searching{display:block}.weather .searching i{animation:blink 1.4s infinite both}@keyframes blink{0%,100%{opacity:.2}20%{opacity:1}}.weather .searching i:nth-child(2){animation-delay:.2s}.weather .searching i:nth-child(3){animation-delay:.4s}.weather.search-loading .typeahead{padding:4px 0}.weather.search-loading .not-found{display:none}.weather-current-conditions{margin:-1px 0 10px;display:block;line-height:125%;opacity:.7}.weather-current-temp-row{margin-bottom:8px;display:flex;transition:filter .2s}.plus-weather .weather-current-temp-row{cursor:pointer}.weather.no-location .weather-current-temp-row{display:none}.weather-current-temp-wrapper{padding-right:22px;position:relative;flex:1 1 50%;box-sizing:border-box;white-space:nowrap}.f--startup .weather-current-temp-wrapper{padding-top:10px}.weather-current-details:hover .icon-angle-down,.weather-current-temp-wrapper:hover .icon-angle-down{opacity:.5}.weather-current-icon{margin-right:10px;font-size:58px;line-height:58px}.weather-current-temp{font-size:60px}.weather-current-temp-low{margin-left:2px;font-size:37.2px;opacity:.6}.weather-current-degree{margin-left:2px;font-size:42px;line-height:60px;opacity:1;vertical-align:top}.weather-current-details{height:70px;min-width:130px;margin:0;padding-top:4px;display:flex;flex-direction:column;justify-content:center;position:relative;flex:1 1 50%;box-sizing:border-box;font-size:13px;line-height:135%;transition:opacity .2s ease}.f--startup .weather-current-details{padding-top:25px}.weather-current-details .icon-angle-down{right:0}.weather-current-details-title{margin-right:1px;opacity:.6}.weather-current-details-value{opacity:.9}.weather-current-details-value-low{margin-left:4px;font-size:11px;line-height:100%;opacity:.6}.weather-arrow{height:12px;width:12px;margin-bottom:-1px;margin-left:2px;fill:var(--icon-color);transform:rotate(90deg)}.weather-optional{height:0;opacity:0;overflow:hidden;transition:all .2s ease}.weather-optional.active{opacity:1}.weather-row{border-top:1px solid var(--border-color);transition:all .2s}.weather.no-location .weather-row{display:none}.pending .weather-current-temp-row,.pending .weather-row{opacity:.2!important}.pending .weather-current-conditions{opacity:0!important}.weather-forecast{display:flex;font-size:11px}.weather-forecast-item{flex:1 1 11%;text-align:center}.weather-forecast-label{margin-top:1px;opacity:.6;font-size:10px;font-weight:500;line-height:1;text-transform:uppercase}.weather-forecast-icon{font-size:19px}.weather-forecast-high{opacity:.85}.weather-hourly{display:flex;align-items:center}.weather-forecast-hourly{flex-grow:1}.weather-forecast-hourly .weather-forecast-label{margin-bottom:6px}.weather-forecast-hourly .weather-forecast-high{margin-top:4px;line-height:1}.weather-optional.weather-hourly.active{height:75px}.f--startup .weather-optional.weather-hourly.active{height:79px}.weather-forecast-daily{padding-top:8px!important;clear:both;opacity:0;transition:opacity .2s ease}.weather-forecast-daily.active{opacity:1}.weather-forecast-day{margin:0 1.5px;padding:5px 2px;border-radius:3px;cursor:pointer;white-space:nowrap}.weather-forecast-day:first-child{margin-left:0}.weather-forecast-day:last-child{margin-right:0}.weather-forecast-day.selected,.weather-forecast-day:hover{background:rgba(255,255,255,.09)}.light .weather-forecast-day.selected,.light .weather-forecast-day:hover{background:rgba(0,0,0,.05)}.weather-forecast-daily .weather-forecast-label{margin-bottom:3px}.weather-forecast-daily .weather-forecast-icon{margin-bottom:0;margin-right:1px;display:inline-block;font-size:17px}.weather-forecast-daily .weather-forecast-high{padding-right:0}.weather-forecast-daily .weather-forecast-low{padding-left:3px;opacity:.4}.weather-extra{padding:11px 0;display:flex;font-size:12px}.weather-optional.weather-detail.active{height:90px}.weather-extra-col{flex:1 1 50%}.weather-extra-cell{line-height:135%}.weather-extra-cell:nth-child(odd){margin-bottom:4px}.weather-arrow-pressure{height:9px;width:9px;margin-bottom:0;margin-left:-2px;padding-right:2px}.weather-detail-unavailable{padding:11px 0;display:none;font-size:13px;text-align:center}.weather-detail-unavailable.show{display:block}.weather.editing .more-toggle,.weather.no-location .more{display:none}.weather-detail-unavailable>span{opacity:.5}.weather .more{position:static;margin:calc(-1 * var(--app-padding)) calc(-1 * var(--app-padding)) 0 0;padding:var(--app-padding);cursor:pointer}.weather .more-toggle{padding-top:2px}.weather .more-dropdown{top:35px;right:0}.weather .weather-attribution{padding-top:5px;padding-bottom:2px;cursor:default;font-size:10px;opacity:.5}.weather .weather-attribution:hover{background:0 0!important}.weather-attribution-logo{height:10px}.light .weather-attribution-logo{filter:brightness(13%)}</style><style type="text/css">.search,.search .search-input{width:100%;max-width:var(--width);position:relative;cursor:pointer}.search{--width:250px;--icon-size:16px;min-height:60px;max-height:var(--max-height);min-width:100px;display:inline-block;flex:0 1 auto;order:6}.search .app-dash{height:100%;padding:0 var(--side-padding)}.search-form{height:100%;position:relative}.search .search-input{height:100%;padding:0 32px 0 26px;z-index:2;background:0 0;border:none;-moz-box-sizing:border-box;box-sizing:border-box;color:#fff;line-height:20px;outline:0}.search .icon-search,.search-underline{z-index:1;transition:opacity var(--a-fast) var(--a-curve);position:absolute;top:50%}.search-input:focus{cursor:text}.search-underline{margin-top:17px;left:0;right:0;border-bottom:2px solid #fff;opacity:0}.search:hover .search-underline{opacity:.4}.search.active .search-underline{opacity:1}.search .icon-search{margin-top:-10px;left:1px;opacity:.85}.search.active .icon-search,.search:hover .icon-search{opacity:1}.search .source{height:100%;position:absolute;right:0;z-index:3;display:flex;opacity:0;transition:var(--a-fast) var(--a-curve)}.search:hover .source{opacity:.65}.search.active .source{opacity:1}.search .source .icon{--icon-size:14px;height:var(--icon-size);width:var(--icon-size)}.search .source-toggle{margin-right:-2px;padding:5px 2px;align-self:center;display:flex;align-items:center;justify-content:center;position:relative;border-radius:var(--toggle-size);cursor:pointer;outline:0}.search .source-toggle .icons .icon{display:none;filter:brightness(100);outline:0}.search .source-toggle .icons .icon.active{display:block}.search .source-toggle .icon-dropdown{--size:14px;height:var(--size);width:var(--size);margin:1px -2px;display:block;opacity:.5;transition:.1s var(--a-curve)}.search .source-toggle:hover .icon-dropdown{opacity:.8}.source.active .source-toggle .icon-dropdown{opacity:1;transition-duration:0}.search .source .dropdown{margin-top:29px;padding:4px 0;left:auto;top:50%;right:-8px}.search .dropdown.nipple-top-right:after{right:14px}.search .dropdown .search-provider{outline:0}.search .dropdown .heading{margin-bottom:-1px;padding:8px 14px 0;opacity:.75;font-size:.625rem;font-weight:500;text-transform:uppercase}.search .dropdown .dropdown-list-icon{--icon-size:15px}.search .dropdown .icon.active{opacity:1}</style></head>
<body class="f--default Chrome">
<div class="overlay loading-overlay">
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000" class="loading-logo" data-test="loading-logo" style="display: none;" fill="#ccc">
<path d="M500.024 1000.08C223.851 1000.08-.032 776.2-.032 500.024S223.851-.032 500.024-.032s500.056 223.883 500.056 500.056S776.2 1000.08 500.024 1000.08zm250.33-523.321a228.485 228.485 0 0 0-5.749-51.018 136.773 136.773 0 0 0-19.042-45.27 98.029 98.029 0 0 0-35.928-32.336Q667 335.925 633.946 335.92q-43.839 0-78.324 26.228t-48.863 75.09h-1.437a172.1 172.1 0 0 0-11.5-39.881 108.707 108.707 0 0 0-20.839-31.976 92.149 92.149 0 0 0-31.976-21.557q-19.048-7.9-44.911-7.9a120.578 120.578 0 0 0-74.372 25.509 147.849 147.849 0 0 0-29.1 30.539 141.892 141.892 0 0 0-20.12 40.959h-1.437q0-9.332-.359-21.2t-.718-24.431q-.37-12.562-.718-23.353-.371-10.779-1.078-17.964h-15.809q.708 7.191 1.438 17.964.707 10.779 1.077 22.635.354 11.856.719 23.353t.359 19.4v247.187h15.809V511.251q0-38.079 9.7-67.9 9.7-29.809 26.588-50.659A117.245 117.245 0 0 1 347.6 360.71a108.444 108.444 0 0 1 48.5-11.137q29.455 0 48.5 12.575a92.92 92.92 0 0 1 29.82 31.257 125.19 125.19 0 0 1 14.731 41.677 256.2 256.2 0 0 1 3.952 43.114v198.326h15.809V511.251q0-38.079 10.06-67.9 10.054-29.809 26.946-50.659a117.245 117.245 0 0 1 39.521-31.977 108.445 108.445 0 0 1 48.5-11.137q29.455 0 48.863 12.575a98.748 98.748 0 0 1 30.9 31.257 127.515 127.515 0 0 1 16.168 41.677 217.585 217.585 0 0 1 4.67 43.114v198.321h15.809V476.759z"></path>
</svg>
</div>
<div id="main-view" style="display: block;">
<div class="bookmarks-bar bookmarks-placeholder"></div>
<ul id="background" class="background"><li class="background-item fadein" style="background-image: url(&quot;https://farm4.staticflickr.com/3775/9340883744_22d9614c01_k.jpg&quot;);"></li></ul>
<div class="background-overlay show"></div>
<div class="apps show-apps">
<div class="region full"></div>
<div class="region top-bar"></div>
<div class="top-row">
<div class="region top-left"><div id="quicklinks" class="app-container quicklinks links" style=""><span class="app-dash toggle Links-toggle" data-test="links-app-dash">Links</span><div class="app-wrapper app-placeholder nipple-top-left">
	<div class="app links-app" style="height:70px; width:260px">
		<div class="app-placeholder-loading">
			<i class="loading-icon"></i>Loading...
		</div>
	</div>
</div>

</div><div id="dashlinks" class="dashlinks"><!--
-->
</div><div id="search" class="app-container search"><div class="app-dash">
	<form class="search-form"><!--
		--><span class="search-underline"></span><!--
		--><i class="dash-icon icon-search"></i><!--
		--><div class="more source">
			<div class="source-toggle" tabindex="0">
				<div class="icons">
					<img src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/img/logo-google.svg" class="icon icon-google active" tabindex="0">
					<img src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/img/logo-bing.svg" class="icon icon-bing" tabindex="0">
					<img src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/img/logo-duckduckgo-white.svg" class="icon icon-duckduckgo" tabindex="0">
				</div>
				<img src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/img/icon-down.svg" class="icon icon-dropdown">
			</div>
			<div class="dropdown more-dropdown dash-dropdown nipple-top-right">
				<div class="heading">Search with</div>
				<ul class="dropdown-list">
					<li class="search-provider" data-provider="google" tabindex="1">
						<span class="dropdown-list-icon-wrapper">
							<img src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/img/logo-google.svg" class="dropdown-list-icon icon icon-google active">
						</span>
						<span class="dropdown-list-label">Google</span>
					</li>
					<li class="search-provider" data-provider="bing" tabindex="2">
						<span class="dropdown-list-icon-wrapper">
							<img src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/img/logo-bing.svg" class="dropdown-list-icon icon icon-bing">
						</span>
						<span class="dropdown-list-label">Bing</span>
					</li>
					<li class="search-provider" data-provider="duckduckgo" tabindex="3">
						<span class="dropdown-list-icon-wrapper">
							<img src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/img/logo-duckduckgo.svg" class="dropdown-list-icon icon icon-duckduckgo">
						</span>
						<span class="dropdown-list-label">DuckDuckGo</span>
					</li>
				</ul>
			</div>
		</div><!--
		--><input type="text" id="search-input" class="search-input" autocomplete="off"><!--
	--></form>
</div>
</div></div>
<div class="region top-center"></div>
<div class="region top-right"><div id="weather" class="app-container weather" data-test="weather"><!-- Metric -->
<div class="app-dash metric-item" title="Broken clouds" data-test="app-dash">
	<div class="metric-stat">
			<span class="icon icon-weather" data-icon="H" title="Broken clouds"></span><span class="metric-stat-number" data-test="temperature">34</span><span class="weather-degree">°</span><span class="unit hide">c</span>
	</div>
	<div class="location metric-label data" data-test="location" title="Wamba">
		<span class="metric-label-name">Wamba</span>
	</div>
	<span class="metric-message"></span>
</div>

<div class="app-wrapper nipple-top-right">
	<div class="app weather-app ">

		<!-- Main weather area -->
		<section class="weather-current">

			<!-- Header -->
			<header class="weather-current-header">

				<div class="weather-current-location">
					<div class="weather-location">
						<span class="weather-location-name" title="Wamba" data-test="location-name">Wamba</span>
						<i class="loading-icon"></i>
						<span class="weather-location-icon weather-location-edit" data-test="edit-icon"><i class="icon-edit"></i></span>
					</div>
					<div class="input-group current-location-group">
						<div class="input-wrapper">
							<input type="text" name="current-location" id="current-location" class="current-location" autocomplete="off" placeholder="Location" value="Wamba" spellcheck="false" data-test="weather-location-search">
							<span class="icon-row">
								<span class="weather-location-icon weather-location-reset" title="Use your current location">
									<svg class="weather-location-reset-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 937.4 937.4"><path d="M887.4,418.7H855.6A390,390,0,0,0,518.7,81.8V50a50,50,0,0,0-100,0V81.8A390,390,0,0,0,81.8,418.7H50a50,50,0,0,0,0,100H81.8A390,390,0,0,0,418.7,855.6v31.8a50,50,0,0,0,100,0V855.6A390,390,0,0,0,855.6,518.7h31.8a50,50,0,0,0,0-100ZM730,518.7h24.4A290.53,290.53,0,0,1,518.6,754.5V730.1a50,50,0,0,0-100,0v24.4A290.53,290.53,0,0,1,182.8,518.7h24.4a50,50,0,0,0,0-100H182.8A290.53,290.53,0,0,1,418.6,182.9v24.4a50,50,0,1,0,100,0V182.9A290.53,290.53,0,0,1,754.4,418.7H730a50,50,0,1,0,0,100Z"></path></svg>
								</span>
								<i class="u--flex-center clear" data-test="clear-icon">
									<span class="icon-wrapper">
										<svg class="icon icon-cancel" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"></path></svg></span>
								</i>
							</span>
						</div>

						<div class="dropdown typeahead">
							<div class="searching">Searching<i>.</i><i>.</i><i>.</i></div>
							<ul class="dropdown-list location-dropdown-list" data-test="weather-location-results"></ul>
							<div class="not-found">No locations found.</div>
						</div>
					</div>

					<span class="weather-current-conditions">Broken clouds</span>
				</div>

				<div class="more">
					<div class="icon-wrapper more-toggle" data-test="more">
						<svg class="icon icon-ellipsis more-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg></div>
					<div class="dropdown more-dropdown">
						<ul class="dropdown-list">
							<li class="toggle-hourly has-toggle" data-test="toggle-hourly-button">
								Hourly forecast
								<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
							</li>
							<li class="toggle-details has-toggle" data-test="toggle-details-button">
								Extra weather info
								<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
							</li>
							<li class="line"></li>
							<li class="toggle-metric has-toggle" data-test="toggle-metrics-button">
								Metric units
								<span class="toggle-slider"><svg class="toggle-switch" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg></span>
							</li>
							<li class="weather-location-edit-menu" data-test="edit-dropdown">Edit location</li>
						</ul>
					</div>
				</div>
			</header>


			<div class="weather-current-temp-row">
				<!-- Main temp -->
				<div class="weather-current-temp-wrapper toggle-hourly" data-test="toggle-hourly-div">
					
					<span class="icon icon-weather weather-current-icon" data-icon="H" title="Broken clouds"></span><span class="weather-current-temp">34°</span>
				</div>

				<!-- Main details -->
			</div>


			<!-- Extra weather info -->
		</section>



		<!-- 5-day advance forecast -->
		<section class="weather-row weather-forecast weather-forecast-daily active">
			<div class="weather-forecast-item weather-forecast-day" data-day="Monday" data-test="forecast-day" title="Sky is clear">
				<div class="weather-forecast-label" data-test="forecast-day-label">Mon</div>
				<span class="icon icon-weather weather-forecast-icon" data-icon="B"></span>
				<span class="weather-forecast-high" data-test="forecast-high">26°</span><span class="weather-forecast-low">25°</span>
			</div>
			<div class="weather-forecast-item weather-forecast-day" data-day="Tuesday" data-test="forecast-day" title="Overcast clouds">
				<div class="weather-forecast-label" data-test="forecast-day-label">Tue</div>
				<span class="icon icon-weather weather-forecast-icon" data-icon="Y"></span>
				<span class="weather-forecast-high" data-test="forecast-high">39°</span><span class="weather-forecast-low">22°</span>
			</div>
			<div class="weather-forecast-item weather-forecast-day" data-day="Wednesday" data-test="forecast-day" title="Overcast clouds">
				<div class="weather-forecast-label" data-test="forecast-day-label">Wed</div>
				<span class="icon icon-weather weather-forecast-icon" data-icon="Y"></span>
				<span class="weather-forecast-high" data-test="forecast-high">38°</span><span class="weather-forecast-low">24°</span>
			</div>
			<div class="weather-forecast-item weather-forecast-day" data-day="Thursday" data-test="forecast-day" title="Broken clouds">
				<div class="weather-forecast-label" data-test="forecast-day-label">Thu</div>
				<span class="icon icon-weather weather-forecast-icon" data-icon="H"></span>
				<span class="weather-forecast-high" data-test="forecast-high">40°</span><span class="weather-forecast-low">24°</span>
			</div>
			<div class="weather-forecast-item weather-forecast-day" data-day="Friday" data-test="forecast-day" title="Overcast clouds">
				<div class="weather-forecast-label" data-test="forecast-day-label">Fri</div>
				<span class="icon icon-weather weather-forecast-icon" data-icon="Y"></span>
				<span class="weather-forecast-high" data-test="forecast-high">34°</span><span class="weather-forecast-low">25°</span>
			</div>
		</section>

		<div class="weather-empty empty">
			<div class="title">No location set</div>
			<button class="button find-location">
				<svg class="weather-location-reset-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 937.4 937.4"><path d="M887.4,418.7H855.6A390,390,0,0,0,518.7,81.8V50a50,50,0,0,0-100,0V81.8A390,390,0,0,0,81.8,418.7H50a50,50,0,0,0,0,100H81.8A390,390,0,0,0,418.7,855.6v31.8a50,50,0,0,0,100,0V855.6A390,390,0,0,0,855.6,518.7h31.8a50,50,0,0,0,0-100ZM730,518.7h24.4A290.53,290.53,0,0,1,518.6,754.5V730.1a50,50,0,0,0-100,0v24.4A290.53,290.53,0,0,1,182.8,518.7h24.4a50,50,0,0,0,0-100H182.8A290.53,290.53,0,0,1,418.6,182.9v24.4a50,50,0,1,0,100,0V182.9A290.53,290.53,0,0,1,754.4,418.7H730a50,50,0,1,0,0,100Z"></path></svg>
				<span>Find My Location</span>
			</button>
			<div class="description set-manual-location" data-test="manual-location">Enter location manually</div>
		</div>
		<div class="weather-backround-icon">
			<div>H</div>
		</div>


	</div>
</div>
</div></div>
</div>
<div class="region center"><div class="app-container clock center-clock" style=""><div class="default-clock"><span class="center-wrapper">
    <span class="center-left"></span>
    <span class="center-mid">
        <div class="time">10:07</div>
        <span class="format">PM</span>
    </span>
    <span class="center-right">
    </span>
</span>
</div></div><div id="greeting" class="app-container has-dash-icon has-centered-3-col greeting transition" data-test="greeting" style=""><span class="side-col"></span>

<span class="center-col content" data-content-type="greeting" data-test="content">
	<span class="message" data-test="message">Good evening, </span><!--
	--><span class="name-wrapper"><!--
		--><span class="name no-contenteditable-fix" spellcheck="false" data-test="name">Wisdom</span><!--
		--><span class="punctuation">.</span>
	</span>
</span>

<span class="side-col">
	<span class="more more-dash" data-test="more-container">
		<div class="icon-wrapper dash-icon-wrapper more-toggle" data-test="more-toggle">
			<svg class="icon icon-ellipsis dash-icon more-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"></path></svg>
		</div>
		<div class="app dropdown more-dropdown dash-dropdown nipple-top-left">
			<ul class="dropdown-list">
					<li class="mantra-show" data-test="mantra-show">
						<span class="dropdown-list-label">Show today’s mantra</span>
					</li>
				<li class="line"></li>
					<li class="displayname-edit" data-test="displayname-edit">
						<span class="dropdown-list-label">Edit your name</span>
					</li>
			</ul>
		</div>
	</span>
</span>
</div></div>
<div class="region center-below"><div id="focuses" class="app-container focuses shadow" data-test="focus" style=""><div class="focus-wrapper has-dash-icon"><div class="prompt" style=""><h3>What is your main focus for today?</h3>
<input type="text" data-test="focus-input" autocomplete="off">
</div></div>

<div class="team-focus-wrapper"></div>

<div class="focus-message-wrapper">
	<div class="message focus-message" data-test="focus-message">
		<i class="loading-icon"></i>Loading...
	</div>
</div>
</div></div>
<div class="region bottom"><div class="app-container app-dash quote" data-test="quote"><p class="quote-body">
	<span class="quote-body-text" data-test="quote-body-text">“Give yourself permission to slow down. You can speed up by slowing down.”</span><i class="icon-angle-right"></i>
	<span class="quote-source" data-test="quote-source">
		<span class="quote-source-text" data-test="quote-source-text">Gabby Bernstein</span>
		<span class="control control-heart" data-test="control-fav" style="display: inline-block;">
			<img src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/img/icon-heart-empty.svg" data-src="img/icon-heart-empty.svg" class="icon icon-dash-heart-empty">
			<img src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/img/icon-heart.svg" data-src="img/icon-heart.svg" class="icon icon-dash-heart">
		</span>
		<span class="control control-skip" title="Skip Quote" style="display: none;">
			<span class="icon-container">
				<svg class="icon icon-skip" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.05 132.12"><circle cx="115.5" cy="108.62" r="23"></circle><path d="M291.5,281A22.5,22.5,0,1,1,269,303.5,22.52,22.52,0,0,1,291.5,281m0-1A23.5,23.5,0,1,0,315,303.5,23.5,23.5,0,0,0,291.5,280Z" transform="translate(-176 -194.88)"></path><path class="arrow" d="M399,257.5a135.18,135.18,0,0,0-41.16-42.17c-22.7-14.74-49.38-21.92-75.15-20.2a108.71,108.71,0,0,0-65.16,27c-19.91,17.5-33.76,41.79-41.18,72.19a13.52,13.52,0,0,0,9.92,16.32,13.66,13.66,0,0,0,3.21.38,13.51,13.51,0,0,0,13.11-10.3c6.07-24.92,17.1-44.54,32.76-58.31a82,82,0,0,1,49.13-20.32c20-1.33,40.81,4.32,58.65,15.9A108.07,108.07,0,0,1,374,268.51l-30,13.2,72.43,40.36,8.6-76Z" transform="translate(-176 -194.88)"></path></svg>
			</span>
		</span>
		<span data-url="https://twitter.com/intent/tweet?text=%22Give+yourself+permission+to+slow+down.+You+can+speed+up+by+slowing+down.%22+%E2%80%94Gabby+Bernstein&amp;via=momentumdash&amp;related=momentumdash,levibucsis,jaywaterman" class="control control-twitter">
			<i class="icon icon-twitter"></i>
		</span>
	</span>
</p>
</div></div>
<div class="region bottom-right"><div id="todo" class="app-container todo" data-test="todo" style=""><div class="app-wrapper app-placeholder nipple-bottom-right">
	<div class="app todo-app" style="height:70px; width:320px">
		<div class="app-placeholder-loading">
			<i class="loading-icon"></i>Loading...
		</div>
	</div>
</div>
<span class="app-dash toggle Todo-toggle" data-test="todo-app-dash">Todo</span>
</div></div>
<div class="region bottom-left" id="bottom-left"><div id="settings" class="app-container settings" data-test="settings"><span class="app-dash toggle" data-test="settings-toggle"><svg class="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340.274 340.274"><path d="M293.629 127.806l-5.795-13.739c19.846-44.856 18.53-46.189 14.676-50.08l-25.353-24.77-2.516-2.12h-2.937c-1.549 0-6.173 0-44.712 17.48l-14.184-5.719c-18.332-45.444-20.212-45.444-25.58-45.444h-35.765c-5.362 0-7.446-.006-24.448 45.606l-14.123 5.734C86.848 43.757 71.574 38.19 67.452 38.19l-3.381.105-27.27 26.737c-4.138 3.891-5.582 5.263 15.402 49.425l-5.774 13.691C0 146.097 0 147.838 0 153.33v35.068c0 5.501 0 7.44 46.585 24.127l5.773 13.667c-19.843 44.832-18.51 46.178-14.655 50.032l25.353 24.8 2.522 2.168h2.951c1.525 0 6.092 0 44.685-17.516l14.159 5.758c18.335 45.438 20.218 45.427 25.598 45.427h35.771c5.47 0 7.41 0 24.463-45.589l14.195-5.74c26.014 11 41.253 16.585 45.349 16.585l3.404-.096 27.479-26.901c3.909-3.945 5.278-5.309-15.589-49.288l5.734-13.702c46.496-17.967 46.496-19.853 46.496-25.221V151.88c-.005-5.519-.005-7.446-46.644-24.074zM170.128 228.474c-32.798 0-59.504-26.187-59.504-58.364 0-32.153 26.707-58.315 59.504-58.315 32.78 0 59.43 26.168 59.43 58.315-.006 32.177-26.656 58.364-59.43 58.364z" fill="#FFF"></path></svg></span></div><div><!--
	Note: be aware that there are two similar templates (background-template-1.hbs and background-template-2.hbs)
 	that may need to be updated when updating this template (background-info.hbs).
-->
<div class="app-container app-dash background-info" data-test="background-info-container">
	<span class="background-info-title" data-test="background-info-title" style="">Papudo, Chile</span>
	<span class="background-info-source">
		<span class="background-info-source-link" data-test="background-info-source-link" data-url="https://www.flickr.com/photos/kenophoto/9340883744/">Photo by Eugenio Celedon</span>
		<span class="control control-heart" style="display: inline-block;">
			<img src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/img/icon-heart-empty.svg" data-src="img/icon-heart-empty.svg" class="icon icon-dash-heart-empty">
			<img src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/img/icon-heart.svg" data-src="img/icon-heart.svg" class="icon icon-dash-heart">
		</span>
		<span class="control control-skip" title="Skip Photo" data-test="control-skip" style="display: none;">
			<span class="icon-container" data-test="control-skip-icon-container">
				<svg class="icon icon-skip" data-test="control-skip-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 249.05 132.12"><circle cx="115.5" cy="108.62" r="23"></circle><path d="M291.5,281A22.5,22.5,0,1,1,269,303.5,22.52,22.52,0,0,1,291.5,281m0-1A23.5,23.5,0,1,0,315,303.5,23.5,23.5,0,0,0,291.5,280Z" transform="translate(-176 -194.88)"></path><path class="arrow" d="M399,257.5a135.18,135.18,0,0,0-41.16-42.17c-22.7-14.74-49.38-21.92-75.15-20.2a108.71,108.71,0,0,0-65.16,27c-19.91,17.5-33.76,41.79-41.18,72.19a13.52,13.52,0,0,0,9.92,16.32,13.66,13.66,0,0,0,3.21.38,13.51,13.51,0,0,0,13.11-10.3c6.07-24.92,17.1-44.54,32.76-58.31a82,82,0,0,1,49.13-20.32c20-1.33,40.81,4.32,58.65,15.9A108.07,108.07,0,0,1,374,268.51l-30,13.2,72.43,40.36,8.6-76Z" transform="translate(-176 -194.88)"></path></svg>
			</span>
		</span>
	</span>
</div>
</div></div>
</div>
<div class="overlay drop-overlay">
<p>Drop to upload backgrounds <span class="badge plus-badge">PLUS</span></p>
</div>
</div>
<script src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/js/lib.min.js"></script>
<script src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/app/app.min.js"></script>


<script type="text/javascript" async="" src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/app/7d9ace94-8620-4bc0-9160-fcc15d4cb578.js" id="7d9ace94-8620-4bc0-9160-fcc15d4cb578"></script><script type="text/javascript" async="" src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/app/2f0cff85-d25a-4326-b7cf-5239a3029956.js" id="2f0cff85-d25a-4326-b7cf-5239a3029956"></script><script type="text/javascript" async="" src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/app/162b82d0-f285-427c-8209-924f44ef4d21.js" id="162b82d0-f285-427c-8209-924f44ef4d21"></script><script type="text/javascript" async="" src="chrome-extension://laookkfknpbbblfpciffpaejjkokdgca/app/d5f1661a-8698-4992-b191-d0833b124f6a.js" id="d5f1661a-8698-4992-b191-d0833b124f6a"></script></body></html>