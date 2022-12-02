import { RouterLinkStub, shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import BenefitsHeroDescritpion from '@/components/benefits/Hero/BenefitsHeroDescritpion.vue';

describe('BenefitsHeroDescription', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        RouterLink: RouterLinkStub,
        FontAwesomeIcon: true,
      },
    },
  });

  it('renders', () => {
    const wrapper = shallowMount(BenefitsHeroDescritpion, createConfig());
    expect(wrapper.text()).toMatch('Benefits at Austin');
    expect(wrapper.text()).toMatch(
      'We strive to provide Austiner and their loved ones with a world-class benefits experience, focused on supporting their physical, financial, and emotional wellbeing. Our benefits are based on data, and centered around our users: Austiner and their families. They’re thoughtfully designed to enhance your health and wellbeing, and generous enough to make it easy for you to take good care of yourself (now, and in the future). So we can build for everyone, together. *'
    );
    expect(wrapper.text()).toMatch('Learn more about Austin’s benefits on');
    expect(wrapper.text()).toMatch('our site featuring Austinrs’ experience.');
  });

  it('router link pushes', () => {
    const wrapper = shallowMount(BenefitsHeroDescritpion, createConfig());
    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.props().to).toEqual({
      name: 'JobResults',
      params: { id: 'results' },
    });
  });
});
