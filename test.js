
var mongoose = require('mongoose'); //����mongooseģ��

mongoose.connect('mongodb://127.0.0.1:27017/BFClubTest'); //����һ�����ݿ�����

exports.mongoose = mongoose;

var db = mongoose.connection;
  
db.once('open', function callback () {
  console.log('opened...');
});