import { Link } from "react-router-dom";
import ArticlePageItem from "../components/ArticlePageItem";

export default function CssFrameworks() {
  return (
    <ArticlePageItem
      title="CSS frameworks"
      image="/images/cssblogpage.JPG"
      mainContent=" This website was created for my CSS frameworks assignment. This page was created using html and bootstrap. 
      The assignment was to create a social media application where user could log in, have a feed page that loaded blogposts and a profile page.
      The assignment was to create a website for the fictional company"
      liveSite="/"
      github="https://github.com/kinseeen/CssFrameworks2/blob/d0ee2bb8ab3b3d76d1ec4ecb386631f86e5f805b/README.md"
    />
  );
}
