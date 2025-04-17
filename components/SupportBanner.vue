<template>
  <div class="flex justify-center">
  <div class="bg-slate-800 border-l-4 border-yellow-600 p-6 mx-auto  rounded-md shadow-md  flex flex-col space-y-4">
    <div class="text-gray-100 dark:text-gray-300 text-lg font-semibold">
      Podporte Asyliu v jej začiatkoch. Ďakujeme za vašu dôveru.
    </div>

    <div class="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
      <div class="bg-slate-700 px-4 py-2 rounded-md text-sm font-mono text-yellow-400 break-all">
        {{ btcAddress }}
      </div>
      <UButton class="hover:cursor-pointer" @click="copyAddress" size="sm" color="primary" variant="solid" label="Kopírovať adresu"/>
    </div>

    <div class="text-gray-100 dark:text-gray-400 text-sm">
      Aktuálny stav adresy: <span class="text-yellow-400 font-semibold">{{ balanceBTC }} BTC</span>
    </div>
  </div>
  </div>

</template>

<script setup>
import {ref, onMounted} from 'vue'

const btcAddress = '1111111'
const balanceBTC = ref('-')

const fetchBalance = async () => {
  try {
    const res = await fetch(`https://blockchain.info/rawaddr/${btcAddress}`);
    const data = await res.json();
    const satoshis = data?.final_balance;
    balanceBTC.value = (satoshis / 100000000).toFixed(8); // satoshi => BTC
  } catch (error) {
    console.error('Nepodarilo sa načítať zostatok:', error);
  }
}

const toast = useToast()


const copyAddress = async () => {
  try {

    await navigator.clipboard.writeText(btcAddress)

    toast.add({
      title: 'Success',
      description: 'Address copied to clipboard.',
      color: 'success'
    })

  } catch (e) {

    toast.add({
      title: 'Error',
      description: 'Failed to copy address.',
      color: 'error'
    })

  }
}

onMounted(() => {
  // fetchBalance()
})
</script>
