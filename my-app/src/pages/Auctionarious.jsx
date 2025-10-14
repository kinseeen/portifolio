import { Link } from "react-router-dom";
import ArticlePageItem from "../components/ArticlePageItem";

export default function Auctionarious() {
  return (
    <ArticlePageItem
      title="AUCTIONARIOUS"
      image="/images/auctionarious2.JPG"
      mainContent="This website was created using HTML and Bootstrap for the fictional company Auctionarious. Users can view and bid on auction items."
      liveSite="https://auctionarious.netlify.app/html/auctionpage"
      github="https://github.com/kinseeen/Auctionarious/blob/main/README.md"
    />
  );
}
