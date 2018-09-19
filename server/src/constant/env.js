module.exports.env = {
    get isProduction() {
        return process.env.NODE_ENV === 'production';
    },
    get isDevelopment() {
        return process.env.NODE_ENV === 'development';
    },
};
