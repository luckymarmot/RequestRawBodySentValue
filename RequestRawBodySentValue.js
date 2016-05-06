var RequestRawBodySentValue = function() {
	this.evaluate = function(context) {

		var exchange;
		if(this.req) {
			exchange = this.req.getLastExchange();
		} else {
			exchange = context.getCurrentRequest().getLastExchange();
		}

		var sentValue = exchange.requestBody;
		return sentValue;
	}

	this.text = function(context) {
		if(this.req) {
			return this.req.name;
		} else {
			return null;
		}
	}
}

RequestRawBodySentValue.identifier = "com.luckymarmot.RequestRawBodySentValue";

RequestRawBodySentValue.title = "Request Raw Body Sent Value";

RequestRawBodySentValue.inputs = [
	InputField("req", "Source Request", "Request")
]

registerDynamicValueClass(RequestRawBodySentValue);