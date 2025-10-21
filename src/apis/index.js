const videoListExampleData = [
  {
    id: 1,
    title: "最薄的iPhone...代价呢？国行iPhone Air上手体验",
    cover: "/src/assets/cover1.png",
    playCount: 1939000,
    commentCount: 6912,
    duration: "10:42",
    publishTime: "10月17日",
    uploader: "影视飓风",
  },
  {
    id: 2,
    title: "【MrBeast官方】我被FBI追捕了",
    cover: "/src/assets/cover2.png",
    playCount: 1129000,
    commentCount: 1099,
    duration: "14:14",
    publishTime: "10月18日",
    uploader: "MrBeast官方账号",
  },
];

export const getVideoList = ({ page = 1, pageSize = 10 }) => {
  return new Promise((resolve) => {
    const list = Array(pageSize)
      .fill(null)
      .map(() => {
        const index = Math.floor(Math.random() * videoListExampleData.length);
        return {
          ...videoListExampleData[index],
          id: crypto.randomUUID(),
        };
      });

    console.log(`生成${pageSize}条数据：`, list);

    const response = {
      code: 0,
      message: "success",
      data: {
        list,
      },
    };

    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};

const channelListExampleData = [
  {
    id: 1,
    type: 1,
    title: "《小猪佩奇 第十一季》中文配音版",
    cover: "/src/assets/cover3.png",
    playCount: 7827000,
    uploader: "动画纪",
  },
  {
    id: 2,
    type: 2,
    title: "天官赐福 第二季",
    cover: "/src/assets/cover4.png",
    playCount: 2704000,
    uploader: "天官赐福动画官方",
  },
];

export const getChannelList = ({ page = 1, pageSize = 10 }) => {
  return new Promise((resolve) => {
    const list = Array(pageSize)
      .fill(null)
      .map(() => {
        const index = Math.floor(Math.random() * channelListExampleData.length);
        return {
          ...channelListExampleData[index],
          id: crypto.randomUUID(),
        };
      });

    console.log(`生成${pageSize}条数据：`, list);

    const response = {
      code: 0,
      message: "success",
      data: {
        list,
      },
    };

    setTimeout(() => {
      resolve(response);
    }, 1000);
  });
};
