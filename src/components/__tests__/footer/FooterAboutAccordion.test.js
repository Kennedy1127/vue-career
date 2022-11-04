import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import FooterAboutAccordion from '@/components/footer/FooterAboutAccordion.vue';

describe('FooterAboutAccordion', () => {
  const createConfig = (props = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
        RouterLink: RouterLinkStub,
      },
    },
    propsData: {
      title: 'Test Title',
      ...props,
    },
  });

  it('renders title and angle up', () => {
    const wrapper = shallowMount(FooterAboutAccordion, createConfig());
    const angle = wrapper.find(`[data-test="angle-up"]`);
    expect(wrapper.text()).toMatch('Test Title');
    expect(angle.exists()).toBe(true);
  });

  describe('when user clicks accordion', () => {
    it('renders links and angle down', async () => {
      const testLinks = { links: ['Test 1', 'Test 2', 'Test 3'] };
      const wrapper = shallowMount(
        FooterAboutAccordion,
        createConfig(testLinks)
      );
      const links = wrapper.findAll(`[data-test="link"]`);
      const linksText = links.map((link) => link.text());
      expect(linksText).toEqual(['Test 1', 'Test 2', 'Test 3']);

      const toggle = wrapper.find(`[data-test="toggle-accordion"]`);
      await toggle.trigger('click');
      const angle = wrapper.find(`[data-test="angle-down"]`);
      expect(angle.exists()).toBe(true);
    });

    it('renders content and angle down', async () => {
      const testContent = { content: 'Test Content' };
      const wrapper = shallowMount(
        FooterAboutAccordion,
        createConfig(testContent)
      );
      const content = wrapper.find(`[data-test="content"]`);
      expect(content.text()).toBe('Test Content');

      const toggle = wrapper.find(`[data-test="toggle-accordion"]`);
      await toggle.trigger('click');
      const angle = wrapper.find(`[data-test="angle-down"]`);
      expect(angle.exists()).toBe(true);
    });
  });
});
