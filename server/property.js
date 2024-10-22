async function getProperties() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM properties', (err, rows) => {
            if(err)
                reject(err);
            else
                resolve(rows);
        });
    });
  }