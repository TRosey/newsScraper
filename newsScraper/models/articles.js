var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema= new Schema({
    date: {type: Date, default: Date.now},
    category: String,
    link: String,
    title: String,
    body: String,
    image: String,

    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var ArticleModel = mongoose.model('Item',itemSchema);

module.exports=ArticleModel;
