<script lang="ts">
  import { css } from '../styles/stitches.config';
  import type { Dictionary } from './types';
  export let dictionary: Dictionary;

  const classes = {
    titleContainer: css({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 40,
    }),
    wordTitle: css({
      fontSize: 64,
      fontWeight: 'bold',
      color: '$black_200',
      letterSpacing: '-0.025em',
      marginBottom: 8,
    }),
    playPhonetic: css({
      all: 'unset',
      cursor: 'grab',
    }),
    phonetic: css({
      fontSize: 24,
      color: '$purple',
      fontWeight: 'normal',
    }),
    partOfSpeechContainer: css({
      marginBottom: 40,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
    }),
    partOfSpeech: css({
      fontSize: 24,
      fontWeight: 'bold',
      fontStyle: 'italic',
    }),
    hr: css({
      width: '100%',
      height: 1,
      backgroundColor: '$gray_200',
      marginTop: 8,
    }),
    meaningContainer: css({
      marginBottom: 40,
    }),
    listItem: css({
      '&::marker': {
        color: '$purple',
      },
    }),
  };

  //   event handlers
  function handlePlayPhonetic() {
    console.log('play sound');
  }
</script>

{#if dictionary.word !== '' && dictionary.phonetic !== ''}
  <div class={classes.titleContainer()}>
    <div>
      <h1 class={classes.wordTitle()}>{dictionary.word}</h1>
      <h3 class={classes.phonetic()}>{dictionary.phonetic}</h3>
    </div>
    <div>
      <button class={classes.playPhonetic()} on:click={handlePlayPhonetic}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          ><g fill="#A445ED" fill-rule="evenodd"
            ><circle cx="37.5" cy="37.5" r="37.5" opacity=".25" /><path
              d="M29 27v21l21-10.5z"
            /></g
          ></svg
        >
      </button>
    </div>
  </div>
  {#each dictionary.meanings as meaning}
    <div class={classes.meaningContainer()}>
      <div class={classes.partOfSpeechContainer()}>
        <h4 class={classes.partOfSpeech()}>{meaning.partOfSpeech}</h4>
        <div class={classes.hr()} />
      </div>
      <div>
        <p class={css({ color: '$gray_300', fontSize: 20 })()}>Meaning</p>
        {#each meaning.definitions as definition}
          <ul
            class={css({
              marginTop: 10,
              marginBottom: 10,
              paddingInlineStart: 25,
            })()}
          >
            <li class={classes.listItem()}>{definition.definition}</li>
          </ul>
        {/each}
      </div>
    </div>
  {/each}
  <div class={classes.hr()} />
  <div
    class={css({ display: 'flex', gap: 8, marginTop: 20, marginBottom: 20 })()}
  >
    <a
      href={dictionary.sourceUrls[0]}
      class={css({ fontSize: 14, color: '$gray_300' })()}>Source</a
    >
    <a
      href={dictionary.sourceUrls[0]}
      class={css({
        fontSize: 14,
        color: '$black_200',
      })()}
    >
      {dictionary.sourceUrls[0]}
    </a>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      ><path
        fill="none"
        stroke="#838383"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M6.09 3.545H2.456A1.455 1.455 0 0 0 1 5v6.545A1.455 1.455 0 0 0 2.455 13H9a1.455 1.455 0 0 0 1.455-1.455V7.91m-5.091.727 7.272-7.272m0 0H9m3.636 0V5"
      /></svg
    >
  </div>
{/if}
