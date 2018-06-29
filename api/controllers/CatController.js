/**
 * CatController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const passport = require('passport');
module.exports = {

    // addhobbies:  async (req, res) => {

    //     console.log("Here Add");        
    //               try {var me = await Hobbies.create({

    //         //   username: req.body.username,

    //           userid : req.body.userid,

    //           hobby: req.body.hobby

    //     });

    //   }catch(error){

    //       return res.send({

    //           success: false,

    //           status: "Error could not add "

    //         });

    //   }        return res.send({

    //       success: true,

    //       status: "Added"

    //     });   



    
    // },

    addhobbies:function(req, res){
       data = {

    
         username:req.body.username,
         userid:req.body.userid,
         title : req.body.title,
         body : req.body.body

        } 

    Hobbies.create(data).exec(function(err,hobbies){

        if(err){
            res.status(err).send({error:'Database Error'});
        }

        res.send(data);

    })

    },



    // deletehobb:  async (req, res) => {

    //     console.log("Here destroy");        
    //               try {var me = await Hobbies.destroy({

    //         //   username: req.body.username,

    //           userid : req.body.userid,

    //           hobby: req.body.hobby

    //     });

    //   }catch(error){

    //       return res.send({

    //           success: false,

    //           status: "Error could not add "

    //         });

    //   }        return res.send({

    //       success: true,

    //       status: "destroy"

    //     });   



    
    // },

    deletehobbies:function(req,res){
        Hobbies.destroy({userid:req.body.userid}).exec(function(err){
            if(err){
                res.send(err,{error:'Database Error'});
            }
            res.send('delete')
        })
    },


    // viewhobbies:  async (req, res) => {

    //     console.log("Here destroy");        
    //               try {var me = await Hobbies.destroy({

    //         //   username: req.body.username,

    //           userid : req.body.userid,

    //           hobby: req.body.hobby

    //     });

    //   }catch(error){

    //       return res.send({

    //           success: false,

    //           status: "Error could not add "

    //         });

    //   }        return res.send({

    //       success: true,

    //       status: "destroy"

    //     });   



    
    // }
 
    viewhobbies:function(req,res){
        var view = Hobbies.find({where:{username:req.body.username}, select:['title','body']}).exec(function(err,hobbies){
            if(err){
                res.send(500,{error:err.message});
            }
            console.log(hobbies);
            return res.json(hobbies);
        });
    }

};

