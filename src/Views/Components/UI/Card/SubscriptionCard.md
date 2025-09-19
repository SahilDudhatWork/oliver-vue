# SubscriptionCard Component

A highly customizable Vue 3 subscription card component with TypeScript support, perfect for displaying pricing tiers and subscription plans.

## Features

- 🎨 **Fully Customizable**: Colors, borders, backgrounds, and styling
- 🏷️ **Featured Variant**: Special styling for highlighted plans
- 📊 **Stats Display**: Show videos, photos, and other content counts
- ✅ **Benefits List**: Highlight key features and benefits
- 🔘 **Interactive Buttons**: Subscribe or disabled states
- 🖼️ **Background Images**: Support for custom background images
- 📱 **Responsive Design**: Works on all screen sizes
- 🎯 **TypeScript Support**: Full type safety and IntelliSense

## Props

### Required Props

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | The subscription tier title |
| `price` | `number` | The subscription price |
| `description` | `string` | Description of the subscription tier |
| `stats` | `SubscriptionStats` | Object containing videos, photos, and other counts |
| `benefits` | `SubscriptionBenefit[]` | Array of benefit objects |

### Optional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currency` | `string` | `"USD$"` | Currency symbol/text |
| `variant` | `'default' \| 'featured'` | `'default'` | Card variant style |
| `borderColor` | `string` | `"#07F468"` | Border color (hex/rgb/css color) |
| `accentColor` | `string` | `"#07F468"` | Accent color for highlights and buttons |
| `backgroundImage` | `string` | `undefined` | URL for background image (featured variant) |
| `backgroundGradient` | `string` | Auto-generated | Custom CSS gradient |
| `buttonText` | `string` | `"SUBSCRIBE"` | Text for the action button |
| `buttonDisabled` | `boolean` | `false` | Whether the button is disabled |
| `buttonVariant` | `'subscribe' \| 'disabled'` | `'subscribe'` | Button style variant |
| `featuredText` | `string` | `"FEATURED"` | Text for the featured badge |
| `onSubscribe` | `() => void` | `undefined` | Callback function for subscribe action |

## Type Definitions

```typescript
interface SubscriptionStats {
  videos: number;
  photos: number;
  other: number;
}

interface SubscriptionBenefit {
  text: string;
  highlight: string;
  highlightColor?: string; // Optional custom color for this benefit
}
```

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `subscribe` | `void` | Emitted when the subscribe button is clicked |

## Basic Usage

```vue
<template>
  <SubscriptionCard
    title="Gold Tier"
    :price="29"
    currency="USD$"
    description="Premium subscription with exclusive benefits"
    :stats="{ videos: 10, photos: 25, other: 5 }"
    :benefits="[
      { highlight: '10 free tokens', text: ' per month' },
      { highlight: '20% off', text: ' on all merchandise' }
    ]"
    @subscribe="handleSubscribe"
  />
</template>

<script setup>
import SubscriptionCard from './Components/UI/Card/SubscriptionCard.vue';

const handleSubscribe = () => {
  console.log('Subscribe clicked!');
};
</script>
```

## Advanced Usage Examples

### Featured Card with Custom Styling

```vue
<SubscriptionCard
  title="Premium Tier"
  :price="99"
  currency="USD$"
  description="The ultimate premium experience"
  :stats="{ videos: 50, photos: 100, other: 20 }"
  :benefits="[
    { highlight: 'Unlimited tokens', text: ' per month' },
    { highlight: '50% off', text: ' on everything', highlightColor: '#ff6b6b' }
  ]"
  variant="featured"
  border-color="#8b5cf6"
  accent-color="#8b5cf6"
  background-image="https://example.com/bg.jpg"
  featured-text="PREMIUM"
  @subscribe="handlePremiumSubscribe"
/>
```

### Disabled/Sold Out Card

```vue
<SubscriptionCard
  title="Limited Edition"
  :price="199"
  currency="USD$"
  description="Exclusive limited time offer"
  :stats="{ videos: 25, photos: 50, other: 10 }"
  :benefits="[
    { highlight: 'Exclusive content', text: ' access' },
    { highlight: '30% off', text: ' everything' }
  ]"
  button-text="SOLD OUT"
  button-variant="disabled"
  :button-disabled="true"
  border-color="#ef4444"
  accent-color="#ef4444"
/>
```

### Custom Colors and Styling

```vue
<SubscriptionCard
  title="Custom Tier"
  :price="49"
  :stats="{ videos: 15, photos: 30, other: 8 }"
  :benefits="[
    { highlight: '15 tokens', text: ' monthly' },
    { highlight: 'Priority support', text: '' }
  ]"
  border-color="#06b6d4"
  accent-color="#06b6d4"
  background-gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
/>
```

## Styling Customization

The component uses Tailwind CSS classes and supports custom CSS properties. You can override styles using:

1. **Props**: Use `borderColor`, `accentColor`, etc.
2. **CSS Custom Properties**: Override component variables
3. **Tailwind Classes**: Add custom classes to the wrapper

### CSS Custom Properties

```css
.subscription-card {
  --border-color: #your-color;
  --accent-color: #your-color;
  --background-gradient: your-gradient;
}
```

## Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- High contrast support

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Vue 3.x
- TypeScript 4.x+

## Dependencies

- Vue 3
- TypeScript (optional but recommended)
- Tailwind CSS (for styling)

## Contributing

When contributing to this component:

1. Maintain TypeScript support
2. Follow Vue 3 Composition API patterns
3. Ensure accessibility standards
4. Add tests for new features
5. Update documentation

## License

This component is part of the Oliver Vue UI library.
