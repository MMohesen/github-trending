import React from "react";
import { Button, ExternalLink, FIcon } from "../../";
import "./styles.scss";

const DevItem = ({ item }) => {
  console.log("item", item);
  return (
    <div className="list-item developer-item">
      <div className="avatar-box">
        <ExternalLink to={item.url} target={"_blank"}>
          <img
            className="avatar"
            src={`${item.avatar}`}
            width="20"
            height="20"
            alt={`@${item.username}`}
          />
        </ExternalLink>
      </div>

      <div className="title-box">
        <ExternalLink to={item.url} className="username" target={"_blank"}>
          {item.username}
        </ExternalLink>

        <ExternalLink to={item.url} target={"_blank"} className="name">
          {item.name}
        </ExternalLink>
      </div>

      <div className="description-box">
        <div className="label">
          <FIcon name={"fire"} color={"#db6d27"} /> Popular repo
        </div>
        <span className="repo-name">
          <FIcon name={"bookmarks"} color={"#8b949e"} />
          &nbsp;
          <ExternalLink to={item.popularRepository?.url} target={"_blank"}>
            {item.popularRepository?.repositoryName}
          </ExternalLink>
        </span>
        <p className={"description"}>{item.popularRepository?.description}</p>
      </div>
      <div className="spacer" />

      <div className="actions">
        <Button title={"Follow"} />
      </div>
    </div>
  );
};

export default DevItem;
