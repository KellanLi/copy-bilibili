const styles = {
  customHeader: {
    position: "relative",
  },
  bgImg: {
    width: "100%",
  },
};

export default {
  name: "CustomHeader",
  setup() {
    return {
      styles,
    };
  },
  template: /*html*/ `
    <div :style="styles.customHeader">
      <img src="/src/assets/header-bg.png" :style="styles.bgImg" />
    </div>
  `,
};
