import Header from "./part/header/index.js";
import Recommend from "./part/recommend/index.js";
import VideoCardList from "./part/video-card-list/index.js";

export default {
  components: {
    Header,
    Recommend,
    VideoCardList,
  },
  setup() {
    return {};
  },
  template: /*html*/ `
    <div>
      <Header />
      <Recommend />
      <VideoCardList />
    </div>
  `,
};
