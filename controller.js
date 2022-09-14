const exp = require('express')
const router = exp.Router() 
const s2 = require('../model/model')

//Get method
router.get('/',async(req,res)=>{
try{
    const a = await s2.find()
    res.json(a)
}catch(err){
    res.send("Error:"+err)
}
}) 

//Get method to retrieve using id
router.get('/:id',async(req,res)=>{
    try{
        const a = await s2.findById(req.params.id)
        res.json(a)
    }catch(err){
        res.send("Error:"+err)
    }
    })


//patch method to retrieve using id
router.patch('/:id',async(req,res)=>{
    try{
        const a = await s2.findById(req.params.id)
        a.tech=req.body.tech            //to change the parameter
        const a1=a.save()
        res.json(a1)
    }catch(err){
        res.send("Error:"+err)
    }
    })


//post method
router.post('/',async(req,res)=>{
const x=new s2(
    {
        name:req.body.name,
        tech:req.body.tech,
        section:req.body.section
    })
    try{
    const x1= await x.save()
    res.json(x1)
    }catch(err){
        res.send("Error:"+err)
    }
})              //postman acts as client for now as their is no front end yet




module.exports = router 