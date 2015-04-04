'use strict';

var exec = require( 'child_process' ).exec;
var pkg = require( '../package.json' );
var calculatr = './calculatr.js';
require( 'should' );

describe( 'Calculatr', function() {
  it( 'Should return version of calculatr', function( done ) {
    exec( calculatr + ' --version', function( err, stdout, stderr ) {
      if( err ) throw err;
      stdout.replace( '\n', '' ).should.be.equal( pkg.version );
      done();
    });
  });

  it( 'Command "calculatr calc 10 + 5" Should return 15', function( done ) {
    exec( calculatr + ' calc 10 + 5', function( err, stdout, stderr ) {
      if( err ) throw err;
      Number( stdout ).should.be.equal( 15 );
      done();
    });
  });

  it( 'Command "calculatr calc 10 - 5" Should return 5', function( done ) {
    exec( calculatr + ' calc 10 - 5', function( err, stdout, stderr ) {
      if( err ) throw err;
      Number( stdout ).should.be.equal( 5 );
      done();
    });
  });

  it( 'Command "calculatr calc 10 * 5" Should return 50', function( done ) {
    exec( calculatr + ' calc 10 * 5', function( err, stdout, stderr ) {
      if( err ) throw err;
      Number( stdout ).should.be.equal( 50 );
      done();
    });
  });

  it( 'Command "calculatr calc 10 / 5" Should return 2', function( done ) {
    exec( calculatr + ' calc 10 / 5', function( err, stdout, stderr ) {
      if( err ) throw err;
      Number( stdout ).should.be.equal( 2 );
      done();
    });
  });

});