var Push = Npm.require('baidu-push-wrapper');

BaiduPushAPI = function (pushOption){
    this.client = new Push(pushOption);
};

BaiduPushAPI.prototype.pushMsgToSingleDevice = function(channelId, title, description, callback){
    var options = {
        channel_id: channelId,
        msg_type: 1,
        msg: {
            title: title,
            description: description
        }
    };
    
    this.client.pushMsgToSingleDevice(options, callback);
}