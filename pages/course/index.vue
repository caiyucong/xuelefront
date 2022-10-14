<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">课程类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a
                    title="全部"
                    href="#"
                    @click.prevent="
                      courseQuery = {}
                      current = 1
                      initCourse()
                      oneIndex = -1
                      subjceChildrentList = []
                    "
                  >全部</a
                  >
                </li>
                <li v-for="(subject, index) in subjcetList" :key="subject.id">
                  <a
                    :class="{ active: oneIndex == index }"
                    :title="subject.title"
                    href="#"
                    @click.prevent="getSubjceChildrentList(subject.id, index)"
                  >{{ subject.title }}</a
                  >
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14" />
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li
                  v-for="(subject, index) in subjceChildrentList"
                  :key="subject.id"
                >
                  <a
                    :title="subject.title"
                    :class="{ active: towIndex == index }"
                    href="#"
                    @click.prevent="
                      towIndex = index
                      courseQuery.subjectId = subject.id
                      initCourse()
                    "
                  >{{ subject.title }}</a
                  >
                </li>
              </ul>
            </dd>
          </dl>
          <div class="clear" />
        </section>
        <div class="js-wrap">
          <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">1</i>/
              <i class="c-666 f-fM">1</i>
            </span>
          </section>
          <section class="fl">
            <ol class="js-tap clearfix">
              <li
                :class="{
                  'current bg-orange': courseQuery.sort == 'buy_count'
                }"
              >
                <a
                  title="销量"
                  href="javascript:void(0);"
                  @click="courseSort('buy_count')"
                >销量
                  <span
                    :class="{ hide: courseQuery.sort != 'buy_count' }"
                  >↓</span
                  >
                </a>
              </li>
              <li
                :class="{
                  'current bg-orange': courseQuery.sort == 'gmt_modified'
                }"
              >
                <a
                  title="最新"
                  href="javascript:void(0);"
                  @click="courseSort('gmt_modified')"
                >最新
                  <span
                    :class="{ hide: courseQuery.sort != 'gmt_modified' }"
                  >↓</span
                  >
                </a>
              </li>
              <li :class="{ 'current bg-orange': courseQuery.sort == 'price' }">
                <a
                  title="价格"
                  href="javascript:void(0);"
                  @click="courseSort('price')"
                >价格&nbsp;
                  <span :class="{ hide: courseQuery.sort != 'price' }">↓</span>
                </a>
              </li>
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section v-if="data.records.length === 0" class="no-data-wrap">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span
              class="c-666 fsize14 ml10 vam"
            >没有相关数据，小编正在努力整理 中...</span
            >
          </section>
          <!-- /无数据提示 结束-->
          <article v-else class="comm-course-list">
            <ul id="bna" class="of">
              <li v-for="course in data.records" :key="course.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img
                      :alt="course.title"
                      :src="course.cover"
                      class="img-responsive"
                      style="width: 267.5px; height: 149.2px"
                    >
                    <div class="cc-mask">
                      <a
                        :href="`/course/${course.id}`"
                        title="开始学习"
                        class="comm-btn c-btn-1"
                      >开始学习</a
                      >
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a
                      :title="course.title"
                      :href="`/course/${course.id}`"
                      class="course-title fsize18 c-333"
                    >{{ course.title }}</a
                    >
                  </h3>
                  <section class="mt10 hLh20 of">
                    <span class="fr jgTag bg-green">
                      <i class="c-fff fsize12 f-fA">{{
                        course.price > 0
                          ? `￥${course.price.toFixed(2)}`
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
            <div class="clear" />
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="首页"
              @click.prevent="gotoPage(1)"
            >首</a
            >
            <a
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="前一页"
              @click.prevent="gotoPage(data.current - 1)"
            >&lt;</a
            >
            <a
              v-for="page in data.pages"
              :key="page"
              :class="{
                current: data.current == page,
                undisable: data.current == page
              }"
              :title="'第' + page + '页'"
              href="#"
              @click.prevent="gotoPage(page)"
            >{{ page }}</a
            >
            <a
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="后一页"
              @click.prevent="gotoPage(data.current + 1)"
            >&gt;</a
            >
            <a
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="末页"
              @click.prevent="gotoPage(data.pages)"
            >末</a
            >
            <div class="clear" />
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
import courseApi from '@/api/course'
export default {
  data() {
    return {
      subjcetList: [],
      subjceChildrentList: [],
      data: {
        records: []
      },
      current: 1,
      courseQuery: {
        sort: ''
      },
      oneIndex: -1,
      towIndex: -1
    }
  },
  created() {
    this.initCourse()
    this.initSubject()
  },
  methods: {
    async initCourse() {
      const { data: res } = await courseApi.getList(
        this.current,
        8,
        this.courseQuery
      )
      this.data = res.data
    },
    async initSubject() {
      const { data: res } = await courseApi.getSubjcetList()
      this.subjcetList = res.data.list
    },
    gotoPage(page) {
      this.current = page
    },
    getSubjceChildrentList(id, index) {
      this.courseQuery.subjectParentId = id
      delete this.courseQuery.subjectId
      this.towIndex = -1
      this.oneIndex = index
      this.initCourse()
      this.subjceChildrentList = this.subjcetList[index].children
    },
    courseSort(field) {
      this.courseQuery.sort = field
      this.initCourse()
    }
  }
}
</script>
<style>
.active {
  background: #bdbdbd;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>
