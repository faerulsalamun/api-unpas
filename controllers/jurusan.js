var sql = '';

function getJurusan(res){
 sql =  'SELECT unpas_jurusan.id_jurusan,unpas_fakultas.id_fakultas,unpas_fakultas.nama_fakultas,unpas_jurusan.nama_jurusan,unpas_jurusan.akreditasi'+ 
               ' from unpas_jurusan inner join unpas_fakultas on unpas_jurusan.id_fakultas=unpas_fakultas.id_fakultas';

  query.doQuery(sql,'', function(err, results) {
    if (!err) {
     response.endResponse(res,'0',results);
   }
 });
}

function getDetailFakultas(res,req){
sql =  'SELECT unpas_jurusan.id_jurusan,unpas_fakultas.id_fakultas,unpas_fakultas.nama_fakultas,unpas_jurusan.nama_jurusan,unpas_jurusan.akreditasi'+ 
           ' from unpas_jurusan inner join unpas_fakultas on unpas_jurusan.id_fakultas=unpas_fakultas.id_fakultas'+
           ' where unpas_fakultas.id_fakultas=?';


query.doQuery(sql,[req.params.id_fakultas], function(err, results) {
    if (!err) {
       response.endResponse(res,'0',results);
    }
  });
}

function getDetailJurusan(res,req){
  sql =  'SELECT unpas_jurusan.id_jurusan,unpas_fakultas.id_fakultas,unpas_fakultas.nama_fakultas,unpas_jurusan.nama_jurusan,unpas_jurusan.akreditasi'+ 
           ' from unpas_jurusan inner join unpas_fakultas on unpas_jurusan.id_fakultas=unpas_fakultas.id_fakultas'+
           ' where unpas_jurusan.id_jurusan=?';


 query.doQuery(sql,[req.params.id_jurusan], function(err, results) {
    if (!err) {
       response.endResponse(res,'0',results);
    }
  });
}

function getBiaya(res){
  sql =  'select unpas_biaya.id_biaya,unpas_fakultas.nama_fakultas,unpas_jurusan.nama_jurusan,unpas_biaya.`dpp/tahun`,unpas_biaya.dp,unpas_biaya.tanggal'+
            ' from unpas_biaya'+
            ' inner join unpas_jurusan on unpas_jurusan.id_jurusan = unpas_biaya.id_jurusan'+
            ' inner join unpas_fakultas on unpas_fakultas.id_fakultas = unpas_jurusan.id_fakultas';

 query.doQuery(sql,'', function(err, results) {
    if (!err) {
       response.endResponse(res,'0',results);

    }
  });
}

module.exports = {
  getJurusan : getJurusan,
  getDetailFakultas : getDetailFakultas,
  getDetailJurusan : getDetailJurusan
}

