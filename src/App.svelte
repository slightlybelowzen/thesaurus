<script lang="ts">
  import Counter from './lib/Counter.svelte';
  import { css } from './styles/stitches.config';

  const classes = {
    container: css({
      maxWidth: '1024px',
      margin: '0 auto',
    }),
  };
</script>

<main class={classes.container()}>
  <div>
    <Counter />
  </div>
</main>
