var keystone = require('keystone');

exports = module.exports = function (req, res) {
  keystone.list('Gallery')
    .model.find()
    .sort('sortOrder')
    .exec(function(err, galleries) {
      res.json(galleries);
    });
};
