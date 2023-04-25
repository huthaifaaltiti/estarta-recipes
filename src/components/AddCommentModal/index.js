// react
import React, { useState } from "react";
// react-redux
import { useDispatch } from "react-redux";

// function creator
import { addRecipeComment } from "../../redux/Reducers/RecipesReducer/actions";

// styles, icons
import styles from "./styles.module.css";
import { IoIosClose } from "react-icons/io";

export default function AddCommentModal({
  handleClose,
  show,
  sentRecipeCategory,
  checkedRecipe,
  singleRecipeCategory,
}) {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [userStatus, setUserStatus] = useState("User status");
  const [commentContent, setCommentContent] = useState("");

  if (show === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleUserStatusSelection = (event) => {
    setUserStatus(event.target.value);
  };

  const handleCommentContentChange = (event) => {
    setCommentContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addRecipeComment(
        userName,
        userStatus,
        commentContent,
        sentRecipeCategory,
        checkedRecipe,
        singleRecipeCategory
      )
    );
  };

  return (
    <div className={`${show ? styles.modal : styles.hideModal}`}>
      <section className={styles.modalMain}>
        <header>
          <h3>Type a comment</h3>
          <span onClick={handleClose}>
            <IoIosClose className={styles.closeIcon} />
          </span>
        </header>

        <form onSubmit={handleSubmit} action="#">
          <input
            type="text"
            id="name"
            value={userName}
            onChange={handleNameChange}
            placeholder="User Name"
          />

          <select
            id="project-type"
            value={userStatus}
            onChange={handleUserStatusSelection}
          >
            <option value="" hidden>
              User status
            </option>
            <option value="Viewer">Viewer</option>
            <option value="Follower">Follower</option>
            <option value="Visitor">Visitor</option>
          </select>

          <textarea
            id="description"
            value={commentContent}
            onChange={handleCommentContentChange}
            placeholder="Comment here"
          />

          {userName && commentContent && (
            <button type="submit">Add Comment</button>
          )}
        </form>
      </section>
    </div>
  );
}
