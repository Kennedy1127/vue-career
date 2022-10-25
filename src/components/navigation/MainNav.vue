<template>
  <header class="w-full">
    <div>
      <div class="flex items-center h-16 px-8 border-b border-brand-grey-1">
        <RouterLink to="#" class="flex items-center h-full text-2xl pb-0.5">
          <span class="b">A</span>
          <span class="r">u</span>
          <span class="y">s</span>
          <span class="b">t</span>
          <span class="g">i</span>
          <span class="r">n</span>
          <span class="text-text-grey pl-1">Careers</span>
        </RouterLink>
        <nav class="h-full ml-12">
          <ul class="flex items-center h-full">
            <li
              v-for="item in items"
              :key="item"
              class="h-full ml-9 first:ml-0"
            >
              <RouterLink
                :to="item.url"
                class="flex items-center h-full text-sm text-text-grey hover:text-black"
              >
                {{ item.title }}
              </RouterLink>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <ProfileImage v-if="isLoggedIn" />
          <ActionButton v-else @click="userLogin" text="Sign in" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed, ref } from 'vue';
import ActionButton from '@/components/shared/ActionButton.vue';
import ProfileImage from '@/components/navigation/ProfileImage.vue';
import { useStoreJobs } from '@/stores/storeJobs';

// store
const storeJobs = useStoreJobs();
//

// navigations' items
const items = ref([
  {
    title: 'Teams',
    url: '#',
  },
  {
    title: 'Locations',
    url: '#',
  },
  {
    title: 'Benefits',
    url: '#',
  },
  {
    title: 'Jobs',
    url: '#',
  },
  {
    title: 'Students',
    url: '#',
  },
]);
//

// user is logged in or not
const isLoggedIn = computed(() => storeJobs.isLoggedIn);
const userLogin = () => storeJobs.userLogin();
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
