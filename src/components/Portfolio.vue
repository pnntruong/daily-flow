<template>
    <div class="container wrapper">
        <div class="main-session row align-items-center justify-content-evenly">
            <div class="info col-12 col-sm-12 col-md-4 text-center">
                <img    v-bind:src="`${publicPath}${avatarImg}`"
                        alt="Avatar"
                        class="info-avatar"
                        >
                <div class="info-detail mt-3">
                    <div class="name">
                        PHAN NGUYEN NHAT TRUONG
                    </div>
                    <div class="age">
                        {{new Date().getFullYear() - 1999}} 歳
                    </div>
                    <div class="location">
                        <i class="fas fa-map-marker-alt"></i> 日本、東京都
                    </div>
                </div>
            </div>
            <div class="description col-12 col-sm-12 col-md-8">
                <div class="description-header fs-1">
                    こんにちは、<br>
                    私は チュオン<br>
                    フロントエンドエンジニア
                </div>
                <p class="description-text fs-5">
                    私は今留学生として、早稲田文理専門学校でITの知識を習得して、<br>ウェブ・アプリ制作専攻しています。<br>
                    勉強したことを応用して、このページを制作しました。<br>
                    どうぞ、ゆっくりご覧ください。
                </p>
            </div>
        </div>
        <div class="social-icons">
            <a class="social-icons__link"
                href="https://www.facebook.com/truong.phannguyennhat"><i class="fab fa-facebook"></i></a>
            <a class="social-icons__link"
                href="https://github.com/pnntruong"><i class="fab fa-github"></i></a>
            <a class="social-icons__link"
                href="mailto:pnntruong@gmail.com" title="pnntruong@gmail.com"><i class="far fa-envelope"></i></a>
        </div>
        <div class="arrow">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            publicPath: process.env.BASE_URL,
            avatarImg: `assets/img/my_avatar.jpg`,
        }
    }
    
}
</script>

<style lang="scss">
.wrapper{
    height: 85vh;
    margin-top: 7vh;
    color: #63492d;

    .main-session{
        padding: 0 5vw;
        height: 100%;
        display: flex;
        flex-wrap: wrap;

        .info{

            .info-avatar{
                min-width: 10vmax;
                min-height: 10vmax;
                width: 15vmax;
                height: 15vmax;
                border-radius: 50%;
                object-fit: cover;
                border: 1px solid #ccc;
                box-shadow: 0 0 15px 0px #ccc;
            }
        }
        .description{
            padding-left: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            max-height: 40vmin;
            height: 40vh;
            
            .description-header{
                line-height: 2.5rem;
            }
        }
    }
    .social-icons{
        display: flex;
        flex-direction: column;
        position: fixed;
        bottom: 10vh;

        .social-icons__link{
            font-size: 30px;
            color: #63492d;

            &:hover{
                color: #63492da4;
                transform: scale(1.2);
            }
        }

    }
}

</style>