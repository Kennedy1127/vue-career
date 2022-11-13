<template>
  <header class="w-full">
    <div>
      <div class="h-16">
        <div
          class="flex items-center h-full px-8 max-[1000px]:px-4 border-b border-brand-grey-1"
        >
          <div
            class="p-[6px] hover:cursor-pointer min-[1000px]:hidden"
            @click="clickBars"
          >
            <font-awesome-icon icon="fa-solid fa-bars" />
          </div>
          <RouterLink
            :to="{ name: 'Home' }"
            class="flex items-center h-full text-2xl max-[400px]:text-lg pb-0.5 max-[1000px]:ml-4"
            data-text="nav-company"
          >
            <span class="b">A</span>
            <span class="r">u</span>
            <span class="y">s</span>
            <span class="b">t</span>
            <span class="g">i</span>
            <span class="r">n</span>
            <span class="text-text-grey pl-1"> Careers</span>
          </RouterLink>
          <nav class="h-full ml-12 max-[1000px]:hidden">
            <ul class="flex items-center h-full">
              <li
                v-for="item in items"
                :key="item"
                class="h-full ml-9 first:ml-0"
                data-text="nav-item"
              >
                <RouterLink
                  :to="{ name: item.url }"
                  class="flex items-center h-full text-sm text-text-grey hover:text-black"
                >
                  {{ item.title }}
                </RouterLink>
              </li>
            </ul>
          </nav>
          <div class="flex items-center h-full ml-auto">
            <ProfileImage v-if="isLoggedIn" data-test="profile-image" />
            <ActionButton
              v-else
              @click="userLogin"
              text="Sign in"
              data-test="action-button"
            />
          </div>
        </div>
      </div>
      <div
        v-if="!isHome || isLoggedIn"
        class="h-16 border-b border-brand-grey-1"
      >
        <SubNav data-test="sub-nav" />
      </div>
    </div>
    <div
      v-if="isShowBars"
      class="fixed top-0 left-0 w-screen h-screen bg-black opacity-40"
      @click="clickBackground"
    ></div>
    <div
      class="fixed top-0 left-0 w-[280px] max-[330px]:w-4/5 h-full bg-white responsive-navigation"
      ref="responsiveNavigation"
    >
      <div class="">
        <div class="h-16 border-b border-brand-grey-1">
          <div
            class="flex items-center h-full text-2xl max-[400px]:text-base tracking-wide ml-5"
          >
            <span class="b">A</span>
            <span class="r">u</span>
            <span class="y">s</span>
            <span class="b">t</span>
            <span class="g">i</span>
            <span class="r">n</span>
            <span class="text-text-grey pl-1"> Careers</span>
          </div>
        </div>
        <nav class="py-5">
          <ul class="flex flex-col h-full">
            <li
              v-for="item in items"
              :key="item"
              class="mb-8 first:mt-8"
              data-text="nav-item"
            >
              <RouterLink
                :to="{ name: item.url }"
                class="text-sm text-text-grey hover:text-black px-4 py-2"
              >
                {{ item.title }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import ActionButton from '@/components/shared/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import SubNav from '@/components/navigation/SubNav.vue';
import { useStoreAuth } from '@/stores/storeAuth';
import { useRoute } from 'vue-router';

// store route
const storeAuth = useStoreAuth();
const route = useRoute();
//

// route check
const isHome = computed(() => route.name === 'Home');
//

// navigations' items
const items = ref([
  {
    title: 'Teams',
    url: 'Teams',
  },
  {
    title: 'Locations',
    url: 'Locations',
  },
  {
    title: 'Benefits',
    url: 'Benefits',
  },
  {
    title: 'Jobs',
    url: 'JobResults',
  },
  {
    title: 'Students',
    url: 'Students',
  },
]);
//

// user is logged in or not
const isLoggedIn = computed(() => storeAuth.isLoggedIn);
const userLogin = () => storeAuth.userLogin();
//

// responsive bars
const isShowBars = ref(false);
const responsiveNavigation = ref(null);

const navigationIn = () => {
  responsiveNavigation.value.classList.remove('responsive-navigation-out');
  responsiveNavigation.value.classList.add('responsive-navigation-in');
};

const navigationOut = () => {
  responsiveNavigation.value.classList.remove('responsive-navigation-in');
  responsiveNavigation.value.classList.add('responsive-navigation-out');
};

const clickBars = () => {
  isShowBars.value = true;
  navigationIn();
};

const clickBackground = () => {
  isShowBars.value = false;
  navigationOut();
};

watch(route, () => {
  isShowBars.value = false;
  navigationOut();
});

//
</script>

<style scoped>
.b {
  color: #4285f4;
}

.r {
  color: #db4437;
}

.y {
  color: #f4b400;
}

.g {
  color: #0f9d58;
}

.responsive-navigation {
  transform: translateX(-100%);
  transition: 0.3s ease-in-out;
}
.responsive-navigation-in {
  transform: translateX(0%);
}

.responsive-navigation-out {
  transform: translateX(-100%);
}
</style>
