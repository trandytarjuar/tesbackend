
const produk = require('../model/produkModel');


exports.postDataproduk = (req, res) =>{

    let {nama_produk,harga} = req.body;
    let image  = req.file.path;   
     
        let addproduk = new produk({
            nama_produk : nama_produk,
            harga : harga,
            image       : image
            
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

    let dataHasil = await kategori.find({nama_produk: {$regex: nama_produk, $options: 'i'}});
    res.status(200).json({
    
        status : "success",
        dataLength : dataHasil.length, 
        timestamp : req.requestTime,
        data : dataHasil
        
        });
    
}

exports.updateDataprodukById = async(req, res) =>{

    console.log(req.body)
    await produk.findByIdAndUpdate(req.params.id,req.body,function (err, docs) { 
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


    await nama_produk.findByIdAndDelete(req.params.id,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Deleted produk : ", docs); 
         res.status(200).json(docs);
     } })
    
 }