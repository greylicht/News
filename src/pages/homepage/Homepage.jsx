import { useLocation } from "react-router";
import { Helmet } from 'react-helmet';
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Helmet>
        <title>Populi Center | Home</title>
      </Helmet>
      <Header />
      <div className="home">
        <Posts />        
      </div>
    </>
  );
}
