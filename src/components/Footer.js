import React from "react";
import SkrillLogo from "../asserts/SkrillLogo.png";
import PaypalLogo from "../asserts/PaypalLogo.jpg";
import VisaLogo from "../asserts/VisaLogo.jpg";
import MasterCardLogo from "../asserts/MasterCardLogo.png";
import {
  Icon,
  Container,
  Grid,
  Header,
  List,
  Segment,
  Input,
  Button,
  Image,
} from "semantic-ui-react";

import "../style/Footer.scss";

const HomepageFooter = () => {
  const socials = ["facebook f", "twitter", "instagram", "youtube"];
  const lists = [
    "Careers",
    "B2B",
    "Privary Policy",
    "Tearm & Condition",
    "Cookies",
  ];
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid inverted stackable>
          <Grid.Row
            style={{ borderBottom: "1px solid rgba(240, 240, 240, 0.1)" }}
          >
            <Grid.Column width={4}>
              <Header
                inverted
                as="h5"
                content="Corporate Info"
                className="footer_h5_content"
              />
              <List
                link
                inverted
                style={{
                  textTransform: "uppercase",
                  fontSize: "70%",
                }}
              >
                {lists.map((list) => (
                  <List.Item as="a">{list}</List.Item>
                ))}
              </List>
            </Grid.Column>

            <Grid.Column width={4}>
              <Header
                inverted
                as="h5"
                content="Customer service"
                className="footer_h5_content"
              />
              <List
                link
                inverted
                style={{ textTransform: "uppercase", fontSize: "70%" }}
              >
                <List.Item as="a">FAQ</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Sizing Charts</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column width={4}>
              <Header
                inverted
                as="h5"
                content="Follow Vans:"
                className="footer_h5_content"
                style={{
                  marginBottom: "0.4em",
                }}
              />
              <List
                link
                inverted
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "baseline",
                  width: "75%",
                }}
              >
                {socials.map((social) => (
                  <Button icon circular>
                    <Icon name={social} />
                  </Button>
                ))}
              </List>
            </Grid.Column>

            <Grid.Column width={4}>
              <Header
                inverted
                as="h5"
                content="Sign Up To Vans Newsletter"
                className="footer_h5_content"
              />
              <List
                link
                inverted
                style={{
                  textTransform: "uppercase",
                  fontSize: "70%",
                  lineHeight: "inherit",
                }}
              >
                <List.Item as="p" className="item_content">
                  Subscribe to our newsletter to get latest news about our
                  products, events amd sales
                </List.Item>
                <List.Item as="a">
                  <Input
                    fluid
                    secondary
                    className="input_mail"
                    action={{ icon: "send", className: "footer_icon_send" }}
                    placeholder="ENTER YOUR E-MAIL ADDRESS"
                    style={{
                      background: "#1b1c1d",
                      color: "white",
                    }}
                  />
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row
            colums={2}
            style={{ justifyContent: "space-between", padding: "3% 0 0 0" }}
          >
            <Grid.Column width={6}>
              <Header
                inverted
                as="h4"
                content="@2016 Vans - All Rights Reserved"
                style={{
                  color: "gray",
                  textTransform: "uppercase",
                  fontFamily: "Fjalla One",
                  fontWeight: "100",
                }}
              />
            </Grid.Column>
            <Grid.Column
              width={4}
              position="right"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Image src={VisaLogo} rounded />
              <Image src={MasterCardLogo} rounded />
              <Image src={PaypalLogo} rounded />
              <Image src={SkrillLogo} rounded />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};

export default HomepageFooter;
