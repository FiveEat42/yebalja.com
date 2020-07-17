require('dotenv').config();

module.exports = {
    'secret' : process.env.JWT_SECRET_CODE,
    'adminAccount' : process.env.ADMIN_EMAIL
}
