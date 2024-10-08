// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      handleLike: () => {
        this.setState((prevState) => ({ likes: prevState.likes + 1 }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({ dislikes: prevState.dislikes + 1 }));
      },
    };
  }
  render() {
    return (
      <>
        <h1>Text Content Rating</h1>
        <div className="contentRating">
          <p> Hi </p>
          <div className="ratingButtons">
            <button className="likeButton" onClick={this.state.handleLike}>
              Like ({this.state.likes})
            </button>
            <button
              className="dislikeButton"
              onClick={this.state.handleDislike}
            >
              Dislike ({this.state.dislikes})
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
