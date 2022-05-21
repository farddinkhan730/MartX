const app=require("./app");
const dotenv=require("dotenv");
const connectDatabase=require("./config/database")

// /Handling uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shuting down the server due to uncaught Exception`);
    process.exit(1);
})
dotenv.config({path:"backend/config/config.env"});

// connection database
connectDatabase();
// cD();

const server=app.listen(process.env.PORT,()=>{
    console.log(`server is listining on http://localhost:${process.env.PORT||3000}`);
})

// unhandled promis
process.on("unhandledRejection",(err)=>{
    console.log(`Error:${err.messager}`);
    console.log(`shutting down the server due to unhandled Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    });
});