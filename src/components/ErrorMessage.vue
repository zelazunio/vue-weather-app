<template>
    <v-alert
      type="error"
      icon="mdi-comment-alert-outline"
      transition="scale-transition"
      v-if="$store.state.errorMsg"
      dismissible
      @input="$store.commit('CLEAR_ERROR_MSG')"
    >
     <span v-html="$store.state.errorMsg"></span>
    </v-alert>
</template>

<script>
export default {
    name: 'ErrorMessage'
}
</script>