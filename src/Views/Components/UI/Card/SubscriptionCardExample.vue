<template>
  <div class="p-8 bg-gray-100 min-h-screen">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl font-bold text-center mb-8">Subscription Plans</h1>
      
      <!-- Basic Example -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Choose Your Plan</h2>
        <div class="flex flex-wrap gap-6 justify-center">
          <SubscriptionCard
            v-for="plan in subscriptionPlans"
            :key="plan.id"
            :title="plan.title"
            :price="plan.price"
            :currency="plan.currency"
            :description="plan.description"
            :stats="plan.stats"
            :benefits="plan.benefits"
            :variant="plan.variant"
            :border-color="plan.borderColor"
            :accent-color="plan.accentColor"
            :background-image="plan.backgroundImage"
            :button-text="plan.buttonText"
            :button-variant="plan.buttonVariant"
            :button-disabled="plan.buttonDisabled"
            :featured-text="plan.featuredText"
            @subscribe="handleSubscribe(plan.id, plan.title)"
          />
        </div>
      </section>

      <!-- Interactive Example -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold mb-6">Interactive Example</h2>
        <div class="bg-white p-6 rounded-lg shadow-md mb-6">
          <h3 class="text-lg font-medium mb-4">Customize Your Card</h3>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label class="block text-sm font-medium mb-2">Title</label>
              <input
                v-model="customCard.title"
                type="text"
                class="w-full p-2 border rounded-md"
                placeholder="Enter title"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Price</label>
              <input
                v-model.number="customCard.price"
                type="number"
                class="w-full p-2 border rounded-md"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label class="block text-sm font-medium mb-2">Accent Color</label>
              <input
                v-model="customCard.accentColor"
                type="color"
                class="w-full p-2 border rounded-md h-10"
              />
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-2">Description</label>
            <textarea
              v-model="customCard.description"
              class="w-full p-2 border rounded-md"
              rows="3"
              placeholder="Enter description"
            ></textarea>
          </div>
        </div>
        
        <div class="flex justify-center">
          <SubscriptionCard
            :title="customCard.title"
            :price="customCard.price"
            :currency="customCard.currency"
            :description="customCard.description"
            :stats="customCard.stats"
            :benefits="customCard.benefits"
            :accent-color="customCard.accentColor"
            :border-color="customCard.accentColor"
            @subscribe="handleCustomSubscribe"
          />
        </div>
      </section>

      <!-- Notification -->
      <div
        v-if="notification"
        class="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg"
      >
        {{ notification }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import SubscriptionCard from './SubscriptionCard.vue';
import type { SubscriptionStats, SubscriptionBenefit } from '@/types/SubscriptionCard';

// Notification system
const notification = ref<string>('');

const showNotification = (message: string) => {
  notification.value = message;
  setTimeout(() => {
    notification.value = '';
  }, 3000);
};

// Predefined subscription plans
const subscriptionPlans = ref([
  {
    id: 'free',
    title: 'Free Tier',
    price: 0,
    currency: 'USD$',
    description: 'Perfect for getting started with basic features and limited access.',
    stats: { videos: 0, photos: 1, other: 0 } as SubscriptionStats,
    benefits: [
      { highlight: '1 free token', text: ' per month' },
      { highlight: '5% off', text: ' on first purchase' },
      { highlight: 'Email support', text: '' }
    ] as SubscriptionBenefit[],
    variant: 'default' as const,
    borderColor: '#6b7280',
    accentColor: '#6b7280',
    buttonText: 'GET STARTED',
    buttonVariant: 'subscribe' as const,
    buttonDisabled: false
  },
  {
    id: 'gold',
    title: 'Gold Tier',
    price: 29,
    currency: 'USD$',
    description: 'Most popular plan with great value and comprehensive features.',
    stats: { videos: 10, photos: 25, other: 5 } as SubscriptionStats,
    benefits: [
      { highlight: '10 free tokens', text: ' per month' },
      { highlight: '15% off', text: ' on all merchandise' },
      { highlight: '10% off', text: ' on pay-to-view content' },
      { highlight: 'Priority support', text: '' }
    ] as SubscriptionBenefit[],
    variant: 'featured' as const,
    borderColor: '#f59e0b',
    accentColor: '#f59e0b',
    backgroundImage: 'https://images.unsplash.com/photo-1557683316-973673baf926?w=400',
    buttonText: 'SUBSCRIBE',
    buttonVariant: 'subscribe' as const,
    buttonDisabled: false,
    featuredText: 'POPULAR'
  },
  {
    id: 'premium',
    title: 'Premium Tier',
    price: 99,
    currency: 'USD$',
    description: 'Ultimate experience with unlimited access and exclusive benefits.',
    stats: { videos: 50, photos: 100, other: 25 } as SubscriptionStats,
    benefits: [
      { highlight: 'Unlimited tokens', text: ' per month' },
      { highlight: '30% off', text: ' on everything' },
      { highlight: 'Exclusive content', text: ' access' },
      { highlight: '24/7 VIP support', text: '' },
      { highlight: 'Early access', text: ' to new features' }
    ] as SubscriptionBenefit[],
    variant: 'default' as const,
    borderColor: '#8b5cf6',
    accentColor: '#8b5cf6',
    buttonText: 'GO PREMIUM',
    buttonVariant: 'subscribe' as const,
    buttonDisabled: false
  }
]);

// Custom card for interactive example
const customCard = reactive({
  title: 'Custom Tier',
  price: 49,
  currency: 'USD$',
  description: 'Customize this card to see how it looks with your settings.',
  stats: { videos: 15, photos: 30, other: 8 } as SubscriptionStats,
  benefits: [
    { highlight: '15 free tokens', text: ' per month' },
    { highlight: '20% off', text: ' on merchandise' },
    { highlight: 'Custom support', text: '' }
  ] as SubscriptionBenefit[],
  accentColor: '#06b6d4'
});

// Event handlers
const handleSubscribe = (planId: string, planTitle: string) => {
  showNotification(`Successfully subscribed to ${planTitle}!`);
  console.log(`Subscribed to plan: ${planId}`);
};

const handleCustomSubscribe = () => {
  showNotification(`Subscribed to custom ${customCard.title}!`);
  console.log('Custom subscription:', customCard);
};
</script>

<style scoped>
/* Custom styles if needed */
</style>
