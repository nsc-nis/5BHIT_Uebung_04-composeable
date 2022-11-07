<template> </template>

<script>
import { useFetch } from "../composeables/UseFetch.js";
export default {
  setup() {
    const { data, error, loading } = useFetch(
      "https://jsonplaceholder.typicode.com/users",
      {}
    );

    return {
      data,
      error,
      loading
    };
  }
};
</script>
