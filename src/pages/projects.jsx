import React from "react";
import Box from "../components/projects/Box";
import styled from "styled-components/macro";

export default function projects() {
  return (
    <Container>
      <h1>Web Developer Portfolio</h1>
      <b className="d-block mb-4">
        These are some of the projects i have created. I created using languages such as HTML, CSS, JavaScript, React.js, React Native, Node.js, Redux,
        PHP, MySQL, and MongoDB.
      </b>
      <small className="d-block mb-2">Hover the image for information.</small>
      <div className="row">
        <Box
          img={require("../assets/website/portfolio.jpg")}
          title="Portfolio"
          frontEnd="HTML,JavaScript"
          backBnd="PHP"
          dataBase="MySQL"
          css=""
          host="Github"
          repo="https://github.com/ohassanx/Portfolio-Blog"
          website="http://webprojects.eecs.qmul.ac.uk/oha31/portfolio/"
        />
        <Box
          img={require("../assets/website/Weather.jpg")}
          title="Weather App"
          frontEnd="React Native"
          backBnd=""
          dataBase=""
          css=""
          host=""
          repo="https://github.com/ohassanx/Weather"
          website=""
        />
        <Box
          img={require("../assets/website/employee.jpg")}
          title="Employee App"
          frontEnd="React Native"
          backBnd="Node.js"
          dataBase="MongoDB"
          css=""
          host=""
          repo="https://github.com/ohassanx/Employee"
          website=""
        />
        {/* <Box
          img={require("../assets/website/amazon.jpg")}
          title="Amazon Clone"
          frontEnd="React.js"
          backBnd=""
          dataBase="FireBase"
          css="CSS3"
          host="Firebase"
          repo="https://github.com/ohassanx/amazon-clone"
          website="https://clone-b224b.web.app/"
        /> */}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 100px 20%;
  @media (max-width: 1200px) {
    padding: 100px 10%;
    height: auto;
  }
`;