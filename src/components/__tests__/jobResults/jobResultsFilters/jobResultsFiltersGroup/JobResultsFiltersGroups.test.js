import { shallowMount } from '@vue/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { useRouter } from 'vue-router';
import JobResultsFiltersGroups from '@/components/jobResults/jobResultsFilters/jobResultsFiltersGroups/JobResultsFiltersGroups.vue';

describe('JobResultsFiltersGroup', () => {
  const mockFunction = vi.fn();

  vi.mock('vue-router', () => ({
    useRouter: vi.fn(() => ({
      push: () => {},
    })),
  }));

  const createConfig = () => ({
    propsData: {
      group: new Set(['Test 1', 'Test 2', 'Test 3']),
      mutation: mockFunction,
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(JobResultsFiltersGroups, createConfig());
    const checkboxes = wrapper.findAll(`[data-test="checkbox"]`);
    const values = checkboxes.map((el) => el.attributes().value);
    expect(wrapper.text()).toMatch('Test 1');
    expect(wrapper.text()).toMatch('Test 2');
    expect(wrapper.text()).toMatch('Test 3');
    expect(values).toEqual(['Test 1', 'Test 2', 'Test 3']);
  });

  describe('when user select item', () => {
    it('execute mutation', async () => {
      const wrapper = shallowMount(JobResultsFiltersGroups, createConfig());
      const checkboxes = wrapper.findAll(`[data-test="checkbox"]`);
      const firstCheckbox = checkboxes[0];
      await firstCheckbox.trigger('change');
      expect(mockFunction).toHaveBeenCalled();
    });

    it("push to selected items' page", async () => {
      const push = vi.fn();
      useRouter.mockImplementationOnce(() => ({
        push,
      }));

      const wrapper = shallowMount(JobResultsFiltersGroups, createConfig());
      const checkboxes = wrapper.findAll(`[data-test="checkbox"]`);
      const firstCheckbox = checkboxes[0];
      await firstCheckbox.trigger('change');
      expect(push).toHaveBeenCalledOnce();
    });
  });
});
