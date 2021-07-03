import { rot13 } from './rot13';

describe('rot13', () => {
  test('should correctly decipher the input', () => {
    expect(rot13('SERR PBQR PNZC')).toEqual('FREE CODE CAMP');
    expect(rot13('SERR CVMMN!')).toEqual('FREE PIZZA!');
    expect(rot13('SERR YBIR?')).toEqual('FREE LOVE?');
    expect(rot13('GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.')).toEqual('THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.');
  });
});
