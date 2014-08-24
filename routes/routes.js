module.exports = function(app) {
	// Fakultas
	app.get('/fakultas',middleware.checkToken,function(req, res) {
	    fakultas.getFakultas(res);
	 });

	app.get('/fakultas/:id_fakultas',middleware.checkToken,function(req, res) {
	     fakultas.getDetailFakultas(res,req);
	});

	// Jurusan
	app.get('/jurusan',middleware.checkToken,function(req, res) {
    	 jurusan.getJurusan(res);
  	});

  	app.get('/jurusan/:id_fakultas',middleware.checkToken,function(req, res) {
    	jurusan.getDetailFakultas(res,req);
  	});

	app.get('/jurusan/detail/:id_jurusan',middleware.checkToken,function(req, res) {
		jurusan.getDetailJurusan(res,req);
	});

	// Biaya
	app.get('/biaya',middleware.checkToken,function(req, res) {
		jurusan.biaya(res);
	});

	// Information
	app.get('/information/info',middleware.checkToken,function(req, res) {
    	information.getInformation(res);
  	});

};


