import Confirm from '../src/Confirm';

describe('Confirm', () => {
  it('must to be a function', () => {
    expect(Confirm).toBeInstanceOf(Function);
  });

  it('must to have the default state', () => {
    const confirm = new Confirm();
    expect(confirm.state).toBe(Confirm.defaultState);
  });
});
