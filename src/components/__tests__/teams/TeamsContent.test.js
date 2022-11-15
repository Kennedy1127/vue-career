import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TeamsContent from '@/components/teams/TeamsContent.vue';

describe('TeamsContent', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
    propsData: {
      image: 'Test Image Url',
      title: 'Test Title',
      text: 'Test Text',
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(TeamsContent, createConfig());
    const image = wrapper.find(`[data-test="image"]`);

    expect(image.attributes().src).toBe('Test Image Url');
    expect(wrapper.text()).toMatch('Test Title');
    expect(wrapper.text()).toMatch('Test Text');
  });
});
