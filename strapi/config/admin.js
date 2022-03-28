module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9c510e223e25b04035e8d99042a47746'),
  },
});
