export const loader = {
  element() {
    return document.getElementById('loader');
  },
  show() {
    this.element().classList.add('_active');
  },
  hide(data) {
    this.element().classList.remove('_active');
  },
};

export default loader;
