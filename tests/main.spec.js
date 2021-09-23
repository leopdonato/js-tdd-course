import { expect } from 'chai';
import { sum, sub, mult, div, FizzBuzz } from '../src/main';

// var expect = require('chai').expect;
// var calc = require('../src/main.js');

describe('FizzBuzz', () => {
  /*
    Desafio FizzBuzz

    Escreva uma lib que receba um número e:

    Se o número for divisível por 3, no lugar do número escreva "Fizz"
    Se o número for divisível por 5, no lugar do número escreva "Buzz"
    Se o número for divisível por 3 e 5, no lugar do número escreva "FizzBuzz"
    Se não for múltiplo de nada, retorna o número
   */

    it('should return `Fizz` when multiple of 3', () => {
      expect(FizzBuzz(3)).to.be.equal('Fizz');
      expect(FizzBuzz(6)).to.be.equal('Fizz');
    })

    it('should return `Buzz` when multiple of 5', () => {
      expect(FizzBuzz(5)).to.be.equal('Buzz');
      expect(FizzBuzz(10)).to.be.equal('Buzz');
    })

    it('should return `FizzBuzz` when multiple of 3 and 5', () => {
      expect(FizzBuzz(15)).to.be.equal('FizzBuzz');
    })

    it('should return the number when non-multiple', () => {
      expect(FizzBuzz(7)).to.be.equal(7);
    })

    it('should return 0 when 0', () => {
      expect(FizzBuzz(0)).to.be.equal(0);
    })
})

describe('Calc', () => {
  // smoke tests
  describe('Smoke tests', () => {

    it('should exist the method `sum`', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    })

    it('should exist the method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    })

    it('should exist the method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    })

    it('should exist the method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    })

  })

  describe('Sum', () => {
    it('should return 4 when `sum(2,2)`', function() {
      expect(sum(2,2)).to.be.equal(4);
    })
  })

  describe('Sum', () => {
    it('should return 4 when `sub(6,2)`', function() {
      expect(sub(6,2)).to.be.equal(4);
    })

    it('should return -4 when `sub(6,10)`', function() {
      expect(sub(6,10)).to.be.equal(-4);
    })
  })

  describe('Mult', () => {
    it('should return 4 when `mult(2,2)`', function() {
      expect(mult(2,2)).to.be.equal(4);
    })
  })

  describe('Div', () => {
    it('should return 2 when `div(4,2)`', function() {
      expect(div(4,2)).to.be.equal(2);
    })

    it('should return `não é possível divisão por zero!` when divide by 0', function() {
      expect(div(4,0)).to.be.equal('não é possível divisão por zero!');
    })
  })
});
