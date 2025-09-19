export interface SubscriptionStats {
  videos: number;
  photos: number;
  other: number;
}

export interface SubscriptionBenefit {
  text: string;
  highlight: string;
  highlightColor?: string;
}

export interface SubscriptionCardProps {
  // Basic card info
  title: string;
  price: number;
  currency?: string;
  description: string;

  // Stats
  stats: SubscriptionStats;

  // Benefits
  benefits: SubscriptionBenefit[];

  // Styling
  variant?: "default" | "featured";
  isFeatured?: boolean; // boolean flag alternative to variant
  borderColor?: string;
  accentColor?: string;
  hoverAccentColor?: string;
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundGradient?: string;
  buttonColor?: string;

  // Button
  buttonText?: string;
  buttonDisabled?: boolean;
  buttonVariant?: "subscribe" | "disabled";

  // Featured badge
  featuredText?: string;

  // Events
  onSubscribe?: () => void;
}

export interface SubscriptionCardEmits {
  subscribe: [];
}
