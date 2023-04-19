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
// for a specific earphones.
exports.earphones_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await earphones.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle earphones create on POST.
exports.earphones_create_post = async function(req, res) {
    console.log(req.body)
    let document = new earphones();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"earphones_type":"goat", "cost":12, "size":"large"}
    document.earphones_color = req.body.earphones_color;
    document.earphones_length = req.body.earphones_length;
    document.earphones_cost = req.body.earphones_cost;
    document.earphones_sound = req.body.earphones_sound;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle earphones delete form on DELETE.
/*exports.earphones_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: earphones delete DELETE ' + req.params.id);
};
// Handle earphones update form on PUT.
exports.earphones_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: earphones update PUT' + req.params.id);
};*/
// Handle earphones delete on DELETE.
exports.earphones_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await earphones.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
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
   
   //Handle earphones update form on PUT.
exports.earphones_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await earphones.findById( req.params.id)
 // Do updates of properties
 if(req.body.earphones_color) 
        toUpdate.earphones_color = req.body.earphones_color;
 if(req.body.earphones_length) toUpdate.earphones_length = req.body.earphones_length;
 if(req.body.earphones_cost) toUpdate.earphones_cost = req.body.earphones_cost;
 if(req.body.earphones_sound) toUpdate.earphones_sound = req.body.earphones_sound;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// Handle a show one view with id specified by query
exports.earphones_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await earphones.findById( req.query.id)
    res.render('earphonesdetail',
   { title: 'earphones Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   
   // Handle building the view for creating a earphones.
   // No body, no in path parameter, no query.
   // Does not need to be async
exports.earphones_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('earphonescreate', { title: 'earphones Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };