var sql = '';

function getInformation(res){
 sql =  'SELECT unpas_info.id_info, unpas_jurusan.nama_jurusan, unpas_info.visi, unpas_info.misi, unpas_info.tujuan'+ 
    ' FROM unpas_info INNER JOIN unpas_jurusan ON unpas_info.id_jurusan = unpas_jurusan.id_jurusan';

  query.doQuery(sql,'', function(err, results) {
    if (!err) {
     response.endResponse(res,'0',results);
   }
 });
}

module.exports = {
 getInformation : getInformation
}


