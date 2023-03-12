// Write your JavaScript code.
//import Vue from 'vue'



//Vue.config.devtools = true;

Vue.createApp({
   
    data() {
        return {
        message: 'Welcome to Inspired Pics',
        imageMessage: "Latest Images",
        photos: [],
        col1: [],
        col2:[],
        pageSize: 10,
        pagedPhotos: [],
        tags: [],
        photo: 'none',
        searchTag: "",
        currentPhoto: 'none',
        year: "2023",
        bottom: false,
        page: 0
    }},
    methods: {
        GetTagsData: function() {
            console.log("Get tags clicked!");
            axios.get('https://photofunctions.azurewebsites.net/api/TagList').then(response => {
                this.photos = response.data;
                var count = this.photos.length;
               
                
            });

        },
        GetTagByName: function(name) {
            console.log("Get tags by name:" + name);
            axios.get('https://photofunctions.azurewebsites.net/api/GetTagByName?name=' + name).then(response => {
                this.photos = response.data;
                var count = this.photos.length;

                this.imageMessage = "You searched for " + name;
            });

        },
        GetPhotos: function() {
            console.log("Top 1000 clicked!");
            axios.get('https://photofunctions.azurewebsites.net/api/Top1000').then(response => {
                this.photos = response.data;
                var count = this.photos.length;
                
                //this.SplitData();
            });
        },
        ViewPhoto: function(value) {
            console.log("Get photo :" + value);
            axios.get('https://photofunctions.azurewebsites.net/api/PhotoById?id=' + value).then(
                response => {
                    this.photo = response.data;
                    
                });
        },
        SplitData: function () { 
            this.pagedPhotos = map(this.photos,
                function(item, index) {

                    return index % pageSize === 0 ? photos.slice(index, index + pageSize) : null;
                })
            .filter(function(item) { return item; })},
        
        bottomVisible() {
            const scrollY = window.scrollY;
            const visible = document.documentElement.clientHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const bottomOfPage = visible + scrollY >= pageHeight;
            return bottomOfPage || pageHeight < visible;
        }


    },
    filters: {
        formatDate: function (value) {
            return moment(String(value)).format('Do MMMM YYYY');

        }

    },
    mounted: function(){
        /*window.addEventListener('scroll',
            () => {
                this.bottom = this.bottomVisible();
            });*/
        this.GetPhotos();

    },
    computed : 
        {
            ImagesPerCol() {
                return this.photos /2;
            } 
        },
    watch: {
        bottom(bottom) {
            if (bottom) {
                this.page = this.page + 1;
            }
        }
    }
}).mount('#app');
