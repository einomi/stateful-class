function Stateful(props) {
  this.props = props;
  this.onInit();
  if (typeof module !== 'undefined' &&  module.hot) {
    module.hot.dispose(() => {
      this.onDestroy();
    });
  }
}

Stateful.prototype.setState = function(stateToMerge) {
  const prevState = {
    ...this.state,
  };
  this.state = {
    ...this.state,
    ...stateToMerge,
  };
  this.onStateUpdate(prevState);
};

module.exports = Stateful
