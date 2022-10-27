<template>
  <header class="w-full">
    <div>
      <div class="h-16">
        <div class="flex items-center h-full px-8 border-b border-brand-grey-1">
          <RouterLink
            :to="{ name: 'Home' }"
            class="flex items-center h-full text-2xl pb-0.5"
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
          <nav class="h-full ml-12">
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
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
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
</style>
