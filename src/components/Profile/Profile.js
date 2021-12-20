import React from "react";
import "./Profile.scss";
import { useQuery } from "@apollo/client";
import { GET_USER } from "../../graphql/user";
import { Grid, Image } from "semantic-ui-react";
import AVATAR from "../../assets/avatar.png";

export default function Profile({ username }) {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: {
      username,
    },
  });

  if (loading && error === undefined) return null;

  return (
    <>
      <Grid className="profile">
        <Grid.Column width={5} className="profile__left">
          <Image src={AVATAR} alt="avatar" />
        </Grid.Column>
        <Grid.Column width={11} className="profile__right">
          <div> Header</div>
          <div> followers</div>
          <div className="other">
            <p> {data.getUser.name} </p>
            {data.getUser.siteWeb && (
              <a
                href={data.getUser.siteWeb}
                className="siteWeb"
                target="_parent"
              >
                {data.getUser.siteWeb}
              </a>
            )}
          </div>
        </Grid.Column>
      </Grid>
    </>
  );
}
