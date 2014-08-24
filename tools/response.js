var metaResponse = {
	0 : {
		code : 200,
	    status : 'OK',
	    message : 'Operation success.'
	},
	1: {
		code : 403,
	    status : 'OK',
	    message : 'Token required.'
	},
	2: {
		code : 403,
	    status : 'OK',
	    message : 'Invalid token.'
	}
};


exports.endResponse = function(res,code,data) {
   res.json({data:data,meta : metaResponse[code]});
};
 