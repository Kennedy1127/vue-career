import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import JobResultsAccordion from '@/components/jobResults/jobResultsFilters/JobResultsAccordion.vue';

describe('JobResultsAccordion', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    propsData: {
      title: 'Test Title',
    },
    slots: {
      default: '<div>Main Content</div>',
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(JobResultsAccordion, createConfig());
    expect(wrapper.text()).toMatch('Test Title');
    expect(wrapper.text()).toMatch('Main Content');
  });

  describe('when user clicks accordion', () => {
    it('renders accordion items', async () => {
      const wrapper = shallowMount(JobResultsAccordion, createConfig());
      const accordion = wrapper.find(`[data-test="accordion"]`);
      Object.defineProperty(accordion.element, 'scrollHeight', {
        configurable: true,
        value: 500,
      });

      const toggleAccordion = wrapper.find(`[data-test="toggleAccordion"]`);
      await toggleAccordion.trigger('click');
      expect(accordion.attributes().class).toContain('trigger');
    });
  });
});
