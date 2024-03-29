import styled from 'styled-components';
import Button from '../Button';
import freelancerAvatar from '../../assets/upwork-logo.jpg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

  }
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  background: var(--gray);
  border-radius: 50%;
  margin-right: 10px;
  background-image: url(${freelancerAvatar});
  background-size: 49px 49px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 14px;
  }

  > span {
    font-size: 14px;
    color: var(--gray);
  }
`;
export const FollowButton = styled(Button)`
padding: 6px 17px;
`;
