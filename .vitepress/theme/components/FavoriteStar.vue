<template>
  <button
    class="favorite-star"
    :class="{ active: isFavorite(link) }"
    @click.prevent.stop="toggleFavorite(link)"
    :aria-label="isFavorite(link) ? 'Отстрани од омилени' : 'Додади во омилени'"
    :title="isFavorite(link) ? 'Отстрани од омилени' : 'Додади во омилени'"
  >
    {{ isFavorite(link) ? "★" : "☆" }}
  </button>
</template>

<script setup lang="ts">
import { useFavorites } from "../composables/useFavorites";

const props = defineProps<{
  link: string;
}>();

const { isFavorite, toggleFavorite } = useFavorites();
</script>

<style scoped>
.favorite-star {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin-left: 6px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  font-size: 16px;
  line-height: 1;
  cursor: pointer;
  transition: color 0.2s, transform 0.2s;
  vertical-align: middle;
}

.favorite-star:hover {
  color: var(--vp-c-brand);
  transform: scale(1.15);
}

.favorite-star.active {
  color: var(--vp-c-yellow);
}

.favorite-star:focus-visible {
  outline: 2px solid var(--vp-c-brand);
  outline-offset: 2px;
  border-radius: 4px;
}
</style>
