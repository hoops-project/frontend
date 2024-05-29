import { useState } from 'react';
import useToast from '../useToast';
import { axiosAuth } from '../../api/axiosInstance';
import { END_POINT } from '../../constants/endPoint';

const useFriendActions = () => {
  const [addedFriends, setAddedFriends] = useState<number[]>([]);  
  const [removedFriends, setRemovedFriends] = useState<number[]>([]);
  const { toastSuccess, toastError } = useToast()

  const handleAddFriend = async (friendUserId: number) => {
    try {
      const response = await axiosAuth.post(`${END_POINT.FRIENDS.APPLY_FRIEND}`, { friendUserId });
      console.log('Friend added:', response.data);
      setAddedFriends((prev) => [...prev, friendUserId]);
      toastSuccess('친구 신청이 완료되었습니다🏀');

    } catch (error) {
      console.error('Error adding friend:', error);
      toastError('친구 신청에 실패하였습니다🚨');
    }
  };

  const handleRemoveFriend = async (friendId: number) => {
    try {
      const response = await axiosAuth.patch(`${END_POINT.FRIENDS.FRIEND_DELETE}`, { friendId });
      console.log('Friend removed:', response.data);
      setRemovedFriends((prev) => [...prev, friendId]);
      toastSuccess('친구 삭제가 완료되었습니다🏀');
    } catch (error) {
      console.error('Error removing friend:', error);
      toastError('친구 삭제에 실패하였습니다🚨');
    }
  };

  return { handleRemoveFriend, removedFriends, handleAddFriend, addedFriends };
};

export default useFriendActions;
