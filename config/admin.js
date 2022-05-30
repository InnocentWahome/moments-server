module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '4a1d2d40eba8e8b2e160e858c3964628'),
  },
});
