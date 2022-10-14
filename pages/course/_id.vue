<template>
  <div v-if="course.price != null" id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <section class="path-wrap txtOf hLh30">
        <a href="#" title class="c-999 fsize14">首页</a>
        \
        <a href="#" title class="c-999 fsize14">课程列表</a>
        \
        <span class="c-333 fsize14">{{ course.title }}</span>
      </section>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px">
          <section id="videoPlay" class="p-h-video-box">
            <img
              :src="course.cover"
              :alt="course.title"
              style="width: 640px; height: 357px"
              class="dis c-v-pic"
            >
          </section>
        </article>
        <aside class="c-attr-wrap">
          <section class="ml20 mr15">
            <h2 class="hLh30 txtOf mt15">
              <span class="c-fff fsize24">{{ course.title }}</span>
            </h2>
            <section class="c-attr-jg">
              <span class="c-fff">价格：</span>
              <b
                class="c-yellow"
                style="font-size: 24px"
              >￥{{ course.price.toFixed(2) }}</b
              >
            </section>
            <section class="c-attr-mt c-attr-undis">
              <span
                class="c-fff fsize14"
              >主讲： {{ course.teacher.name }}&nbsp;&nbsp;&nbsp;</span
              >
            </section>
            <section class="c-attr-mt of">
              <span class="ml10 vam">
                <em class="icon18 scIcon" />
                <a class="c-fff vam" title="收藏" href="#">收藏</a>
              </span>
            </section>
            <section class="c-attr-mt">
              <a
                :title="course.price > 0 ? '立即购买' : '立即观看'"
                href="#"
                class="comm-btn c-btn-3"
                @click.prevent="createOrders"
              >{{ course.price > 0 && !isBuy ? '立即购买' : '立即观看' }}</a
              >
            </section>
          </section>
        </aside>
        <aside class="thr-attr-box">
          <ol class="thr-attr-ol clearfix">
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">购买数</span>
                <br >
                <h6 class="c-fff f-fM mt10">{{ course.buyCount }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">课时数</span>
                <br >
                <h6 class="c-fff f-fM mt10">{{ course.lessonNum }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">浏览数</span>
                <br >
                <h6 class="c-fff f-fM mt10">{{ course.viewCount }}</h6>
              </aside>
            </li>
          </ol>
        </aside>
        <div class="clear" />
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section
                  id="c-i-tabTitle"
                  class="c-infor-tabTitle c-tab- title"
                >
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section
                      class="course-txt-body"
                      v-html="course.description"
                    />
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li
                            v-for="chapter in course.chapters"
                            :key="chapter.id"
                            class="lh-menu-stair"
                          >
                            <a
                              :title="chapter.title"
                              href="javascript: void(0)"
                              class="current-1"
                            >
                              <em class="lh-menu-i-1 icon18 mr10" />{{
                                chapter.title
                              }}
                            </a>
                            <ol class="lh-menu-ol" style="display: block">
                              <li
                                v-for="video in chapter.videos"
                                :key="video.id"
                                class="lh-menu-second ml30"
                              >
                                <a
                                  :href="'/video/' + video.videoSourceId"
                                  :title="video.title"
                                  target="_blank"
                                >
                                  <span class="fr">
                                    <i class="free-icon vam mr10">免费试听</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em
                                  >{{ video.title }}
                                </a>
                              </li>
                            </ol>
                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: auto">
                  <li>
                    <div class="u-face">
                      <a :href="`/teacher/${course.teacher.id}`">
                        <img
                          :src="course.teacher.avatar"
                          width="50"
                          height="50"
                          alt
                        >
                      </a>
                    </div>
                    <section class="hLh30 txtOf">
                      <a
                        :href="`/teacher/${course.teacher.id}`"
                        class="c-333 fsize16 fl"
                      >{{ course.teacher.name }}</a
                      >
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{ course.teacher.career }}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear" />
      </div>
    </section>

    <!-- /课程详情 结束 -->
  </div>
</template>
<script>
import courseApi from '@/api/course'
import order from '@/api/order'
export default {
  asyncData({ params, error }) {
    return { courseId: params.id }
  },
  data() {
    return {
      course: {},
      isBuy: false
    }
  },
  created() {
    this.initCourse()
  },
  methods: {
    async createOrders() {
      if (this.isBuy) {
        this.$router.push({
          path: `/video/${this.course.chapters[0].videos[0].videoSourceId}`
        })
        return
      }
      const { data: res } = await order.saveOrder(this.courseId)
      this.$router.push({ path: `/orders/` + res.data.orderId })
    },
    initCourse() {
      courseApi.getById(this.courseId).then(({ data: res }) => {
        this.course = res.data.course
        this.isBuy = res.data.isBuy
      })
    }
  }
}
</script>
