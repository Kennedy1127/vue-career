import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import PageTitle from '@/components/shared/PageTitle.vue';

describe('PageTitle', () => {
  const createConfig = () => ({
    propsData: {
      title: 'Test Title',
      text: 'Test Text',
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(PageTitle, createConfig());
    expect(wrapper.text()).toMatch('Test Title');
    expect(wrapper.text()).toMatch('Test Text');
  });
});
