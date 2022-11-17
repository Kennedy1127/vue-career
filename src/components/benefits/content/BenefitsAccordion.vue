<template>
  <div class="mb-9">
    <div
      class="hover:cursor-pointer"
      @click="toggleAccordion"
      data-test="subject"
    >
      <div
        class="flex justify-between border-b border-solid border-brand-grey-1 pb-3"
      >
        <h2 class="text-3xl max-[800px]:text-lg">{{ props.subject }}</h2>
        <font-awesome-icon
          v-if="!isAccordionActive"
          icon="fa-solid fa-angle-down"
          data-test="icon-down"
        />
        <font-awesome-icon
          v-else
          icon="fa-solid fa-angle-up"
          data-test="icon-up"
        />
      </div>
    </div>
    <div
      class="active accordion overflow-hidden"
      ref="accordionContent"
      data-test="content"
    >
      <div class="mt-4">
        <div
          class="grid grid-cols-20 max-[800px]:grid-cols-12 max-[600px]:grid-cols-4 pt-8 pb-12 max-[800px]:py-0"
        >
          <div class="col-span-6 max-[800px]:col-span-full">
            <BenefitsTitle
              :title="props.content.title"
              :icon="props.content.icon"
            />
          </div>
          <div class="col-span-1 max-[800px]:hidden"></div>
          <div class="col-span-6 max-[800px]:col-span-full">
            <BenefitsContent
              v-for="text in firstCol"
              :key="text"
              :text="text"
            />
          </div>
          <div class="col-span-1 max-[800px]:hidden"></div>
          <div class="col-span-6 max-[800px]:col-span-full">
            <BenefitsContent
              v-for="text in secondCol"
              :key="text"
              :text="text"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BenefitsTitle from '@/components/benefits/content/BenefitsTitle.vue';
import BenefitsContent from '@/components/benefits/content/BenefitsContent.vue';
import { computed, onMounted, ref } from 'vue';

onMounted(() => {
  accordionContent.value.style.height =
    accordionContent.value.scrollHeight.toString() + 'px';
});

const props = defineProps({
  subject: {
    type: String,
    required: true,
  },
  content: {
    type: Object,
    required: true,
  },
});

const firstCol = computed(() =>
  props.content.texts.length % 2
    ? props.content.texts.slice(0, (props.content.texts.length + 1) / 2)
    : props.content.texts.slice(0, props.content.texts.length / 2)
);

const secondCol = computed(() =>
  props.content.texts.length % 2
    ? props.content.texts.slice((props.content.texts.length + 1) / 2)
    : props.content.texts.slice(props.content.texts.length / 2)
);

// accordion
const accordionContent = ref(null);
const isAccordionActive = ref(true);
//

// toggle accordion
const toggleAccordion = () => {
  isAccordionActive.value
    ? ((isAccordionActive.value = false),
      accordionContent.value.classList.remove('active'),
      (accordionContent.value.style.height = '0px'))
    : ((isAccordionActive.value = true),
      accordionContent.value.classList.add('active'),
      (accordionContent.value.style.height =
        accordionContent.value.scrollHeight.toString() + 'px'));
  console.log();
};
//
</script>

<style scoped>
.accordion {
  transition: height 0.2s ease;
}
</style>
