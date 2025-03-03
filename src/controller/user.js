const userData = require('../module/schema')

exports.userCreated = async (req, res) => {

    try {

        const data = req.body;
        const img=req.file;
        
        console.log(img);
        if(img){
            data.UserImg=img.path
        }

        const newdata = await userData.create(data)
        res.status(201).send(newdata)


    } catch (e) { return res.status(400).send({ status: false, msg: e.message }) }

}