//Navigator API & Broswer Event calls
//https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getUserMedia
var pluginamount = navigator.plugins.length
var pluginaddins = "";
var cpu = navigator.hardwareConcurrency
var cookies = navigator.cookieEnabled
var language = navigator.language
var online = navigator.onLine
var currenttime = setInterval(currenttime, 10);
var date = setInterval(dates, 10);
var datept = setInterval(datept, 10);


//Plugins
///Plugin List
for (var i = 0; i < navigator.plugins.length; i++) {
	pluginaddins += navigator.plugins[i].name + "<br>";}
document.getElementById("pluginaddins").innerHTML = "<br>" + pluginaddins;

///Plugin Amount
document.getElementById("pluginamount").innerHTML =  pluginamount;


//CPU Cores
document.getElementById("cpu").innerHTML = cpu


//Cookies
document.getElementById("cookies").innerHTML = cookies


//Lanuage
document.getElementById("language").innerHTML = language


//Online
document.getElementById("online").innerHTML = online


//Battery
window.onload = function() {
	function updateBatteryStatus(battery) {
		document.querySelector('#charging').textContent = battery.charging ? 'charging' : 'not charging';
		document.querySelector('#level').textContent = battery.level;
		document.querySelector('#dischargingTime').textContent = battery.dischargingTime / 60;
}

navigator.getBattery().then(function(battery) {
		updateBatteryStatus(battery);

		battery.onchargingchange = function() {
			updateBatteryStatus(battery);
		};

		battery.onlevelchange = function() {
			updateBatteryStatus(battery);
		};

		battery.ondischargingtimechange = function() {
			updateBatteryStatus(battery);
		};
	});
};


//Key Press Timestamp
function getTime(event) {
  document.getElementById("keytime").innerHTML = event.timeStamp;
}


//Click Timestamp
function getClick(event) {
document.getElementById("clicktime").innerHTML = event.timeStamp;
}


//Click Coordinates X Y
function showCoords(evt){
 document.getElementById("mousecoor").innerHTML = (
    "X : " + evt.clientX + "\n" +
    "Y : " + evt.clientY + "\n"
  );
}


//Time
function currenttime() {
	var currenttime = new Date();
	document.getElementById("currenttime").innerHTML = currenttime.getHours() + ":" + currenttime.getMinutes() + ":" + currenttime.getSeconds() + ":" + currenttime.getMilliseconds();
}


//Dates
function dates() {
	var dt = new Date();
	document.getElementById("date").innerHTML = dt.toLocaleDateString();
}


//DatesPT
function datept() {
	var dtpt = new Date();
	document.getElementById("datept").innerHTML = dtpt.toDateString();
}


//Screen Size
document.getElementById("screen").innerHTML =
	(screen.width + 'x' + screen.height);


//Color Depth
document.getElementById("color").innerHTML =
	(screen.colorDepth);


//Google Login
function logged_in_to_google() {
		document.getElementById("google").innerHTML = ("Logged in");
}

function not_logged_in_to_google() {
		document.getElementById("google").innerHTML = ("Not logged in");
}


//Facebook Login
function logged_in_to_facebook() {
	document.getElementById("facebook").innerHTML = ("Logged in");
}

function not_logged_in_to_facebook() {
	document.getElementById("facebook").innerHTML = ("Not logged in ");
}


//Twitter Login
function logged_in_to_twitter() {
	document.getElementById("twitter").innerHTML = ("Logged in");
}

function not_logged_in_to_twitter() {
	document.getElementById("twitter").innerHTML = ("Not logged in ");
}


//Keycodes
window.onkeyup = keyup;
function keyup(e) {
	e.preventDefault();
	$('#key').text(e.keyCode)
	console.log(e.keyCode);
}


//Keycharacter
function myKeyPress(e) {
	var keynum;
	if (window.event) { // IE
		keynum = e.keyCode;
	} else if (e.which) { // Netscape/Firefox/Opera
		keynum = e.which;
	}
	document.getElementById("keyletter").innerHTML = (String.fromCharCode(keynum));
}


//Keycharacter Amount
function countChar(val) {
	var len = val.value.length;
	if (len >= 1000) {
		val.value = val.value.substring(0, 1000);
	} else {
		$('#charNum').text(0 + len);
	}
};



//Typing Speeds
$(function() {
	$('input, textarea')
		.keyup(checkSpeed);
});

var iLastTime = 0;
var iTime = 0;
var iTotal = 0;
var iKeys = 0;

function checkSpeed() {
	iTime = new Date().getTime();

	if (iLastTime != 0) {
		iKeys++;
		iTotal += iTime - iLastTime;
		iWords = $('input').val().split(/\s/).length;
		$('#CPM').html(Math.round(iKeys / iTotal * 6000, 2));
		$('#WPM').html(Math.round(iWords / iTotal * 6000, 2));
	}

	iLastTime = iTime;
}


$(document).ready(function(){
$.getJSON('http://ipinfo.io', function(data){
    var coords = data.country.toLowerCase();
    var kelvin = 0;
    var celcius = 0;
    var fahrenheit = 0;
    console.log(data);

$.getJSON(
'http://api.openweathermap.org/data/2.5/weather?zip=' + data.postal + ',' + coords + '&APPID=d727f82db95a90f0f8909e62320acf9b&',
function(json){

     var kelvin = json.main.temp - 273.15;
     var celcius = Math.round(((kelvin) * 1) / 1);
     var fahrenheit = Math.round(((((kelvin) * 9 / 5 + 32) * 10)) / 10);

     console.log(json);
      $("#cer").html(json.weather[0].main);
      $("#city").html(data.city);
      $("#weather").html(json.weather[0].description.toLocaleLowerCase());
      $("#temp").html(celcius + ' Â°C' + ", " + fahrenheit + ' Â°F');
      $("#windspeed").html(json.wind.speed + " mph");
      $("#deg").html(json.wind.deg + " Deg");
      $("#humidity").html(json.main.humidity + " RH");
      $("#pressure").html(json.main.pressure + " hPa");
      $("#tempmin").html(json.main.temp_min + ' Â°C');
      $("#tempmax").html(json.main.temp_max + ' Â°C');
      $("#clouds").html(json.clouds.all + "%");
    });
  });
});


//Word Count
counter = function() {
	var value = $('input').val();
	if (value.length == 0) {
		$('#wordCount').html(0);
		return;
	}

	var regex = /\s+/gi;
	var wordCount = value.trim().replace(regex, ' ').split(' ').length;

	$('#wordCount').html(wordCount);
};

$(document).ready(function() {
	$('input').keydown(counter);
	$('input').keypress(counter);
	$('input').keyup(counter);
});



//Mouse X Y Coordinates
var infos = document.getElementById('infos');
function tellPosi(pi) {
	infos.innerHTML = ' X ' + pi.pageX + ' Y ' + pi.pageY;
}
addEventListener('mousemove', tellPosi, false);



//Mouse X Y on Cursor
function tellPos(p) {

	infox.innerHTML = "<span style='font-size:10px; position:absolute; left: 20px; top: 20px;'>" + "X" + p.pageX + "</span>";

	infoy.innerHTML = "<span style='font-size:10px; position:absolute; left: 20px; bottom: 10;'>" + "Y" + p.pageY + "</span>";
}

addEventListener('mousemove', tellPos, false);



//Mouse Event Listener
var last_position = {},
	$output = $('#output');
$(document).on('mousemove', function(event) {
	if (typeof(last_position.x) != 'undefined') {
		var deltaX = last_position.x - event.offsetX,
			deltaY = last_position.y - event.offsetY;
		if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX > 0) {
			//left
			$output.append('<li>Left' + ' X ' + event.offsetX + ' Y ' + event.offsetY + event.timeStamp + '</li>');
		} else if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
			//right
			$output.append('<li>Right' + ' X ' + event.offsetX + ' Y ' + event.offsetY + event.timeStamp + '</li>');
		} else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY > 0) {
			//up
			$output.append('<li>Up' + ' X ' + event.offsetX + ' Y ' + event.offsetY + event.timeStamp + '</li>');
		} else if (Math.abs(deltaY) > Math.abs(deltaX) && deltaY < 0) {
			//down
			$output.append('<li>Down' + ' X ' + event.offsetX + ' Y ' + event.offsetY + event.timeStamp + '</li>');
		}
		if ($output.children().length > 90) {
			$output.children().eq(0).remove();
		}
	}
	last_position = {
		x: event.offsetX,
		y: event.offsetY
	};
});



//Click Counter
var clicks = 0;
function onClick() {
	clicks += 1;
   document.getElementById("clicks").innerHTML = clicks;
};



//Mouse Velocity
var previousEvent = false;
$(document).mousemove(function(evt) {
	evt.time = Date.now();
	var res;
	res = makeVelocityCalculator(evt, previousEvent);
	previousEvent = evt;
	$("#result").text(res);
});

function makeVelocityCalculator(e_init, e) {
	var x = e_init.clientX,
		new_x, new_y, new_t,
		x_dist, y_dist, interval, velocity,
		y = e_init.clientY,
		t;
	if (e === false) {
		return 0;
	}
	t = e.time;
	new_x = e.clientX;
	new_y = e.clientY;
	new_t = Date.now();
	x_dist = new_x - x;
	y_dist = new_y - y;
	interval = new_t - t;
	// update values:
	x = new_x;
	y = new_y;
	velocity = Math.sqrt(x_dist * x_dist + y_dist * y_dist) / interval;
	return velocity;
}



var time = document.getElementsByTagName('time')[0],
	start = document.getElementById('start'),
	stop = document.getElementById('stop'),
	clear = document.getElementById('clear'),
	seconds = 0,
	minutes = 0,
	hours = 0,
	milliseconds = 0,
	t;

function add() {

	milliseconds++;
	if (milliseconds >= 60) {
		milliseconds = 0;

		seconds++;
		if (seconds >= 60) {
			seconds = 0;

			minutes++;
			if (minutes >= 60) {
				minutes = 0;
				hours++;
			}
		}
	}

	time.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) + ":" + (milliseconds ? (milliseconds > 9 ? milliseconds : "0" + milliseconds) : "00");

	timer();
}

function timer() {
	t = setTimeout(add, 1000);
}
timer();

_browser = {};

function detectBrowser() {
	var uagent = navigator.userAgent.toLowerCase(),
		match = '';

	$("#browserResult").html(uagent);

	_browser.chrome = /webkit/.test(uagent) && /chrome/.test(uagent) && !/edge/.test(uagent);
	_browser.firefox = /mozilla/.test(uagent) && /firefox/.test(uagent);
	_browser.msie = /msie/.test(uagent) || /trident/.test(uagent) || /edge/.test(uagent);
	_browser.safari = /safari/.test(uagent) && /applewebkit/.test(uagent) && !/chrome/.test(uagent);
	_browser.opr = /mozilla/.test(uagent) && /applewebkit/.test(uagent) && /chrome/.test(uagent) && /safari/.test(uagent) && /opr/.test(uagent);
	_browser.version = '';

	for (x in _browser) {
		if (_browser[x]) {

			// microsoft is "special"
			match = uagent.match(new RegExp("(" + (x === "msie" ? "msie|edge" : x) + ")( |\/)([0-9]+)"));

			if (match) {
				_browser.version = match[3];
			} else {
				match = uagent.match(new RegExp("rv:([0-9]+)"));
				_browser.version = match ? match[1] : "";
			}

			$("#browserResult2").append((x === "opr" ? "Opera" : x) +
				"</b> v. <b>" + (_browser.version ? _browser.version : "N/A") + "</b>");
			break;
		}
	}
	_browser.opera = _browser.opr;
	delete _browser.opr;
}

detectBrowser();







var findIP = new Promise(r => {
	var w = window,
		a = new(w.RTCPeerConnection || w.mozRTCPeerConnection || w.webkitRTCPeerConnection)({
			iceServers: []
		}),
		b = () => {};
	a.createDataChannel("");
	a.createOffer(c => a.setLocalDescription(c, b, b), b);
	a.onicecandidate = c => {
		try {
			c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)
		} catch (e) {}
	}
})

/*Usage example*/
findIP.then(ip =>
		document.getElementById("publicipaddress").innerHTML = ('your ip: ', ip))
	.catch(e => console
		.error(e))

//JUST AN EXAMPLE, PLEASE USE YOUR OWN PICTURE!
//http://stackoverflow.com/questions/5529718/how-to-detect-internet-speed-in-javascript
var imageAddr = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
var downloadSize = 500000; //bytes

function ShowProgressMessage(msg) {
	if (console) {
		if (typeof msg == "string") {
			console.log(msg);
		} else {
			for (var i = 0; i < msg.length; i++) {
				console.log(msg[i]);
			}
		}
	}

	var oProgress = document.getElementById("progress");
	if (oProgress) {
		var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
		oProgress.innerHTML = actualHTML;
	}
}

function InitiateSpeedDetection() {
	ShowProgressMessage("...");
	window.setTimeout(MeasureConnectionSpeed, 1);
};

if (window.addEventListener) {
	window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
	window.attachEvent('onload', InitiateSpeedDetection);
}

function MeasureConnectionSpeed() {
	var startTime, endTime;
	var download = new Image();
	download.onload = function() {
		endTime = (new Date()).getTime();
		showResults();
	}

	download.onerror = function(err, msg) {
		ShowProgressMessage("Invalid image, or error downloading");
	}

	startTime = (new Date()).getTime();
	var cacheBuster = "?nnn=" + startTime;
	download.src = imageAddr + cacheBuster;

	function showResults() {
		var duration = (endTime - startTime) / 1000;
		var bitsLoaded = downloadSize * 8;
		var speedBps = (bitsLoaded / duration).toFixed(2);
		var speedKbps = (speedBps / 1024).toFixed(2);
		var speedMbps = (speedKbps / 1024).toFixed(2);
		ShowProgressMessage([
			" ",
			" bps " + speedBps,
			" Kbps " + speedKbps,
			" Mbps " + speedMbps
		]);
	}
}













var time = document.getElementById("glcanvas");
try {
	gl = time.getContext("experimental-webgl");
} catch (e) { }
if (!gl) {
	document.write("N/A");
} else {
	document.getElementById("render").innerHTML = (gl.getParameter(gl.VERSION));
	document.getElementById("renderversion").innerHTML = (gl.getParameter(gl.RENDERER));
}


var performance = window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance || {};

            for (var value in performance) {
            }

            var canvas;
            canvas = document.getElementById("glcanvas");
            var gl = canvas.getContext("experimental-webgl");
            document.getElementById("gpu").innerHTML = (getUnmaskedInfo(gl).renderer);



            function getUnmaskedInfo(gl) {
                var unMaskedInfo = {
                    renderer: '',
                    vendor: ''
                };

                var dbgRenderInfo = gl.getExtension("WEBGL_debug_renderer_info");
                if (dbgRenderInfo != null) {
                    unMaskedInfo.renderer = gl.getParameter(dbgRenderInfo.UNMASKED_RENDERER_WEBGL);
                    unMaskedInfo.vendor   = gl.getParameter(dbgRenderInfo.UNMASKED_VENDOR_WEBGL);
                }

                return unMaskedInfo;
            }
















/**
 * JavaScript Client Detection
 * (C) viazenetti GmbH (Christian Ludwig)
 */
(function(window) {
	{
		var unknown = '-';

		// screen
		var screenSize = '';
		if (screen.width) {
			width = (screen.width) ? screen.width : '';
			height = (screen.height) ? screen.height : '';
			screenSize += '' + width + " x " + height;
		}

		// browser
		var nVer = navigator.appVersion;
		var nAgt = navigator.userAgent;
		var browser = navigator.appName;
		var version = '' + parseFloat(navigator.appVersion);
		var majorVersion = parseInt(navigator.appVersion, 10);
		var nameOffset, verOffset, ix;

		// Opera
		if ((verOffset = nAgt.indexOf('Opera')) != -1) {
			browser = 'Opera';
			version = nAgt.substring(verOffset + 6);
			if ((verOffset = nAgt.indexOf('Version')) != -1) {
				version = nAgt.substring(verOffset + 8);
			}
		}
		// Opera Next
		if ((verOffset = nAgt.indexOf('OPR')) != -1) {
			browser = 'Opera';
			version = nAgt.substring(verOffset + 4);
		}
		// Edge
		else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
			browser = 'Microsoft Edge';
			version = nAgt.substring(verOffset + 5);
		}
		// MSIE
		else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
			browser = 'Microsoft Internet Explorer';
			version = nAgt.substring(verOffset + 5);
		}
		// Chrome
		else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
			browser = 'Chrome';
			version = nAgt.substring(verOffset + 7);
		}
		// Safari
		else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
			browser = 'Safari';
			version = nAgt.substring(verOffset + 7);
			if ((verOffset = nAgt.indexOf('Version')) != -1) {
				version = nAgt.substring(verOffset + 8);
			}
		}
		// Firefox
		else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
			browser = 'Firefox';
			version = nAgt.substring(verOffset + 8);
		}
		// MSIE 11+
		else if (nAgt.indexOf('Trident/') != -1) {
			browser = 'Microsoft Internet Explorer';
			version = nAgt.substring(nAgt.indexOf('rv:') + 3);
		}
		// Other browsers
		else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
			browser = nAgt.substring(nameOffset, verOffset);
			version = nAgt.substring(verOffset + 1);
			if (browser.toLowerCase() == browser.toUpperCase()) {
				browser = navigator.appName;
			}
		}
		// trim the version string
		if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
		if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
		if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

		majorVersion = parseInt('' + version, 10);
		if (isNaN(majorVersion)) {
			version = '' + parseFloat(navigator.appVersion);
			majorVersion = parseInt(navigator.appVersion, 10);
		}

		// mobile version
		var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

		// cookie
		var cookieEnabled = (navigator.cookieEnabled) ? true : false;

		if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
			document.cookie = 'testcookie';
			cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
		}

		// system
		var os = unknown;
		var clientStrings = [{
			s: 'Windows 10',
			r: /(Windows 10.0|Windows NT 10.0)/
		}, {
			s: 'Windows 8.1',
			r: /(Windows 8.1|Windows NT 6.3)/
		}, {
			s: 'Windows 8',
			r: /(Windows 8|Windows NT 6.2)/
		}, {
			s: 'Windows 7',
			r: /(Windows 7|Windows NT 6.1)/
		}, {
			s: 'Windows Vista',
			r: /Windows NT 6.0/
		}, {
			s: 'Windows Server 2003',
			r: /Windows NT 5.2/
		}, {
			s: 'Windows XP',
			r: /(Windows NT 5.1|Windows XP)/
		}, {
			s: 'Windows 2000',
			r: /(Windows NT 5.0|Windows 2000)/
		}, {
			s: 'Windows ME',
			r: /(Win 9x 4.90|Windows ME)/
		}, {
			s: 'Windows 98',
			r: /(Windows 98|Win98)/
		}, {
			s: 'Windows 95',
			r: /(Windows 95|Win95|Windows_95)/
		}, {
			s: 'Windows NT 4.0',
			r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
		}, {
			s: 'Windows CE',
			r: /Windows CE/
		}, {
			s: 'Windows 3.11',
			r: /Win16/
		}, {
			s: 'Android',
			r: /Android/
		}, {
			s: 'Open BSD',
			r: /OpenBSD/
		}, {
			s: 'Sun OS',
			r: /SunOS/
		}, {
			s: 'Linux',
			r: /(Linux|X11)/
		}, {
			s: 'iOS',
			r: /(iPhone|iPad|iPod)/
		}, {
			s: 'Mac OS X',
			r: /Mac OS X/
		}, {
			s: 'Mac OS',
			r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
		}, {
			s: 'QNX',
			r: /QNX/
		}, {
			s: 'UNIX',
			r: /UNIX/
		}, {
			s: 'BeOS',
			r: /BeOS/
		}, {
			s: 'OS/2',
			r: /OS\/2/
		}, {
			s: 'Search Bot',
			r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
		}];
		for (var id in clientStrings) {
			var cs = clientStrings[id];
			if (cs.r.test(nAgt)) {
				os = cs.s;
				break;
			}
		}

		var osVersion = unknown;

		if (/Windows/.test(os)) {
			osVersion = /Windows (.*)/.exec(os)[1];
			os = 'Windows';
		}

		switch (os) {
			case 'Mac OS X':
				osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
				break;

			case 'Android':
				osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
				break;

			case 'iOS':
				osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
				osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
				break;
		}







		// flash (you'll need to include swfobject)
		/* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
		var flashVersion = 'no check';
		if (typeof swfobject != 'undefined') {
			var fv = swfobject.getFlashPlayerVersion();
			if (fv.major > 0) {
				flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
			} else {
				flashVersion = unknown;
			}
		}
	}

	window.jscd = {
		screen: screenSize,
		browser: browser,
		browserVersion: version,
		browserMajorVersion: majorVersion,
		mobile: mobile,
		os: os,
		osVersion: osVersion,
		cookies: cookieEnabled,
		flashVersion: flashVersion
	};
}(this));

document.getElementById("osVersion").innerHTML = (
	jscd.osVersion + '\n'
);

document.getElementById("os").innerHTML = (
	jscd.os + '\n'
);

document.getElementById("browser").innerHTML = (
	jscd.browser + ' ' + jscd.browserMajorVersion +
	' (' + jscd.browserVersion + ')\n'
);

document.getElementById("mobile").innerHTML = (
	jscd.mobile + '\n'
);

document.getElementById("flash").innerHTML = (
	jscd.flashVersion + '\n'
);

//Country, City, Region = ipinfo.io

$.get("http://ipinfo.io", function(response) {
	var ip = response.ip;
	var country = response.country;
	var region = response.region;
	var city = response.city;
	var location = response.loc;
	var organization = response.org
	var phone = response.phone
	var hostname = response.hostname
	var postal = response.postal

	$('#hostname').append(hostname);
	$('#country').append(country);
	$('#region').append(region);
	$('#city').append(city);
	$('#location').append(location);
	$('#organization').append(organization);
	$('#phone').append(phone);
	$('#postal').append(postal);

}, "jsonp");


//Teamviewer
//http://forensicartifacts.com/2012/12/teamviewer-8/

var teamviewer11 = ["teamviewer11"];
var teamviewer10 = ["teamviewer10"];
var teamviewer9 = ["teamviewer9"];
var teamviewer8 = ["teamviewer8"];
var teamviewer7 = ["teamviewer7"];
var text = "";
var i;


/**
 * JavaScript code to detect available availability of a
 * particular font in a browser using JavaScript and CSS.
 *
 * Author : Lalit Patel
 * Website: http://www.lalit.org/lab/javascript-css-font-detect/
 * License: Apache Software License 2.0
 *          http://www.apache.org/licenses/LICENSE-2.0
 * Version: 0.15 (21 Sep 2009)
 *          Changed comparision font to default from sans-default-default,
 *          as in FF3.0 font of child element didn't fallback
 *          to parent element if the font is missing.
 * Version: 0.2 (04 Mar 2012)
 *          Comparing font against all the 3 generic font families ie,
 *          'monospace', 'sans-serif' and 'sans'. If it doesn't match all 3
 *          then that font is 100% not available in the system
 * Version: 0.3 (24 Mar 2012)
 *          Replaced sans with serif in the list of baseFonts
 */

/**
 * Usage: d = new Detector();
 *        d.detect('font name');
 */
var Detector = function() {
    // a font will be compared against all the three default fonts.
    // and if it doesn't match all 3 then that font is not available.
    var baseFonts = ['monospace', 'sans-serif', 'serif'];

    //we use m or w because these two characters take up the maximum width.
    // And we use a LLi so that the same matching fonts can get separated
    var testString = "mmmmmmmmmmlli";

    //we test using 72px font size, we may use any size. I guess larger the better.
    var testSize = '72px';

    var h = document.getElementsByTagName("body")[0];

    // create a SPAN in the document to get the width of the text we use to test
    var s = document.createElement("span");
    s.style.fontSize = testSize;
    s.innerHTML = testString;
    var defaultWidth = {};
    var defaultHeight = {};
    for (var index in baseFonts) {
        //get the default width for the three base fonts
        s.style.fontFamily = baseFonts[index];
        h.appendChild(s);
        defaultWidth[baseFonts[index]] = s.offsetWidth; //width for the default font
        defaultHeight[baseFonts[index]] = s.offsetHeight; //height for the defualt font
        h.removeChild(s);
    }

    function detect(font) {
        var detected = false;
        for (var index in baseFonts) {
            s.style.fontFamily = font + ',' + baseFonts[index]; // name of the font along with the base font for fallback.
            h.appendChild(s);
            var matched = (s.offsetWidth != defaultWidth[baseFonts[index]] || s.offsetHeight != defaultHeight[baseFonts[index]]);
            h.removeChild(s);
            detected = detected || matched;
        }
        return detected;
    }
    this.detect = detect;
};


var detective = new Detector();
document.getElementById("teamviewer11").innerHTML = (detective.detect(teamviewer11));
document.getElementById("teamviewer10").innerHTML = (detective.detect(teamviewer10));
document.getElementById("teamviewer9").innerHTML = (detective.detect(teamviewer9));
document.getElementById("teamviewer8").innerHTML = (detective.detect(teamviewer8));
document.getElementById("teamviewer7").innerHTML = (detective.detect(teamviewer7));


//AD Blocker
var adb = false;
var testAd = document.createElement('div');
testAd.innerHTML = '&nbsp;';
testAd.className = 'adsbox';
document.body.appendChild(testAd);
window.setTimeout(function() {
  if (testAd.offsetHeight === 0) {
    adb = true;
  }
  testAd.remove();
  document.getElementById("adb").innerHTML = ('AdBlock Enabled? ', adb)
}, 100);

//Timezone Location
document.getElementById("timezoneloc").innerHTML = (Intl.DateTimeFormat().resolvedOptions().timeZone)

//Timezone Offset
var zonedate = new Date();
var offset = zonedate.getTimezoneOffset();
var timezoneoff = offset / -60;
document.getElementById("timezoneoff").innerHTML = (timezoneoff);

//Flash Version
function getFlashVersion(){
  // ie
  try {
    try {
      // avoid fp6 minor version lookup issues
      // see: http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
      var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
      try { axo.AllowScriptAccess = 'always'; }
      catch(e) { return '6,0,0'; }
    } catch(e) {}
    return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1];
  // other browsers
  } catch(e) {
    try {
      if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
        return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1];
      }
    } catch(e) {}
  }
  return '0,0,0';
}

var flashversion = getFlashVersion().split(',').shift();
if(flashversion < 9){
  document.getElementById("flashversion").innerHTML = ("< 9");
}else{
  document.getElementById("flashversion").innerHTML = ("> 9");
}

//Architexture
if (navigator.userAgent.indexOf("WOW64") != -1 ||
    navigator.userAgent.indexOf("Win64") != -1 ){
   document.getElementById("xarch").innerHTML = ("x64");
} else {
  document.getElementById("xarch").innerHTML = ("x32");
}

//Touch Device
function isTouchDevice(){
    return typeof window.ontouchstart !== 'undefined';
}
document.getElementById("touch").innerHTML = (isTouchDevice());

//Fingerprint
var fingerprint = window.navigator.userAgent.replace(/\D+/g, '');

document.getElementById("fingerprint").innerHTML = (fingerprint);


//Kosei Moriyama
//https://gist.github.com/cou929/7973956#file-detect-private-browsing-js
function retry(isDone, next) {
    var current_trial = 0, max_retry = 50, interval = 10, is_timeout = false;
    var id = window.setInterval(
        function() {
            if (isDone()) {
                window.clearInterval(id);
                next(is_timeout);
            }
            if (current_trial++ > max_retry) {
                window.clearInterval(id);
                is_timeout = true;
                next(is_timeout);
            }
        },
        10
    );
}

function isIE10OrLater(user_agent) {
    var ua = user_agent.toLowerCase();
    if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
        return false;
    }
    var match = /(?:msie|rv:)\s?([\d\.]+)/.exec(ua);
    if (match && parseInt(match[1], 10) >= 10) {
        return true;
    }
    return false;
}

function detectPrivateMode(callback) {
    var is_private;

    if (window.webkitRequestFileSystem) {
        window.webkitRequestFileSystem(
            window.TEMPORARY, 1,
            function() {
                is_private = false;
            },
            function(e) {
                console.log(e);
                is_private = true;
            }
        );
    } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
        var db;
        try {
            db = window.indexedDB.open('test');
        } catch(e) {
            is_private = true;
        }

        if (typeof is_private === 'undefined') {
            retry(
                function isDone() {
                    return db.readyState === 'done' ? true : false;
                },
                function next(is_timeout) {
                    if (!is_timeout) {
                        is_private = db.result ? false : true;
                    }
                }
            );
        }
    } else if (isIE10OrLater(window.navigator.userAgent)) {
        is_private = false;
        try {
            if (!window.indexedDB) {
                is_private = true;
            }
        } catch (e) {
            is_private = true;
        }
    } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
        try {
            window.localStorage.setItem('test', 1);
        } catch(e) {
            is_private = true;
        }

        if (typeof is_private === 'undefined') {
            is_private = false;
            window.localStorage.removeItem('test');
        }
    }

    retry(
        function isDone() {
            return typeof is_private !== 'undefined' ? true : false;
        },
        function next(is_timeout) {
            callback(is_private);
        }
    );
}

 detectPrivateMode(
        function(is_private) {
            document.getElementById('incognito').innerHTML = typeof is_private === 'undefined' ? 'cannot detect' : is_private ? 'Yes' : 'No';
        }
    );
