function Mock(app) {
  app.get('/cart/getCartList', function(req, res) {
    res.json({ aaa: '111' });
  });
}

module.exports = Mock;