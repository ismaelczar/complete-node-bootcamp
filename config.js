require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || 'development'}`
});

module.exports = {
    port: process.env.PORT,
    dbUri: process.env.DB_URI,
    nodeEnv: process.env.NODE_ENV
};
