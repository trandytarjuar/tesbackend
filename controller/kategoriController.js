
const kategori = require('../model/kategoriModel');



exports.postDatakategori = (req, res) =>{

    let {nama_kategori} = req.body;
    
     
        let addkategori = new kategori({
            nama_kategori : nama_kategori
          })
          
       addkategori.save().then (doc => {
       
        res.status(200).send("Berhasil memasukan data " + doc);
       }).catch(err =>{
        res.status(500).send("Gagal Insert Data "+err)
       })
     
       
    }
    
    exports.getAllDatakategori = async(req, res) =>{

   
    let dataHasil = await kategori.find();
    res.status(200).json({
    
    status : "success",
    dataLength : dataHasil.length, 
    timestamp : req.requestTime,
    data : dataHasil
    
    });
}

exports.getAllDatakategoriById = async(req, res) =>{

   
    let nama_kategori = req.params.id;

    let dataHasil = await kategori.find({nama_kategori: {$regex: nama_kategori, $options: 'i'}});
    res.status(200).json({
    
        status : "success",
        dataLength : dataHasil.length, 
        timestamp : req.requestTime,
        data : dataHasil
        
        });
    
}

exports.updateDatakategoriById = async(req, res) =>{

    console.log(req.body)
    await kategori.findByIdAndUpdate(req.params.id,req.body,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Updated kategori : ", docs); 
         res.status(200).json(docs);
     } })
    
 }
 
 exports.deleteDatakategoriById = async(req, res) =>{


    await kategori.findByIdAndDelete(req.params.id,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Deleted kategori : ", docs); 
         res.status(200).json(docs);
     } })
    
 }