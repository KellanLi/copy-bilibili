import { onMounted, onUnmounted } from "vue";

const useOnScrollToBottom = (callback) => {
  const handleScroll = () => {
    // 获取页面的滚动位置
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // 获取页面的总高度
    const documentHeight = document.documentElement.scrollHeight;
    // 获取视口高度
    const windowHeight = window.innerHeight;

    // 判断是否滚动到底部
    if (scrollTop + windowHeight >= documentHeight - 10) {
      // 允许有一点误差，比如 10px
      console.log("滚动到达页面底部");
      // 在这里执行你希望的操作，比如加载更多内容
      callback();
    }
  };
  onMounted(() => {
    console.log("mounted");
    window.addEventListener("scroll", handleScroll);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
};

export default useOnScrollToBottom;
