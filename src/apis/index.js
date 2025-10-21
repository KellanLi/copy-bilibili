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
