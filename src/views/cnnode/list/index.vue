<template>
    <div>
        <Spin size="large" fix v-if="isLoading"></Spin>
        <div id="topic_list">
            <div class="cell" v-for="item of list" :Key="item.id">
                <a class="user_avatar pull_left">
                    <img :src="item.author.avatar_url" :alt="item.author.loginname">
                </a>
                
                <span class="reply_count pull_left">
                    <span class="count_of_replies">{{item.reply_count}}</span>
                    <span class="count_seperator">/</span>
                    <span class="count_of_clicks">{{item.visit_count}}</span>
                </span>

                <a class="last_time pull_right">
                    <img class="user_avatar_small" :src="item.author.avatar_url" :alt="item.author.loginname">
                    <span class="last_active_time">16天前</span>
                </a>

                <div class="topic_title_wraper" @click="checkDetail(item)">
                    <span :class="articleClass(item).class">{{articleClass(item).title}}</span>
                    <a class="topic_title">{{item.title}}</a>
                </div>
            </div>
        </div>
        <div class="txt-right pad_V10">
            <Page :total="100" :current="page" :page-size="limit" 
                show-elevator 
                show-sizer
                @on-change="changePage"
            />
        </div>
    </div>
</template>
<script>
import {getTopic} from '@/server';
export default {
    data(){
        return {
            isLoading : true,
            list : [],
            limit : 10,
            page : 1,
            tab : ''
        }
    },
    watch : {
        $route : {
            handler : 'query',
            immediate : true
        }
    },
    methods: {
        query(){
            this.isLoading = true;

            let {tab = 'all', page = 1} = this.$route.query;
            
            if( this.tab !== tab ){
                
                this.page = 1;
            }
            this.tab = tab;
            this.page = parseInt(page);

            let params = {
                page : this.page,
                tab : tab,
                limit : this.limit
            }

            getTopic(params).then( (data) => {
                this.isLoading = false;
                this.list = data;
            } );
        },
        articleClass(item){
            let result = { class : 'topiclist_tab' };
            if( item.top ){
                result = {
                    class : 'put_top',
                    title : '置顶'
                }
            }else if( !item.top && item.good ){
                result = {
                    class : 'put_good',
                    title : '精华'
                }
            }else{
                let json = {title : ''};
                switch( item.tab ){
                    case 'share' : 
                        json.title = '分享';
                        break;
                    case 'ask' : 
                        json.title = '问答';
                        break;
                    case 'job' : 
                        json.title = '招聘'
                        break;
                }
                result = Object.assign( result, json );
            }

            return result;
        },
        checkDetail(target){
            this.$router.push({
                name : 'Article', 
                params : {
                    articleId : target.id
                }
            });
        },
        changePage(page){
            this.page = page;
            this.$router.push({
                query : {
                    ...this.$route.query,
                    page : page
                }
            })
            this.query();
        }
    },
    mounted(){
        let {tab = 'all', page = "1"} = this.$route.query;
        this.$emit('queryTab', {tab, page});
    }
}
</script>

<style lang="less">
    @import './list.less';
</style>
