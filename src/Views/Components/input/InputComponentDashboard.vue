<template>
  <div v-bind="resolvedAttrs.wrapperAttrs.wrapper1">
    <label v-if="showLabel" v-bind="resolvedAttrs.labelAttrs">
      {{ labelText }}
      <span v-if="requiredDisplay === '*'" class="text-red-500">*</span>
      <span v-else-if="requiredDisplay === 'italic-text'" class="italic text-xs text-gray-500">
        {{ requiredDisplayText }}
      </span>
    </label>

    <p class="text-base opacity-70 text-gray-900 dark:text-dark-text" v-if="optionalLabel">
      {{ optionalLabelText }}
    </p>

    <!-- Input -->
    <div v-bind="resolvedAttrs.wrapperAttrs.wrapper3">
      <!-- Left icon -->
      <component v-if="leftIcon" :is="leftIcon" class="w-5 h-5" />

      <!-- left span -->
      <span
        v-if="leftSpan"
        :class="leftSpanClass"
        class="text-base font-bold text-gray-700 dark:text-dark-text whitespace-nowrap"
        >{{ leftSpanText }}</span
      >

      <input
        v-bind="resolvedAttrs.inputAttrs"
        :id="addId || resolvedAttrs.inputAttrs.id"
        :value="modelValue"
        :type="type"
        v-if="type !== 'textarea'"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :class="[leftIcon ? 'pl-1' : 'pl-0', rightIcon ? 'pr-1' : 'pr-0']"
      />

      <textarea
        v-if="type === 'textarea'"
        v-bind="resolvedAttrs.inputAttrs"
        :rows="3"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      ></textarea>

      <!-- Right icon -->
      <component v-if="rightIcon" :is="rightIcon" class="w-5 h-5" />

      <!-- right span -->
      <span
        v-if="rightSpan"
        :class="rightSpanClass"
        class="text-base font-medium px-3 text-gray-700 dark:text-dark-text whitespace-nowrap"
        >{{ rightSpanText }}</span
      >
    </div>

    <!-- Description -->
    <p v-if="description" v-bind="resolvedAttrs.descriptionAttrs">
      {{ description }}
    </p>

    <!-- required-error-text -->
    <span
      v-if="requiredDisplay === 'required-text-error'"
      class="inline-flex items-center text-xs leading-loose text-[#FF4405] dark:text-dark-warning"
      >This field is required.</span
    >

    <!-- error-fields-container -->
    <div class="flex flex-col items-start self-stretch gap-1 px-2 pt-1 pb-2" v-if="showErrors">
      <ul class="flex flex-col gap-1">
        <li
          v-for="(errorObj, index) in errors"
          :key="index"
          class="flex w-full gap-[.4375rem] dark:text-dark-warning"
          :class="
            index === errors.length - 1 ? 'text-[#FF7C1E]' : 'text-[#FF4405] dark:text-dark-warning'
          "
        >
          <component
            v-if="errorObj.icon"
            :is="errorObj.icon"
            class="block w-[1.125rem] h-[1.125rem] md:w-[1.25rem] md:h-[1.25rem] Light dark:text-dark-successLight"
            :class="
              index === errors.length - 1
                ? 'text-[#FF7C1E]'
                : 'text-[#FF4405] dark:text-dark-warning'
            "
          />
          <span
            class="text-sm dark:text-dark-warning"
            :class="
              index === errors.length - 1
                ? 'text-[#FF7C1E]'
                : 'text-[#FF4405] dark:text-dark-warning'
            "
            >{{ errorObj.error }}</span
          >
        </li>
      </ul>
    </div>

    <!-- success-fields-container -->
    <div class="flex flex-col items-start self-stretch gap-1 px-2 pt-1 pb-2" v-if="onSuccess">
      <ul class="flex flex-col gap-1">
        <li
          v-for="(successObj, index) in success"
          :key="index"
          class="flex w-full gap-[.4375rem] text-[#07f468] dark:text-dark-success"
        >
          <component
            v-if="successObj.icon"
            :is="successObj.icon"
            class="block w-[1.125rem] h-[1.125rem] md:w-[1.25rem] md:h-[1.25rem] text-[#07f468]Light dark:text-dark-successLight"
          />
          <span class="text-sm text-[#07f468] dark:text-dark-success">{{
            successObj.message
          }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from "vue";
import { resolveAllConfigs } from "@/utils/componentRenderingUtils";

const props = defineProps({
  modelValue: [String, Number],
  version: { type: String, default: "" },

  // Input attributes
  addId: String,
  removeId: Boolean,
  addClass: String,
  removeClass: Boolean,
  addAttributes: Object,
  removeAttributes: { type: Array as () => string[], default: () => [] },

  // Standard HTML input props
  type: { type: String, default: "text" },
  name: String,
  placeholder: String,
  required: Boolean,
  autocomplete: String,

  // Label
  showLabel: Boolean,
  labelText: { type: String, default: "Label" },
  requiredDisplay: { type: String, default: "" }, // "*" or "italic-text"
  requiredDisplayText: { type: String, default: "" },

  optionalLabel: { type: Boolean, default: "" },
  optionalLabelText: { type: String, default: "" },

  showErrors: Boolean,
  errors: {
    type: Array as () => { error: string; icon: String | Object | Function | Component }[],
    required: false,
    default: () => [],
  },

  onSuccess: Boolean,
  success: {
    type: Array as () => { message: string; icon: String | Object | Function | Component }[],
    required: false,
    default: () => [],
  },

  // Description
  description: String,

  // Icons
  leftIcon: [String, Object, Function],
  rightIcon: [String, Object, Function],

  //spans
  rightSpan: { type: Boolean, default: false },
  rightSpanText: { type: String, default: "" },
  rightSpanClass: { type: String, default: "" },
  leftSpan: { type: Boolean, default: false },
  leftSpanText: { type: String, default: "" },
  leftSpanClass: { type: String, default: "" },

  textAreaRows: { type: String, default: "3" },

  // Wrapper overrides
  wrapperOverrides: { type: Array as () => any[], default: () => [] },
});

// Input component config for dashboard styling
const inputConfig = {
  wrappers: [
    {
      targetAttribute: "wrapper1",
      addClass:
        props.type === "textarea"
          ? "flex flex-col gap-[0.375rem] flex-1 self-stretch"
          : "flex flex-col",
      addAttributes: { "data-wrapper": "wrapper1" },
    },
    {
      targetAttribute: "wrapper2",
      addClass: "flex flex-col",
      addAttributes: { "data-wrapper": "wrapper2" },
    },
    {
      targetAttribute: "wrapper3",
      addClass:
        props.type === "textarea"
          ? "w-full px-3.5 py-2.5 h-[5.5rem] border-b rounded-xs border-[#D0D5DD] dark:border-dark-border rounded-input rounded-b-none shadow-input shadow-[0px_1px_2px_0px_#1018280D] dark:shadow-dark-input bg-white/50 dark:bg-dark-bg-light"
          : "flex items-center px-3 py-2 h-10 border-b rounded-xs border-[#D0D5DD] dark:border-dark-border rounded-input shadow-input shadow-[0px_1px_2px_0px_#1018280D] dark:shadow-dark-input bg-white/50 dark:bg-dark-bg-light gap-2",
      addAttributes: { "data-wrapper": "wrapper3" },
    },
  ],
  elm: {
    addClass:
      props.type === "textarea"
        ? "w-full text-base font-normal text-[#101828] dark:text-dark-text bg-transparent border-none focus:outline-none placeholder-gray-500 dark:placeholder-dark-text placeholder:text-base placeholder:leading-6 placeholder:font-normal"
        : "flex-1 text-base font-normal text-[#101828] dark:text-dark-text bg-transparent border-none focus:outline-none placeholder-gray-500 dark:placeholder-dark-text placeholder:text-base placeholder:leading-6 placeholder:font-normal",
    addAttributes: {
      type: props.type === "textarea" ? "textarea" : "text",
    },
  },
  additionalConfig: {
    label: {
      addClass:
        props.requiredDisplay === "italic-text"
          ? "flex items-center justify-between block text-sm font-bold text-[#101828] dark:text-dark-text font-Montserrat italic"
          : "block text-sm font-bold text-[#101828] dark:text-dark-text font-Montserrat",
      addAttributes: {
        for: "input-id",
      },
    },
    description: {
      addClass: "text-sm text-[#475467] dark:text-dark-text",
      addAttributes: {
        "data-description": "true",
      },
    },
  },
};

// Resolve attributes with utility function
const resolvedAttrs = computed(() => resolveAllConfigs(inputConfig, props.version, props));
</script>
