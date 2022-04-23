let clientWidth = 0;
window.onresize = function () {
  clientWidth = document.body.clientWidth;
  changeState();
};
const changeState = (showMenu) => {
  if (clientWidth > 500) {
    showMenu = false;
  }
};

export { changeState };
