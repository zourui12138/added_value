<template>
    <div id="knowledgeBase">
        <header class="header"><img src="../../assets/img/knowledgeBase_logo.png" alt=""></header>
        <VuePerfectScrollbar v-scroll class="section clear">
            <div class="left card fl">
                <ul>
                    <li class="card"><h1>一级目录</h1></li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear current">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                </ul>
                <ul>
                    <li class="card"><h1>一级目录</h1></li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear current">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                </ul>
                <ul>
                    <li class="card"><h1>一级目录</h1></li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear current">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                    <li class="card clear">
                        <span class="fl">二级目录</span>
                        <img class="fr" src="../../assets/img/knowledgeBase_arrow.png" alt="">
                        <strong class="fr">20</strong>
                    </li>
                </ul>
            </div>
            <div class="right card fr">
                <header class="clear">
                    <span class="fl">问题搜索</span>
                    <el-input class="fl" placeholder="请输入关键词"
                              v-model="question"
                              suffix-icon="el-icon-search"
                              clearable></el-input>
                    <el-button class="fl" type="primary">搜索答案</el-button>
                    <el-button class="fl" type="primary" plain>我要提问</el-button>
                </header>
                <section>
                    <h5>问题一级目录/二级目录</h5>
                    <ul>
                        <li class="clear card">
                            <i class="fl el-icon-question"></i>
                            <div class="fr">
                                <h1 v-html="getKeyword(keyword,'这个问题有点火爆火爆')"></h1>
                                <p v-html="getKeyword(keyword,'数百年，这个问题有点火爆火具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容子啥子啥子具体问题内容是啥子啥子啥子具体内容是啥子啥子啥子具体内问题容子啥子啥子具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容是啥子内容是啥子啥子啥子具体内容是啥子啥子啥子具')"></p>
                                <div class="clear">
                                    <h3 class="fl"><img class="fl" src="../../assets/img/user.png" alt=""><span class="fl">张三</span></h3>
                                    <h3 class="fl"><img class="fl" src="../../assets/img/time.png" alt=""><span class="fl">2018-02-30</span></h3>
                                    <h4 class="fr">访问次数：<span>12334</span></h4>
                                    <h4 class="fr">回复次数：<span>222</span></h4>
                                </div>
                            </div>
                        </li>
                        <li class="clear card">
                            <i class="fl el-icon-question"></i>
                            <div class="fr">
                                <h1 v-html="getKeyword(keyword,'这个问题有点火爆火爆')"></h1>
                                <p v-html="getKeyword(keyword,'数百年，这个问题有点火爆火具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容子啥子啥子具体问题内容是啥子啥子啥子具体内容是啥子啥子啥子具体内问题容子啥子啥子具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容是啥子内容是啥子啥子啥子具体内容是啥子啥子啥子具')"></p>
                                <div class="clear">
                                    <h3 class="fl"><img class="fl" src="../../assets/img/user.png" alt=""><span class="fl">张三</span></h3>
                                    <h3 class="fl"><img class="fl" src="../../assets/img/time.png" alt=""><span class="fl">2018-02-30</span></h3>
                                    <h4 class="fr">访问次数：<span>12334</span></h4>
                                    <h4 class="fr">回复次数：<span>222</span></h4>
                                </div>
                            </div>
                        </li>
                        <li class="clear card">
                            <i class="fl el-icon-question"></i>
                            <div class="fr">
                                <h1 v-html="getKeyword(keyword,'这个问题有点火爆火爆')"></h1>
                                <p v-html="getKeyword(keyword,'数百年，这个问题有点火爆火具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容子啥子啥子具体问题内容是啥子啥子啥子具体内容是啥子啥子啥子具体内问题容子啥子啥子具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容是啥子内容是啥子啥子啥子具体内容是啥子啥子啥子具')"></p>
                                <div class="clear">
                                    <h3 class="fl"><img class="fl" src="../../assets/img/user.png" alt=""><span class="fl">张三</span></h3>
                                    <h3 class="fl"><img class="fl" src="../../assets/img/time.png" alt=""><span class="fl">2018-02-30</span></h3>
                                    <h4 class="fr">访问次数：<span>12334</span></h4>
                                    <h4 class="fr">回复次数：<span>222</span></h4>
                                </div>
                            </div>
                        </li>
                        <li class="clear card">
                            <i class="fl el-icon-question"></i>
                            <div class="fr">
                                <h1 v-html="getKeyword(keyword,'这个问题有点火爆火爆')"></h1>
                                <p v-html="getKeyword(keyword,'数百年，这个问题有点火爆火具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容子啥子啥子具体问题内容是啥子啥子啥子具体内容是啥子啥子啥子具体内问题容子啥子啥子具体内容是啥子啥子啥子具体内容是啥子啥子啥子具体内容是啥子内容是啥子啥子啥子具体内容是啥子啥子啥子具')"></p>
                                <div class="clear">
                                    <h3 class="fl"><img class="fl" src="../../assets/img/user.png" alt=""><span class="fl">张三</span></h3>
                                    <h3 class="fl"><img class="fl" src="../../assets/img/time.png" alt=""><span class="fl">2018-02-30</span></h3>
                                    <h4 class="fr">访问次数：<span>12334</span></h4>
                                    <h4 class="fr">回复次数：<span>222</span></h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </div>
        </VuePerfectScrollbar>
    </div>
</template>

<script>
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "KnowledgeBase",
        components: {VuePerfectScrollbar},
        data() {
            return{
                question: '问题',
                keyword: '问题'
            }
        },
        methods: {
            getKeyword(keyword,str) {
                return str.replace(eval('/'+keyword+'/gi'), "<span style='color: #f1414a'>"+keyword+"</span>");
            }
        }
    }
</script>

<style lang="scss" scoped>
    #knowledgeBase{
        height: 100%;
        .header{
            height: 70px;
            line-height: 70px;
            background-color: #fff;
            img{
                margin-left: 42px;
                margin-top: 20px;
            }
        }
        .section{
            height: calc(100% - 130px);
            padding: 30px;
            .left{
                width: 370px;
                padding: 0 20px 17px;
                ul{
                    margin-top: 25px;
                    li{
                        height: 38px;
                        line-height: 38px;
                        border: 1px solid transparent;
                        margin-bottom: 8px;
                        overflow: hidden;
                        h1{
                            background-color: #dbbe93;
                            color: #fff;
                            text-align: center;
                        }
                        img{
                            margin-top: 11px;
                            margin-left: 18px;
                        }
                        &:first-child{
                            border: 1px solid #c5966b;
                        }
                        &:not(:first-child){
                            padding: 0 12px;
                            cursor: pointer;
                        }
                        &:hover,&.current{
                            border: 1px solid #c5966b;
                        }
                    }
                }
            }
            .right{
                width: 1350px;
                padding: 0 40px 40px;
                header{
                    height: 80px;
                    line-height: 80px;
                    border-bottom: 1px solid #bfbfbf;
                    span{
                        font-size: 18px;
                        margin-right: 40px;
                    }
                    .el-input{
                        width: 320px;
                        margin-right: 50px;
                    }
                    .el-button{
                        margin-top: 20px;
                    }
                }
                section{
                    h5{
                        height: 50px;
                        line-height: 50px;
                        font-size: 18px;
                    }
                    ul{
                        li{
                            padding: 0 24px;
                            i{
                                width: 50px;
                                height: 50px;
                                line-height: 50px;
                                color: #409EFF;
                                font-size: 30px;
                            }
                            >div{
                                width: calc(100% - 50px);
                                h1{
                                    font-size: 18px;
                                    height: 50px;
                                    line-height: 50px;
                                }
                                p{
                                    font-size: 16px;
                                    line-height: 30px;
                                }
                                div{
                                    height: 50px;
                                    line-height: 50px;
                                    color: #8590a6;
                                    h3{
                                        margin-right: 20px;
                                        img{
                                            margin-top: 17px;
                                            margin-right: 10px;
                                        }
                                    }
                                    h4{
                                        margin-left: 90px;
                                    }
                                }
                            }
                            &:not(:last-child){
                                margin-bottom: 24px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
