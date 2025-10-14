import { Link } from "react-router-dom";
import ArticlePageItem from "../components/ArticlePageItem";

export default function EcomStore() {
  return (
    <ArticlePageItem
      title="Ecom Store"
      image="/images/ecomstorefront.png"
      mainContent="This website was created using HTML and Bootstrap for the fictional company Auctionarious. Users can view and bid on auction items."
      liveSite="https://ecommercekine.netlify.app/"
      github="https://github.com/kinseeen/ecom-store/blob/master/README.md"
    />
  );
}
