import Header from "./part/header/index.js";
import Recommend from "./part/recommend/index.js";
import VideoCardContainer from "./part/video-card-container/index.js";

export default {
  components: {
    Header,
    Recommend,
    VideoCardContainer,
  },
  setup() {
    return {};
  },
  template: /*html*/ `
    <div>
      <Header />
      <Recommend />
      <VideoCardContainer />
    </div>
  `,
};
