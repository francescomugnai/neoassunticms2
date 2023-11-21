
const axios = require('axios');

export default  () => ({
  search: "",
  searchData:[],
   filteredEmployees() {
    if (this.search === "") {
      return this.searchData[0];
    }
    return this.searchData[0].filter((item) => {
      return item.title
        .toLowerCase()
        .includes(this.search.toLowerCase());
    })
  },
  getData(){
    let that = this
    axios.get('/api/collections/toolkit/entries')
    .then(function (response) {
      // handle success
      console.log(response.data.data);
      that.searchData.push(response.data.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }



})