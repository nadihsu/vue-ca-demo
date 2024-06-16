import { GetUserListState } from '../domain/user.port';
import { getUserListUseCase } from '../usecases/getUserList.usecase';

export const useUserStore = defineStore('user', () => {
  const userList = ref<GetUserListState>([]);

  const getUserList = async () => {
    const result = await getUserListUseCase();

    userList.value = result;
  };

  return {
    userList,
    getUserList,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
