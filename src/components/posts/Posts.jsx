import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="/images/last-samurai.jpg" />
      <Post img="/images/becak.jpg" />
      <Post img="/images/jkt.jpg"/>
      <Post img="/images/think.jpg"/>
      <Post img="/images/vaksin.jpg"/>
      <Post img="/images/monas.jpg"/>
    </div>
  );
}
