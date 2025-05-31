const mongoose =  require('mongoose')
//4ym2bqM7J4qrQnVa

const mongo_url = process.env.MONGO_CONN;


mongoose.connect(mongo_url)
.then(() =>{
    console.log('MongoDB Connected...');

}).catch((err)=>{
    console.log('MongoDB Connection Error: ', err);

})

