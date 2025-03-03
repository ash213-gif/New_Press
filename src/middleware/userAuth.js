
const { validfullName, validemail, validpaswword } = require('../validation/validation')
exports.UserAuth = (req, res, next) => {
    try {

        const data = req.body;
        const img = req.file;

        const { name, email, password } = data

        if (!name) { res.status(400).send('please provide name ') }
        if (!validfullName(name)) { res.status(400).send('please provide valid name ') }

        if (!email) { res.status(400).send('please provide email ') }
        if (!validemail(email)) { res.status(400).send('please provide valid email ') }

        if (!password) { res.status(400).send('please provide password ') }
        if (!validpaswword(password)) { res.status(400).send('please provide valid password ') }

        next()
    } catch (e) { return res.status(400).send({ status: false, msg: e.message }) }

}