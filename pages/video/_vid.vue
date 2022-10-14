<template>
  <div>
    <!-- 阿里云视频播放器样式 -->
    <link
      rel="stylesheet"
      href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css"
    >
    <!-- 阿里云视频播放器脚本 -->
    <script
      charset="utf-8"
      type="text/javascript"
      src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js"
    />
    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player" />
  </div>
</template>
<script>
import vod from '@/api/vod'
export default {
  layout: 'video', // 应用video布局
  asyncData({ params, error }) {
    return {
      vid: params.vid
    }
  },
  created() {
    this.getPlayAuth()
  },
  methods: {
    async getPlayAuth() {
      const resp = await vod.getPlayAuth(this.vid)
      if (resp) {
        const res = resp.data
        if (res.success) {
          this.playAuth = res.data.playAuth
          this.initAliplayer()
        } else {
          this.$message({
            message: '请购买之后观看',
            type: 'error'
          })
          this.$router.push({ path: `/course/${res.data.courseId}` })
        }
      } else {
        this.$router.push({ path: `/course/` })
      }
    },
    initAliplayer() {
      // eslint-disable-next-line no-undef
      new Aliplayer(
        {
          id: 'J_prismPlayer',
          vid: this.vid, // 视频id
          playauth: this.playAuth, // 播放凭证
          encryptType: '1', // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
          width: '100%',
          height: '500px'
        },
        function(player) {
          console.log('播放器创建成功')
        }
      )
    }
  }
}
</script>
