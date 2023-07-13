<template>
  <div class="container">
    <p class="counter">
      counter: {{ counter }}
    </p>
    <button
      class="button"
      @click="increaseCounter"
    >
      Click
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string
}

withDefaults(defineProps<Props>(), {
  modelValue: 'Hello World!'
})

const counter = ref(0)
const increaseCounter = () => counter.value++
</script>

<style scoped lang="scss">
.container {
  @extend %container;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.counter {
  color: $notify;
}

.button {
  @extend %button-reset;

  width: 200px;
  padding: 8px;
  border-radius: $border-radius;

  font-weight: 600;
  text-transform: uppercase;

  background-color: $primary;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(90%);
  }
}
</style>
