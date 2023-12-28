const Product = require('../models/product');

// ACTION METHOD TO SHOW ALL THE PRODUCTS IN DB
module.exports.products = function(req,res) {
    Product.find({})
    .then((foundProducts)=> {
        res.send(foundProducts);
    })
    .catch((err)=> {
        res.send(err);
    });
};

// CREATE PRODUCT
module.exports.create = (req,res,next) => {
    const product = new Product ({
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
    });
    product.save()
    .then((result)=>{
        console.log(result);
        res.status(201).json({
            message: "Product created successfully!",
            product: result,
        })
    })
    .catch((err)=>{
        console.log("Error in creating product",err);
        res.status(500).json({
            error: err
        });
    });

};

// FUNCTION TO DELETE A PRODUCT USING ITS ID
module.exports.delete = function(req,res) {
    Product.deleteOne({_id:req.params.productID})
    .then(() => {
        res.send({
            message: "Product deleted",
        });
    })
    .catch((err) => {
        res.status(500).send(err);
    });
};

module.exports.updateQunatity = async function(req,res) {
    const ID = req.params.productID;
    try{
        const found = await Product.findById(ID);
        const newQty = parseInt(found.quantity) + parseInt(req.query.number);
        const updatedProduct = await Product.findByIdAndUpdate(
            ID,
            {quantity: newQty},
            {new: true},
        );
        res.send({
            product: updatedProduct,
            message:"Updated successfully"
        });

    }catch(err) {
        res.send(err);
    }
};