<template>
  <div>
    <input
      :value="modelValue"
      type="text"
      @input="updateModelValue"
    >

    <p>
      counter: {{ counter }}
    </p>

    <button @click="increaseCounter">
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

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const counter = ref(0)
const increaseCounter = () => counter.value++

const updateModelValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}
</script>

<style scoped>

</style>
