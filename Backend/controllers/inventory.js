const Inventory = require('../models/inventory');

exports.addInventory =  async(req, res, next) =>{
  try{
      const item_name =  req.body.item_name;
      const description =  req.body.description;
      const price =  req.body.price;
      const quantity  = req.body.quantity;

      const inventoryData  =  await Inventory.create ( {item_name: item_name, description: description, price: price , quantity: quantity});
      res.status(201).json( {newInventoryDetails: inventoryData});
      console.log("post is successful");
  }
  catch(err){
      console.log("Post User is not working",JSON.stringify(err));
      console.log(err);
      res.status(500).json({
          error: err
      })
  }
}

exports.getInventory = async (req, res, next) =>{
  try{
      const inventories = await Inventory.findAll();
      res.status(200).json({allInventories : inventories});
      console.log("get is successful");
  }
  catch(err){
      console.log("Get User is failing ", JSON.stringify(err));
      res.status(500).json({
          error: err
      })
  }
}

  exports.deleteInventory = async(req, res, next) =>{
    try{
        if(req.params.id === 'undefined'){
            console.log("id is missing");
            return res.status(400).json({err :'Id is missing'});
        }
        const inventoryId = req.params.id;
        console.log(inventoryId);
        await Inventory.destroy({where: {id: inventoryId}});
        console.log("successfully deleted");
        return res.sendStatus(200);
       
    }
    catch(err){
        console.log("Delete User is failing ", JSON.stringify(err));
        console.log(err + "helo");
        res.sendStatus(500).json({
            error: err
        })
    }
  }