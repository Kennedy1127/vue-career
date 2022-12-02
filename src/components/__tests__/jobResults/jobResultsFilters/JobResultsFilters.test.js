import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import JobResultsFilters from '@/components/jobResults/jobResultsFilters/JobResultsFilters.vue';
import { useStoreJobs } from '@/stores/storeJobs';

describe('JobResultsFilters', () => {
  const createConfig = () => ({
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn(),
          stubActions: false,
        }),
      ],
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(JobResultsFilters, createConfig());
    const clearFilters = wrapper.find(`[data-test="clear-filters"]`);
    expect(wrapper.text()).toMatch('What do you want to do?');
    expect(clearFilters.exists()).toBe(true);
  });

  describe('when user filter jobs', () => {
    it('submit selected skill', async () => {
      const wrapper = shallowMount(JobResultsFilters, createConfig());
      const storeJobs = useStoreJobs();
      const inputField = wrapper.findComponent(`[ data-test="input-field"]`);
      await inputField.setValue('Software developer');
      storeJobs.addSelectedSkill = vi.fn();
      const formSubmit = wrapper.find(`[data-test="form-submit"]`);
      await formSubmit.trigger('submit');
      expect(storeJobs.addSelectedSkill).toHaveBeenCalled();
    });
  });

  describe('when user clear filters', () => {
    it('empty input field', async () => {
      const wrapper = shallowMount(JobResultsFilters, createConfig());
      const storeJobs = useStoreJobs();
      storeJobs.clearSelectedFilters = vi.fn();
      const inputField = wrapper.findComponent(`[ data-test="input-field"]`);
      await inputField.setValue('Software developer');
      const clearFilters = wrapper.find(`[data-test="clear-filters"]`);
      await clearFilters.trigger('click');
      expect(storeJobs.clearSelectedFilters).toHaveBeenCalled();
    });
  });
});
