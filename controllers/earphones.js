var earphones = require('../models/earphones');

// List of all earphones
exports.earphones_list = async function(req, res) {
    try{
    theearphones = await earphones.find();
    res.send(theearphones);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


// for a specific earphones.
exports.earphones_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: earphones detail: ' + req.params.id);
};
// Handle earphones create on POST.
exports.earphones_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: earphones create POST');
};
// Handle earphones delete form on DELETE.
exports.earphones_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: earphones delete DELETE ' + req.params.id);
};
// Handle earphones update form on PUT.
exports.earphones_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: earphones update PUT' + req.params.id);
};

exports.earphones_view_all_Page = async function(req, res) {
    try{
    theearphones = await earphones.find();
    res.render('earphones', { title: 'earphones Search Results', results: theearphones });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
