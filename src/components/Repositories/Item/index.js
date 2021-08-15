import React from "react";
import "./styles.scss";
import { Button, FIcon, ExternalLink } from "../../";

const RepoItem = ({ item }) => {
  return (
    <div className="list-item repository-item">
      <div className="header">
        <ExternalLink to={item.url} target={"_blank"} className="title">
          {item.getTitle()}
        </ExternalLink>
        <Button title={"Follow"} />
      </div>
      <p className="description">{item.description}</p>
      <div className="footer">
        <span className="footer-item">{item.language}</span>
        <div className="footer-item">
          <FIcon name={"star-empty"} color={"#adbac7"} />
          <span className="value">{item.totalStars.total}</span>
        </div>
        <div className="footer-item">
          <FIcon name={"git"} color={"#adbac7"} />
          <span className="value">{item.forks.total}</span>
        </div>
        <span className="footer-item">Build By</span>
        <div className="footer-item">
          {item.builtBy.map((contributor, cIndex) => (
            <ExternalLink
              to={contributor.url}
              target={"_blank"}
              key={`contributor-item-${item.username}-${cIndex}`}>
              <img
                className="avatar"
                src={`${contributor.avatar}`}
                width="20"
                height="20"
                alt={`@${contributor.username}`}
              />
            </ExternalLink>
          ))}
        </div>
        <div className="spacer" />

        <div className="footer-item">
          <FIcon name={"star-empty"} color={"#adbac7"} />
          <span className="value">{item.starsSince.total} Today stars</span>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
