import React, { useState } from "react";

const Fab = props => {
  // const { menusStatus } = props;
  // const {
  //   menusActive,
  //   mapButtonActive,
  //   locationButtonActive,
  //   listButtonActive,
  //   commentButtonActive,
  // } = menusStatus;
  const [menusActive, setMenusActive] = useState(true);
  const [mapButtonActive, setMapButtonActive] = useState(true);
  const [locationButtonActive, setLocationButtonActive] = useState(false);
  const [listButtonActive, setListButtonActive] = useState(false);
  const [commentButtonActive, setCommentButtonActive] = useState(true);

  const menuType = {
    location: {
      id: 0,
      iconClassName: "fa-compass",
      handle: () => {
        console.log("location");
      },
    },
    map: {
      id: 1,
      iconClassName: "fa-map",
      handle: () => {
        console.log("map");
        let list = document.body.querySelector(".filter-list");
        list.classList.add("fold");

        let foldedCondition = document.body.querySelector(
          ".filter-condition--fold"
        );
        let unFoldedCondition = document.body.querySelector(
          ".filter-condition--unfold"
        );
        if (foldedCondition) foldedCondition.classList.add("fold");
        if (unFoldedCondition) unFoldedCondition.classList.add("fold");

        setMapButtonActive(false);
        setListButtonActive(true);
        // filter-condition--${this.state.fold ? "fold" : "unfold
      },
    },
    list: {
      id: 2,
      iconClassName: "fa-list",
      handle: () => {
        console.log("list");
        let list = document.body.querySelector(".filter-list");
        list.classList.remove("fold");

        let foldedCondition = document.body.querySelector(
          ".filter-condition--fold"
        );
        let unFoldedCondition = document.body.querySelector(
          ".filter-condition--unfold"
        );
        if (foldedCondition) foldedCondition.classList.remove("fold");
        if (unFoldedCondition) unFoldedCondition.classList.remove("fold");

        setListButtonActive(false);
        setMapButtonActive(true);
      },
    },
    comment: {
      id: 3,
      iconClassName: "fa-comment-alt",
      handle: () => {
        console.log("comment");
      },
    },
  };

  const createButton = type => {
    const { iconClassName } = type;
    return (
      <div className="fab fab-icon-holder" onClick={type.handle}>
        <i className={`fas ${iconClassName}`}></i>
      </div>
    );
  };

  return (
    <>
      {menusActive && (
        <div className="fab-container">
          {mapButtonActive && createButton(menuType.map)}
          {locationButtonActive && createButton(menuType.location)}
          {listButtonActive && createButton(menuType.list)}
          {commentButtonActive && createButton(menuType.comment)}
        </div>
      )}
    </>
  );
};

export default Fab;
