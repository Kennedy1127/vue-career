import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import TeamsContent from '@/components/home/teams/TeamsContent.vue';

describe('TeamsContent', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
      },
    },
  });

  it('renders texts', () => {
    const wrapper = shallowMount(TeamsContent, createConfig());
    expect(wrapper.text()).toMatch('TEAMS');
    expect(wrapper.text()).toMatch('Find your team');
    expect(wrapper.text()).toMatch(
      'Together, we create access to information and build products for everyone. Want to be a Googler? Find your team.'
    );
  });

  it('renders title', () => {
    const wrapper = shallowMount(TeamsContent, createConfig());
    expect(wrapper.text()).toMatch('Engineering & Tech');
    expect(wrapper.text()).toMatch('Sales, Service & Support');
    expect(wrapper.text()).toMatch('People');
    expect(wrapper.text()).toMatch('Consumer Hardware');
  });

  it('renders teams text', () => {
    const wrapper = shallowMount(TeamsContent, createConfig());
    expect(wrapper.text()).toMatch(
      'Develop the products and tools of the future for billions of users.'
    );
    expect(wrapper.text()).toMatch(
      'Equip businesses with the right tools to help them grow.'
    );
    expect(wrapper.text()).toMatch(
      'Find, grow, and support the people who make Google great.'
    );
    expect(wrapper.text()).toMatch(
      `Make people's lives better through technology.`
    );
  });

  describe('when user clicks city', () => {
    it('pushs to LocationView', () => {
      const wrapper = shallowMount(TeamsContent, createConfig());
      const routerLink = wrapper.findComponent(RouterLinkStub);
      expect(routerLink.props().to).toEqual({ name: 'Teams' });
    });
  });
});
