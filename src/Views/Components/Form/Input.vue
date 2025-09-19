<template>
  <div class="form-input-container relative w-full">
    <label
      v-if="label"
      :for="id"
      class="text-sm font-medium text-gray-700 mb-1 flex items-center"
      v-bind="labelAttrs"
    >
      {{ label }}
      <span v-if="theme === 'asterisk'" class="text-red-500 ml-1">*</span>
    </label>
    <div class="relative">
      <input
        :id="id"
        :type="safeType"
        :value="modelValue"
        @input="handleInput"
        :placeholder="placeholder"
        :disabled="disabled"
        v-bind="inputAttrs"
        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
        :class="{ 'border-red-500': error }"
      />

      <span v-if="rightSpan" class="absolute right-2 top-1/2 -translate-y-1/2">
        <span v-html="rightSpan"></span>
      </span>
    </div>

    <p v-if="error" class="mt-1 text-sm text-red-600">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { InputEmits } from "@/types";

type AllowedTypes = "text" | "email" | "number";

interface InputProps {
  modelValue: string | number;
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  id?: string;
  theme?: "text" | "asterisk";
  rightSpan?: string;
  inputAttrs?: Record<string, any>;
  labelAttrs?: Record<string, any>;
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: "",
  label: "",
  type: "text",
  placeholder: "",
  disabled: false,
  error: "",
  id: "",
  theme: "text",
  rightSpan: "",
  inputAttrs: () => ({}),
  labelAttrs: () => ({}),
});

const emit = defineEmits<InputEmits>();

const safeType = computed<AllowedTypes>(() => {
  const allowed: AllowedTypes[] = ["text", "email", "number"];
  return allowed.includes(props.type as AllowedTypes) ? (props.type as AllowedTypes) : "text";
});

const handleInput = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>
