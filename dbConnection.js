const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Lahari:Lahari1912@cluster3.ptypy3l.mongodb.net/shopDB?appName=Cluster3")
.then(() => {
    console.log("Successfully connected to MongoDB...");
})
.catch((err) => {
    console.log("Connection Error:", err);
});

mongoose.connection.on("connected", () => {
    console.log("Mongoose Connected");
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose Error:", err);
});

mongoose.connection.on("disconnected", () => {
    console.log("Mongoose Disconnected");
});