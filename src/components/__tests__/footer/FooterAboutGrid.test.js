import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import FooterAboutGrid from '@/components/footer/FooterAboutGrid.vue';

describe('FooterAboutGrid', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
        RouterLink: RouterLinkStub,
      },
    },
  });

  it('renders title', () => {
    const wrapper = shallowMount(FooterAboutGrid, createConfig());
    expect(wrapper.text()).toMatch('More about us');
    expect(wrapper.text()).toMatch('Related information');
    expect(wrapper.text()).toMatch('Equal Opportunity');
  });

  it('renders links', () => {
    const wrapper = shallowMount(FooterAboutGrid, createConfig());
    expect(wrapper.text()).toMatch('More about us');
    expect(wrapper.text()).toMatch('Contact us');
    expect(wrapper.text()).toMatch('Investor relations');
    expect(wrapper.text()).toMatch('Blog');
  });

  it('renders content', () => {
    const wrapper = shallowMount(FooterAboutGrid, createConfig());
    const content = wrapper.find(`[data-test="content"]`);
    expect(content.text().length > 0).toBe(true);
  });

  describe('when users clicks link', () => {
    it('push to #', () => {
      const wrapper = shallowMount(FooterAboutGrid, createConfig());
      const routerLinks = wrapper.findAllComponents(RouterLinkStub);
      const routerLinksPush = routerLinks.map((link) => link.props().to);
      expect(routerLinksPush).toEqual(['#', '#', '#', '#', '#']);
    });
  });
});
