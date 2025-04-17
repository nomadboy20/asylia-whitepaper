<template>
  <UContainer id="white-paper-start"
              class="flex flex-col mx-auto px-6 pt-16 text-slate-600 dark:text-gray-400 text-lg leading-relaxed">

    <h1 class="text-4xl font-bold text-primary dark:text-white mb-6">Asylia.io — Whitepaper</h1>
    <p class="italic text-slate-600 dark:text-gray-500 mb-10">Arx, Imperium, Ostium. (Pevnosť, moc, brána.)</p>

    <section class="mt-12">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Úvod: Bitcoinová pevnosť</h2>
      <p>Žijeme v dobe, kedy súkromie, suverenita a bezpečnosť nie sú len frázy, ale nevyhnutné piliere finančnej
        slobody a stability. Asylia.io predstavuje Bitcoinovú pevnosť, vybudovanú s jediným cieľom: zabezpečiť vaše
        Bitcoiny prostredníctvom osvedčenej technológie multisignature – transakcií vyžadujúcich viacero nezávislých
        podpisov.</p>
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Prečo Asylia.io?</h2>
      <p>Názov „Asylia“ pochádza z gréčtiny a znamená „územnú nedotknuteľnosť“, čo symbolizuje bezpečné miesto, kde
        sú vaše digitálne aktíva chránené pred akýmkoľvek neoprávneným zásahom. Doména „.io“ odkazuje na
        input-output, čím zvýrazňuje spoľahlivosť, transparentnosť a nepretržitý prístup k vašim Bitcoinom.
        Asylia.io kombinuje historickú symboliku ochrany a modernú technologickú spoľahlivosť, čím poskytuje
        jedinečný priestor pre bezpečné custody vašich digitálnych aktív.</p>
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Vízia a hodnoty</h2>
      <p><span class="font-bold text-slate-800 dark:text-white">Čomu veríme:</span></p>
      <ul class="list-disc ml-6 my-4">
        <li>Suverenita a sebestačnosť: Vždy kontrolujete svoje kľúče. Asylia asistuje len pri nevyhnutných
          situáciách podľa jasne definovaných pravidiel.
        </li>
        <li>Bezpečnosť nad všetko: Security first. Získanie prostriedkov nestačí – nevyhnutné je ich chrániť.</li>
        <li>Interoperabilita: Kompatibilita so štandardmi Bitcoin ekosystému.</li>
        <li>Kvalita a integrita: Robíme veci správne, aj keď sa nikto nepozerá.</li>
      </ul>
      <p><span class="font-bold text-slate-800 dark:text-white">Čomu nikdy nepodľahneme:</span></p>
      <ul class="list-disc ml-6 my-4">
        <li>Korupcii a kompromisom v bezpečnosti.</li>
        <li>Rýchlosti na úkor kvality.</li>
        <li>Centralizovaným praktikám alebo narušovaniu súkromia.</li>
        <li>Vendor-lock.</li>
      </ul>
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Ako funguje Asylia.io?</h2>
      <p><span class="font-bold text-slate-800 dark:text-white">Technologická štruktúra:</span></p>
      <ul class="list-disc ml-6 my-4">
        <li>Collaborative Partial Custody (CPC):</li>
        <li>Konfigurácie multisignature: 2-of-3, 3-of-5, n-of-T schéma.</li>
        <li>Asylia drží len minoritný počet kľúčov.</li>
        <li>Izolované hardvérové peňaženky, Shamir’s Secret Sharing (SSS).</li>
      </ul>
      <p><span class="font-bold text-slate-800 dark:text-white">Recovery režimy:</span></p>
      <ul class="list-disc ml-6 my-4">
        <li>Voliteľné KYC recovery.</li>
        <li>Alternatívne neKYC recovery (social recovery, záložné podpisy, timelocks).</li>
      </ul>
      <p><span class="font-bold text-slate-800 dark:text-white">Bezpečnostné inovácie:</span></p>
      <ul class="list-disc ml-6 my-4">
        <li>Offline Cold Storage.</li>
        <li>PSBT protokol (BIP-174).</li>
      </ul>
      <p><span class="font-bold text-slate-800 dark:text-white">UX a interoperabilita:</span></p>
      <ul class="list-disc ml-6 my-4">
        <li>Intuitívne UX.</li>
        <li>Kompatibilita s HW walletmi.</li>
        <li>Mobilná aplikácia (v budúcnosti).</li>
      </ul>
      <p><span class="font-bold text-slate-800 dark:text-white">Infraštruktúra a odolnosť:</span></p>
      <ul class="list-disc ml-6 my-4">
        <li>Decentralizovaná architektúra.</li>
        <li>Open-source na Supabase.</li>
      </ul>
      <p><span class="font-bold text-slate-800 dark:text-white">Použité Bitcoin štandardy:</span> P2SH-P2WSH, BIP-174,
        BIP-39,
        BIP-32/44/49/84/86 a ďalšie.</p>
      <p><span class="font-bold text-slate-800 dark:text-white">Budúce rozšírenia:</span></p>
      <ul class="list-disc ml-6 my-4">
        <li>Mobilná aplikácia ako jedno podpisové zariadenie.</li>
        <li>Privátne multisig inštancie pre pokročilých používateľov.</li>
        <li>Migrácia na taproot</li>
        <li>Časové zámky</li>
      </ul>

    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Pre koho je Asylia.io určená?</h2>
      <ul class="list-disc ml-6 my-4">
        <li>Pre Bitcoin hodlerov s dlhodobým horizontom.</li>
        <li>Pre bezpečnostne orientovaných profesionálov a nadšencov.</li>
        <li>Pre zodpovedných vlastníkov digitálnych aktív.</li>
      </ul>
      <p>Asylia.io je riešením pre tých, ktorí chápu hodnotu dlhodobej ochrany, a ktorí sú pripravení niesť
        zodpovednosť za svoju finančnú suverenitu.</p>
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Business model</h2>
      <p>Asylia.io funguje bez vstupných poplatkov alebo pravidelných mesačných platieb. Používateľ môže dobrovoľne
        pridať podporu vo forme Bitcoin outputu počas odosielania transakcie. Táto transparentná a flexibilná
        štruktúra umožňuje využívať Asyliu úplne zadarmo, pričom podporuje udržateľnosť projektu.</p>
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Výzva na spoluprácu</h2>
      <ul class="list-disc ml-6 my-4">
        <li>Konzultanti na Bitcoin, multisig a BIP štandardy.</li>
        <li>Beta testeri UX a bezpečnosti.</li>
        <li>Sponzori podporujúci bezpečný Bitcoin ekosystém.</li>
      </ul>
      <p class="text-yellow-600">- info@asylia.io</p>
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Naše sľuby</h2>
      <ul class="list-disc ml-6 my-4">
        <li>Nezávislosť: Slobodná migrácia na inú platformu.</li>
        <li>Bezpečnosť: Žiadne kompromisy.</li>
        <li>Transparentnosť: Otvorené, auditovateľné riešenia.</li>
      </ul>
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Zrieknutie sa zodpovednosti</h2>
      <p>Asylia.io poskytuje nástroje na zabezpečenie Bitcoinov, avšak nenesie zodpovednosť za stratu privátnych
        kľúčov ani za škody spôsobené nesprávnym používaním platformy. Používateľ je plne zodpovedný za správu
        svojich aktív.</p>
    </section>

    <section class="mt-12">
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Záver: Budúcnosť je bezpečná</h2>
      <p>Ako kedysi pevnosti chránili mestá pred nájazdmi, Asylia chráni vaše digitálne bohatstvo pred rizikami
        modernej doby. <br/> Ako hovorí motto Asylie:</p>
      <blockquote class="border-l-4 border-yellow-600 pl-4 italic my-4 text-slate-800 dark:text-gray-300">
        „Fiat castrum securitatis, et portae fluctuum non praevalebunt.“
        <br/>
        (Nech povstane pevnosť bezpečia a brány búrok ju nepremôžu.)
      </blockquote>

      <blockquote class="border-l-4 border-yellow-600 pl-4 italic my-4 text-slate-800 dark:text-gray-300">
        „Asylia nie je tu preto, aby rýchlo vyrástla. Asylia je tu preto, aby pretrvala.“
      </blockquote>

    </section>

    <div class="flex items-start">
      <div
          class="bg-yellow-600 flex items-center hover:cursor-pointer hover:rounded-lg hover:opacity-70 ml-0 w-auto px-8 py-2 my-6 rounded ">
        <span class="text-slate-900 font-semibold">
          Asylia.io whitepaper
        </span>
        <font-awesome :icon="['fas', 'file-pdf']" class="text-gray-800 ml-2"/>
      </div>
    </div>

  </UContainer>
</template>
<script setup lang="ts">
</script>