<template>
  <div
    class="lg:max-w-[730px] sm:max-w-[608px] max-w-[327px] flex flex-col sm:flex-row bg-white rounded-[0.625rem] shadow-[0px_40px_40px_-10px_rgba(201,213,225,0.5)] sm:gap-8 lg:gap-0"
  >
    <div
      class="lg:max-w-[285px] sm:max-w-[229px] w-full bg-[image:var(--image-url)] bg-no-repeat bg-cover sm:rounded-l-[0.625rem] rounded-t-[0.625rem] overflow-hidden sm:overflow-auto mb-8 sm:mb-0"
      :style="{ '--image-url': `url('${imgUrl}')` }"
    >
      <img :src="imgUrl" alt="" class="sm:hidden" />
    </div>
    <div
      class="relative flex flex-col gap-6 font-manrope lg:py-[1.875rem] sm:py-10 sm:pr-[2.25rem] lg:px-[2.5rem]"
    >
      <div
        class="text-design-grey-900 text-xl leading-[1.3] font-bold tracking-[0.25px] px-[1.875rem] sm:px-0"
      >
        {{ title }}
      </div>

      <div
        class="text-[0.8125rem] text-design-grey-500 font-medium leading-[1.4] tracking-[0.016px] px-[1.875rem] sm:px-0"
      >
        {{ content }}
      </div>
      <div
        class="flex items-center justify-between relative px-[1.875rem] py-[18px] sm:pb-0 sm:px-0"
      >
        <!-- 個人資料 -->
        <div class="flex items-center gap-4">
          <div class="max-w-[2.5rem] max-h-[2.5rem] rounded-full overflow-hidden">
            <img :src="authorUrl" alt="" />
          </div>
          <div class="flex flex-col text-[0.8125rem] leading-[1.4] tracking-[0.016px]">
            <div class="font-bold">{{ name }}</div>
            <div class="font-medium">{{ date }}</div>
          </div>
        </div>

        <!-- 分享路徑 -->
        <div class="sm:relative">
          <transition-group name="shareCard">
            <div
              class="sm:py-[1.125rem] sm:px-[2.5rem] bg-design-grey-900 rounded-[0.625rem] absolute sm:-top-[250%] sm:-left-[400%] sm:bottom-auto left-0 bottom-0 w-full h-full flex items-center px-[2rem] sm:w-auto sm:h-auto"
              v-if="showShare"
            >
              <div
                class="w-0 h-0 border-l-[0.75rem] border-l-transparent border-r-[0.75rem] border-r-transparent border-t-[0.75rem] border-t-design-grey-900 absolute -bottom-[0.75rem] left-1/2 hidden sm:block"
              ></div>
              <div class="flex gap-6">
                <div class="font-Manrope tracking-[3.25px] uppercase text-design-grey-400">
                  SHARE
                </div>

                <div class="flex items-center gap-[1rem]">
                  <a
                    class="w-5 h-5 flex justify-center items-center hover:opacity-50"
                    :href="links.facebook"
                  >
                    <img src="../assets/images/icon-facebook.svg" alt="" />
                  </a>

                  <a
                    class="w-5 h-5 flex justify-center items-center hover:opacity-50"
                    :href="links.twitter"
                  >
                    <img src="../assets/images/icon-twitter.svg" alt="" />
                  </a>

                  <a
                    class="w-5 h-5 flex justify-center items-center hover:opacity-50"
                    :href="links.pinterest"
                  >
                    <img src="../assets/images/icon-pinterest.svg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </transition-group>
          <a
            class="w-8 h-8 rounded-full relative flex items-center justify-center cursor-pointer"
            @click="showShareBox"
          >
            <div
              class="bg-design-grey-200 w-full h-full rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"
            ></div>
            <img src="../assets/images/icon-share.svg" class="relative z-[2]" alt="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showShare = ref(false)

const props = defineProps({
  title: String,
  content: String,
  name: String,
  date: String,
  imgName: String,
  authorImg: String,
  links: Object,
})

const showShareBox = () => {
  showShare.value = !showShare.value
}
const imgUrl = computed(() => {
  return new URL(`/src/assets/images/${props.imgName}`, import.meta.url).href
})
const authorUrl = computed(() => {
  return new URL(`/src/assets/images/${props.authorImg}`, import.meta.url).href
})
</script>

<style scoped>
.shareCard-leave-active,
.shareCard-enter-active {
  transition: all 0.5s ease;
}
.shareCard-enter-from {
  transform: translateY(50%);
  opacity: 0;
}

.shareCard-enter-to {
  transform: translatey(0%);
  opacity: 1;
}

.shareCard-leave-from {
  transform: translateY(0%);
  opacity: 1;
}

.shareCard-leave-to {
  transform: translateY(-50%);
  opacity: 0;
}
</style>
