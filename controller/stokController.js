
const stok = require('../model/stokModel');



exports.postDatastok = (req, res) =>{

    let {jumlah_barang} = req.body;
    
     
        let addstok = new stok({
            jumlah_barang : jumlah_barang
          })
          
       addstok.save().then (doc => {
       
        res.status(200).send("Berhasil memasukan data " + doc);
       }).catch(err =>{
        res.status(500).send("Gagal Insert Data "+err)
       })
     
       
    }
    
    exports.getAllDatastok = async(req, res) =>{

   
    let dataHasil = await stok.find();
    res.status(200).json({
    
    status : "success",
    dataLength : dataHasil.length, 
    timestamp : req.requestTime,
    data : dataHasil
    
    });
}

// exports.getAllDatakategoriById = async(req, res) =>{

   
//     let nama_kategori = req.params.id;

//     let dataHasil = await kategori.find({nama_kategori: {$regex: nama_kategori, $options: 'i'}});
//     res.status(200).json({
    
//         status : "success",
//         dataLength : dataHasil.length, 
//         timestamp : req.requestTime,
//         data : dataHasil
        
//         });
    
// }

exports.updateDatastokById = async(req, res) =>{

    console.log(req.body)
    await stok.findByIdAndUpdate(req.params.id,req.body,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Updated stok : ", docs); 
         res.status(200).json(docs);
     } })
    
 }
 
 exports.deleteDatastokById = async(req, res) =>{


    await stok.findByIdAndDelete(req.params.id,function (err, docs) { 
     if (err){ 
         console.log(err) 
         res.status(400).json(err);
     } 
     else{ 
         console.log("Deleted stok : ", docs); 
         res.status(200).json(docs);
     } })
    
 }