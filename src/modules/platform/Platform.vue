<template>
    <div id="platform">
        <header class="header clear">
            <img class="fl" src="../../assets/img/logo.png" alt="">
            <ul class="fl">
                <li class="fl"><span>首页</span></li>
                <li class="fl"><span>投资理财</span></li>
                <li class="fl"><span>投资管理</span></li>
                <li class="fl"><span>转让中心</span></li>
                <li class="fl"><span>其他</span></li>
            </ul>
            <ol class="fr">
                <li class="fl">
                    <span>我的身份:</span>
                    <el-tag type="info" size="mini">GP</el-tag>
                    <el-tag type="info" size="mini">LP</el-tag>
                    <el-tag type="danger" size="mini">CP</el-tag>
                </li>
                <li class="fl"><span>我的账户<strong>(退出)</strong></span></li>
                <li class="fl"><img src="../../assets/img/message.png" alt=""></li>
            </ol>
        </header>
        <section class="section">
            <VuePerfectScrollbar v-scroll class="nav fl">
                <el-menu default-active="1" :collapse="true">
                    <el-menu-item index="1">
                        <img class="normal" src="../../assets/img/nav1.png" alt="">
                        <img class="active" src="../../assets/img/nav1_active.png" alt="">
                    </el-menu-item>
                    <el-menu-item index="2">
                        <img class="normal" src="../../assets/img/nav2.png" alt="">
                        <img class="active" src="../../assets/img/nav2_active.png" alt="">
                    </el-menu-item>
                    <el-menu-item index="3">
                        <img class="normal" src="../../assets/img/nav3.png" alt="">
                        <img class="active" src="../../assets/img/nav3_active.png" alt="">
                    </el-menu-item>
                    <el-menu-item index="4">
                        <img class="normal" src="../../assets/img/nav4.png" alt="">
                        <img class="active" src="../../assets/img/nav4_active.png" alt="">
                    </el-menu-item>
                    <el-menu-item index="5">
                        <img class="normal" src="../../assets/img/nav5.png" alt="">
                        <img class="active" src="../../assets/img/nav5_active.png" alt="">
                    </el-menu-item>
                    <el-menu-item index="6">
                        <img class="normal" src="../../assets/img/nav6.png" alt="">
                        <img class="active" src="../../assets/img/nav6_active.png" alt="">
                    </el-menu-item>
                </el-menu>
            </VuePerfectScrollbar>
            <VuePerfectScrollbar v-scroll class="main fl"><router-view/></VuePerfectScrollbar>
        </section>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "Platform",
        components: {VuePerfectScrollbar}
    }
</script>

<style lang='scss' scoped>
    #platform{
        height: 100%;
        .header{
            background-color: #fff;
            height: 70px;
            line-height: 70px;
            padding-left: 100px;
            padding-right: 30px;
            > img{
                margin-top: 18px;
                margin-right: 50px;
            }
            ul{
                li{
                    padding: 0 50px;
                    span{
                        cursor: pointer;
                    }
                }
            }
            ol{
                li{
                    padding-left: 50px;
                    img{
                        margin-top: 26px;
                    }
                    strong{
                        cursor: pointer;
                        font-weight: normal;
                    }
                    .el-tag{
                        width: 20px;
                        padding: 0;
                        margin-left: 10px;
                    }
                }
            }
        }
        .section{
            height: calc(100% - 70px);
            .nav{
                height: 100%;
            }
            .main{
                width: calc(100% - 160px);
                height: calc(100% - 30px);
                padding: 0 30px 30px;
            }
        }
    }
</style>

<style lang="scss">
    #platform{
        .el-menu{
            width: 100px;
            height: 100%;
            border: none;
            background-color: #36231d;
            .el-menu-item{
                height: 100px;
                line-height: 100px;
                text-align: center;
                background-color: #36231d;
                img{
                    &.normal{
                        display: inline-block;
                    }
                    &.active{
                        display: none;
                    }
                }
                &.is-active,&:hover{
                    background:linear-gradient(to right,#feb872,#fe6f67);
                    img.normal{
                        display: none;
                    }
                    img.active{
                        display: inline-block;
                    }
                }
            }
        }
    }
</style>
