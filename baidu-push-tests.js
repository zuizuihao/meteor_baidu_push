// Write your tests here!
// Here is an example.
Tinytest.add('example', function (test) {
    var pushOption = {
        apiKey: 'T0bqE6dFIlb6vgp39Oprqg6g',
        secretKey: '6cldgRS2piLcH3UfiaueGrcmRrwfGK5b',
    };
    var baiduPushAPI = new BaiduPushAPI(pushOption);

    // var singKey = require('./singKey.js');
    // var bodyParams = {
    //     apikey: 'T0bqE6dFIlb6vgp39Oprqg6g', 
    //     msg_type: 1, 
    //     timestamp: 1452687433, 
    //     expires: 300, 
    //     secretKey: '6cldgRS2piLcH3UfiaueGrcmRrwfGK5b', 
    //     channel_id: '4099091116498016469', 
    //     device_type: '3', 
    //     msg: '{"title":"Message from Push","description":"hello world"}'
    // };
    // var secretKey = '6cldgRS2piLcH3UfiaueGrcmRrwfGK5b';
    // var singkey = singKey.generate('POST', 'http://api.tuisong.baidu.com/rest/3.0/push/single_device'
    //         , bodyParams, secretKey);

    baiduPushAPI.pushMsgToSingleDevice('4099091116498016469', 'test', 'test description', function (error, result) {
        if (error) {
            console.log(error);
            return;
        }
        console.log(result);
    });
});