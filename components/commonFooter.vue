<template>
    <div class="footer-wrapper">
        <div class="footer">
            <div>
                <a href="https://cnodejs.org/rss" target="_blank">RSS</a>
                <span class="separation">|</span>
                <a href="https://github.com/cnodejs/nodeclub/" target="_blank">源码地址</a>
            </div>
            <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
            <p class="fade">
                服务器赞助商为&nbsp;
                <a href="http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=cnodejs&utm_medium=display&utm_content=yejiao&ytag=cnodejs_logo" target="_blank">
                    <img class="ucloud" src="https://dn-cnode.qbox.me/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" alt="ucloud">
                </a>
                ，存储赞助商为&nbsp;
                <a href="http://www.qiniu.com/?ref=cnode" target="_blank">
                    <img class="qiniu" src="https://dn-cnode.qbox.me/Fg0jtDIcTqVC049oVu5-sn6Om4NX" alt="七牛云存储">
                </a>
                &nbsp;，由&nbsp;
                <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank">
                    <img class="alinode" src="https://dn-cnode.qbox.me/FpMZk31PDyxkC8yStmMQL4XroaGD" alt="alinode">
                </a>
                &nbsp;提供应用性能服务。
            </p>
            <p>
                新手搭建 Node.js 服务器，推荐使用无需备案的
                <a class="link" href="https://www.digitalocean.com/?refcode=eba02656eeb3" target="_blank">DigitalOcean(https://www.digitalocean.com/)</a>
            </p>
            <p style="text-align: center;">
                <a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备18050116号</a>
            </p>
        </div>
    </div>
</template>

<style lang="stylus">
    .footer-wrapper
        background-color #ffffff
        font-size 14px
        .footer
            max-width 1400px
            margin 0 auto
            padding 20px 0
            color #ababab
            line-height 2em
            .separation
                margin 0 5px
            .fade
                display flex
                align-items center
                img
                    display block
                .ucloud
                    width 92px
                    height 18px
                .qiniu
                    width 115px
                    height 44px
                .alinode
                    width 166px
                    height 54px
            .link
                color #08c
    @media screen and (max-width: 980px)
        .footer-wrapper
            display none
</style>
