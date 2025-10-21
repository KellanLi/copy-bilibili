import {
  BulletScreenIcon,
  VideoIcon,
  UpIcon,
} from "../../assets/icons/index.js";

const styles = {
  videoCard: {
    display: "flex",
    flexDirection: "column",
  },
  coverContainer: {
    width: "100%",
    position: "relative",
    overflow: "hidden",
  },
  cover: {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  },
  info: {
    display: "flex",
    position: "absolute",
    bottom: "10px",
    left: 0,
    right: 0,
    fontSize: "14px",
    color: "#fff",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    margin: "0 5px",
  },
  title: {
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "5px",
    height: "44px",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    color: "#9499A0",
    fontSize: "13px",
  },
};

export default {
  components: {
    BulletScreenIcon,
    VideoIcon,
    UpIcon,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    cover: {
      type: String,
      default: "",
    },
    playCount: {
      type: Number,
      default: 0,
    },
    commentCount: {
      type: Number,
      default: 0,
    },
    duration: {
      type: String,
      default: 0,
    },
    publishTime: {
      type: String,
      default: "",
    },
    uploader: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    return {
      ...props,
      styles,
    };
  },
  template: /*html*/ `
    <div :style="styles.videoCard">
      <div :style="styles.coverContainer">
        <img :src="cover" :alt="title" :style="styles.cover" />
        <div :style="styles.info">
          <div :style="styles.infoItem"><VideoIcon /> {{ playCount }}</div>
          <div :style="styles.infoItem"><BulletScreen /> {{ commentCount }}</div>
          <div :style="styles.infoItem" style="margin-left: auto">{{ duration }}</div>
        </div>
      </div>
      <div :style="styles.title">{{ title }}</div>
      <div :style="styles.footer">
        <UpIcon />
        <div>{{ uploader }}·{{ publishTime }}</div>
      </div>
    </div>
  `,
};
