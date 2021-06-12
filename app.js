const app = require("express")();

const PORT = process.env.PORT || 3000;

require('dotenv').config()
// store mongo password separately
mongodb_password = process.env.MONGO_PW

let mystring= "helo world " + mongodb_password;

app.get("", (req, res) => {
	res.send(mystring);
});

app.listen(PORT, () => {
	console.log(`App up at port ${PORT}`);
})