<template>

  <div>
    <UContainer>
      <UToaster/>
      <UButton @click="showToast" color="primary">Button</UButton>
      <div class="text-red-800">
        dew
      </div>

      <USelect v-model="value" :items="items" class="w-48" />

      <UCollapsible class="flex flex-col gap-2 w-48">
        <UButton
            class="group"
            label="Open"
            color="neutral"
            variant="subtle"
            trailing-icon="i-lucide-chevron-down"
            :ui="{
        trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200'
      }"
            block
        />

        <template #content>
          <UCheckbox size="xl" required label="Check me"/>
        </template>
      </UCollapsible>

      <UAlert
          color="neutral"
          title="Heads up!"
          description="You can change the primary color in your app config."
          icon="i-lucide-terminal"
      />
    </UContainer>
  </div>
</template>

<script setup>
const toast = useToast()

const items = ref(['Backlog', 'Todo', 'In Progress', 'Done'])
const value = ref('In Progress')
function showToast() {
  console.log('showToast()', toast)
  toast.add({
    title: 'Success',
    description: 'Your action was completed successfully.',
    color: 'danger',
    timeout: 5000,
  })
}
</script>