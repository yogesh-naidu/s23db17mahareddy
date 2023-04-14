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
// Handle giraffe delete form on DELETE.
exports.giraffe_delete = function(req, res) {
res.send('NOT IMPLEMENTED: giraffe delete DELETE ' + req.params.id);
};
// Handle giraffe update form on PUT.
exports.giraffe_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: giraffe update PUT' + req.params.id);
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