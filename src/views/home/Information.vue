<template>
    <div class="content">
        <section>
            <SectionGrandTitle title="What are Miners & Workers?"/>
            <section class="flex-container">
                <information-widget title="Miners" icon="account_balance_wallet">
                    <div class="information">A <strong>miner</strong> is a reference to an address. An address is simply a place where crypto currency like ETH is stored, like a wallet.</div>
                    <router-link to="/miners" class="link default-color"><strong>View Miners</strong></router-link>
                </information-widget>
                <information-widget title="Workers" icon="engineering">
                    <div class="information">A <strong>worker</strong> is a computer usually comprised of one or more GPUs that mines crypto on it's <strong>blockchain</strong>. All of the crypto that is mined is periodically transfered to an address.</div>
                    <router-link to="/workers" class="link default-color"><strong>View Workers</strong></router-link>
                </information-widget>
            </section>
        </section>
        <section>
            <SectionGrandTitle title="How is performance monitored?"/>
            <section class="flex-container">
                <information-widget title="Hashrate" icon="account_balance_wallet">
                    <div class="information">Mining invloves solving a <strong>very</strong> difficult calculation and the best way to solve the problem is through guess work. <strong>Hash-rate</strong> is a unit to measure how many <i>guesses</i> a computer can make.</div>
                    <a target="_blank" href="https://bitflyer.com/en-eu/glossary/hashrate" class="link default-color"><strong>Learn more</strong></a>
                </information-widget>
                <information-widget title="Shares" icon="engineering">
                    <div class="information">Crypto is earned when a <strong>worker</strong> presents valid <strong>proof-of-work</strong> by receiving a share. A share is simply a small part of a <strong>block</strong>. The more shares a miner has, the more crypto currency it has.</div>
                    <a target="_blank" href="https://en.wikipedia.org/wiki/Mining_pool#:~:text=A%20%22share%22%20is%20awarded%20to,miners%20to%20generate%20a%20block." class="link default-color"><strong>Learn more</strong></a>
                </information-widget>
            </section>
        </section>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionGrandTitle from '@/components/generics/SectionGrandTitle.vue'
import InformationWidget from '@/components/generics/InformationWidget.vue'

export default defineComponent({
    components: {
        SectionGrandTitle,
        InformationWidget
    }
})
</script>
