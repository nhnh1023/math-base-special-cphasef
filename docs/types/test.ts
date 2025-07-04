/*
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import Complex64 = require( '@stdlib/complex-float32-ctor' );
import cphasef = require( './index' );


// TESTS //

// The function returns a number...
{
	cphasef( new Complex64( 5.0, 3.0 ) ); // $ExpectType number
}

// The compiler throws an error if the function is not provided a complex number...
{
	cphasef( true ); // $ExpectError
	cphasef( false ); // $ExpectError
	cphasef( null ); // $ExpectError
	cphasef( undefined ); // $ExpectError
	cphasef( '5' ); // $ExpectError
	cphasef( [] ); // $ExpectError
	cphasef( {} ); // $ExpectError
	cphasef( ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided insufficient arguments...
{
	cphasef(); // $ExpectError
}
