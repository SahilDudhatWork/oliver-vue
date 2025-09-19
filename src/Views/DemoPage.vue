<template>
  <div class="bg-white text-[#334155] p-2 max-w-7xl mx-auto dark:bg-black">
    <div class="flex flex-col gap-10 dark:bg-black">
      <section class="flex flex-col gap-6 pb-4">
        <section class="bg-gray-50 p-8 shadow-md mx-4 flex flex-col gap-2">
          <h1 class="text-3xl font-bold mb-4">Auth Demo components</h1>
          <AuthDemo />
        </section>
        <section class="bg-gray-50 p-8 shadow-md mx-4 flex flex-col gap-2">
          <h1 class="text-3xl font-bold mb-4">Paragraph demo component</h1>
          <div>
            <Paragraph
              text="Hello, this is a styled paragraph component."
              font-size="text-lg"
              font-weight="font-semibold"
              font-color="text-gray-700 dark:text-gray-200"
              shadow="shadow-sm"
              :left-icon="PaperClipIcon"
            />
          </div>
          <div>
            <Paragraph
              text="This is another paragraph component."
              font-size="text-sm"
              font-weight="font-normal"
              font-color="text-blue-800 dark:text-gray-200"
            />
          </div>
          <div>
            <Paragraph
              text="This is paragraph component with icon size (10 X 10) & spacing"
              font-size="text-sm"
              font-weight="font-normal"
              font-color="text-blue-800 dark:text-gray-200"
              :left-icon="PaperClipIcon"
              :iconSize="'w-10 h-10'"
            />
          </div>
          <div>
            <Paragraph
              text="This is paragraph component with WEBP"
              font-size="text-sm"
              font-weight="font-normal"
              font-color="text-blue-800 dark:text-gray-200"
              :left-icon="greentick"
            />
          </div>
        </section>
        <section class="bg-gray-50 p-8 shadow-md mx-4 flex flex-col gap-2">
          <h1 class="text-3xl font-bold mb-4">Heading demo component</h1>
          <div>
            <Heading text="Dashboard h1 heading" tag="h1" theme="defaultPrimaryHeading" />
          </div>
          <div>
            <Heading text="This is a h3 heading" tag="h3" />
          </div>
          <div>
            <Heading text="This is a h2 heading" tag="h2" theme="defaultSecondaryHeading" />
          </div>
          <div>
            <Heading text="This is a Section h1 heading" tag="h1" theme="sectionHeading" />
          </div>
          <div>
            <Heading
              :leftIcon="PaperClipIcon"
              :iconSpacing="'mr-5 inline-block'"
              text="This is a heading with icon (size,spacing)"
              tag="h2"
              theme="defaultSecondaryHeading"
            />
          </div>
        </section>
        <section class="bg-gray-50 p-8 shadow-md mx-4 flex flex-col gap-2">
          <h1 class="text-3xl font-bold mb-4">Button demo component</h1>
          <div><Button text="Save" variant="success" size="lg" /></div>
          <div><Button text="Delete" variant="danger" size="sm" /></div>
          <div>
            <Button text="With Icon" :left-icon="PaperClipIcon" variant="secondary" size="md" />
          </div>
          <div><Button text="More Info" variant="outline" size="md" /></div>
          <div>
            <h3>Buttons with Icons</h3>
            <div class="button-group">
              <Button text="Confirm" variant="success" :leftIcon="CheckIcon" />
              <Button text="Next" variant="danger" :rightIcon="PaperClipIcon" />
              <Button
                text="Settings"
                variant="secondary"
                :leftIcon="PaperClipIcon"
                :rightIcon="CheckIcon"
              />
            </div>
          </div>
          <div>
            <h3>Other Variants</h3>
            <div class="button-group">
              <Button text="Warning" variant="warning" size="lg" />
              <Button text="Outline" variant="outline" size="md" />
              <Button text="Disabled" variant="danger" :disabled="true" />
            </div>
          </div>
        </section>

        <section class="bg-gray-50 p-8 shadow-md mx-4 flex flex-col gap-4">
          <h1 class="text-3xl font-bold mb-4">Notification Card demo</h1>
          <!-- Notice with link and close -->
          <NotificationCard
            variant="notice"
            title="You have 3 active subscriber in this tier"
            description="Changing detail of this plan might affect current subscriber's subscription fee and benefits."
            linkLabel="Learn more"
            linkHref="#"
          />

          <!-- Alert without icon -->
          <NotificationCard
            variant="alert"
            :showIcon="false"
            title="You have 3 active subscriber in this tier"
            description="Changing detail of this plan might affect current subscriber's subscription fee and benefits."
          />

          <!-- Success with external icon -->
          <NotificationCard
            variant="success"
            :icon="CheckCircleIcon"
            title="Action completed successfully"
            description="All systems are now up and running."
          />

          <!-- Error controlled with toggle -->
          <NotificationCard
            v-model="showCustom"
            variant="error"
            title="Payment failed"
            description="Please update your billing information to continue."
          />
          <div class="flex gap-2">
            <Button
              text="Toggle Error Card"
              variant="secondary"
              size="sm"
              @click="showCustom = !showCustom"
            />
          </div>

          <!-- Info minimal -->
          <NotificationCard
            variant="info"
            title="Heads up"
            description="We updated our terms of service."
          />

          <!-- Warning long message -->
          <NotificationCard
            variant="warning"
            :icon="ExclamationTriangleIcon"
            description="WARNING: Uploading (or attempting to upload) content that violates any laws or criminal laws (ex: child pornography or non-consensual content), our Child Sexual Abuse Material Policy or Anti-Sexual Exploitation Policies, will result in related accounts to be immediately terminated and reported to law enforcement authorities."
          />
        </section>

        <section class="bg-gray-50 p-8 shadow-md mx-4 flex flex-col gap-2">
          <h1 class="text-3xl font-bold mb-4">Default demo components in single Input</h1>
          <div>
            <h3 class="text-xl font-bold mb-4">Check Box</h3>
            <InputDefaultComponent
              id="checkbox"
              type="checkbox"
              show-label
              label-text="Agree to terms"
              :radio-options="[
                { label: 'Show fan\'s username on your post', value: true },
                {
                  label:
                    'I have verified, preserved and currently hold all identification cards and documents required under Record Keeping Requirements, 18 U.S.C. 2257 and 28 C.F.R. 75, or applicable laws in any other jurisdictions, countries, and territories, for all individuals appearing in the Content.',
                  value: true,
                },
                { label: 'Silver tier', value: true, badge: true, badgeText: 'Published Tier' },
              ]"
            />
          </div>
          <div>
            <h3 class="text-xl font-bold mb-4">Radio Box</h3>
            <InputDefaultComponent
              id="radiobox"
              type="radio"
              show-label
              label-text="Subscription Tier"
              :radio-options="[
                { label: 'Choice A', value: 'A' },
                { label: 'Choice B', value: 'B' },
                { label: 'Choice C', value: 'C' },
              ]"
            />
          </div>

          <div class="w-3/4 mb-4">
            <h3 class="text-xl font-bold mb-4">Input Box</h3>
            <InputDefaultComponent
              id="input"
              type="text"
              placeholder="Enter your name"
              show-label
              v-model="name"
              label-text="Text input with description"
              description="Please enter your full name as it appears on your ID"
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputDefaultComponent
              id="input_1"
              type="text"
              placeholder="This is a required field"
              show-label
              v-model="name"
              label-text="Required Input"
              requiredDisplay="*"
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputDefaultComponent
              id="input_2"
              type="text"
              placeholder="Input with left icon"
              show-label
              v-model="name"
              label-text="Input with left Icon"
              :left-icon="EnvelopeIcon"
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputDefaultComponent
              id="input_3"
              type="text"
              placeholder="Input with right icon"
              show-label
              v-model="name"
              label-text="Input with right Icon"
              :right-icon="EyeIcon"
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputDefaultComponent
              id="input_4"
              type="text"
              placeholder="Enter discount code"
              show-label
              v-model="name"
              label-text="Input with Optional text"
              isOptional
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputDefaultComponent
              id="input_5"
              type="number"
              placeholder="Enter Discount percentage"
              show-label
              v-model="name"
              label-text="Input with Right Span Text"
              rightSpan
              :rightSpanText="'% off'"
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputDefaultComponent
              id="input_6"
              type="number"
              placeholder="Monthly Price"
              show-label
              leftSpan
              :leftSpanText="'USD$'"
              v-model="name"
              label-text="Input with Right Span Text & Left Span Text"
              rightSpan
              :rightSpanText="'/mo'"
              :rightSpanClass="'text-slate-500'"
            />
          </div>

          <div class="w-3/4 mb-4">
            <Input
              v-model="username"
              label="User name"
              type="text"
              theme="asterisk"
              rightSpan="<p>H1</p>"
              class="mb-2"
              :inputAttrs="{ required: true, maxlength: 25, placeholder: 'Enter your text' }"
              :labelAttrs="{ title: 'This is email label', class: 'text-blue-600' }"
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputDefaultComponent
              id="input_7"
              type="textarea"
              placeholder="Enter multiline text"
              show-label
              v-model="name"
              label-text="Input with Type Text Area"
              description="30/200 characters"
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputDefaultComponent
              id="input_8"
              type="textarea"
              placeholder="Enter multiline text"
              show-label
              richTextEditor
              v-model:content="name"
              label-text="Textarea with Quills library"
              description="30/200 characters"
            />
          </div>
        </section>

        <section class="bg-gray-50 p-8 shadow-md mx-4 flex flex-col gap-6">
          <h1 class="text-3xl font-bold mb-4">Subscription Card Demo</h1>

          <!-- Basic Cards Row -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Basic Subscription Cards</h3>
            <div class="flex flex-wrap gap-6 justify-center">
              <!-- Gold Tier Card -->
              <SubscriptionCard
                title="Gold Tier"
                :price="1"
                currency="USD$"
                description="This is the gold tier. Better perks than the silver tier and definitely the free subscriptions. Golden plan."
                :stats="{ videos: 3, photos: 6, other: 2 }"
                :benefits="[
                  { highlight: '5 free tokens', text: ' per month' },
                  { highlight: '11% off', text: ' on all Merchandise' },
                  { highlight: '11% off', text: ' on all Pay to View videos' },
                  { highlight: '12% off', text: ' on all Custom Request' },
                ]"
                border-color="#07F468"
                accent-color="#07F468"
                background-color="#064e3b"
                hover-accent-color="#101828"
                button-color="#07F468"
                @subscribe="handleSubscribe('Gold')"
              />

              <!-- Silver Tier Card (Featured) -->
              <SubscriptionCard
                title="Silver Tier"
                :price="100"
                currency="USD$"
                description="This is the silver tier. More perks than the free subscription. This is the silver tier. More perks than the free subscription."
                :stats="{ videos: 1, photos: 2, other: 0 }"
                :benefits="[
                  { highlight: '3 free tokens', text: ' per month', highlightColor: '#4D20ff' },
                  { highlight: '14% off', text: ' on all Merchandise', highlightColor: '#4D20ff' },
                  {
                    highlight: '10% off',
                    text: ' on all Pay to View videos',
                    highlightColor: '#4D20ff',
                  },
                  {
                    highlight: '12% off',
                    text: ' on all Custom Request',
                    highlightColor: '#4D20ff',
                  },
                ]"
                :is-featured="true"
                border-color="#4d20ff"
                accent-color="#4d20ff"
                background-image="https://i.ibb.co/3Yr4FQD2/1377790.png"
                button-text="No followers yet"
                button-variant="disabled"
                featured-text="FEATURED"
                button-color="#4d20ff"
              />
            </div>
          </div>

          <!-- Custom Styled Cards -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Custom Styled Cards</h3>
            <div class="flex flex-wrap gap-6 justify-center">
              <!-- Premium Card -->
              <SubscriptionCard
                title="Premium Tier"
                :price="250"
                currency="USD$"
                description="The ultimate premium experience with exclusive benefits and priority support."
                :stats="{ videos: 10, photos: 25, other: 5 }"
                :benefits="[
                  { highlight: '15 free tokens', text: ' per month' },
                  { highlight: '25% off', text: ' on all Merchandise' },
                  { highlight: '20% off', text: ' on all Pay to View videos' },
                  { highlight: '30% off', text: ' on all Custom Request' },
                  { highlight: 'Priority support', text: ' 24/7' },
                ]"
                border-color="#f59e0b"
                accent-color="#f59e0b"
                hover-accent-color="#07F468"
                @subscribe="handleSubscribe('Premium')"
                button-color="#f59e0b"
              />

              <!-- Basic Free Card -->
              <SubscriptionCard
                title="Free Tier"
                :price="0"
                currency="USD$"
                description="Start your journey with our free tier. Limited features but great for getting started."
                :stats="{ videos: 0, photos: 1, other: 0 }"
                :benefits="[
                  { highlight: '1 free token', text: ' per month' },
                  { highlight: '5% off', text: ' on first purchase' },
                  { highlight: 'Basic support', text: ' via email' },
                ]"
                border-color="#6b7280"
                accent-color="#6b7280"
                @subscribe="handleSubscribe('Free')"
                button-color="#6b7280"
              />

              <!-- VIP Card -->
              <SubscriptionCard
                title="VIP Tier"
                :price="500"
                currency="USD$"
                description="Exclusive VIP treatment with unlimited access and premium perks."
                :stats="{ videos: 50, photos: 100, other: 20 }"
                :benefits="[
                  { highlight: 'Unlimited tokens', text: ' per month' },
                  { highlight: '50% off', text: ' on all Merchandise' },
                  { highlight: '40% off', text: ' on all Pay to View videos' },
                  { highlight: '60% off', text: ' on all Custom Request' },
                  { highlight: 'VIP support', text: ' with dedicated manager' },
                ]"
                :is-featured="true"
                border-color="#8b5cf6"
                accent-color="#8b5cf6"
                background-image="https://images.unsplash.com/photo-1557683316-973673baf926?w=400"
                featured-text="VIP"
                @subscribe="handleSubscribe('VIP')"
                button-color="#8b5cf6"
              />
            </div>
          </div>

          <!-- Disabled State Examples -->
          <div>
            <h3 class="text-xl font-semibold mb-4">Disabled State Examples</h3>
            <div class="flex flex-wrap gap-6 justify-center">
              <!-- Sold Out Card -->
              <SubscriptionCard
                title="Limited Edition"
                :price="999"
                currency="USD$"
                description="Limited edition tier with exclusive content and benefits. Only available for a short time."
                :stats="{ videos: 20, photos: 50, other: 10 }"
                :benefits="[
                  { highlight: '25 free tokens', text: ' per month' },
                  { highlight: '35% off', text: ' on all Merchandise' },
                  { highlight: '30% off', text: ' on all Pay to View videos' },
                  { highlight: 'Exclusive content', text: ' access' },
                ]"
                border-color="#ef4444"
                accent-color="#ef4444"
                button-text="SOLD OUT"
                button-variant="disabled"
                :button-disabled="true"
                button-color="#6b7280"
              />

              <!-- Coming Soon Card -->
              <SubscriptionCard
                title="Diamond Tier"
                :price="1000"
                currency="USD$"
                description="The most exclusive tier coming soon. Stay tuned for the ultimate experience."
                :stats="{ videos: 100, photos: 200, other: 50 }"
                :benefits="[
                  { highlight: 'Unlimited everything', text: '' },
                  { highlight: '70% off', text: ' on all services' },
                  { highlight: 'Personal assistant', text: ' included' },
                  { highlight: 'Exclusive events', text: ' access' },
                ]"
                border-color="#06b6d4"
                accent-color="#06b6d4"
                button-text="COMING SOON"
                button-variant="disabled"
                :button-disabled="true"
                button-color="#6b7280"
              />
            </div>
          </div>
        </section>

        <!-- <SubscriptionCardExample /> -->

        <section class="bg-gray-50 px-6 mx-4 flex flex-col gap-6">
          <h1 class="text-2xl font-semibold">Form components with Dashboard Style</h1>
          <div class="w-3/4">
            <InputComponentDashbaord
              id="input_a"
              placeholder="Enter username"
              show-label
              v-model="name"
              label-text="Username"
              description="Usernames cannot be changed after your first month, but special circumstances may allow for exceptions. Please contact us if you need assistance with changing your username."
            />
          </div>

          <div class="w-3/4">
            <InputComponentDashbaord
              id="input_b"
              placeholder="Enter username..."
              show-label
              v-model="name"
              label-text="Username"
              description="Usernames cannot be changed after your first month, but special circumstances may allow for exceptions. Please contact us if you need assistance with changing your username."
              requiredDisplay="required-text-error"
              showErrors
              :errors="[
                {
                  error: 'Must be between 3 and 100 characters long',
                  icon: InformationCircleIcon,
                },
                {
                  error: 'Can contain any letters from a-z, any numbers from 0-9.',
                  icon: InformationCircleIcon,
                },
                {
                  error: 'Cannot contain space.',
                  icon: InformationCircleIcon,
                },
                {
                  error: 'Sorry, username \'minimay\' is taken',
                  icon: InformationCircleIcon,
                },
              ]"
            />
          </div>

          <div class="w-3/4">
            <InputComponentDashbaord
              id="input_b"
              placeholder="Enter username..."
              show-label
              v-model="name"
              label-text="Username"
              description="Usernames cannot be changed after your first month, but special circumstances may allow for exceptions. Please contact us if you need assistance with changing your username."
              onSuccess
              :success="[
                {
                  message: 'Must be between 3 and 100 characters long',
                  icon: CheckIcon,
                },
                {
                  message: 'Can contain any letters from a-z, any numbers from 0-9.',
                  icon: CheckIcon,
                },
                {
                  message: 'Cannot contain space.',
                  icon: CheckIcon,
                },
                {
                  message: 'Good news! Username \'notminimay\' is available!',
                  icon: CheckCircleIcon,
                },
              ]"
            />
          </div>

          <div class="w-3/4">
            <InputComponentDashbaord
              id="input_b"
              placeholder="Search with user id"
              show-label
              v-model="name"
              label-text="Co-performer (Optional)"
              :left-icon="MagnifyingGlassIcon"
              optionalLabel
              optionalLabelText=" If this media includes other performers, please tag them below."
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputComponentDashbaord
              id="input_c"
              placeholder="Account number in local or IBAN format"
              show-label
              v-model="name"
              label-text="Beneficiary Account"
              :right-icon="QuestionMarkCircleIcon"
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputComponentDashbaord
              id="input_d"
              placeholder="Enter country"
              show-label
              v-model="name"
              label-text="Country"
              requiredDisplay="italic-text"
              requiredDisplayText="Optional"
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputComponentDashbaord
              id="input_e"
              type="number"
              show-label
              v-model="name"
              label-text="Merch Discount"
              rightSpan
              rightSpanText="% off"
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputComponentDashbaord
              id="input_f"
              type="number"
              show-label
              v-model="name"
              label-text="Original Price"
              rightSpan
              rightSpanText="Token/mo"
              leftSpan
              leftSpanText="USD$"
              description="Price must be between USD$ 1 to 1000."
            />
          </div>

          <div class="w-3/4 mb-4">
            <InputComponentDashbaord
              id="input_g"
              type="textarea"
              show-label
              v-model="name"
              textAreaRows="3"
              label-text="Dashboard Textarea"
              placeholder="Thank you for your tip!"
              description="0/200 characters"
            />
          </div>

          <div class="w-3/4 mb-4">
            <CheckboxGroup
              v-model="transferOptions"
              name="transfer-options"
              label="Checkbox Options"
              :options="transferOptionsList"
              version="dashboard"
            />
          </div>

          <div class="w-3/4 mb-4">
            <RadioGroup
              v-model="transferType"
              name="subscription"
              label="Subscription Tier"
              :options="transferTypeOptions"
              version="dashboard"
            />
          </div>

          <div class="w-3/4 mb-4">
            <CheckboxSwitch
              v-model="isChecked"
              label="Toggle Dark mode"
              version="dashboard"
              wrapper-label="Dark Mode"
              showWrapperLabel
            />
          </div>

          <Paragraph
            text="Options"
            fontSize="text-xl"
            fontWeight="font-semibold"
            fontColor="text-[#101828] dark:text-dark-text"
          />

          <div>
            <InputComponentCheckbox
              v-model="selectedFeatures"
              type="checkbox"
              name="features"
              label="Checkbox Options"
            >
              <CheckboxOption
                v-for="option in featureOptions"
                :key="option.value"
                :id="`feature-${option.value}`"
                :value="option.value"
                :label="option.label"
                :tags="option.tags"
              />
            </InputComponentCheckbox>
          </div>
          <div>
            <InputComponentCheckbox
              v-model="selectedPlan"
              type="radio"
              name="plan"
              label="Subscription Tier"
            >
              <CheckboxOption
                v-for="option in planOptions"
                :key="option.value"
                :id="`plan-${option.value}`"
                :value="option.value"
                :label="option.label"
              />
            </InputComponentCheckbox>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import AuthDemo from "./AuthDemo.vue";
import Paragraph from "./Components/default/Paragraph.vue";
import Heading from "./Components/default/Heading.vue";
import Button from "./Components/UI/ButtonComponent.vue";
import InputComponentCheckbox from "./Components/Form/InputComponentCheckbox.vue";
import CheckboxOption from "./Components/Form/CheckboxOption.vue";
import {
  PaperClipIcon,
  EnvelopeIcon,
  EyeIcon,
  InformationCircleIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/vue/24/outline";
import { CheckCircleIcon } from "@heroicons/vue/24/solid";
import InputDefaultComponent from "./Components/input/InputDefaultComponent.vue";
import Input from "./Components/Form/Input.vue";
import InputComponentDashbaord from "./Components/input/InputComponentDashboard.vue";
import { ref } from "vue";
import CheckboxGroup from "./Components/Form/CheckboxGroup.vue";
import RadioGroup from "./Components/Form/RadioGroup.vue";
import CheckboxSwitch from "./Components/Form/CheckboxSwitch.vue";
import greentick from "@/assets/images/greentick.webp";
import NotificationCard from "./Components/UI/Card/Dashboard/Notification/NotificationCard.vue";
import SubscriptionCard from "./Components/UI/Card/SubscriptionCard.vue";
//import SubscriptionCardExample from "./Components/UI/Card/SubscriptionCardExample.vue";

const name = ref("");
const checkBoxGroup = ref("");
const isChecked = ref(false);
const username = ref("");
const showCustom = ref(true);

const selectedFeatures = ref<(string | number)[]>([]);
const selectedPlan = ref<(string | number)[]>([]);

const transferType = ref("subscription");
const transferTypeOptions = [
  { value: "choice-a", label: "Choice A" },
  { value: "choice-b", label: "Choice B" },
  { value: "choice-c", label: "Choice C" },
];

const transferOptions = ref<string[]>([]);
const transferOptionsList = [
  {
    value: "free-plan",
    label: "Free Plan",
    tags: [{ text: "Published Tier", variant: "blue" as const }],
    version: "dashboard",
  },
  {
    value: "free-plan-draft",
    label: "Free Plan",
    tags: [{ text: "Draft", variant: "gray" as const }],
    version: "dashboard",
  },
  {
    value: "verified",
    label:
      'I have verified, preserved and currently hold all identification cards and documents required under Record Keeping Requirements, 18 U.S.C. 2257 and 28 C.F.R. 75, or applicable laws in any other jurisdictions, countries, and territories ("2257 documentation"), for all individuals appearing in the Content.',
    version: "dashboard",
  },
];

const featureOptions = [
  {
    value: "free-plan",
    label: "Free Plan",
    tags: [{ text: "Published Tier", variant: "#d1e0ff" }],
  },
  {
    value: "free-plan-again",
    label: "Free Plan",

    tags: [{ text: "Draft", variant: "" }],
  },
  {
    value: "verified",
    label:
      "I have verified, preserved and currently hold all identification cards and documents required under Record Keeping Requirements, 18 U.S.C. 2257 and 28 C.F.R. 75, or applicable laws in any other jurisdictions, countries, and territories ('2257 documentation'), for all individuals appearing in the Content.",
  },
];

const planOptions = [
  { value: "choice-a", label: "Choice A" },
  { value: "Choice-b", label: "Choice B" },
  { value: "Choice-c", label: "Choice C" },
];

// Handle subscription card actions
const handleSubscribe = (tier: string) => {
  console.log(`Subscribing to ${tier} tier`);
  alert(`You clicked subscribe for ${tier} tier!`);
};
</script>

<style scoped></style>
