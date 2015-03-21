#!/usr/bin/env node
'use strict';

var program = require( 'commander' );
var pkg = require( './package.json' );
var sum = require( './lib/calculatr-sum' );

program.version( pkg.version );

program
  .command( 'sum <number1> <number2>' )
    .description( 'Sum two numbers' )
    .action( sum );

program.parse( process.argv );