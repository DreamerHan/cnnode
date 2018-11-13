<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" :active-name="1"
                    @on-select="handleOnSelect"
                >
                    <div class="layout-logo">这里是Logo</div>
                    <div class="layout-nav">
                        <MenuItem :name="item.name" 
                            v-for="item of menu" 
                            :key="item.name" 
                            v-if="item.show"
                        >
                            <Icon type="ios-navigate"></Icon>{{item.title}}
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu width="auto" style="height:100%;"
                        @on-select="selectTab"
                        :active-name="activeTab"
                    >
                        <MenuItem :name="item.name" 
                            v-for="item of sliderMenu" 
                            :key="item.name"
                        >{{item.title}}</MenuItem>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '10px'}">
                    <Content :style="{background: '#fff'}">
                        <router-view @queryTab="getQuery"></router-view>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import menu from '@/mock/menu.js';
import sliderMenu from '@/mock/sideMenu.js';
export default {
    data(){
        return {
            menu,
            sliderMenu,
            activeTab : 'all'
        }
    },
    methods : {
        handleOnSelect(name){ //主菜单切换
            this.$router.push({
                name : name
            });
        },
        selectTab(name){ //副菜单类型切换
            this.$router.push({
                name : 'cnNode',
                query : {
                    tab : name,
                    page : 1
                }
            });
        },
        getQuery(query){
            this.activeTab = query.tab;
            this.$router.push({
                query : {
                    tab : query.tab,
                    page : query.page
                }
            })
        }
    }
}
</script>
<style lang="less">
    @import './layout.less';
</style>

