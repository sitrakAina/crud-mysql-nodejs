const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM eleve', (err, eleves) => {
     if (err) {
      res.json(err);
     }
     //res.render('/');
     res.send(eleves)
     //res.redirect('/');
     //console.log(eleves)
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO eleve set ?', data, (err, eleve) => {
      console.log(eleve)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM eleve WHERE id = ?", [id], (err, rows) => {
      res.render('eleves_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id } = req.params;
  const newEleve = req.body;
  req.getConnection((err, conn) => {

  conn.query('UPDATE eleve set ? where id = ?', [newEleve, id], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM eleve WHERE id = ?', [id], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;
