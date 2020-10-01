import { fn } from "../setup";
import cssMaps from "../core/vars/cssMaps";
import { access, handleObjectDataLoop } from "../helper";
import { isString } from "@varunsridharan/js-is";

fn.prop = function( prop, value ) {
	if( !prop ) {
		return;
	}

	if( isString( prop ) ) {
		prop = cssMaps[ prop ] || prop;
		if( arguments.length < 2 ) {
			return this[ 0 ] && this[ 0 ][ prop ];
		}
		return this.each( ( i, ele ) => {
			ele[ prop ] = access( value, i, ele );
		} );
	}
	handleObjectDataLoop.call( this, prop, 'prop' );
	return this;
};
