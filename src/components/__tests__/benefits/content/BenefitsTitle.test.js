import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BenefitsTitle from '@/components/benefits/content/BenefitsTitle.vue';

describe('BenefitsTitle', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    propsData: {
      title: 'Test Title',
      icon: 'fa-solid fa-suitcase-medical',
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(BenefitsTitle, createConfig());
    const icon = wrapper.find(`[data-test="icon"]`);
    expect(wrapper.text()).toBe('Test Title');
    expect(icon.attributes().icon).toBe('fa-solid fa-suitcase-medical');
  });
});
