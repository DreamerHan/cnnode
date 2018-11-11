<template>
  <div class="content-main">
    <Spin size="large" fix v-show="loading"></Spin>
    <div  class="main-article">
      <div v-show="false" id="myChart" :style="{width: '100%', height: '100%'}"></div>
      <div v-if="true">
        <h1>{{content.title}}</h1>
        <div class="mian-info">
          <span>发布于 8 个月前</span>  
          <span> 作者 i5ting  </span>
          <span>35646 次浏览</span>  
          <span>最后一次编辑是 7 个月前</span>  
          <span>来自 分享</span>
        </div>
        <div  class="article">
          <markdown-html v-html='html'></markdown-html>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import MarkdownHtml from './html'
  export default {
    components: {MarkdownHtml},
    data(){
      return {
        html: '',
        content: {
          title : ''
        },
        loading: true
      }
    },
  }
</script>

<style lang="less">
.content-main{ 
  height: 100%;
  left :22%;
  right: 0;
  z-index: 1;  

  .main-top {
    width: 100%;
    height: 44px;
    line-height: 32px;
    z-index: 100;
    overflow: hidden;
    top :0;
    border-bottom :1px solid #ddd;
    text-align: center;
    line-height: 44px;
  }
  .main-article{
    box-sizing: border-box;

    top: 45px;
    bottom: 0;
    width :100%;
    height :100%;
    padding :30px;
    background-color :#fff;
    overflow-y: auto;
    h1{
      padding-top: 20px;
    }
  }
  .mian-info{
    font-size: 12px;
    color: #838383;
    padding: 10px 0;
    
    span:before{
      content: "•"
    }
  }
  .article{
    border-top: bt ;
    padding-top :10px;
  }
}
</style>

