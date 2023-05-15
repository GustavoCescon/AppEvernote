const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect("mongodb://127.0.0.1:27017/javascriptNote", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado com sucesso"))
  .catch((err) => console.log(err));
