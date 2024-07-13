<script lang="ts">
  import Navbar from './lib/Navbar.svelte';
  import { css, globalStyles } from './styles/stitches.config';
  import Dictionary from './lib/Dictionary.svelte';

  globalStyles();

  const classes = {
    container: css({
      maxWidth: '736px',
      margin: '0 auto',
    }),
    dimensions: css({
      position: 'fixed',
      bottom: 3,
      left: 3,
    }),
  };
  $: innerHeight = 0;
  $: innerWidth = 0;
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<main class={classes.container()}>
  <Navbar />
  <Dictionary />
  <p class={classes.dimensions()}>{innerHeight} x {innerWidth}</p>
</main>
