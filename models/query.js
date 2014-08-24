exports.doQuery = function(query, data, callback) {
    pool.getConnection(function(err, connection) {
    if(err) { 
      console.error(err);
      callback(err);
    } 
    else {
      connection.query(query, data, function(err, results) {
        if(err){
            console.error(err);
            callback(err);
        } 
        else {
          callback(null, results);
        }

        connection.release();

      });
    }
  });
};
