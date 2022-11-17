import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BenefitsContent from '@/components/benefits/content/BenefitsContent.vue';

describe('BenefitsContent', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    propsData: {
      text: 'Test Text',
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(BenefitsContent, createConfig());
    const icon = wrapper.find(`[data-test="icon"]`);
    expect(wrapper.text()).toBe('Test Text');
    expect(icon.exists()).toBe(true);
  });
});
