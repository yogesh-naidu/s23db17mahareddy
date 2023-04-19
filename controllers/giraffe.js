var giraffe = require('../models/giraffe');
// List of all giraffe
exports.giraffe_list = function(req, res) {
res.send('NOT IMPLEMENTED: giraffe list');
};
// for a specific giraffe. 
exports.giraffe_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await giraffe.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

    
// Handle giraffe create on POST.
exports.giraffe_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: giraffe create POST');
};

// Handle Giraffe delete on DELETE.
exports.giraffe_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await giraffe.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// Handle Giraffe update form on PUT.
exports.giraffe_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await giraffe.findById( req.params.id)
// Do updates of properties
if(req.body.giraffe_name)
toUpdate.giraffe_name = req.body.giraffe_name;
if(req.body.giraffe_color) toUpdate.giraffe_color = req.body.giraffe_color;
if(req.body.giraffe_weight) toUpdate.giraffe_weight = req.body.giraffe_weight;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

// List of all giraffe
exports.giraffe_list = async function(req, res) {
    try{
    theGiraffe = await giraffe.find();
    res.send(theGiraffe);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
    // Handle a show all view
exports.giraffe_view_all_Page = async function(req, res) {
    try{
        theGiraffe = await giraffe.find();
    res.render('giraffe', { title: 'Giraffe Search Results', results: theGiraffe });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle Giraffe create on POST.
exports.giraffe_create_post = async function(req, res) {
    console.log(req.body)
    let document = new giraffe();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object

    document.giraffe_name = req.body.giraffe_name;
    document.giraffe_color = req.body.giraffe_color;
    document.giraffe_weight = req.body.giraffe_weight;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.giraffe_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await giraffe.findById( req.query.id)
    res.render('giraffedetail',
   { title: 'Giraffe Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a giraffe.
// No body, no in path parameter, no query.
// Does not need to be async
exports.giraffe_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('giraffecreate', { title: 'Giraffe Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };