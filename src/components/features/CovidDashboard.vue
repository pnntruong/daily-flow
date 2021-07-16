<template>
    <div class="container pt-5" id="main-wrapper">
        <h1>Coronavirus Dashboard</h1>
        <h3 class="heading">World Data</h3>
        <div class="cards">
        <div class="card">
            <h3 id="cases">{{ Number(globalData.cases).toLocaleString() }}</h3>
            <p>Total Cases</p>
            <div class="new-today">
            <span> + </span>
            <span id="new-cases">{{ Number(globalData.todayCases).toLocaleString() }}</span>
            <span> today</span>
            </div>
        </div>
        <div class="card">
            <h3 id="deaths">{{ Number(globalData.deaths).toLocaleString() }}</h3>
            <p>Total Deaths</p>
            <div class="new-today">
            <span> + </span>
            <span id="new-deaths">{{ Number(globalData.todayDeaths).toLocaleString() }}</span>
            <span> today</span>
            </div>
        </div>
        <div class="card">
            <h3 id="recovered">{{ Number(globalData.recovered).toLocaleString() }}</h3>
            <p>Total Recovered</p>
            <div class="new-today">
            <span> + </span>
            <span id="new-recovered">{{ Number(globalData.todayRecovered).toLocaleString() }}</span>
            <span> today</span>
            </div>
        </div>
    </div>
        <h3 class="heading">Country Specific</h3>
        <div class="search-bar">
        <span id="search-icon">🔍</span>
        <input id="country" placeholder="Country name ..." autocomplete="off" v-model="countryInput">
        <!--   <select id="country-select">
            
        </select> -->
        </div>
        <div id="country_cards" class="cards">
        <div class="card" v-for="country in filteredCountries" :key="country.countryInfo._id">
            <h2 class="country-name">{{country.country}}</h2>
            <img :src="country.countryInfo.flag">
            <h3 id="cases">{{ Number(country.cases).toLocaleString() }}</h3>
            <p>Total Cases</p>
            <div class="new-today">
                <span> + </span>
                <span id="new-cases">{{ Number(country.todayCases).toLocaleString() }}</span>
                <span> today</span>
            </div>
            <h3 id="deaths">{{ Number(country.deaths).toLocaleString() }}</h3>
            <p>Total Deaths</p>
            <div class="new-today">
                <span> + </span>
                <span id="new-deaths">{{ Number(country.todayDeaths).toLocaleString() }}</span>
                <span> today</span>
            </div>
            <h3 id="recovered">{{ Number(country.recovered).toLocaleString() }}</h3>
            <p>Total Recovered</p>
            <div class="new-today">
            <span> + </span>
            <span id="new-recovered">{{ Number(country.todayRecovered).toLocaleString() }}</span>
            <span> today</span>
            </div>
        </div>
        </div>
        <div class="info">The API used is available <a href="https://documenter.getpostman.com/view/11144369/Szf6Z9B3?version=latest" target="_blank">here</a>.</div>
  </div>
</template>

<script>
const base_api = 'https://corona.lmao.ninja/v2/';
const ENDPOINT = {
  WORLDLASTEST: 'all?yesterday',
  COUNTRIES: 'countries?yesterday&sort'
};


export default {
    data(){
        return{
            globalData: {},
            countriesData: [],  
            countryInput: '',   
        }
    },
    mounted(){
        fetch(`${base_api}${ENDPOINT.WORLDLASTEST}`)
            .then(res => res.json())
            .then(data=> this.globalData = data)
            .catch((err)=> console.log("Error!!!!", err))  
        ;
        fetch(`${base_api}${ENDPOINT.COUNTRIES}`)
            .then(res => res.json())
            .then(data => this.countriesData = data)
            .catch((err)=> console.log("Error!!!!", err))  
        ;
    },
    computed: {
      filteredCountries: function(){
        return this.countriesData.filter(country => {
          return country.country.toUpperCase().includes(this.countryInput.toUpperCase().trim());
        });
      },
    },

};

</script>

<style lang="scss" scoped>
    @import url("https://fonts.googleapis.com/css2?family=Merriweather&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#main-wrapper{
    margin: 2rem auto 0!important;
    border-top: 2px dotted #ccc;
    padding-top: 2rem;
}

h1 {
  text-align: center;
  font-size: 35px;
  margin-bottom: 2rem;
}
h3.heading {
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.8rem;
}
.search-bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    margin: 1rem 10px;
    height: 30px;
    width: 50%;
    padding: 5px;
    outline: none;
    
  }
}
.cards {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 10px auto;
  max-width: 980px;

  .card {
    width: 300px;
    max-width: 300px;
    max-height: 470px;
    margin: 12px;
    padding: 1.5rem;
    color: #fff;
    border-radius: 5px;
    box-shadow: 7px 6px 26px -17px rgba(0, 0, 0, 1);
    cursor: pointer;
    transition: 0.3s all;

    h3 {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }

    &:nth-child(1) {
      background-color: #3498db;
    }
    &:nth-child(2) {
      background-color: #e74c3c;
    }
    &:nth-child(3) {
      background-color: #2ecc71;
    }

    &:hover {
      transform: translateY(-4px);
    }
    .new-today{
      text-align: right;
    }
  }
}

#country_cards{
  max-height: 980px;
  overflow: auto;
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .card{
    background: #aaad89;
    display: flex;
    flex-direction: column;
    
    .country-name{
      text-align: center;
      padding: 5px;
      font-size: 20px;
    }
    img{
        width: 150px;
        height: 100px;
        margin: 0 auto;
    }
  }
}

</style>