import { useParams } from "react-router-dom";
import { posts } from "../lib/post";

const BlogPost = () => {
  const { slug } = useParams();

  const post = posts.find(
    (post) => post.slug === slug
  );

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>

      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;