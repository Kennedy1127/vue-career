import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import FooterCopyright from '@/components/footer/FooterCopyright.vue';

describe('FooterCopyright', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(FooterCopyright, createConfig());
    expect(wrapper.text()).toMatch('Austin Careers');
    expect(wrapper.text()).toMatch('© 2022 uses for practice web developer.');
  });
});
