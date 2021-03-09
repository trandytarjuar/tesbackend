
const user = require('../model/userModel');


exports.postDatauser = (req, res) =>{

    let {nama_user,no_hp,alamat} = req.body;
    let image  = req.file.path;   
     console.log(image)
        let adduser = new user({
            nama_user : nama_user,
            no_hp : no_hp,
            alamat: alamat,
            foto_user       : image
            
          })
          
          
          
       adduser.save().then (doc => {
       
        res.status(200).send("Berhasil memasukan data " + doc);
       }).catch(err =>{
        res.status(500).send("Gagal Insert Data "+err)
       })
     
       
    }
    
    exports.getAllDatauser = async(req, res) =>{

   
    let dataHasil = await user.find();
    res.status(200).json({
    
    status : "success",
    dataLength : dataHasil.length, 
    timestamp : req.requestTime,
    data : dataHasil
    
    });
}

exports.getAllDatauserById = async(req, res) =>{

   
    let nama_user = req.params.id;

    let dataHasil = await user.find({nama_user: {$regex: nama_user, $options: 'i'}});
    res.status(200).json({
    
        status : "success",
        dataLength : dataHasil.length, 
        timestamp : req.requestTime,
        data : dataHasil
        
        });
    
}

exports.updateDatauserById = async(req, res) =>{

    console.log(req.body)
    let {nama_user,no_hp,alamat} = req.body;
    let image  = req.file.path;   
     
        let body = {
            nama_user : nama_user,
            no_hp : no_hp,
            alamat : alamat,
            foto_user       : image
            
          }
    await user.findByIdAndUpdate(req.params.id, body,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Updated user : ", docs); 
         res.status(200).json(docs);
     } })
    
 }
 
 exports.deleteDatauserById = async(req, res) =>{


    await user.findByIdAndDelete(req.params.id,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Deleted user : ", docs); 
         res.status(200).json(docs);
     } })
    
 }