import { ref, computed, onMounted } from "vue";
import useOnScrollToBottom from "../../hooks/useOnScrollToBottom.js";
import { getVideoList, getChannelList } from "../../apis/index.js";
import VideoCard from "../../components/video-card/index.js";
import PartitionCard from "../../components/partition-card/index.js";

const styles = {
  videoCardContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridGap: "20px",
  },
};

export default {
  name: "VideoCardContainer",
  components: {
    VideoCard,
    PartitionCard,
  },
  setup() {
    const lineCount = ref(5);
    const videoList = ref([]);
    const channelList = ref([]);
    const itemList = computed(() => {
      const res = [];
      let i = 0;
      let j = 0;
      while (i < videoList.value.length && j < channelList.value.length) {
        for (let k = 0; k < lineCount.value - 1; k++) {
          res.push({ ...videoList.value[i], is: VideoCard });
          i++;
        }
        res.push({ ...channelList.value[j], is: PartitionCard });
        j++;
      }
      console.log("itemList", res);

      return res;
    });

    const videoPage = ref(1);
    const channelPage = ref(1);

    const fetchVideoData = async ({ page, pageSize }) => {
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

    const fetchPartitionData = async ({ page, pageSize }) => {
      const { code, data } = await getChannelList({ page, pageSize });

      if (code !== 0) {
        return {
          list: [],
        };
      }

      return {
        list: data.list,
      };
    };

    const fetchData = async () => {
      const [videoData, partitionData] = await Promise.all([
        fetchVideoData({
          page: videoPage.value,
          pageSize: (lineCount.value - 1) * 2,
        }),
        fetchPartitionData({ page: channelPage.value, pageSize: 2 }),
      ]);

      const videoStartIndex = (videoPage.value - 1) * (lineCount.value - 1) * 2;
      for (
        let i = videoStartIndex;
        i < videoStartIndex + (lineCount.value - 1) * 2;
        i++
      ) {
        videoList.value[i] = videoData.list[i - videoStartIndex];
      }

      const partitionStartIndex = (channelPage.value - 1) * 2;
      for (let i = partitionStartIndex; i < partitionStartIndex + 2; i++) {
        channelList.value[i] = partitionData.list[i - partitionStartIndex];
      }

      videoPage.value += 1;
      channelPage.value += 1;
    };

    useOnScrollToBottom(async () => {
      await fetchData();
    });

    onMounted(async () => {
      await fetchData();
    });

    return { itemList, styles };
  },
  template: /*html*/ `
    <div :style="styles.videoCardContainer">
      <component v-for="item in itemList" :key="item.id" :is="item.is" v-bind="{...item}" />
    </div>
  `,
};
