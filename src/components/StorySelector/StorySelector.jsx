import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./StorySelector.module.css";

const propTypes = {
  stories: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, image: PropTypes.string })
  ),
  onSelect: PropTypes.func.isRequired
};
const StorySelector = ({ stories, onSelect }) => {
  return (
    <Fragment>
      <div className={styles.background} />
      <div className={styles.storySelector}>
        {stories.map((story, index) => (
          <div className={styles.story} onClick={() => onSelect(index, story)}>
            <img
              key={`image-${story.name}`}
              alt={story.name}
              className={styles.image}
            />
            <div tabIndex="0" key={story.name} className={styles.name}>
              {story.name}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

StorySelector.propTypes = propTypes;
export default StorySelector;
