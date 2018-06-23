class Confirm {
  constructor() {
    this.state = Confirm.defaultState;
    this.DOM = document.createElement('div');
    document.body.appendChild(this.DOM);
  }

  /**
   * @param {{ title: string, message: string }} obj
   */
  setContent({ title, message }) {
    this.state.title = title;
    this.state.message = message;
  }

  render() {
    const template = Confirm.template();
    template.title.innerHTML = this.state.title;
    template.msg.innerHTML = this.state.message;

    console.log(template.box.outerHTML);
  }

  static template() {
    const box = document.createElement('div');
    const title = document.createElement('h1');
    const msg = document.createElement('div');
    const btns = document.createElement('div');
    const btnOk = document.createElement('button');
    const btnCancel = document.createElement('button');

    box.className = 'cfrm';
    msg.className = 'cfrm-msg';
    btns.className = 'cfrm-btns';
    btnOk.className = 'cfrm-btns-ok';
    btnCancel.className = 'cfrm-btns-cancel';

    btnOk.innerHTML = 'OK';
    btnCancel.innerHTML = 'Cancel';

    box.appendChild(title);
    box.appendChild(msg);
    box.appendChild(btns);
    btns.appendChild(btnCancel);
    btns.appendChild(btnOk);

    return {
      box, title, msg, btns, btnOk, btnCancel,
    };
  }
}

Confirm.defaultState = {
  title: '',
  isOpen: false,
  message: '',
  onConfirm: () => { },
};

export default Confirm;
