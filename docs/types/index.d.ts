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

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { Complex64 } from '@stdlib/types/complex';

/**
* Computes the argument of a single-precision complex floating-point number in radians.
*
* ## Notes
*
* -   The argument of a complex number, also known as the phase, is the angle of the radius extending from the origin to the complex number plotted in the complex plane and the positive real axis.
*
* @param z - complex number
* @returns argument
*
* @example
* var Complex64 = require( '@stdlib/complex-float32-ctor' );
*
* var phi = cphasef( new Complex64( 5.0, 3.0 ) );
* // returns ~0.5404
*/
declare function cphasef( z: Complex64 ): number;


// EXPORTS //

export = cphasef;
