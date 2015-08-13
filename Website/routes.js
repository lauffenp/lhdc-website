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


router.get("/FSM", function(req, res, next) {
    res.render("FSM", {
    page: req.url,
    nav: {
      'FSM': "/FSM"
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


module.exports=router;