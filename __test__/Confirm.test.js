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

    it('musto to give the right template', () => {
      expect(Confirm.template().box.outerHTML).toBe('<div class="cfrm"><h1></h1><div class="cfrm-msg"></div><div class="cfrm-btns"><button class="cfrm-btns-cancel"></button><button class="cfrm-btns-ok"></button></div></div>');
    });
  });

  describe('inserting content to be displayed', () => {
    let confirm;

    beforeEach(() => {
      confirm = new Confirm();
    });

    it('must to set the right content', () => {
      confirm.setContent({
        title: 'Are you sure?',
        message: "It's impossible to undo this.",
      });

      expect(confirm.state.title).toBe('Are you sure?');
      expect(confirm.state.message).toBe("It's impossible to undo this.");
    });

    it('must to render with the given content', () => {
      confirm.setContent({
        title: 'Are you sure again?',
        message: "It's impossible to undo this... I already said that.",
      });

      confirm.render();
      const html = '<div><div class="cfrm"><h1>Are you sure again?</h1><div class="cfrm-msg">It\'s impossible to undo this...I already said that.</div><div class="cfrm-btns"><button class="cfrm-btns-cancel">Cancel</button><button class="cfrm-btns-ok">OK</button></div></div></div>';
      expect(document.body.firstChild.outerHTML).toBe(html);
    });
  });
});
