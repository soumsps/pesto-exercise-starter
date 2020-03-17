import { booleanExpressionEvaluator } from './booleanExpressionEvaluator';

describe('booleanExpressionEvaluator', () => {
  it('return the evaulated result', () => {
    // simple expressions
    expect(booleanExpressionEvaluator('!true')).toEqual(false);
    expect(booleanExpressionEvaluator('!false')).toEqual(true);
    expect(booleanExpressionEvaluator('false & true')).toEqual(false);
    expect(booleanExpressionEvaluator('false & false')).toEqual(false);
    expect(booleanExpressionEvaluator('true & true')).toEqual(true);
    expect(booleanExpressionEvaluator('true | true')).toEqual(true);
    expect(booleanExpressionEvaluator('true | false')).toEqual(true);
    expect(booleanExpressionEvaluator('false | false')).toEqual(false);
    expect(booleanExpressionEvaluator('true ^ true')).toEqual(false);
    expect(booleanExpressionEvaluator('false ^ false')).toEqual(false);

    // complex expressions
    expect(booleanExpressionEvaluator('true & false | true')).toEqual(true);
    expect(booleanExpressionEvaluator('true & !false')).toEqual(true);
    expect(booleanExpressionEvaluator('false ^ true')).toEqual(true);
    expect(booleanExpressionEvaluator('false ^ true | false')).toEqual(true);
    expect(booleanExpressionEvaluator('true ^ true | false')).toEqual(false);
  });

  it('throws error when expression contains parameters other than true or false', () => {
    expect(() => booleanExpressionEvaluator('!(abc)')).toThrow();
    expect(() => booleanExpressionEvaluator('true & abc')).toThrow();
    expect(() => booleanExpressionEvaluator('true & abc | false')).toThrow();
    expect(() => booleanExpressionEvaluator('abc & abc | abc')).toThrow();
  });

  it('throws error when expression contains parameters other than & or | or ^', () => {
    expect(() => booleanExpressionEvaluator('~(true)')).toThrow();
    expect(() => booleanExpressionEvaluator('true && abc')).toThrow();
    expect(() => booleanExpressionEvaluator('true || false')).toThrow();
    expect(() => booleanExpressionEvaluator('true * false')).toThrow();
  });

  it('throws error when expression is not string', () => {
    expect(() => booleanExpressionEvaluator(12)).toThrow();
    expect(() => booleanExpressionEvaluator([])).toThrow();
    expect(() => booleanExpressionEvaluator({})).toThrow();
    expect(() => booleanExpressionEvaluator(NaN)).toThrow();
    expect(() => booleanExpressionEvaluator(null)).toThrow();
    expect(() => booleanExpressionEvaluator()).toThrow();
  });
});
