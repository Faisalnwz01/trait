'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');


var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);
router.post('/update', controller.update) 
// router.get('/publish', controller.publish)
router.post('/getWatson', controller.makeWatson);



// var traitObj = {Key: 'content', 
// 				Value: 'Noplo Affiliates LLC. Co-Founder/ Partner  Created a website with software that provids people with the tools and resources needed to become affiliate marketers. Product enables users to build an email list, and market products through that list. Responsibilities included: Market research, Product development, Lead generation, Back-end monetization, Front-end sales optimization, Email Marketing, Split testing, Video Production, Website mockups, HTML and CSS adjustments, and various administrational duties.  Dream Marketing LLC. Co-Founder/Partner  Created an online membership product with software that provided users with the tools and resources needed to become affiliate marketers. Product generates users a website with rotating content and advertisements and enables them to drive traffic to it. Responsibilities included: Market research, Product development, Customer Service Manager, Affiliate Manager, Lead generation, Back-end monetization, Front-end sales optimization, Email Marketing, Copywriting editing, Split testing, Video Production, various administrational duties.  DPT Laboratories Compounder and Gown Qualified Operator  Responsible for executing and documenting standard operating procedures for production of sterile pharmaceutical product batches worth up to one million dollars Responsible for performing pre and post integrity testing of product machinery according to Good Manufacturing Practice Requirements Gown qualified, trained in respiratory protection and aseptic behavior to work in the highest-rank sterile rooms  Friend Group Marketing LLC Customer Service Director' }

// $http.post('http://watson-um-demo.mybluemix.net/', traitObj).success(function(data){
// 				console.log(data)
// 			})




module.exports = router;
