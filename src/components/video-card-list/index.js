import { ref, onMounted } from "vue";

import VideoCard from "../video-card/index.js";

import useOnScrollToBottom from "../../hooks/useOnScrollToBottom.js";

const styles = {
  videoCardList: {
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "10px",
    gridAutoRows: "minmax(100px, auto)",
  },
};

export default {
  components: {
    VideoCard,
  },
  props: {
    fetchData: {
      type: Function,
      default: async () => ({ list: [] }),
    },
    styles: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props) {
    const currentPage = ref(1);
    const pageSize = ref(8);
    const dataList = ref([]);

    const getVideoList = async () => {
      const { list } = await props.fetchData({
        page: currentPage.value,
        pageSize: pageSize.value,
      });
      dataList.value = [...dataList.value, ...list];
      currentPage.value += 1;
      console.log("dataList", dataList.value);
    };

    useOnScrollToBottom(async () => {
      console.log("回调执行");

      await getVideoList();
    });

    onMounted(async () => {
      await getVideoList();
    });

    return {
      styles,
      props,
      dataList,
    };
  },
  template: /*html*/ `
    <div :style="[styles.videoCardList, props.styles]">
      <VideoCard 
        v-for="item in dataList" 
        :key="item.id" 
        :title="item.title" 
        :cover="item.cover" 
        :playCount="item.playCount"
        :commentCount="item.commentCount"
        :duration="item.duration"
        :publishTime="item.publishTime"
        :uploader="item.uploader"
      />
    </div>
  `,
};
