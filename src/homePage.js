
import React from "react";
import "./homePage.css"; // import the CSS file
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function HomePg() {
  return (
    <div className="background-image">
      <header>
        <Container>
          <Row>
            <Col>
              <h1>DeepZeroX</h1>
            </Col>
            <Col className="text-right">
              <Link to="/reviewPg" className="review-link">
                <button className="review-button">Review</button>
              </Link>
            </Col>
          </Row>
        </Container>
      </header>
      <main className="homePgMain">
        <Container>
          <Row style={{ justifyContent: "flex-start" }}>
            <Col>
              <Link to="/useScannerPg">
                <button className="scanner-button">Scanner</button>
              </Link>
            </Col>
            <Col>
              <h2>Scan deepfake videos quickly and easily</h2>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>
        <Container>
          <Row>
            <Col>
              <div className="about-us">
                <h3>About Us</h3>
                <p>
                  We are a team of IIT students passionate about using technology to combat the spread of misinformation and deepfake videos. Our team members include:
                </p>
                <table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>IIT Number</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>S.K.Nimasha Vidushi</td>
                      <td>20210360</td>
                    </tr>
                    <tr>
                      <td>M.N Narangoda</td>
                      <td>20210462</td>
                    </tr>
                    <tr>
                      <td>H.R.C Gunarthne</td>
                      <td>20200102</td>
                    </tr>
                    <tr>
                      <td>G.N Sanjana</td>
                      <td>20211251</td>
                    </tr>
                    <tr>
                      <td>K.G. Kosindu Tharinda</td>
                      <td>20210160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default HomePg;




