const App = {
    data(){
        return{
          products :[
            {"name":"table","price":8500},
            {"name":"chair","price":2300},
            {"name":"closet","price":13000},
            {"name":"bed","price":9000}]
        }
    },
    methods: {
        MinMax(){
            this.products.sort(function (a, b) {
                if (a.price > b.price) {
                  return 1;
                }
                if (a.price < b.price) {
                  return -1;
                }
                
                return 0;
              });
            },
        MaxMin(){ 
                this.products.sort(function (a, b) {
                if (a.price < b.price) {
                  return 1;
                }
                if (a.price > b.price) {
                  return -1;
                }
                
                return 0;
              });
        }
}
}
Vue.createApp(App).mount('#app');