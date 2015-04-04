#!/usr/bin/env node
'use strict';

var program = require( 'commander' );
var pkg = require( './package.json' );
var calc = require( './lib/calc' );

program.version( pkg.version );

program
  .command( 'calc <number1> <operator> <number2>' )
    .description( 'Sum two numbers' )
    .action( calc );

program.parse( process.argv );