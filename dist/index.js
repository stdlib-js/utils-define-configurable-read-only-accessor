/** @license Apache-2.0 */

'use strict';

/**
* Define a configurable read-only accessor.
*
* @module @stdlib/utils-define-configurable-read-only-accessor
*
* @example
* var setConfigurableReadOnlyAccessor = require( '@stdlib/utils-define-configurable-read-only-accessor' );
*
* function getter() {
*     return 'bar';
* }
*
* var obj = {};
*
* setConfigurableReadOnlyAccessor( obj, 'foo', getter );
*
* try {
*     obj.foo = 'boop';
* } catch ( err ) {
*     console.error( err.message );
* }
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
