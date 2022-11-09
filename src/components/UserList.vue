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
            <th>Name</th>
            <th>UserName</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data">
            <td>{{ item.name }}</td>
            <td>{{ item.username }}</td>
            <td>{{ item.address }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useFetch } from "../composeables/UseFetch.js";
export default {
  setup() {
    const { data, error, loading } = useFetch(
      "https://jsonplaceholder.typicode.com/users",
      {}
    );
    console.log(data.value);
    return {
      data,
      error,
      loading
    };
  }
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
  background-color: #04aa6d;
  color: white;
}
</style>
