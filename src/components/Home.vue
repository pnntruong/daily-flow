<template>
    <div class="bg-light">
        <div id="home">
            <div class="container" id="description-1">
                <div class="row">
                    <div class="col">
                        <h3  class="header fs-1 fw-bolder">
                            日々の流れを<br>「DAILY FLOW」で<br>管理しよう。
                        </h3>
                        <button onclick="location.href='#features'" class="btn app-description__btn fw-bold shadow mt-5">
                            使用開始
                            <span class="app-description__btn-arrow animate__animated animate__flash animate__slower animate__infinite">>></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" id="features">
            <div class="container">
                <div class="row">
                    <p class="features-header col col-12 fs-1 text-center mt-5 mb-5 fw-bold">「DAILY FLOW」の特徴 </p>
                </div>
                <ul class="row features-list mb-0 ps-0">
                    <li class="col col-sm-12 col-md-6 col-lg-3"
                        v-for="(feature, key) in features" :key="key">
                        <router-link v-bind:to="feature.link" class="feature-item card text-body text-center align-content-center bg-transparent" style="width: 16rem; margin: 3px auto;">
                            <img 
                                class="feature-item__img card-img-top align-self-center" 
                                v-bind:src="`${publicPath}${feature.img}`" 
                                v-bind:alt="feature.name">
                            <div class="card-body">
                                <p class="feature-item__description card-text">{{feature.description}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
    name:'Home',
    data(){
        return {
            publicPath: process.env.BASE_URL,
            features: [
                {
                    name: 'タスク管理',
                    img: `assets/img/schedule.png`,
                    description: '毎日のタスクを管理',
                    link: '/todos'
                },
                {
                    name: 'ファイナンス管理',
                    img: `assets/img/budget.png`,
                    description: '自分のお金を管理',
                    link: '/comingsoon'
                },
                {
                    name: '高速読書',
                    img: `assets/img/reading.png`,
                    description: 'SwiftReadで読書しよう！',
                    link: '/swiftread'
                },
                {
                    name: 'COVID-19情報',
                    img: `assets/img/healthcare.png`,
                    description: 'COVID-19情報',
                    link: '/covid19'
                },
                {
                    name: 'Pomodoro',
                    img: `assets/img/working.png`,
                    description: 'Pomodoro方法で集中しよう。',
                    link: '/pomodoro'
                },
            ],
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#home{
    background-image: url(".././assets/background/bg-1.jpg");
    height: 100vh;
    background-position-x: 50%;
    background-size: cover;
    background-repeat: no-repeat;

    .container{
        height: 100%;
        display: flex;
        align-items: center;

    }
        
    .app-description__btn{
        box-shadow: 0 0 5px 0 #ccc;
        margin-left: 10px;
        background-color: #fff;
    }
}
#features{
    .card{
        border: none;
        text-decoration: none;
    }
    .features-list{
        list-style: none;
    }
    .feature-item__img{
        width: 100px;
    }
}
@media (max-width: 575.98px) { 
    .header{
        background-color: rgba(255, 255, 255, .3);
        border-radius: 5px;
        box-shadow: 0 0 30px 0 #ccc;
        padding: 10px;
    }
}
@media (max-width: 345px) { 
    .features-header{
        font-size: calc(1rem + 1.5vw)!important;
    }
    .feature-item__description{
        font-size: calc(.6rem + 1.5vw);
    }
}
</style>
