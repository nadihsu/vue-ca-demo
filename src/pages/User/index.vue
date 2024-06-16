<template>
  <ElTable :data="userList">
    <ElTableColumn prop="name" :label="t('common.name')" />
    <ElTableColumn prop="skills" :label="t('common.skill')">
      <template #default="scope">
        <div>
          {{ scope.row.skills.join('、') }}
        </div>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<script setup lang="ts">
const { t } = useI18n();
const store = useUserStore();
const { userList } = storeToRefs(store);
const { getUserList } = store;

onMounted(() => {
  getUserList();
});
</script>
