<template>
  <h1 class="text-[84px] leading-none font-bold tracking-tight mb-[54px]">
    <div class="scrolling-words-box">
      <ul>
        <li style="color: #ea4335" data-test="scroll-word">Code</li>
        <li style="color: #4285f4" data-test="scroll-word">Build</li>
        <li style="color: #34a853" data-test="scroll-word">Create</li>
        <li style="color: #fbbc04" data-test="scroll-word">Design</li>
        <li style="color: #ea4335" data-test="scroll-word">Code</li>
      </ul>
    </div>
    <span style="text-text-black" data-test="h1-word">for everyone</span>
  </h1>
  <h2 class="text-text-color text-2xl mb-[60px]" data-test="h2-word">
    Find your next job at Google.
  </h2>
</template>

<style lang="scss" scoped>
.scrolling-words-box {
  height: 6rem;
  margin: auto;
  overflow: hidden;

  ul {
    padding: 0;
    animation: scrollUp 5s infinite;
    li {
      display: flex;
      align-items: center;
      height: 6.2rem;
      list-style: none;
    }
  }
}

// Variables
$item-count: 5;

@keyframes scrollUp {
  @for $i from 1 through ($item-count - 1) {
    #{($i * 25) - 10%},
    #{$i * 25%} {
      transform: translateY((-100% / $item-count) * $i);
    }
  }
}
</style>
