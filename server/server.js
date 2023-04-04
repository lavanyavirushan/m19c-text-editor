const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const dist = __dirname.replace('server', 'client/dist')
app.use(express.static(dist));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
