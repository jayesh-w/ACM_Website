exports.getIndex = (req, res, next) => {

      res.render('home', {
        pageName : 'Home'
      });
};

exports.getLogin = (req, res, next) => {
  res.render('dashboard', {
      pagename: 'Login'
  });
}
