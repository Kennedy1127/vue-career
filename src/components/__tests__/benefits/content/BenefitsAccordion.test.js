import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BenefitsAccordion from '@/components/benefits/content/BenefitsAccordion.vue';

describe('BenefitsAccordion', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    propsData: {
      subject: 'Test Subject',
      content: {
        subject: 'Test Subject',
        icon: 'fa-solid fa-suitcase-medical',
        title: 'Test Title',
        texts: ['Test Text 1', 'Test Text 2', 'Test Text 3'],
      },
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(BenefitsAccordion, createConfig());
    const iconUp = wrapper.find(`[data-test="icon-up"]`);
    const content = wrapper.find(`[data-test="content"]`);
    expect(wrapper.text()).toBe('Test Subject');
    expect(iconUp.exists()).toBe(true);
    expect(content.classes().includes('active'));
  });

  describe('when user clicks subject', () => {
    it('renders arrow down', async () => {
      const wrapper = shallowMount(BenefitsAccordion, createConfig());
      const subject = wrapper.find(`[data-test="subject"]`);
      await subject.trigger('click');
      const iconDown = wrapper.find(`[data-test="icon-down"]`);
      expect(iconDown.exists()).toBe(true);
    });

    it('remove content', async () => {
      const wrapper = shallowMount(BenefitsAccordion, createConfig());
      const subject = wrapper.find(`[data-test="subject"]`);
      await subject.trigger('click');
      const content = wrapper.find(`[data-test="content"]`);
      expect(content.classes().includes('active')).toBe(false);
    });
  });
});
