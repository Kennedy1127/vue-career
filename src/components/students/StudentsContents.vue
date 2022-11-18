<template>
  <div class="border-b border-solid border-brand-grey-1 py-10">
    <div
      class="max-w-[1224px] max-[1000px]:max-w-[668px] py-10 px-[4%] mx-auto"
    >
      <StudentsSamllContent />
    </div>
  </div>
  <div class="py-10">
    <div
      class="max-w-[1224px] max-[1000px]:max-w-[668px] py-10 px-[4%] mx-auto"
    >
      <StudentsLargeContent />
    </div>
  </div>
</template>

<script setup>
import StudentsSamllContent from '@/components/students/small/StudentsSmallContent.vue';
import StudentsLargeContent from '@/components/students/large/StudentsLargeContent.vue';
</script>
