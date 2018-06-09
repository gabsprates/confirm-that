class Confirm {
  constructor() {
    this.state = Confirm.defaultState;
  }
}

Confirm.defaultState = {
  title: '',
  isOpen: false,
  message: '',
  confirmText: 'Ok',
  onConfirm: () => {},
};

export default Confirm;
