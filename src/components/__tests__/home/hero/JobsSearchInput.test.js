import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import JobsSearchInput from '@/components/home/hero/JobsSearchInput.vue';

describe('JobsSearchInput', () => {
  const createConfig = () => ({
    propsData: {
      modelValue: '',
      label: 'Test Label',
      placeholder: 'Test Placeholder',
    },
  });

  it('renders texts', () => {
    const wrapper = shallowMount(JobsSearchInput, createConfig());
    expect(wrapper.text()).toMatch('Test Label');

    const input = wrapper.find('input');
    expect(input.attributes().placeholder).toMatch('Test Placeholder');
  });

  it('when user inputs text', async () => {
    const wrapper = shallowMount(JobsSearchInput, createConfig());
    const textInput = wrapper.find(`[data-test="text-input"]`);
    await textInput.setValue('a');
    await textInput.setValue('bb');
    await textInput.setValue('ccc');
    const emit = wrapper.emitted()['update:modelValue'];
    expect(emit).toEqual([['a'], ['bb'], ['ccc']]);
  });
});
