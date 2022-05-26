// hello world

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const index_path:string = "/home/cryhavoc21/winston_draft/views/index.hmtl";



app.engine('.html', require('ejs').__express);
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.get('/', (req, res) => {
  res.render('index');
  //res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Example application listening on port ${port}`);
});


