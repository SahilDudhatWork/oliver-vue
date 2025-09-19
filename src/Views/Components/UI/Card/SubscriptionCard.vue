<template>
  <div
    class="max-w-[24rem] min-h-[39.6875rem] rounded-[0.125rem] relative"
    :class="[backgroundImageClass, borderClass, backgroundClass]"
    :style="backgroundStyle"
  >
    <div
      class="min-h-[39.6875rem] rounded-[0.125rem] bg-black/40 backdrop-blur-[5px] flex flex-col gap-4 pt-8 px-6 pb-[4.25rem] relative"
    >
      <!-- Featured Badge -->
      <FeaturedBadge
        v-if="showFeatured"
        :text="featuredText"
        :gradient-class="featuredBadgeClass"
      />

      <!-- Title with Tooltip -->
      <span class="flex items-center">
        <div
          class="w-full z-[5] relative overflow-hidden hover:overflow-visible hover:cursor-pointer group"
        >
          <h2
            class="overflow-hidden line-clamp-2 text-[1.875rem] text-[#efeff3] font-semibold leading-[2.375rem]"
          >
            {{ title }}
          </h2>
          <div
            class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[17.5rem] max-w-[17.5rem] p-2 px-3 text-xs font-medium leading-[1.125rem] bg-[rgba(16,24,40,0.7)] text-white rounded-lg shadow-[0_4px_8px_-2px_rgba(16,24,40,0.1),0_2px_4px_-2px_rgba(16,24,40,0.06)] backdrop-blur-[25px] opacity-0 invisible pointer-events-none transition-all duration-150 ease-in-out group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto"
          >
            {{ title }}
          </div>
        </div>
      </span>

      <!-- Stats Row -->
      <div class="flex items-center gap-[0.625rem]">
        <!-- Videos count -->
        <div class="flex items-center gap-[0.063rem]">
          <span class="tracking-[0.005rem] text-base text-white block">
            {{ stats.videos }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="w-5 h-5"
          >
            <path
              d="M9.5 8.96533C9.5 8.48805 9.5 8.24941 9.59974 8.11618C9.68666 8.00007 9.81971 7.92744 9.96438 7.9171C10.1304 7.90525 10.3311 8.03429 10.7326 8.29239L15.4532 11.3271C15.8016 11.551 15.9758 11.663 16.0359 11.8054C16.0885 11.9298 16.0885 12.0702 16.0359 12.1946C15.9758 12.337 15.8016 12.449 15.4532 12.6729L10.7326 15.7076C10.3311 15.9657 10.1304 16.0948 9.96438 16.0829C9.81971 16.0726 9.68666 15.9999 9.59974 15.8838C9.5 15.7506 9.5 15.512 9.5 15.0347V8.96533Z"
              stroke="#FDFDFC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 7.8C3 6.11984 3 5.27976 3.32698 4.63803C3.6146 4.07354 4.07354 3.6146 4.63803 3.32698C5.27976 3 6.11984 3 7.8 3H16.2C17.8802 3 18.7202 3 19.362 3.32698C19.9265 3.6146 20.3854 4.07354 20.673 4.63803C21 5.27976 21 6.11984 21 7.8V16.2C21 17.8802 21 18.7202 20.673 19.362C20.3854 19.9265 19.9265 20.3854 19.362 20.673C18.7202 21 17.8802 21 16.2 21H7.8C6.11984 21 5.27976 21 4.63803 20.673C4.07354 20.3854 3.6146 19.9265 3.32698 19.362C3 18.7202 3 17.8802 3 16.2V7.8Z"
              stroke="#FDFDFC"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div class="h-[0.188rem] w-[0.188rem] bg-white block rounded-full"></div>

        <!-- Photos count -->
        <div class="flex items-center gap-[0.063rem]">
          <span class="tracking-[0.005rem] text-base text-white block">
            {{ stats.photos }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            class="w-5 h-5"
          >
            <path
              d="M13.8052 10.6582C13.8052 11.4914 13.4742 12.2906 12.885 12.8798C12.2958 13.469 11.4967 13.8 10.6634 13.8H3.33615C2.50289 13.8 1.70376 13.469 1.11455 12.8798C0.525348 12.2906 0.194336 11.4914 0.194336 10.6582V3.34182C0.194336 2.50856 0.525348 1.70942 1.11455 1.12022C1.70376 0.531013 2.50289 0.199997 3.33615 0.199997H10.6634C11.4967 0.199997 12.2958 0.531013 12.885 1.12022C13.4742 1.70942 13.8052 2.50856 13.8052 3.34182V10.6582ZM7.55615 9.21999C8.46161 8.20545 9.41979 7.62364 10.6034 8.74182C11.2568 9.36122 11.8465 9.95576 12.3725 10.5255C12.4768 10.6382 12.5307 10.6176 12.5343 10.4636C12.5816 8.53394 12.5895 5.72606 12.558 3.85818C12.5362 2.53091 12.158 1.47091 10.5889 1.45637C8.30888 1.43697 5.92525 1.43879 3.43797 1.46182C1.85979 1.47636 1.4507 2.45273 1.41252 3.87455C1.37737 5.26121 1.39373 7.48363 1.46161 8.72363C1.46888 8.85333 1.51555 8.86909 1.60161 8.77091C2.0707 8.22545 2.56525 7.72 3.13615 7.26182C3.76525 6.75818 4.54888 6.80545 5.16525 7.31454C5.82464 7.86 6.47979 8.49515 7.1307 9.21999Z"
              fill="white"
            />
            <path
              d="M10.4888 4.53273C10.4888 4.80228 10.3817 5.06079 10.1911 5.2514C10.0005 5.442 9.74198 5.54909 9.47242 5.54909C9.20286 5.54909 8.94435 5.442 8.75374 5.2514C8.56314 5.06079 8.45605 4.80228 8.45605 4.53273C8.45605 4.26317 8.56314 4.00465 8.75374 3.81404C8.94435 3.62344 9.20286 3.51636 9.47242 3.51636C9.74198 3.51636 10.0005 3.62344 10.1911 3.81404C10.3817 4.00465 10.4888 4.26317 10.4888 4.53273Z"
              fill="white"
            />
          </svg>
        </div>

        <div class="h-[0.188rem] w-[0.188rem] bg-white block rounded-full"></div>

        <!-- Other count -->
        <div class="flex items-center gap-[0.063rem]">
          <span class="tracking-[0.005rem] text-base text-white block">
            {{ stats.other }}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            class="w-5 h-5"
          >
            <path
              d="M13.7838 10.6259C13.7838 11.4591 13.4528 12.2583 12.8635 12.8475C12.2743 13.4367 11.4752 13.7677 10.6419 13.7677H3.31467C2.48141 13.7677 1.68227 13.4367 1.09307 12.8475C0.503864 12.2583 0.172852 11.4591 0.172852 10.6259V3.30952C0.172852 2.47626 0.503864 1.67712 1.09307 1.08792C1.68227 0.49871 2.48141 0.167694 3.31467 0.167694H10.6419C11.4752 0.167694 12.2743 0.49871 12.8635 1.08792C13.4528 1.67712 13.7838 2.47626 13.7838 3.30952V10.6259ZM7.53467 8.2786C8.44012 7.26406 9.39831 6.68225 10.5819 7.80043C11.2353 8.41982 11.825 9.01437 12.351 9.58406C12.4553 9.69679 12.5092 9.67618 12.5129 9.52224C12.5601 7.59255 12.568 5.69375 12.5365 3.82588C12.5147 2.4986 12.1365 1.43861 10.5674 1.42406C8.2874 1.40467 5.90376 1.40648 3.41649 1.42951C1.83831 1.44406 1.42922 2.42043 1.39103 3.84224C1.35588 5.22891 1.37225 6.54224 1.44012 7.78224C1.4474 7.91194 1.49406 7.9277 1.58012 7.82952C2.04922 7.28406 2.54376 6.77861 3.11467 6.32043C3.74376 5.81679 4.5274 5.86406 5.14376 6.37315C5.80315 6.9186 6.45831 7.55375 7.10921 8.2786Z"
              fill="white"
            />
            <path
              d="M15.431 12.9295C14.5595 14.8398 13.0274 15.8041 10.8347 15.8222C9.08314 15.8368 7.30253 15.8356 5.49284 15.8186C4.52799 15.8101 3.71041 15.4798 3.04011 14.8277C3.02833 14.8163 3.01966 14.8021 3.0149 14.7864C3.01014 14.7707 3.00945 14.7541 3.01291 14.7381C3.01637 14.7221 3.02386 14.7072 3.03466 14.6949C3.04546 14.6826 3.05923 14.6732 3.07466 14.6677C3.24193 14.6095 3.41647 14.5804 3.59829 14.5804C5.78132 14.5841 8.02314 14.5822 10.3237 14.575C10.871 14.5731 11.4056 14.5895 11.9365 14.4495C13.1474 14.1307 13.9577 13.4168 14.3674 12.3077C14.5565 11.7962 14.6407 10.9047 14.6201 9.63314C14.5862 7.41859 14.585 5.34223 14.6165 3.40405C14.6177 3.3095 14.6292 3.21254 14.651 3.11314C14.6565 3.08563 14.6696 3.06023 14.6889 3.03984C14.7081 3.01946 14.7327 3.00491 14.7599 2.99789C14.7871 2.99086 14.8156 2.99164 14.8424 3.00013C14.8691 3.00862 14.8929 3.02447 14.911 3.04587C15.4977 3.72466 15.7977 4.57011 15.811 5.58224C15.8316 7.23557 15.8334 9.03738 15.8165 10.9877C15.8092 11.7331 15.6807 12.3804 15.431 12.9295Z"
              fill="white"
            />
            <path
              d="M10.4673 4.50042C10.4673 4.76998 10.3602 5.02849 10.1696 5.2191C9.97901 5.4097 9.72049 5.51679 9.45093 5.51679C9.18138 5.51679 8.92286 5.4097 8.73226 5.2191C8.54165 5.02849 8.43457 4.76998 8.43457 4.50042C8.43457 4.23087 8.54165 3.97234 8.73226 3.78174C8.92286 3.59113 9.18138 3.48405 9.45093 3.48405C9.72049 3.48405 9.97901 3.59113 10.1696 3.78174C10.3602 3.97234 10.4673 4.23087 10.4673 4.50042Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <!-- Price -->
      <div class="flex items-end gap-1">
        <span class="relative">
          <span class="text-xl text-white font-semibold leading-[1.875rem]">
            {{ currency }}
          </span>
          <span
            class="text-white tracking-[-0.06rem] leading-[3.75rem] uppercase font-semibold text-[3rem]"
          >
            {{ price }}
          </span>
        </span>
      </div>

      <!-- Description -->
      <div class="flex flex-col pt-1 gap-1">
        <div class="flex flex-col">
          <div class="flex flex-col gap-1">
            <span
              class="line-clamp-7 text-sm text-[#edeff3] font-normal leading-[1.42] [text-shadow:0_4px_8px_rgba(16,24,40,0.1),0_2px_4px_rgba(16,24,40,0.06)]"
            >
              {{ description }}
            </span>
          </div>
        </div>
      </div>

      <!-- Benefits list -->
      <div class="flex flex-col gap-2">
        <div
          v-for="(benefit, index) in benefits"
          :key="index"
          class="flex items-center gap-[0.938rem]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            class="w-3 h-3"
          >
            <path
              d="M1.5 3.9C1.5 3.05992 1.5 2.63988 1.66349 2.31901C1.8073 2.03677 2.03677 1.8073 2.31901 1.66349C2.63988 1.5 3.05992 1.5 3.9 1.5H8.1C8.94008 1.5 9.36012 1.5 9.68099 1.66349C9.96323 1.8073 10.1927 2.03677 10.3365 2.31901C10.5 2.63988 10.5 3.05992 10.5 3.9V8.1C10.5 8.94008 10.5 9.36012 10.3365 9.68099C10.1927 9.96323 9.96323 10.1927 9.68099 10.3365C9.36012 10.5 8.94008 10.5 8.1 10.5H3.9C3.05992 10.5 2.63988 10.5 2.31901 10.3365C2.03677 10.1927 1.8073 9.96323 1.66349 9.68099C1.5 9.36012 1.5 8.94008 1.5 8.1V3.9Z"
              fill="white"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="text-white font-semibold text-base leading-6">
            <span
              class="text-base font-semibold"
              :style="{ color: benefit.highlightColor || accentColor }"
            >
              {{ benefit.highlight }}
            </span>
            {{ benefit.text }}
          </span>
        </div>
      </div>

      <!-- Subscribe/Action Button -->

      <button
        v-if="buttonVariant === 'subscribe'"
        :class="`absolute h-14 gap-2.5 px-2 bottom-0 right-0 flex justify-center items-center group cursor-pointer hover:!bg-[${hoverAccentColor}]`"
        :style="{ backgroundColor: buttonColor }"
        :disabled="buttonDisabled"
        @click="handleSubscribe"
      >
        <!-- Text and icon container -->
        <div
          class="relative z-10 py-1 leading-8 text-2xl text-black font-bold flex flex-row-reverse"
          :class="buttonTextClass"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            class="flex-none w-6 h-6"
            :class="buttonIconClass"
          >
            <path
              d="M6 18L18 6M18 6H10M18 6V14"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span class="leading-8 break-words text-2xl text-black font-semibold">
            {{ buttonText }}
          </span>
        </div>

        <!-- Shadow element -->
        <div class="absolute w-full h-full top-0 right-0 z-[1] shadow-[4px_4px_0_0_#000]"></div>

        <!-- Skewed element -->
        <div
          class="absolute w-8 h-full top-0 left-[-1rem] z-[-1] shadow-[4px_4px_0_0_#000] -skew-x-[20deg] translate-x-[3px]"
          :style="{ backgroundColor: buttonColor }"
        ></div>
      </button>

      <!-- Disabled Button -->
      <button
        v-else
        class="h-14 gap-2.5 px-2 absolute bottom-0 right-0 flex justify-center items-center group cursor-pointer"
        :class="disabledButtonClass"
        disabled
      >
        <div class="relative z-10 py-1 leading-8 text-2xl font-bold flex flex-row-reverse">
          <span class="leading-8 break-words text-2xl text-white font-semibold">
            {{ buttonText }}
          </span>
        </div>
        <div class="absolute w-full h-full top-0 right-0 z-[1] shadow-[4px_4px_0_0_#000]"></div>
        <div
          class="absolute w-8 h-full top-0 left-[-1rem] z-[-1] shadow-[4px_4px_0_0_#000] -skew-x-[20deg] translate-x-[3px]"
          :style="{ backgroundColor: buttonColor }"
        ></div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { SubscriptionCardProps, SubscriptionCardEmits } from "@/types/SubscriptionCard";
import FeaturedBadge from "./FeaturedBadge.vue";

// Props with defaults
const props = withDefaults(defineProps<SubscriptionCardProps>(), {
  currency: "USD$",
  variant: "default",
  borderColor: "#07F468",
  accentColor: "#07F468",
  isFeatured: false,
  hoverAccentColor: "#07F468",
  buttonText: "SUBSCRIBE",
  buttonDisabled: false,
  buttonVariant: "subscribe",
  featuredText: "FEATURED",
  buttonColor: "#ffffff",
});

// Emits
const emit = defineEmits<SubscriptionCardEmits>();

// Computed styles
const showFeatured = computed(() => props.isFeatured || props.variant === "featured");

const backgroundImageClass = computed(() => {
  return showFeatured.value || !!props.backgroundImage ? "bg-cover bg-center bg-no-repeat" : "";
});

const borderClass = computed(() => {
  if (props.variant === "featured" || props.isFeatured) {
    return "border-[1.5px] border-[#4d20ff]";
  }
  return `border-[1.5px]`;
});

const backgroundClass = computed(() => {
  // Do not apply gradient background class when:
  // - featured/isFeatured
  // - explicit backgroundColor is provided
  if (props.variant === "featured" || props.isFeatured || props.backgroundColor) {
    return "";
  }
  // Otherwise use provided gradient or default gradient
  return (
    props.backgroundGradient ||
    "bg-[linear-gradient(0deg,rgba(7,244,104,0.5),rgba(7,244,104,0.5)),linear-gradient(0deg,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),radial-gradient(79%_79%_at_50%_50%,rgba(0,0,0,0)_17.51%,rgba(0,0,0,0.7)_100%)]"
  );
});

const backgroundStyle = computed(() => {
  const styles: Record<string, string> = {};

  // Priority 1: background image
  if (props.backgroundImage) {
    styles.backgroundImage = `url('${props.backgroundImage}')`;
  } else if (props.backgroundColor) {
    // Priority 2: solid background color
    styles.backgroundColor = props.backgroundColor;
  }

  if (props.borderColor && props.variant !== "featured" && !props.isFeatured) {
    styles.borderColor = props.borderColor;
  }

  return styles;
});

const featuredBadgeClass = computed(() => {
  if (props.variant === "featured" || props.isFeatured) {
    return "from-[#4d20ff] to-[#7e5eff]";
  }
  return "from-[#07F468] to-[#07F468]";
});

const buttonClass = computed(() => {
  return `bg-[${props.accentColor}]`;
});

const buttonTextClass = computed(() => {
  return `group-hover:[&>span]:text-[${props.accentColor}]`;
});

const buttonIconClass = computed(() => {
  return `group-hover:[&>path]:stroke-[${props.accentColor}]`;
});

const buttonSkewedClass = computed(() => {
  return `bg-[${props.accentColor}]`;
});

const disabledButtonClass = computed(() => {
  if (props.variant === "featured" || props.isFeatured) {
    return "bg-[#4d20ff]";
  }
  return "bg-[#6b7280]";
});

const disabledButtonSkewedClass = computed(() => {
  if (props.variant === "featured") {
    return "bg-[#4d20ff]";
  }
  return "bg-[#4d20ff]";
});

// Methods
const handleSubscribe = () => {
  if (!props.buttonDisabled) {
    emit("subscribe");
    if (props.onSubscribe) {
      props.onSubscribe();
    }
  }
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-7 {
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
