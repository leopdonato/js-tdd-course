var expect = require('chai').expect;

describe('Main', function () {
  // describe('Method A', function() {
  //   context('Case 1', function () {
  //     it('should happen test', function() {
  //       // resultado esperado
  //       //Entrada de dados / método sum(2,2)
  //       //Espera retornar (4) => true | (3) => false => broken test
  //       throw new Error('just an error')
  //     })
  //   });

  //   context.only('Case 2', function () {
  //     it('should happen test', function() {
  //       // resultado esperado
  //       //Entrada de dados / método sum(2,2)
  //       //Espera retornar (4) => true | (3) => false => broken test
  //     })

  //     it.skip('should happen test 2', function() {
  //       // resultado esperado
  //       //Entrada de dados / método sum(2,2)
  //       //Espera retornar (4) => true | (3) => false => broken test
  //     })
  //   })
  // });

  // describe('Method B', function() {

  // });

  var arr;

  // roda uma vez, antes do bloco
  before(function () {
    //inicia conexao com banco
    // criar um conjunto de dados
  })

  //roda uma vez, depois do bloco
  after(function () {
    // fecha conexão com banco
    // apagar o conjunto de dados
  })

  //roda todas as vezes vez, antes de CADA bloco
  beforeEach(function () {
    arr = [1, 2, 3];
  })

  //roda todas as vezes vez, depois de CADA bloco
  afterEach(function () {

  })

  // testar tipos ou se existe (smoke test)
  it('should be an array', function () {
    expect(arr).to.be.an('array');
  })

  it('should have a size of 4 when push another value to the array', function () {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  })

  it('should have a size of 2 when pop a value from the array', function () {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  })

  it ('should return true when pop 3 from the array', function () {
    expect(arr.pop() === 3).to.be.true;
  })

  it('should remove the value 3 when use pop in the array', function () {
    arr.pop();
    expect(arr).to.not.include(3)
  })
});
