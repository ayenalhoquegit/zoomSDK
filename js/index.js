// For CDN version default
//ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.9.1/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

//const zoomMeeting = document.getElementById("zmmtg-root");

var API_KEY = "n49QKVmFSNSSePnq14j1Qw";
var API_SECRET = "jqwFU97u8M0wB3N8quzp3WGHWrC94ZDy9ZqM";
var USER_NAME = "Sakib";
var MEETING_NUMBER = "83234457411";
var PASSWORD = "M3e4gL";
var USEREMAIL = "ayenal8684@gmail.com";

var meetConfig = {
    apiKey: API_KEY,
    apiSecret: API_SECRET,
    meetingNumber: MEETING_NUMBER,
    userName: USER_NAME,
    passWord: PASSWORD,
    leaveUrl: "http://localhost/ZoomSDK/index.html",
    role: 0
};

var signature = ZoomMtg.generateSignature({
    meetingNumber: meetConfig.meetingNumber,
    apiKey: meetConfig.apiKey,
    apiSecret: meetConfig.apiSecret,
    role: meetConfig.role,
    success: function(res) {
        console.log(res.result);
    }
});

ZoomMtg.init({
	leaveUrl: meetConfig.leaveUrl,
	isSupportAV: true,
	success: function() {
		ZoomMtg.join({
			signature: signature,
			apiKey: meetConfig.apiKey,
			meetingNumber: meetConfig.meetingNumber,
			userName: meetConfig.userName,
			// password optional; set by Host
			passWord: meetConfig.passWord ,
			error(res) { 
				console.log(res) 
			}
		})		
	}
});


