<script lang="ts">
  import Navbar from './lib/Navbar.svelte';
  import SearchInput from './lib/SearchInput.svelte';
  import { css, globalStyles } from './styles/stitches.config';

  globalStyles();

  const classes = {
    container: css({
      maxWidth: '736px',
      margin: '0 auto',
    }),
  };
</script>

<main class={classes.container()}>
  <Navbar />
  <SearchInput />
</main>
