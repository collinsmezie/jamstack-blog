// components/TopicHeader.tsx
import TagIcon from "./TagIcon";
import styles from "../pages/technology/index.module.css";

const TopicHeader = ({
  title = "TECHNOLOGY",
  onFollow = () => {},
  onStartWriting = () => {},
  icon = <TagIcon />,
}) => {
  return (
    <div className={styles.topicSection}>
      <div className={styles.topic}>
        <div className="inline-block rounded-full bg-gray-200 p-1 mr-3">
          {icon}
        </div>
        <h1 className={styles.tech}>{title}</h1>
      </div>
      <div className={styles.buttons}>
        <button
          onClick={onFollow}
          className="bg-teal-500 hover:bg-white text-white hover:text-teal-500 font-bold py-1 px-2 rounded-full border-2 border-teal-500 transition-colors duration-300"
        >
          Follow
        </button>
        <button
          onClick={onStartWriting}
          className="hover:bg-white text-teal-500 font-bold py-1 px-2 rounded-full border-2 border-teal-500 transition-colors duration-300"
        >
          Start writing
        </button>
      </div>
    </div>
  );
};

export default TopicHeader;
