import { createMedia } from "@artsy/fresnel";
import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Input,
  Label,
} from "semantic-ui-react";
import "../style/Header.scss";
import LogoHeaderUrl from "../asserts/VansLogoHeader.png";

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 1070,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Vans is old skool"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content="Do whatever you want when you want to."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Media greaterThan="mobile">
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "0" }}
            vertical
          >
            <Menu fixed={fixed ? "top" : null} inverted={!fixed} size="large">
              <Container className={"headerBorder"}>
                <Menu.Item as="a" className={"headerLogo"}>
                  <Image src={LogoHeaderUrl} size="small" />
                </Menu.Item>
                {/* Search Input */}
                <Menu.Item as="a">
                  <Input
                    icon={{ name: "search" }}
                    iconPosition="left"
                    placeholder="Search..."
                    transparent
                    style={{ color: "white", paddingRight: "2em" }}
                  />
                </Menu.Item>
                <Menu.Item as="a">
                  Rest of europe <Icon name="chevron down" />
                </Menu.Item>
                <Menu.Item as="a">
                  Store Locator <Icon name="map marker alternate" />
                </Menu.Item>
                <Menu.Item as="a">
                  Help <Icon name="help circle" />
                </Menu.Item>
                <Menu.Item as="a">
                  Login <Icon name="lock" />
                </Menu.Item>
                <Menu.Item as="a" className="headerRegister">
                  REGISTER
                  <Icon name="add user" color="red" />
                </Menu.Item>
                <Menu.Item className="headerCard" as="a" position="right">
                  <Icon name="shopping basket" color="red" />
                  <Label color="red" floating size="mini">
                    2
                  </Label>
                </Menu.Item>
              </Container>
            </Menu>
            <Container className="headerListButton">
              <Button.Group widths="7" secondary>
                <Button>Men</Button>
                <Button>Women</Button>
                <Button>Kids</Button>
                <Button>New Arrivals</Button>
                <Button>Skate</Button>
                <Button>Latest</Button>
                <Button>#Houseofvans</Button>
              </Button.Group>
            </Container>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Media as={Sidebar.Pushable} at="mobile">
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation="overlay"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item as="a">Log in</Menu.Item>
            <Menu.Item as="a">Sign Up</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 350, padding: "1em 0em" }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar" />
                  </Menu.Item>
                  <Menu.Item position="right">
                    <Button as="a" inverted>
                      Log in
                    </Button>
                    <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const HeaderHomepage = ({ children }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
);

HeaderHomepage.propTypes = {
  children: PropTypes.node,
};

export default HeaderHomepage;
