<template>
    <div class="container wrapper">
        <div class="main-session row align-items-center">
            <div class="info col-4 text-center">
                <img    v-bind:src="`${publicPath}${avatarImg}`"
                        alt="Avatar"
                        class="info-avatar"
                        >
                <div class="info-detail">
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
            <div class="description col-8">
                <div class="description-header fs-1">
                    Hello,<br>
                    I'm a Front End Web Developer
                </div>
                <p class="description-text fs-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis tempore atque molestias impedit exercitationem, error non tenetur. Impedit consequuntur ratione deserunt. Cum, non repellendus. Illo laborum vero provident assumenda omnis?
                </p>
            </div>
        </div>
        <div class="social-icons">

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
    margin-top: 10vh;
    color: #63492d;

    .main-session{
        padding: 0 5vw;
        height: 100%;

        .info{

            .info-avatar{
                width: 15vw;
                height: 15vw;
                border-radius: 50%;
            }
        }
    }
}

</style>