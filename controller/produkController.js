
const produk = require('../model/produkModel');


exports.postDataproduk = (req, res) =>{

    let {nama_produk,harga,kode_produk} = req.body;
    let image  = req.file.path;   
     console.log(image)
        let addproduk = new produk({
            nama_produk : nama_produk,
            harga : harga,
            kode_produk: kode_produk,
            foto_produk       : image
            
          })
          
          
          
       addproduk.save().then (doc => {
       
        res.status(200).send("Berhasil memasukan data " + doc);
       }).catch(err =>{
        res.status(500).send("Gagal Insert Data "+err)
       })
     
       
    }
    
    exports.getAllDataproduk = async(req, res) =>{

   
    let dataHasil = await produk.find();
    res.status(200).json({
    
    status : "success",
    dataLength : dataHasil.length, 
    timestamp : req.requestTime,
    data : dataHasil
    
    });
}

exports.getAllDataprodukById = async(req, res) =>{

   
    let nama_produk = req.params.id;

    let dataHasil = await produk.find({nama_produk: {$regex: nama_produk, $options: 'i'}});
    res.status(200).json({
    
        status : "success",
        dataLength : dataHasil.length, 
        timestamp : req.requestTime,
        data : dataHasil
        
        });
    
}

exports.updateDataprodukById = async(req, res) =>{

    console.log(req.body)
    let {nama_produk,harga,kode_produk} = req.body;
    let image  = req.file.path;   
     
        let body = {
            nama_produk : nama_produk,
            harga : harga,
            kode_produk : kode_produk,
            foto_produk       : image
            
          }
    await produk.findByIdAndUpdate(req.params.id, body,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Updated produk : ", docs); 
         res.status(200).json(docs);
     } })
    
 }
 
 exports.deleteDataprodukById = async(req, res) =>{


    await produk.findByIdAndDelete(req.params.id,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Deleted produk : ", docs); 
         res.status(200).json(docs);
     } })
    
 }