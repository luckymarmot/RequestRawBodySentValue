var RequestRawBodySentValue = function() {
	this.evaluate = function() {
		var exchange = this.req.getLastExchange();
		var sentValue = exchange.requestBody;
		return sentValue;
	}

	this.text = function(context) {
		return this.req.name;
	}
}

RequestRawBodySentValue.identifier = "com.luckymarmot.RequestRawBodySentValue";

RequestRawBodySentValue.title = "Request Raw Body Sent Value";

RequestRawBodySentValue.inputs = [
	InputField("req", "Source Request", "Request")
]

registerDynamicValueClass(RequestRawBodySentValue);