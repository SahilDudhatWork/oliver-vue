<template>
  <div class="flex items-center gap-2" :class="group.type === 'checkbox' ? 'flex-1' : 'relative'">
    <input
      :id="id"
      :type="group.type"
      :name="group.name"
      :value="value"
      :checked="isChecked"
      @change="onChange"
      :class="
        group.type === 'checkbox'
          ? 'border border-[#d0d5dd] appearance-none bg-white dark:bg-dark-surface  dark:border-dark-dash-border rounded-[4px] w-4 min-w-4 h-4 mr-2 ml-[0.188rem] checked:accent-dash-[#07f468] checked:bg-[#07f468] dark:checked:bg-[#07f468] checked:border-[#07f468] dark:checked:border-[#07f468] checked:relative checked:after:content-[\'\'] checked:after:absolute checked:after:left-[0.3rem] checked:after:top-[0.15rem] checked:after:w-1 checked:after:h-2 checked:after:border checked:after:border-solid checked:after:border-t-0 checked:after:border-l-0 checked:after:border-black dark:checked:after:border-white checked:after:border-w-0 checked:after:border-b-2 checked:after:border-r-2 checked:after:rotate-45 checked:after:box-border cursor-pointer'
          : 'peer hidden absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden whitespace-nowrap border-0'
      "
    />

    <label :for="id" :class="labelClasses()">
      <div v-if="leftIcon">
        <component :is="leftIcon" class="w-4 h-4 text-gray-500" />
      </div>
      <span
        class="text-[#101828] dark:text-dark-dash-text leading-5 text-sm whitespace-normal break-words"
        >{{ label }}</span
      >
      <span class="inline-flex items-center gap-2" v-if="tags && tags?.length > 0">
        <div
          v-for="(tag, key) in tags"
          :key="key"
          :style="{ backgroundColor: tag.variant || '#ffffff' }"
          class="text-[#101828] dark:text-dark-dash-text text-right font-medium text-xs leading-[1.125rem] inline-flex px-1.5 justify-center items-center gap-2.5 rounded-[3.125rem] dark:bg-dark-dash-published"
        >
          {{ tag.text }}
        </div>
      </span>
      <div v-if="rightIcon">
        <component :is="rightIcon" class="w-4 h-4 text-gray-500" />
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from "vue";

interface Tag {
  text: string;
  variant: string;
}

const props = defineProps<{
  id: string;
  value: string | number;
  label: string;
  description?: string;
  tags?: Tag[];
  leftIcon?: any;
  rightIcon?: any;
}>();

const group = inject<any>("checkboxGroup");

const isChecked = computed(() => {
  if (group.type === "checkbox") {
    return group.selected.includes(props.value);
  } else {
    return group.selected.includes(props.value);
  }
});

const labelClasses = () => {
  if (group.type === "checkbox") {
    return `text-[#101828] dark:text-dark-dash-text leading-5 text-sm whitespace-nowrap overflow-hidden text-ellipsis cursor-pointer flex gap-1 items-center`;
  } else {
    return `relative pl-8 cursor-pointer text-[0.938rem] font-medium leading-6 text-[#101828] dark:text-dark-dash-text peer-checked:before:bg-[#101828] dark:peer-checked:before:bg-dark-dash-text peer-checked:after:content-[''] peer-checked:after:w-[0.375rem] peer-checked:after:h-[0.375rem] peer-checked:after:bg-[#07f468] dark:peer-checked:after:bg-[#07f468] peer-checked:after:rounded-full peer-checked:after:absolute peer-checked:after:left-[0.4375rem] peer-checked:after:top-1/2 peer-checked:after:-translate-y-1/2 before:content-[''] before:w-5 before:h-5 before:rounded-full before:border before:border-dash-gray-300 dark:before:border-dark-dash-border before:bg-white dark:before:bg-dark-surface before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:box-border`;
  }
};
const onChange = (e: Event) => {
  const checked = (e.target as HTMLInputElement).checked;
  group.updateValue(props.value, checked);
};
</script>
