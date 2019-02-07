mocha.setup('bdd')

describe('#promiseA', function() {
  it('should resolve to 42', function() {
    return promiseA().then(function(value) {
      chai.assert.equal(value, 42)
    })
  })
})

describe('#promiseB', function() {
  it('should resolve to fizzbuzz', function() {
    return promiseB().then(function(value) {
      chai.assert.equal(value, 'fizzbuzz')
    })
  })
})

describe('#promiseC', function() {
  it('should resolve to whatever value that is passed in', function() {
    return promiseC('foobar').then(function(value) {
      chai.assert.equal(value, 'foobar')
    })
  })
  it('should resolve to whatever value that is passed in', function() {
    return promiseC('42').then(function(value) {
      chai.assert.equal(value, '42')
    })
  })
})

describe('#promiseD', function(){
  it('should resolve to the argument in all-caps', function(){
    return promiseD('fizz').then(function(value){
      chai.assert.equal(value, 'FIZZ')
    })
  })
  it('should resolve to the argument in all-caps', function(){
    return promiseD('far').then(function(value){
      chai.assert.equal(value, 'FAR')
    })
  })
})

describe('#promiseE', function(){
  it('should take 2 strings convert the first string to all caps and concat them with one space char between them', function(){
    return promiseE('fizz', 'buzz').then(function(value){
      chai.assert.equal(value, 'FIZZ buzz')
    })
  })
  it('should take 2 strings convert the first string to all caps and concat them with one space char between them', function(){
    return promiseE('wham', 'bam').then(function(value){
      chai.assert.equal(value, 'WHAM bam')
    })
  })
  it('should take 2 strings convert the first string to all caps and concat them with one space char between them', function(){
    return promiseE('foo', 'bar').then(function(value){
      chai.assert.equal(value, 'FOO bar')
    })
  })

})

describe('#promiseAdd', function() {
  it('should resolve to the 2 arguments added together', function() {
    return promiseAdd(12, 3).then(function(value) {
      chai.assert.equal(value, 15)
    })
  })
  it('should resolve to the 2 arguments added together', function() {
    return promiseAdd(19, 1).then(function(value) {
      chai.assert.equal(value, 20)
    })
  })
})

describe('#promiseF', function() {
  it('should resolve to 75 if the argument passed in is true, otherwise return 99', function() {
    return promiseF(true).then(function(value) {
      chai.assert.equal(value, 75)
    })
  })
  it('should resolve to 75 if the argument passed in is true, otherwise return 99', function() {
    return promiseF(false).then(function(value) {
      chai.assert.equal(value, 99)
    })
  })
})

describe('#promiseTwice', function() {
  it('should resolve to the argument multiplied by 2', function() {
    return promiseTwice(5).then(function(value) {
      chai.assert.equal(value, 10)
    })
  })
  it('should resolve to the argument multiplied by 2', function() {
    return promiseTwice(3).then(function(value) {
      chai.assert.equal(value, 6)
    })
  })
})

describe('#promiseF composed with promiseTwice', function() {
  it('return 150 if initial value is true', function() {
    return promiseF(true)
      .then(function(value) {
        return promiseTwice(value)
      })
      .then(function(value) {
        chai.assert.equal(value, 150)
      })
  })
  it('return 198 if initial value is false', function() {
    return promiseF(false)
      .then(function(value) {
        return promiseTwice(value)
      })
      .then(function(value) {
        chai.assert.equal(value, 198)
      })
  })
})

mocha.run()
