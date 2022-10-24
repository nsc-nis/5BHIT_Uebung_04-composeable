import { ref, reactive, toRefs } from "vue";

export function useFetch(url, options) {
  const data = ref(null);
  const state = reactive({
    error: null,
    loading: false
  });

  const fetchData = async () => {
    state.loading = true;

    try {
      const result = await fetch(url, options);
      data.value = result.json();
    } catch (e) {
      state.error = e;
    } finally {
      state.loading = false;
    }
  };
  fetchData();

  return { data, ...toRefs(state) };
}
