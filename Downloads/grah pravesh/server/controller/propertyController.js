const PropertyModel =require("../model/Property")
 const addProperty = async (req,res)=>{
      const propertyAddData = await PropertyModel.create({...req.body,host: req.user.UserId,images: req.files.map((file) => file.filename)})
      res.json(propertyAddData)
 }
 const getProperty = async (req,res)=>{
    
    const findData =  await  PropertyModel.find({
        host : req.user.UserId
      })
      res.json(findData)
 }
 const getPropertyDetails =  async(req,res)=>{
      const {id} = await req.params
   const propertyData = await   PropertyModel.findById(id)
   res.json(propertyData)

 }
 const deleteproperty = async (req,res)=>{
       const {id} = await req.params
          const deleteprodata = await   PropertyModel.findOneAndDelete(id)
          res.json(deleteprodata)
 }
 const propertyupdate = async(req,res)=>{
       const {id} = await req.params
     const propertyupdateData = await  PropertyModel.findByIdAndUpdate(id,req.body,{returnDocument:true})
     res.json(propertyupdateData)
 }
 module.exports = {addProperty,getProperty,getPropertyDetails,deleteproperty,propertyupdate}