const userModel = require("../db/models/user.model")
class User{
    static add = async(req, res)=>{
        try{
            const user = new userModel(req.body)
            await user.save()
            res.status(200).send({
                apiStatus:true,
                data:user,
                message:"user added"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in register"
            })
        }
    }
    static show = async(req, res)=>{
        try{
            const users = await userModel.find().sort({email:1})
            res.status(200).send({
                apiStatus:true,
                data:users,
                message:"user fetched"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in fetched"
            })
        }
    }
    static showsingle = async (req, res) => {
        const id=req.params.id
        try{
            const user = await userModel.findById( id )
            res.status(200).send({
                apiStatus:true,
                data:user,
                message:"user found"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in showsingle"
            })
        }
    }
    static login = async (req, res) => {
        const id=req.params.id
        try{
            const user = await userModel.loginUser(req.body.email, req.body.password)
            const token =await user.generateToken()
            res.status(200).send({
                apiStatus:true,
                data: { user, token },
                message:"user found"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in showsingle"
            })
        }
    }
    static loginAdmin = async (res, req) => {
        try {
            const user = await userModel.loginDashboard(req.body.email, req.body.password, "admin")
            const token = await user.generateToken()
            res.status(200).send({
                apiStatus: true,
                data: { user, token },
                message: "logged in"
            })
        }
        catch (e) {
            res.status(500).send({
                apiStatus: false,
                errors: e.message,
                message: "error in admin"
            })
        }

    }
    static logout = async (req, res) => {
        
        try{
            req.user.tokens = req.user.tokens.filter(t => {
              return t.token!=req.token
            })
                 await req.user.save()
            res.status(200).send({
                apiStatus:true,
                data: "",
                message:"loged out"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in logout"
            })
        }
    }
    static logoutAll = async (req, res) => {
        
        try{
            req.user.tokens = []
            await req.user.save()
            res.status(200).send({
                apiStatus:true,
                data: { user, token },
                message:"loged out"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                errors:e.message,
                message:"error in logout"
            })
        }
    }
}

module.exports = User