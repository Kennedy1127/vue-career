import { shallowMount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import HeadLine from '@/components/home/hero/HeadLine.vue';

describe('HeadLine', () => {
  it('renders texts', () => {
    const wrapper = shallowMount(HeadLine);

    const scrollWords = wrapper.findAll(`[data-test="scroll-word"]`);
    const scrollTexts = scrollWords.map((scrollWord) => scrollWord.text());
    expect(scrollTexts).toEqual(['Code', 'Build', 'Create', 'Design', 'Code']);

    const h1Word = wrapper.find(`[data-test="h1-word"]`);
    expect(h1Word.text()).toMatch('for everyone');

    const h2Word = wrapper.find(`[data-test="h2-word"]`);
    expect(h2Word.text()).toMatch('Find your next job at Google.');
  });
});
