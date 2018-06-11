import Confirm from '../src/Confirm';

describe('Confirm', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  it('must to be a function', () => {
    expect(Confirm).toBeInstanceOf(Function);
  });

  describe('creating a new Confirm', () => {
    let confirm;

    beforeEach(() => {
      confirm = new Confirm();
    });

    it('must to construct an instance of Confirm', () => {
      expect(confirm).toBeInstanceOf(Confirm);
    });

    it('must to have the default state', () => {
      expect(confirm.state).toBe(Confirm.defaultState);
    });

    it('must to append this.DOM on document.body', () => {
      expect(document.body.firstChild).toBe(confirm.DOM);
    });
  });

  it('musto to give the right remplate', () => {
    expect(Confirm.template().box.outerHTML).toBe('<div class="cfrm"><h1></h1><div class="cfrm-msg"></div><div class="cfrm-btns"><button class="cfrm-btns-cancel"></button><button class="cfrm-btns-ok"></button></div></div>');
  });
});
