import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BenefitsHeroImage from '@/components/benefits/Hero/BenefitsHeroImage.vue';

describe('BenefitsHeroImage', () => {
  it('renders', () => {
    const wrapper = shallowMount(BenefitsHeroImage);
    expect(wrapper.exists()).toBe(true);
  });
});
