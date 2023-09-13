import "./BlogPosts.css";
import { Link } from "react-router-dom";
const BlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Shopping Blogs We Love for the Holidays",
      content:
        " Are you prepared to empty your pockets? Don’t stress. We laid everything out for you with these five shopping blogs.",
      imageSrc:
        "https://a.cdn-hotels.com/gdcs/production130/d720/11434f2d-5d7f-4a59-b0be-32fff9ce2bfd.jpg",
    },
    {
      id: 2,
      title: "4 Reasons We Love Shopping So Much",
      content:
        "When we shop, our bodies release dopamine, the 'feel-good hormone'. Apart from this, assistant professor of marketing at the University of Michigan Scott Rick",
      imageSrc:
        "https://www.aispi.co/wp-content/uploads/2022/02/shopping1.jpeg",
    },
    {
      id: 3,
      title: "Online Shopping vs In-Store Shopping: Which Is Better",
      content:
        "Shopping has evolved dramatically over the past several decades, providing consumers with more choice and convenience ",
      imageSrc: "https://joburg.co.za/wp-content/uploads/2020/08/641.jpg",
    },
  ];

  return (
    <div className="blog-page">
      <h2>Everything About Shopping</h2>
      <div className="blog-posts">
        {blogPosts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={post.imageSrc} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link target="_blank" className="bloglink">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
