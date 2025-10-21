import { getVideoList } from "../../apis/index.js";

import VideoCardList from "../../components/video-card-list/index.js";

export default {
  name: "VideoCardContainer",
  components: {
    VideoCardList,
  },
  setup() {
    const fetchData = async ({ page, pageSize }) => {
      const { code, data } = await getVideoList({ page, pageSize });

      if (code !== 0) {
        return {
          list: [],
        };
      }

      return {
        list: data.list,
      };
    };

    return {
      fetchData,
    };
  },
  template: /*html*/ `
    <div class="video-card-container">
      <video-card-list :fetchData="fetchData" />
    </div>
  `,
};
