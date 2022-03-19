import React from 'react';

import { 
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
  <Container>
    <Retweeted>
      <RocketseatIcon />
      You Retweeted
    </Retweeted>
    <Body>
      <Avatar />
      <Content>
        <Header>
          <strong>Bruno Moeller</strong>
          <span>@brunomoellerr</span>
          <Dot />
          <time>4th Jan</time>
        </Header>
        <Description>Fusce lobortis sodales nisi, eu pharetra enim iaculis</Description>
        <ImageContent />
        <Icons>
          <Status>
            <CommentIcon />
            18
          </Status>
          <Status>
            <RetweetIcon />
            18
          </Status>
          <Status>
            <LikeIcon />
            999
          </Status>
        </Icons>
      </Content>
    </Body>
  </Container>
  );
}

export default Tweet;