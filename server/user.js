
exports.userInfo = (req, res) =>res.status(400).send('N/A')

exports.paypalIpn = (req, res, next)  =>res.status(400).send('N/A')

exports.checkSponsor = (idToken) => {
  return Promise.resolve(true);
};
