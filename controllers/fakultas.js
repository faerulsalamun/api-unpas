var sql = '';

function getFakultas(res){
  sql = 'SELECT * from unpas_fakultas';

  query.doQuery(sql,'', function(err, results) {
    if (!err) {
     response.endResponse(res,'0',results);
    }
  });
}

function getDetailFakultas(res,req){
  sql =  'SELECT * from unpas_fakultas where id_fakultas=?';
  
  query.doQuery(sql,[req.params.id_fakultas], function(err, results) {
    if (!err) {
       response.endResponse(res,'0',results);
    }
  });
}

module.exports = {
  getFakultas : getFakultas,
  getDetailFakultas : getDetailFakultas
}

