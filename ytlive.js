let ytlive = {
	getSubscribers: function() {
		simple.readXml(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${this.channel}&key=${this.apiKey}`, function() {
				let data = simple.xmlResult;
				data = JSON.parse(data);
				return data.items[0].statistics.subscriberCount;
		});
	},
	getViews: function() {
	
	},
	startLive: function() {
	
	},
	stopLive: function() {
	
	},
	setRefreshRate: function(mil) {
	
	},
	refreshRate: '',
	onRefresh: function() {
	
	},
	refresh: function() {
		simple.readXml(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${this.channel}&key=${this.apiKey}`, function() {
			let data = simple.xmlResult;
			data = JSON.parse(data)
			console.log(data)
			if (typeof(this.onRefresh) == 'object') {
				this.onRefresh();
			}
			if (this.channelSubsDisplay) {
				channelSubsDisplay.innerText = data.items[0].statistics.subscriberCount;
			}
		});
	},
	onSubsOver: function(amount, func) {
	
	},
	setApiKey: function(val) {
		this.apiKey = val;
	},
	apiKey: 'AIzaSyD7A_fA6gtbxXs-sqdeC3oplUVr1zzSZ2U',
	onSubsGainedSinceLive(amount, func) {
	
	},
	onGainedSubs: function() {
	
	},
	getChannelIcon: function() {
	
	},
	getChannelBanner: function() {
	
	},
	getChannelSocialBlade: function() {
	
	},
	forceRefresh: function() {
	
	},
	onLiveStarted: function() {
	
	},
	onLiveStopped: function() {
	
	},
	onSubsLost: function() {
	
	},
	setChannelIconDisplay: function(el) {
		if (typeof(el) == 'object') {
			this.channelIconDisplay = el;
		}
	},
	channelIconDisplay: '',
	setChannelNameDisplay: function(el) {
		if (typeof(el) == 'object') {
			this.channelNameDisplay = el;
		}
	},
	channelNameDisplay: '',
	setChannelIdDisplay: function(el) {
		if (typeof(el) == 'object') {
			this.channelIdDisplay = el;
		}
	},
	channelIdDisplay: '',
	setViewsDisplay: function(el) {
		if (typeof(el) == 'object') {
			this.channelViewsDisplay = el;
		}
	},
	channelViewsDisplay: '',
	setSubsDisplay: function(el) {
		if (typeof(el) == 'object') {
			this.channelSubsDisplay = el;
		}
	},
	channelSubsDisplay: '',
	disableAttribution: function() {
	
	},
	setChannel: function(channel) {
		this.channel = channel;
	},
	channel: 'UCiPL4fbPA_0Ro0nQh58Ccxg',
}
