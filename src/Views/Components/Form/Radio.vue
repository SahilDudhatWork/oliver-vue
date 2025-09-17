<template>
  <div v-bind="resolvedAttrs.wrapperAttrs.wrapper1">
    <div v-bind="resolvedAttrs.wrapperAttrs.wrapper2">
      <input
        :id="id"
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        @change="$emit('update:modelValue', value)"
        v-bind="resolvedAttrs.inputAttrs"
      />
      <label v-if="label" :for="id" v-bind="resolvedAttrs.labelAttrs">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { resolveAllConfigs } from "../../../utils/componentRenderingUtils";
import { computed } from "vue";

const props = defineProps<{
  modelValue: string | number;
  value: string | number;
  name: string;
  label?: string;
  id?: string;

  version: string;
  addId?: string;
  removeId?: boolean;
  addClass?: string;
  removeClass?: boolean;
  addAttributes?: object;
  removeAttributes?: string[];
  wrapperOverrides?: any[];
}>();

const inputConfig = {
  wrappers: [
    {
      targetAttribute: "wrapper1",
      addClass:
        props.version === "dashboard"
          ? "flex flex-col gap-2"
          : props.version === "auth"
          ? "flex flex-col gap-[0.375rem] flex-1 self-stretch"
          : "flex flex-col gap-1.5",
      addAttributes: { "data-wrapper": "wrapper1" },
    },
    {
      targetAttribute: "wrapper2",
      addClass:
        props.version === "dashboard"
          ? "flex items-center gap-2 relative"
          : props.version === "auth"
          ? "flex flex-col gap-2"
          : "flex gap-2",
      addAttributes: { "data-wrapper": "wrapper2" },
    },
  ],
  elm: {
    addClass: props.version === "dashboard" ? "sr-only peer" : props.version === "auth" ? "" : "",
    addAttributes: {
      type: props.version,
    },
  },
  additionalConfig: {
    label: {
      addClass:
        props.version === "dashboard"
          ? 'relative pl-8 cursor-pointer text-[0.938rem] font-medium leading-6 text-gray-900 dark:text-dark-text peer-checked:before:bg-gray-900 dark:peer-checked:before:bg-dark-text peer-checked:after:content-[""] peer-checked:after:w-[0.375rem] peer-checked:after:h-[0.375rem] peer-checked:after:bg-success dark:peer-checked:after:bg-dark-success peer-checked:after:rounded-full peer-checked:after:absolute peer-checked:after:left-[0.4375rem] peer-checked:after:top-1/2 peer-checked:after:-translate-y-1/2 before:content-[""] before:w-5 before:h-5 before:rounded-full before:border before:border-gray-300 dark:before:border-dark-border before:bg-white dark:before:bg-dark-surface before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:box-border'
          : props.version === "auth"
          ? "block text-sm font-medium text-gray-700 dark:text-dark-text"
          : "block text-sm font-medium text-text dark:text-dark-text",
      addAttributes: {
        for: "input-id",
      },
    },
    description: {
      addClass: "text-xs text-slate-500 dark:text-dark-text",
      addAttributes: {
        "data-description": "true",
      },
    },
  },
};

const resolvedAttrs = computed(() => resolveAllConfigs(inputConfig, props.version, props));

defineEmits<{
  "update:modelValue": [value: string | number];
}>();
</script>
