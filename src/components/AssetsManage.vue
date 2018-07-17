<template>
    <div id="assetsManage">
        <div class="breadcrumb" @click="dialogShow">投资管理 / 资产管理 / 我的基金</div>
        <ul class="title card clear">
            <li class="fl"><span>我的基金</span><img src="../assets/img/tag.png" alt=""></li>
            <li class="fl"><h1>5</h1><h2>投资基金总数量</h2></li>
            <li class="fl"><h1>200W投元</h1><h2>基金投资金额</h2></li>
            <li class="fl"><h1>234W企元</h1><h2>当前基金价值</h2></li>
            <li class="fl"><h1>43W增元</h1><h2>当前基金信誉</h2></li>
        </ul>
        <VuePerfectScrollbar v-if="true" v-scroll class="fund">
            <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title">
                        <ul class="fundList card clear">
                            <li class="fl"><button type="button">正在运作</button></li>
                            <li class="fl">中欧医院健康混合基金</li>
                            <li class="fl">发布机构：GPI</li>
                            <li class="fl">投资时间：2018-05-30</li>
                            <li class="fl">投资金额：<span>50W投元</span></li>
                            <li class="fl">当前投资：<span>65W投元</span></li>
                            <li class="fl">当前信誉：<span>14W增元</span></li>
                            <li class="fl"><button class="current" type="button">项目</button><button type="button">LP</button></li>
                        </ul>
                    </template>
                    <div class="fund_content_container card">
                        <div class="fund_content project_content">
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                        </div>
                        <div class="fund_content LP_content">
                            <ul class="card clear">
                                <li class="fl"><img src="../assets/img/chat_icon.png" alt=""></li>
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">LP名称：张三</li>
                                <li class="fl">类别：个人</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                        </div>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <ul class="fundList card clear">
                            <li class="fl"><button type="button">正在运作</button></li>
                            <li class="fl">中欧医院健康混合基金</li>
                            <li class="fl">发布机构：GPI</li>
                            <li class="fl">投资时间：2018-05-30</li>
                            <li class="fl">投资金额：<span>50W投元</span></li>
                            <li class="fl">当前投资：<span>65W投元</span></li>
                            <li class="fl">当前信誉：<span>14W增元</span></li>
                            <li class="fl"><button class="current" type="button">项目</button><button type="button">LP</button></li>
                        </ul>
                    </template>
                    <div class="fund_content_container card">
                        <div class="fund_content project_content">
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                        </div>
                        <div class="fund_content LP_content">
                            <ul class="card clear">
                                <li class="fl"><img src="../assets/img/chat_icon.png" alt=""></li>
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">LP名称：张三</li>
                                <li class="fl">类别：个人</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                        </div>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <ul class="fundList card clear">
                            <li class="fl"><button type="button">正在运作</button></li>
                            <li class="fl">中欧医院健康混合基金</li>
                            <li class="fl">发布机构：GPI</li>
                            <li class="fl">投资时间：2018-05-30</li>
                            <li class="fl">投资金额：<span>50W投元</span></li>
                            <li class="fl">当前投资：<span>65W投元</span></li>
                            <li class="fl">当前信誉：<span>14W增元</span></li>
                            <li class="fl"><button class="current" type="button">项目</button><button type="button">LP</button></li>
                        </ul>
                    </template>
                    <div class="fund_content_container card">
                        <div class="fund_content project_content">
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                        </div>
                        <div class="fund_content LP_content">
                            <ul class="card clear">
                                <li class="fl"><img src="../assets/img/chat_icon.png" alt=""></li>
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">LP名称：张三</li>
                                <li class="fl">类别：个人</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                        </div>
                    </div>
                </el-collapse-item>
                <el-collapse-item>
                    <template slot="title">
                        <ul class="fundList card clear">
                            <li class="fl"><button type="button">正在运作</button></li>
                            <li class="fl">中欧医院健康混合基金</li>
                            <li class="fl">发布机构：GPI</li>
                            <li class="fl">投资时间：2018-05-30</li>
                            <li class="fl">投资金额：<span>50W投元</span></li>
                            <li class="fl">当前投资：<span>65W投元</span></li>
                            <li class="fl">当前信誉：<span>14W增元</span></li>
                            <li class="fl"><button class="current" type="button">项目</button><button type="button">LP</button></li>
                        </ul>
                    </template>
                    <div class="fund_content_container card">
                        <div class="fund_content project_content">
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                            <ul class="card clear">
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">项目名称：项目1</li>
                                <li class="fl">xxxxxx企业名称1</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                        </div>
                        <div class="fund_content LP_content">
                            <ul class="card clear">
                                <li class="fl"><img src="../assets/img/chat_icon.png" alt=""></li>
                                <li class="fl gray">2017.03.30</li>
                                <li class="fl">LP名称：张三</li>
                                <li class="fl">类别：个人</li>
                                <li class="fl">投资金额：50W投元</li>
                                <li class="fl">当前价值：65W投元</li>
                                <li class="fl">当前信誉：14W增元</li>
                            </ul>
                        </div>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </VuePerfectScrollbar>
        <VuePerfectScrollbar v-if="false" v-scroll class="equity">
            <ul class="card clear stop">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl">中欧医院健康混合项目</li>
                <li class="fl">企业名称：蓝蚂蚁有限科技公司</li>
                <li class="fl">投资时间：2018-05-30</li>
                <li class="fl">投资金额：<span>50W投元</span></li>
                <li class="fl">当前投资：<span>65W投元</span></li>
                <li class="fl">当前信誉：<span>14W增元</span></li>
                <li class="fl"><button type="button">交易</button></li>
            </ul>
            <ul class="card clear">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl">中欧医院健康混合项目</li>
                <li class="fl">企业名称：蓝蚂蚁有限科技公司</li>
                <li class="fl">投资时间：2018-05-30</li>
                <li class="fl">投资金额：<span>50W投元</span></li>
                <li class="fl">当前投资：<span>65W投元</span></li>
                <li class="fl">当前信誉：<span>14W增元</span></li>
                <li class="fl"><button type="button">交易</button></li>
            </ul>
            <ul class="card clear stop">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl">中欧医院健康混合项目</li>
                <li class="fl">企业名称：蓝蚂蚁有限科技公司</li>
                <li class="fl">投资时间：2018-05-30</li>
                <li class="fl">投资金额：<span>50W投元</span></li>
                <li class="fl">当前投资：<span>65W投元</span></li>
                <li class="fl">当前信誉：<span>14W增元</span></li>
                <li class="fl"><button type="button">交易</button></li>
            </ul>
            <ul class="card clear">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl">中欧医院健康混合项目</li>
                <li class="fl">企业名称：蓝蚂蚁有限科技公司</li>
                <li class="fl">投资时间：2018-05-30</li>
                <li class="fl">投资金额：<span>50W投元</span></li>
                <li class="fl">当前投资：<span>65W投元</span></li>
                <li class="fl">当前信誉：<span>14W增元</span></li>
                <li class="fl"><button type="button">交易</button></li>
            </ul>
            <ul class="card clear stop">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl">中欧医院健康混合项目</li>
                <li class="fl">企业名称：蓝蚂蚁有限科技公司</li>
                <li class="fl">投资时间：2018-05-30</li>
                <li class="fl">投资金额：<span>50W投元</span></li>
                <li class="fl">当前投资：<span>65W投元</span></li>
                <li class="fl">当前信誉：<span>14W增元</span></li>
                <li class="fl"><button type="button">交易</button></li>
            </ul>
            <ul class="card clear">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl">中欧医院健康混合项目</li>
                <li class="fl">企业名称：蓝蚂蚁有限科技公司</li>
                <li class="fl">投资时间：2018-05-30</li>
                <li class="fl">投资金额：<span>50W投元</span></li>
                <li class="fl">当前投资：<span>65W投元</span></li>
                <li class="fl">当前信誉：<span>14W增元</span></li>
                <li class="fl"><button type="button">交易</button></li>
            </ul>
            <ul class="card clear stop">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl">中欧医院健康混合项目</li>
                <li class="fl">企业名称：蓝蚂蚁有限科技公司</li>
                <li class="fl">投资时间：2018-05-30</li>
                <li class="fl">投资金额：<span>50W投元</span></li>
                <li class="fl">当前投资：<span>65W投元</span></li>
                <li class="fl">当前信誉：<span>14W增元</span></li>
                <li class="fl"><button type="button">交易</button></li>
            </ul>
        </VuePerfectScrollbar>
        <VuePerfectScrollbar v-if="false" v-scroll class="project">
            <ul class="card clear">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl"><h1>生态渔业产业融资项目</h1><el-progress color="#e0c099" :percentage="70"></el-progress></li>
                <li class="fl"><h2>300W投元</h2><h3>投资金额</h3></li>
                <li class="fl"><h2>65W投元</h2><h3>当前价值</h3></li>
                <li class="fl"><h2>14W投元</h2><h3>当前信誉</h3></li>
                <li class="fl"><h2>2018-09-09</h2><h3>发布时间</h3></li>
                <li class="fl"><button type="button">项目管理</button></li>
            </ul>
            <ul class="card clear stop">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl"><h1>生态渔业产业融资项目</h1><el-progress color="#e0c099" :percentage="70"></el-progress></li>
                <li class="fl"><h2>300W投元</h2><h3>投资金额</h3></li>
                <li class="fl"><h2>65W投元</h2><h3>当前价值</h3></li>
                <li class="fl"><h2>14W投元</h2><h3>当前信誉</h3></li>
                <li class="fl"><h2>2018-09-09</h2><h3>发布时间</h3></li>
                <li class="fl"><button type="button">项目管理</button></li>
            </ul>
            <ul class="card clear">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl"><h1>生态渔业产业融资项目</h1><el-progress color="#e0c099" :percentage="70"></el-progress></li>
                <li class="fl"><h2>300W投元</h2><h3>投资金额</h3></li>
                <li class="fl"><h2>65W投元</h2><h3>当前价值</h3></li>
                <li class="fl"><h2>14W投元</h2><h3>当前信誉</h3></li>
                <li class="fl"><h2>2018-09-09</h2><h3>发布时间</h3></li>
                <li class="fl"><button type="button">项目管理</button></li>
            </ul>
            <ul class="card clear stop">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl"><h1>生态渔业产业融资项目</h1><el-progress color="#e0c099" :percentage="70"></el-progress></li>
                <li class="fl"><h2>300W投元</h2><h3>投资金额</h3></li>
                <li class="fl"><h2>65W投元</h2><h3>当前价值</h3></li>
                <li class="fl"><h2>14W投元</h2><h3>当前信誉</h3></li>
                <li class="fl"><h2>2018-09-09</h2><h3>发布时间</h3></li>
                <li class="fl"><button type="button">项目管理</button></li>
            </ul>
            <ul class="card clear">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl"><h1>生态渔业产业融资项目</h1><el-progress color="#e0c099" :percentage="70"></el-progress></li>
                <li class="fl"><h2>300W投元</h2><h3>投资金额</h3></li>
                <li class="fl"><h2>65W投元</h2><h3>当前价值</h3></li>
                <li class="fl"><h2>14W投元</h2><h3>当前信誉</h3></li>
                <li class="fl"><h2>2018-09-09</h2><h3>发布时间</h3></li>
                <li class="fl"><button type="button">项目管理</button></li>
            </ul>
            <ul class="card clear stop">
                <li class="fl"><button type="button">正在运作</button></li>
                <li class="fl"><h1>生态渔业产业融资项目</h1><el-progress color="#e0c099" :percentage="70"></el-progress></li>
                <li class="fl"><h2>300W投元</h2><h3>投资金额</h3></li>
                <li class="fl"><h2>65W投元</h2><h3>当前价值</h3></li>
                <li class="fl"><h2>14W投元</h2><h3>当前信誉</h3></li>
                <li class="fl"><h2>2018-09-09</h2><h3>发布时间</h3></li>
                <li class="fl"><button type="button">项目管理</button></li>
            </ul>
        </VuePerfectScrollbar>
        <div class="dialog_wrapper" v-show="dialogWrapperVisible" @click="dialogHide">
            <transition name="el-zoom-in-bottom">
                <div class="dialog card clear" v-show="dialogVisible">
                    <div class="left fl">
                        <div class="chart" ref="left_top" style="margin-bottom: 10px"></div>
                        <div class="chart" ref="left_bottom"></div>
                    </div>
                    <div class="right fr">
                        <el-table
                            class="tableList"
                            header-cell-class-name="tableCell"
                            :data="tableData"
                            style="width: 100%">
                            <el-table-column label="ID" width="100">
                                <template slot-scope="scope"><strong>{{ scope.row.id }}</strong></template>
                            </el-table-column>
                            <el-table-column label="事件">
                                <template slot-scope="scope">
                                    <h1><img :src="scope.row.event.img" alt=""><span>{{scope.row.event.value}}</span></h1>
                                </template>
                            </el-table-column>
                            <el-table-column prop="date" label="时间"></el-table-column>
                            <el-table-column label="认证机构">
                                <template slot-scope="scope">
                                    <h2 v-for="i in scope.row.organization"><img :src="i.img" alt=""><span>{{i.value}}</span></h2>
                                </template>
                            </el-table-column>
                            <el-table-column label="资料">
                                <template slot-scope="scope">
                                    <h3 v-for="i in scope.row.data" class="clear">
                                        <span class="fl">{{i.value}}</span>
                                        <img class="fr" :src="i.status === 'open' ? imgUrl.open_lock : imgUrl.close_lock" alt="">
                                    </h3>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    import event_img from '../assets/img/event_img.png'
    import firm from '../assets/img/firm.png'
    import AMAC from '../assets/img/AMAC.png'
    import certification from '../assets/img/certification.png'
    import open_lock from '../assets/img/open_lock.png'
    import close_lock from '../assets/img/close_lock.png'
    import VuePerfectScrollbar from 'vue-perfect-scrollbar'

    export default {
        name: "AssetsManage",
        components: {VuePerfectScrollbar},
        data() {
            return{
                imgUrl: {
                    open_lock: open_lock,
                    close_lock: close_lock
                },
                dialogWrapperVisible: false,
                dialogVisible: false,
                tableData: [
                    {
                        id: '1',
                        event: {
                            value: 'xxxxxxx基金发布',
                            img: event_img
                        },
                        date: '2016-05-02',
                        organization: [
                            {
                                value: '会计事务所',
                                img: firm
                            },
                            {
                                value: '中基协',
                                img: AMAC
                            },
                            {
                                value: '认证中心',
                                img: certification
                            }
                        ],
                        data: [
                            {
                                value: '备案材料.doc',
                                status: 'open'
                            },
                            {
                                value: '备案材料.doc',
                                status: 'close'
                            },
                            {
                                value: '备案材料.doc',
                                status: 'close'
                            }
                        ]
                    },
                    {
                        id: '1',
                        event: {
                            value: 'xxxxxxx基金发布',
                            img: event_img
                        },
                        date: '2016-05-02',
                        organization: [
                            {
                                value: '会计事务所',
                                img: firm
                            },
                            {
                                value: '中基协',
                                img: AMAC
                            },
                            {
                                value: '认证中心',
                                img: certification
                            }
                        ],
                        data: [
                            {
                                value: '备案材料.doc',
                                status: 'open'
                            },
                            {
                                value: '备案材料.doc',
                                status: 'close'
                            },
                            {
                                value: '备案材料.doc',
                                status: 'close'
                            }
                        ]
                    },
                    {
                        id: '1',
                        event: {
                            value: 'xxxxxxx基金发布',
                            img: event_img
                        },
                        date: '2016-05-02',
                        organization: [
                            {
                                value: '会计事务所',
                                img: firm
                            },
                            {
                                value: '中基协',
                                img: AMAC
                            },
                            {
                                value: '认证中心',
                                img: certification
                            }
                        ],
                        data: [
                            {
                                value: '备案材料.doc',
                                status: 'open'
                            },
                            {
                                value: '备案材料.doc',
                                status: 'close'
                            },
                            {
                                value: '备案材料.doc',
                                status: 'close'
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            lineChart(dom,color) {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(dom);
                // 图表配置项
                let option = {
                    title: {
                        text: '基金最近交易单价趋势',
                        textStyle: {
                            color: '#333',
                            fontSize: 16
                        },
                        top: 10,
                        left: 10
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['基金单价'],
                        right: 10,
                        top: 10
                    },
                    grid: {
                        left: 10,
                        right: 20,
                        bottom: 10,
                        containLabel: true
                    },
                    xAxis:  {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    color: [color],
                    series: [
                        {
                            name: '基金单价',
                            type: 'line',
                            data: [11, 11, 15, 13, 12, 13, 10],
                            markPoint: {
                                data: [
                                    {type: 'max', name: '最大值'}
                                ]
                            }
                        }
                    ]
                };
                // 绘制图表
                myChart.setOption(option);
            },
            dialogShow() {
                this.dialogVisible = true;
                this.dialogWrapperVisible = true;
            },
            dialogHide() {
                this.dialogVisible = false;
                let timer = setTimeout(()=>{
                    this.dialogWrapperVisible = false;
                    clearInterval(timer);
                },100);
            }
        },
        mounted() {
            this.lineChart(this.$refs.left_top,'#fe6f67');
            this.lineChart(this.$refs.left_bottom,'#475dff');
        }
    }
</script>

<style lang='scss' scoped>
    #assetsManage{
        height: 100%;
        .breadcrumb{
            height: 40px;
            line-height: 40px;
        }
        .title{
            height: 120px;
            border-right: 30px solid #4e9ffa;
            text-align: center;
            padding: 20px 0;
            margin-bottom: 20px;
            li{
                span{
                    font-size: 30px;
                    line-height: 120px;
                }
                img{
                    margin-top: 46px;
                    margin-left: 40px;
                }
                h1{
                    font-size: 24px;
                    color: #ff4b30;
                    height: 50px;
                    line-height: 50px;
                }
                h2{
                    font-size: 20px;
                    color: #666;
                    height: 40px;
                    line-height: 40px;
                }
                &:not(:first-child){
                    height: 90px;
                    width: 324px;
                    border-left: 1px solid #e6e6e6;
                    padding: 15px 0;
                }
                &:first-child{
                    width: 430px;
                }
            }
        }
        .fund{
            height: calc(100% - 220px);
            .fundList{
                padding: 0 10px;
                height: 86px;
                line-height: 86px;
                li{
                    width: 255px;
                    text-align: center;
                    span{
                        font-size: 16px;
                        color: #ff4b30;
                    }
                    &:first-child{
                        width: 90px;
                        button{
                            width: 90px;
                            height: 60px;
                            border-radius: 4px;
                            background: linear-gradient(to right, #feb872, #fe6f67);
                            color: #fff;
                        }
                    }
                    &:last-child{
                        width: 96px;
                        button{
                            width: 48px;
                            height: 40px;
                            background: #e3e2e2;
                            color: #fff;
                            &.current{
                                background: #d3b085;
                            }
                            &:first-child{
                                border-top-left-radius: 4px;
                                border-bottom-left-radius: 4px;
                            }
                            &:last-child{
                                border-top-right-radius: 4px;
                                border-bottom-right-radius: 4px;
                            }
                        }
                    }
                }
                &.stop{
                    li{
                        span{
                            color: #3e76ff;
                        }
                        &:first-child{
                            button{
                                background: linear-gradient(to right, #08cefd, #4659fd);
                            }
                        }
                    }
                }
            }
            .fund_content_container{
                padding: 20px 40px;
                background-color: #fff;
                .fund_content{
                    border: 1px solid #c4966c;
                    border-radius: 6px;
                    overflow: hidden;
                    padding: 11px;
                    ul{
                        height: 40px;
                        line-height: 40px;
                        &:not(:last-child){
                            margin-bottom: 8px;
                        }
                        li.gray{
                            color: #ccc;
                        }
                    }
                    &.project_content{
                        li{
                            width: 276px;
                            text-align: center;
                        }
                    }
                    &.LP_content{
                        li{
                            text-align: center;
                            width: 267px;
                            img{
                                margin-top: 7px;
                            }
                            &:first-child{
                                width: 54px;
                            }
                        }
                    }
                }
            }
        }
        .equity{
            height: calc(100% - 220px);
            ul{
                padding: 0 10px;
                height: 86px;
                line-height: 86px;
                li{
                    width: 259px;
                    text-align: center;
                    span{
                        font-size: 16px;
                        color: #ff4b30;
                    }
                    &:first-child{
                        width: 90px;
                        button{
                            width: 90px;
                            height: 60px;
                            border-radius: 4px;
                            background: linear-gradient(to right, #feb872, #fe6f67);
                            color: #fff;
                        }
                    }
                    &:last-child{
                        width: 96px;
                        button{
                            width: 96px;
                            height: 40px;
                            border-radius: 4px;
                            background: linear-gradient(to right, #ddc095, #c49469);
                            color: #fff;
                        }
                    }
                }
                &.stop{
                    li{
                        span{
                            color: #3e76ff;
                        }
                        &:first-child{
                            button{
                                background: linear-gradient(to right, #08cefd, #4659fd);
                            }
                        }
                    }
                }
            }
        }
        .project{
            height: calc(100% - 220px);
            ul{
                padding: 13px 10px;
                height: 60px;
                line-height: 60px;
                li{
                    width: 276px;
                    h2{
                        height: 30px;
                        line-height: 30px;
                        font-size: 16px;
                        color: #ff4b30;
                        text-align: center;
                    }
                    h3{
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                    }
                    &:first-child{
                        width: 90px;
                        button{
                            width: 90px;
                            height: 60px;
                            border-radius: 4px;
                            background: linear-gradient(to right, #feb872, #fe6f67);
                            color: #fff;
                        }
                    }
                    &:nth-child(2){
                        width: 420px;
                        padding-left: 30px;
                        h1{
                            height: 40px;
                            line-height: 40px;
                            font-size: 16px;
                        }
                    }
                    &:last-child{
                        width: 96px;
                        button{
                            width: 96px;
                            height: 40px;
                            border-radius: 4px;
                            background: linear-gradient(to right, #ddc095, #c49469);
                            color: #fff;
                        }
                    }
                }
                &.stop{
                    li{
                        h2{
                            color: #3e76ff;
                        }
                        &:first-child{
                            button{
                                background: linear-gradient(to right, #08cefd, #4659fd);
                            }
                        }
                    }
                }
            }
        }
        .dialog_wrapper{
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 2000;
            .dialog{
                width: 1720px;
                height: 410px;
                position: absolute;
                bottom: 10px;
                right: 30px;
                border: 1px solid #c5976c;
                border-radius: 6px;
                padding: 9px 19px;
                .left{
                    width: 610px;
                    .chart{
                        width: 602px;
                        height: 192px;
                        border: 4px solid #f9f9f9;
                    }
                }
                .right{
                    width: 1090px;
                    .tableList{
                        strong{
                            display: inline-block;
                            width: 32px;
                            height: 32px;
                            line-height: 32px;
                            text-align: center;
                            color: #fff;
                            background-color: #fe7668;
                            border-radius: 4px;
                        }
                        h1{
                            height: 44px;
                            line-height: 44px;
                            img{
                                width: 44px;
                                height: 44px;
                                margin-right: 10px;
                            }
                        }
                        h2{
                            height: 30px;
                            line-height: 30px;
                            img{
                                width: 24px;
                                height: 24px;
                                margin-top: 3px;
                                margin-right: 10px;
                            }
                        }
                        h3{
                            height: 30px;
                            line-height: 30px;
                            img{
                                margin-top: 4px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>

<style lang="scss">
    #assetsManage{
        .el-collapse{
            border: none;
            .el-collapse-item{
                &:not(:last-child){
                    margin-bottom: 16px;
                }
                .el-collapse-item__header{
                    height: 86px;
                    line-height: 86px;
                    background-color: transparent;
                    border-bottom: none;
                }
                .el-collapse-item__arrow{
                    margin-top: 19px;
                }
                .el-collapse-item__wrap{
                    background-color: transparent;
                    border-bottom: none;
                    width: 100%;
                }
                .el-collapse-item__content{
                    padding-bottom: 0;
                    padding-top: 16px;
                }
            }
        }
        .tableCell{
            background-color: #fafafa;
            color: #c4956a;
        }
    }
</style>
