exports.checkToken = function(req, res,next) {
        if(req.query.token){
          var sql = 'SELECT * FROM unpas_token where token=?';
          query.doQuery(sql,req.query.token, function(err, results) {
            if (!err) {
               if(results.length>=1){
                next(); 
              }else{
                response.endResponse(res,'2');
              }
            }
          });
        }else{
          response.endResponse(res,'1');
        }
};
 