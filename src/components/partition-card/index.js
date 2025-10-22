import { transCountToString } from "../../utils/index.js";

import { UpIcon, VideoIcon } from "../../assets/icons/index.js";

const styles = {
  partitionCard: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "5px",
    border: "1px solid #E3E5E7",
    paddingBottom: "16px",
    position: "relative",
    backgroundColor: "#fff",
  },
  coverContainer: {
    position: "relative",
    width: "100%",
    borderRadius: "5px",
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
    padding: "0 12px",
  },
  footer: {
    display: "flex",
    alignItems: "center",
    color: "#9499A0",
    fontSize: "13px",
    padding: "0 12px",
  },
  layer: {
    width: "90%",
    height: "100%",
    zIndex: -1,
    left: "50%",
    transform: "translate(-50%, 6px)",
    top: 0,
    position: "absolute",
    backgroundColor: "#E3E5E7",
    borderRadius: "6px",
  },
  tiny: {
    zIndex: -2,
    width: "80%",
    transform: "translate(-50%, 12px)",
    backgroundColor: "#F1F2F3",
  },
};

export default {
  name: "PartitionCard",
  components: {
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
    type: {
      type: Number,
      default: 0,
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
      transCountToString,
    };
  },
  template: /*html*/ `
    <div :style="styles.partitionCard">
      <div :style="styles.coverContainer">
        <img :src="cover" :alt="title" :style="styles.cover" />
        <div :style="styles.info">
          <div :style="styles.infoItem"><video-icon /> {{ transCountToString(playCount) }}</div>
        </div>
      </div>
      <div :style="styles.title">{{ title }}</div>
      <div :style="styles.footer">
        <up-icon />
        <div>{{ uploader }}</div>
      </div>
      <div :style="styles.layer"/>
      <div :style="[styles.layer, styles.tiny]"/>
    </div>
  `,
};
