import { ForbesListItem } from 'components';
import {
  BoardHeader,
  LeaderBoard,
  BoardTitle,
  TitleTop,
  TitleBottom,
  LeaderBoardProfiles,
} from './ForbesList.styled';

export const ForbesList = ({list}) => {
  return <LeaderBoard>
  <BoardHeader>
    <BoardTitle>
      <TitleTop>Forbes</TitleTop>
      <TitleBottom>Leader board</TitleBottom>
    </BoardTitle>
  </BoardHeader>

  <LeaderBoardProfiles>
    {list.map(({id, name,capital, avatar,isIncrease}) => (
      <ForbesListItem 
      key={id}
      name={name}
      isIncrease={isIncrease}
      capital={capital}
      avatar={avatar}
      />
    ))}
  </LeaderBoardProfiles>
</LeaderBoard>
};
