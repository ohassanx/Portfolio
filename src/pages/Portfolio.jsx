import React from "react";
import Box from "../components/portfolio/Box";
import styled from "styled-components/macro";

export default function portfolio() {
  return (
    <Container>
      <h1>Web Developer Portfolio</h1>
      <b className="d-block mb-4">
<<<<<<< HEAD
        These are some of the projects i have created. I created using languages such as HTML, CSS, JavaScript, React.js, React Native, Node.js, Redux,
        PHP, MySQL, and MongoDB.
=======
        These are my projects. I created using HTML CSS JS React.js React Native Node.js Redux
        PHP MySQL MongoDB
>>>>>>> c0d43fca827b2e2c097e0c58df268319664badf3
      </b>
      <small className="d-block mb-2">Hover the image for information.</small>
      <div className="row">
        <Box
          img={require("../assets/website/portfolio.jpg")}
          title="Portfolio"
          frontEnd="HTML,JavaScript"
          backBnd="PHP"
          dataBase="MySQL"
<<<<<<< HEAD
          css=""
=======
          css="Bulma"
>>>>>>> c0d43fca827b2e2c097e0c58df268319664badf3
          host="Github"
          repo="https://github.com/ohassanx/Portfolio-Blog"
          website="http://webprojects.eecs.qmul.ac.uk/oha31/portfolio/"
        />
        <Box
          img={require("../assets/website/Weather.png")}
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
          img={require("../assets/website/employee.png")}
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
          img={require("../assets/website/restaurant.png")}
          title="CRUD Restaurant"
          frontEnd="Vue.js"
          backBnd="Golang"
          dataBase="PostgreSQL"
          css="Bootstrap 4"
          host="Heroku"
          repo="https://github.com/SumetPH/next-isr"
          website="https://go-restaurant-sumetph.herokuapp.com/"
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
