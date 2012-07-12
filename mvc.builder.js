/* build this using wrapup (npm install wrapup [.-g]): */
/* wrup --require ./mvc.builder -c > mvc.js */

var View = require('./../realmvc/view'),
	Model = require('./../realmvc/model'),
	Controller = require('./../realmvc/controller');

global.View = View;
global.Model = Model;
global.Controller = Controller;
