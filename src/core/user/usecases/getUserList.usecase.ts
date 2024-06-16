import { GetUserListResponse } from '../domain/user.entity';
import { GetUserListState } from '../domain/user.port';

export const getUserListUseCase = async (): Promise<GetUserListState> => {
  const mockResponse = {
    status: 'Y',
    data: [
      { name: 'alex', age: 18, skills: ['html', 'css', 'javascript'] },
      { name: 'peter', age: 33, skills: ['node', 'react', 'vue'] },
    ],
  } as GetUserListResponse;

  let result: GetUserListState;

  if (mockResponse?.status === 'Y') {
    const { data } = mockResponse;

    result = data.map((item) => ({
      name: item.name,
      skills: item.skills,
    }));
  }

  return result;
};
