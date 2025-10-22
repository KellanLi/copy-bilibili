import CustomHeader from "./part/custom-header/index.js";
import Recommend from "./part/recommend/index.js";
import VideoCardContainer from "./part/video-card-container/index.js";

export default {
  components: {
    CustomHeader,
    Recommend,
    VideoCardContainer,
  },
  setup() {
    return {};
  },
  template: /*html*/ `
    <div>
      <custom-header />
      <recommend />
      <video-card-container />
    </div>
  `,
};
