import React from "react";
import { Container, Grid, Image } from "semantic-ui-react";
import "./Header.scss";
import LOGO from "../../assets/instagram-logo.png";
import { Link } from "react-router-dom";
import RightHeader from "./RightHeader/RightHeader";

export default function Header() {
  return (
    <div className="header">
      <Container>
        <Grid>
          <Grid.Column width={3} className="header__logo">
            <Link to="/">
              <Image src={LOGO} alt="Instaclone" />
            </Link>
          </Grid.Column>
          <Grid.Column width={10} className="header__search">
            <p> buscador</p>
          </Grid.Column>
          <Grid.Column width={3} className="header__options">
            <RightHeader />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}
