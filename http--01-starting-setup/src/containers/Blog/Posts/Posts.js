import React, { Component } from "react";
import axios from "../../../axios";
import { Route } from "react-router-dom";
// import { Link } from "react-router-dom";
import Post from "../../../components/Post/Post";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";
class Posts extends Component {
  state = {
    posts: []
  };

  postSelectedHandler = id => {
    // this.props.history.push({ pathname: "/posts" + id });
    this.props.history.push("/posts/" + id);
    // this.setState({ selectedPostId: id });
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("/posts")
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return { ...post, author: "Jon" };
        });
        this.setState({ posts: updatedPosts });
        console.log(updatedPosts);
      })
      .catch(e => {
        console.log(e);
        // this.setState({ error: true });
      });
  }

  
  render() {
    let posts = <p>Something went wrong!!!!!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link to={"/" + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
          // </Link>
        );
      });
    }
    return (
      <div>
        <section className="Posts">{posts}</section>);
        <Route
          path={this.props.match.url + "/:id"}
          exact
          component={FullPost}
        />
      </div>
    );
  }
}

export default Posts;
