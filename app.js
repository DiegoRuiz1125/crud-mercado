const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  db.query('SELECT * FROM articulos ORDER BY estado, categoria, nombre', (err, resultados) => {
    if (err) throw err;
    res.render('index', { articulos: resultados });
  });
});

app.post('/agregar', (req, res) => {
  const { nombre, cantidad, categoria, estado } = req.body;
  db.query('INSERT INTO articulos SET ?', {
    nombre, cantidad, categoria, estado
  }, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.get('/cambiar/:id', (req, res) => {
  const id = req.params.id;
  db.query('SELECT estado FROM articulos WHERE id = ?', [id], (err, resultados) => {
    if (err) throw err;
    const nuevoEstado = resultados[0].estado === 'comprar' ? 'casa' : 'comprar';
    db.query('UPDATE articulos SET estado = ? WHERE id = ?', [nuevoEstado, id], (err2) => {
      if (err2) throw err2;
      res.redirect('/');
    });
  });
});

app.get('/eliminar/:id', (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM articulos WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
