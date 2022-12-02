import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import JobResultsFiltersInput from '@/components/jobResults/jobResultsFilters/jobResultsFiltersInput/JobResultsFiltersInput.vue';

describe('JobResultsFiltersInput', () => {
  const createConfig = () => ({
    propsData: {
      modelValue: 'Test ModelValue',
      placeholder: 'Test Placeholder',
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(JobResultsFiltersInput, createConfig());
    const input = wrapper.find(`[data-test="input"]`);
    expect(input.element.value).toBe('Test ModelValue');
    expect(input.attributes().placeholder).toBe('Test Placeholder');
  });
});
