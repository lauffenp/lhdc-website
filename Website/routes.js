var express = require("express");

var router = express.Router();

router.get("/", function(req, res, next) {
    res.render("index", {
    page: req.url,
    nav: {
        'index': "/"
    }
  });
});


router.get("/aboutUs", function(req, res, next) {
    res.render("aboutUs", {
    page: req.url,
    nav: {
        'aboutUs':"/aboutUs"
    }
  });
});


router.get("/Actuators", function(req, res, next) {
    res.render("Actuators", {
    page: req.url,
    nav: {
      'Actuators': '/Actuators'
    }
  });
});


router.get("/AMISO", function(req, res, next) {
    res.render("AMISO", {
    page: req.url,
    nav: {
      'AMISO': '/AMISO'
    }
  });
});


router.get("/contactUs", function(req, res, next) {
    res.render("contactUs", {
    page: req.url,
    nav: {
        'contactUs':"/contactUs"
    }
  });
});


router.get("/elex", function(req, res, next) {
    res.render("elex", {
    page: req.url,
    nav: {
        'elex':"/elex"
    }
  });
});


router.get("/FSM/:name", function(req, res, next) {
    res.render("FSM",
               {
    page: req.path,
    nav: {
      'FSM': "/FSM/general"
    }
  });
});



router.get("/heritage", function(req, res, next) {
    res.render("heritage", {
    page: req.url,
    nav: {
        'heritage':"/heritage"
    }
  });
});

router.get("/heritage", function(req, res, next) {
    res.render("heritage", {
    page: req.url,
    nav: {
        'heritage':"/heritage"
    }
  });
});

router.get('/photo/:id', function(req,res,next){
    res.render('photo',{
        photoId : req.params.id,
        page:req.url,
        nav: {
        'photo':"photoId"
    }
    }
              )
})

router.get('/gallery', function(req,res,next){
    res.render('gallery',{
        page: req.url,
        nav: {
        'gallery':'gallery'
    }
    })
})


router.get('/*', function(req,res){
    res.send("Ain't nothing here bucko")
})

module.exports=router;