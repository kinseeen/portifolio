import { Link } from "react-router-dom";
import ArticlePageItem from "../components/ArticlePageItem";

export default function EcomStore() {
  return (
    <ArticlePageItem
      title="Ecom Store"
      image="/images/ecomstorefront.png"
      mainContent="This website was created for my javascript frameworks assignment. This project was created using React and bootstrap. 
      The aim of this assignment was to create an e-commerce store, and collect data using Noroff API. The website was required to have a homepage, individual product page, cart page, checkout success page and contact page. Please look at the github readme for this page to read more about this project! "
      liveSite="https://ecommercekine.netlify.app/"
      github="https://github.com/kinseeen/ecom-store/blob/master/README.md"
    />
  );
}
