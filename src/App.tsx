import { useEffect } from "react";
import styled from "styled-components";

// components
import Card from "components/Card";
import CardContainer from "components/CardContainer";
import ContactUs from "components/ContactUs";
import Footer from "components/Footer";
import ArticleCardContainer from "components/ArticleCardContainer";
import ArticleCard from "components/ArticleCard";

// Cards
import { benefitCards } from "const/CTACardConst";
import {
  filterByJobTitle,
  filterByNetwork,
  JobTitle,
  Name,
  Network,
  searchByName,
} from "utils/doctorFunctions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  flex-wrap: wrap;
  margin: 0 auto;
`;

function App() {
  useEffect(() => {
    filterByNetwork(Network.ADVANTAGE);
    filterByJobTitle(JobTitle.OPTOMETRIST);
    searchByName("Va", Name.FIRST_NAME);
  }, []);

  return (
    <>
      <Container>
        <ContactUs title="Contact Us" linksTitle="Quick Links" />
        <CardContainer title="VSP Benefits are easy to use">
          {benefitCards.map((cardDetails) => (
            <Card key={cardDetails.title} {...cardDetails} />
          ))}
        </CardContainer>
        <ArticleCardContainer>
          <ArticleCard
            articleTag="Eye Health and Wellness"
            headline="Gaining on Glaucoma: Detection and Treatment"
            article="Glaucoma affects millions of people and can cause vision loss. Yet ,there's good news early detection."
            imageUrl="https://boardroom.tv/wp-content/uploads/2022/03/GettyImages-1239013145-1280x720.jpg"
          />
          <ArticleCard
            articleTag="Eye Health and Wellness"
            headline="Heed the Warning; What Eye Related Symptoms Can Tell Us"
            article="Glaucoma affects millions of people and can cause vision loss. Yet ,there's good news early detection."
            imageUrl="https://boardroom.tv/wp-content/uploads/2022/03/GettyImages-1239013145-1280x720.jpg"
          />
          <ArticleCard
            articleTag="Eye Health and Wellness"
            headline="Gaining on Glaucoma: Detection and Treatment"
            article="Glaucoma affects millions of people and can cause vision loss. Yet ,there's good news early detection."
            imageUrl="https://boardroom.tv/wp-content/uploads/2022/03/GettyImages-1239013145-1280x720.jpg"
          />
          <ArticleCard
            articleTag="Eye Health and Wellness"
            headline="Heed the Warning; What Eye Related Symptoms Can Tell Us"
            article="Glaucoma affects millions of people and can cause vision loss. Yet ,there's good news early detection."
            imageUrl="https://boardroom.tv/wp-content/uploads/2022/03/GettyImages-1239013145-1280x720.jpg"
          />
        </ArticleCardContainer>
        <Footer />
      </Container>
    </>
  );
}

export default App;
