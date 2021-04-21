let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let Tasks = require("../models/todo.model");

let newTask = {
    description: "task added using create",
};

router.route('/create').post((req, res, next) => {
    Tasks.create(newTask)
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    // user.create(req.body, (error, data) => {
    //     if (error) {
    //         return next(error)
    //     } else {
    //         console.log(data)
    //         res.json(data)
    //     }
    // })
});

router.route('/').get((req, res, next) => {
    Tasks.find({})
        .then((data) => {
            console.log("All tasks", data);
        })
        .catch((err) => {
            console.log(err);
        });

        Tasks.find({ completed: false })
            .then((data) => {
                console.log("All tasks", data);
            })
            .catch((err) => {
                console.log(err);
            });
    // user.find((error, data) => {
    //     if (error) {
    //         return next(error)
    //     } else {
    //         res.json(data)
    //     }
    // })
})

router.route('/edit/:id').get((req, res, next) => {
    Tasks.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route('/update/:id').put((req, res, next) => {
    Tasks.findByIdAndUpdate({ _id: req.params.id },{
            $set: {completed:true},
          },
          { new: true, useFindAndModify: false } //get updated result
       )
       .then((data) => {
         console.log("Updated todo data", data);
       })
       .catch((err) => {
         console.log(err);
       });
    // user.findByIdAndUpdate(req.params.id, {
    //     $set: req.body
    // }, (error, data) => {
    //     if (error) {
    //         return next(error);
    //         console.log(error)
    //     } else {
    //         res.json(data)
    //         console.log('User updated successfully !')
    //     }
    // })
})

router.route('/delete/:id').delete((req, res, next) => {
    Tasks.findByIdAndRemove(task_id)
       .then((data) => {
         console.log("All tasks", data);
       })
       .catch((err) => {
         console.log(err);
       });
    // user.findByIdAndRemove(req.params.id, (error, data) => {
    //     if (error) {
    //         return next(error);
    //     } else {
    //         res.status(200).json({
    //             msg: data
    //         })
    //     }
    // })
})

module.exports = router;