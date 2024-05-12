import { component$, Slot, useStyles$ } from '@builder.io/qwik';
import animateStyles from './animate.css?inline';

export const Animate = component$(({ optionAttribute, class: classProp }: { optionAttribute: string, class?: string }) => {
  useStyles$(animateStyles)

  return ( 
    <div class={classProp} option-attribute={optionAttribute} qwik-animate={`${optionAttribute}`}>
      <Slot />
    </div>
  );
});