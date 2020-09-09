const core           = require( '../core.js' ).default,
	  class_func     = require( './class.js' ).default,
	  effects        = require( './effects.js' ).default;
core.fn.css          = require( './css.js' ).default;
core.fn.addClass     = class_func.addClass;
core.fn.hasClass     = class_func.hasClass;
core.fn.toggleClass  = class_func.toggleClass;
core.fn.removeClass  = class_func.removeClass;
core.fn.replaceClass = class_func.replaceClass;
core.fn.show         = effects.show;
core.fn.hide         = effects.hide;
