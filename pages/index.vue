<template>
  <div>
    <!-- 幻灯片 开始 -->
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div
          v-for="banner in bannerList"
          :key="banner.id"
          class="swiper-slide"
          style="background: #040b1b"
        >
          <a :href="banner.linkUrl" target="_blank">
            <img :src="banner.imageUrl" :alt="banner.title" >
          </a>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white" />
      <div slot="button-prev" class="swiper-button-prev swiper-button-white" />
      <div slot="button-next" class="swiper-button-next swiper-button-white" />
    </div>
    <!-- 幻灯片 结束 -->
    <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门课程</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <!-- 热门课程 begin -->
              <ul id="bna" class="of">
                <li v-for="course in courseList" :key="course.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.cover"
                        :alt="course.title"
                        class="img-responsive my-cover-style"
                      >
                      <div class="cc-mask">
                        <router-link
                          :to="`/course/${course.id}`"
                          active-class="current"
                          exact
                        >
                          <a
                            title="开始学习"
                            class="comm-btn c-btn-1"
                          >开始 学习</a
                          >
                        </router-link>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10">
                      <router-link
                        :title="course.title"
                        :to="`/course/${course.id}`"
                        class="course-title fsize18 c-333"
                      >{{ course.title }}</router-link
                      >
                    </h3>
                    <section class="mt10 hLh20 of">
                      <span
                        :class="`fr jgTag ${
                          course.price > 0 ? 'bg-red' : 'bg-green'
                        }`"
                      >
                        <i class="c-fff fsize12 f-fA">{{
                          course.price > 0
                            ? '￥' + Number(course.price).toFixed(2)
                            : '免费'
                        }}</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">9634人学习</i>
                        |
                        <i class="c-999 f-fA">9634评论</i>
                      </span>
                    </section>
                  </div>
                </li>
              </ul>
              <!-- 热门课程 end -->
              <div class="clear" />
            </article>
            <section class="tac pt20">
              <a href="#" title="全部课程" class="comm-btn c-btn-2">全部课程</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">名师大咖</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="teacher in teacherList" :key="teacher.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <router-link
                        :to="`/teacher/${teacher.id}`"
                        active-class="current"
                        exact
                      >
                        <a :title="teacher.name">
                          <img :src="teacher.avatar" :alt="teacher.name" >
                        </a>
                      </router-link>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <router-link
                        :to="`/teacher/${teacher.id}`"
                        active-class="current"
                        exact
                      >
                        <a :title="teacher.name" class="fsize18 c-666">{{
                          teacher.name
                        }}</a>
                      </router-link>
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">{{ teacher.career }}</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p class="c-999 f-fA">
                        {{ teacher.intro }}
                      </p>
                    </div>
                  </section>
                </li>
              </ul>
              <div class="clear" />
            </article>
            <section class="tac pt20">
              <a href="#" title="全部讲师" class="comm-btn c-btn-2">全部讲师</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
    </div>
  </div>
</template>
<script>
import banner from '@/api/banner'
import index from '@/api/index'
export default {
  data() {
    return {
      swiperOption: {
        // 配置分页
        pagination: {
          el: '.swiper-pagination' // 分页的dom节点
        },
        // 配置导航
        navigation: {
          nextEl: '.swiper-button-next', // 下一页dom节点
          prevEl: '.swiper-button-prev' // 前一页dom节点
        }
      },
      bannerList: [],
      courseList: [],
      teacherList: []
    }
  },
  created() {
    this.getBannerList()
    this.getIndexList()
  },
  methods: {
    async getBannerList() {
      const { data: res } = await banner.getList()
      this.bannerList = res.data.list
    },
    async getIndexList() {
      const { data: res } = await index.getList()
      this.courseList = res.data.courseList
      this.teacherList = res.data.teacherList
    }
  }
}
</script>
<style>
.my-cover-style {
  width: 267.5px;
  height: 149.2px;
}
.bg-red {
  background-color: red;
}
</style>
