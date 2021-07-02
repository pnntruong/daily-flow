<template>
  <div class="container-fluid text-center">
    <h1 class="about-header fs-1 pt-5">Daily-Flowについて</h1>
    <div class="about-main">
      <div class="about-features-list">
          <!-- <div class="item-top">
            <div class="about-features-list-item">
              <span lass="about-features-list-item__text">僕の使命は皆さんの<br>日々の流れの管理を<br>サポートします。</span>
            </div>
          </div> -->
          <div class="about-features-list-item"
              style="top: 20%; left: 10%;">
            <router-link to="/todos" class="about-features-list-item__text">スケージュール<br>管理</router-link>
          </div>
          <div class="about-features-list-item"
                style="top: 20%; right: 10%;">
            <router-link to="/pomodoro" class="about-features-list-item__text">集中力<br>サポーター</router-link>
          </div>
          <div class="about-features-list-item"
                style="bottom: 20%; left: 15%;">
            <router-link to="/comingsoon" class="about-features-list-item__text">健康管理</router-link>
          </div>
          <div class="about-features-list-item"
                style="bottom: 20%; right: 15%;">
            <router-link to="/comingsoon" class="about-features-list-item__text">お金管理</router-link>
          </div>
      </div>
      <div class="about-main__img">
        <img :src="`${publicPath}${mainImgUrl}`"
              alt="character-img"
              class="main-img">
      </div>
    </div>
  </div>
</template>

<script>

export default{
  data(){
    return {
      publicPath: process.env.BASE_URL,
      mainImgUrl: `assets/img/fullbody_flat.png`,
    }
  }
}
</script>

<style lang="scss">
.about-header{
  margin-top: 8vh;
  margin-bottom: 20px;
  color: #312a22;
  animation: flip;
  animation-duration: 1.5s;
}
.about-main{
  height: 80vh;
  position: relative;

  .about-main__img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .main-img{
      height: 35vmin;
      animation: tada;
      animation-duration: 1.5s;
    }
  }

  .about-features-list{
    position: relative;
    height: 100%;
    box-sizing: border-box;

    .item-top{
      position: absolute;
      min-height: 20vmin;
      min-width: 25vmin;
      left: 50%;
      transform: translateX(-50%);
    }

    .about-features-list-item{
      position: absolute;
      border-radius: 50%;
      min-height: 20vmin;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 25vmin;
      background: #f8e9db;
      font-size: 1.3rem;
      padding: 1rem;

      animation: heartBeat;
      animation-delay: 1.5s;
      animation-duration: 2s;
      .about-features-list-item__text{
        text-decoration: none;
        color: #63492d;

        &:hover{
          transform: scale(1.1);
        }
      }
    }
  }
  
}

</style>