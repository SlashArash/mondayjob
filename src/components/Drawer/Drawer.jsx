import React from "react";
import { Video } from "react-feather";
import { useTranslation } from "react-i18next";

import "./Drawer.scss";
import apple from "assets/images/apple.png";
import avatar from "assets/images/avatar.png";

const Drawer = ({ info, loading, onClose }) => {
  const { t } = useTranslation();

  return (
    <aside className="drawer-container">
      {loading ? (
        <div className="drawer-message">
          <span>{t("Loading")} ...</span>
        </div>
      ) : (
        <>
          {!info ? (
            <div className="drawer-message">
              <span>{t("Please select a location in map")}</span>
            </div>
          ) : (
            <>
              <div className="title-container">
                <div className="company-title">
                  <img src={apple} alt={info.name} />
                  <span>{info.name}</span>
                </div>
                <span className="close" onClick={onClose}>
                  Close
                </span>
              </div>
              <div className="info-box">
                <p className="text-light">{t("Description")}:</p>
                <span>{info.about}</span>
              </div>
              <div className="info-box">
                <p className="text-light">{t("Available Experts")}</p>
                {info.agents.map((agent) => (
                  <div className="agent">
                    <div className="agent-info">
                      <img src={avatar} alt={agent.name} />
                      <div>
                        <p className="text-bold">{agent.name}</p>
                        <p className="text-light ">{agent.title}</p>
                      </div>
                    </div>
                    <div>
                      <p className="green-text">
                        4.8<span className="text-light">/5</span>
                      </p>
                      <p className="text-light">{t("Rate")}</p>
                    </div>
                    {agent.status !== "free" && (
                      <a href="#!" className="video-link">
                        <Video />
                        <span className="text-bold ">{t("Video Chat")}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </aside>
  );
};

export default Drawer;
