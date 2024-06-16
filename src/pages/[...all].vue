<template>
  <div class="container">{{ t('common.default_page') }}</div>
  <a href="/user">{{ t('common.view_user_list') }}</a>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>
