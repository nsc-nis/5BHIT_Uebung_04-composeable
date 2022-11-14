<template>
  <div>
    <div v-if="error">
      <h2>Error: {{ error }}</h2>
    </div>
    <div v-else>
      <div v-if="loading">
        <h2>Loading data ....</h2>
      </div>
      <h1>Users</h1>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Index</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data">
            <td v-if="index - 1 >= 0 && data[index - 1].userId != item.userId">
              {{ item.userId }}
            </td>
            <td v-else-if="index - 1 < 0">
              {{ item.userId }}
            </td>
            <td v-else></td>
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>{{ item.body }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useFetch } from '../composeables/UseFetch.js';
export default {
  setup() {
    console.log('Start fetch');
    const { data, error, loading } = useFetch(
      'https://jsonplaceholder.typicode.com/posts',
      {}
    );
    console.log('End fetch');

    /*
    let lastUser = 0;
    for (let item in data) {
      if (item.userId == lastUser) {
        item.userId = ' ';
      } else {
        lastUser = item.userId;
      }
    }
    */

    console.log(data.value);
    return {
      data,
      error,
      loading,
    };
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  margin-left: auto;
  margin-right: auto;
}
td,
th {
  border: 1px solid #ddd;
  padding: 8px;
}
tr {
  background-color: #f2f2f2;
}
tr:hover {
  background-color: #ddd;
}
th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #41b883;
  color: white;
}
</style>
