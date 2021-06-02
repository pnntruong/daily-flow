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
                        Phan Nguyen Nhat Truong
                    </div>
                    <div class="age">
                        Age: 22
                    </div>
                    <div class="location">
                        Tokyo, Japan
                    </div>
                </div>
            </div>
            <div class="description col-12 col-sm-12 col-md-8">
                <div class="description-header fs-1">
                    Hello,<br>
                    I'm a Front End<br>
                    Web Developer
                </div>
                <p class="description-text fs-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore atque molestias impedit exercitationem, error non tenetur. Impedit consequuntur ratione deserunt. Cum, non repellendus. Illo laborum vero provident assumenda omnis?
                </p>
            </div>
        </div>
        <div class="social-icons">
            <a class="social-icons__link"
                href="/"><i class="fab fa-facebook"></i></a>
            <a class="social-icons__link"
                href="/"><i class="fab fa-github"></i></a>
            <a class="social-icons__link"
                href="/"><i class="far fa-envelope"></i></a>
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