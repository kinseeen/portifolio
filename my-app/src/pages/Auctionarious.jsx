import { Link } from "react-router-dom";
import ArticlePageItem from "../components/ArticlePageItem";

export default function Auctionarious() {
  return (
    <ArticlePageItem
      title="AUCTIONARIOUS"
      image="/images/auctionarious2.JPG"
      mainContent="This website was created for my Semester project 2. This page was created using javascript and bootstrap.
      The assignment was to create a website for the fictional company Auctionarious, where a user would be able to bid on items on auction. You were required to have an individual product page, a homepage and a profile page.  Please look at the github readme for this page to read more about this project!  "
      liveSite="https://auctionarious.netlify.app/html/auctionpage"
      github="https://github.com/kinseeen/Auctionarious/blob/main/README.md"
    />
  );
}
