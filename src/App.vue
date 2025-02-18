<template>
  <div class="flex justify-center items-center h-screen">
    <show-card
      title="Shift the overall look and feel by adding these wonderful touches to furniture in your home"
      content="Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete."
      name="Michelle Appleton"
      date="28 Jun 2020"
      imgName="drawers.jpg"
      authorImg="avatar-michelle.jpg"
      :links="{
        facebook: 'javascript:void(0)',
        twitter: 'javascript:void(0)',
        pinterest: 'javascript:void(0)',
      }"
    ></show-card>
  </div>
</template>

<script setup>
import ShowCard from './components/SHowCard.vue'
</script>
