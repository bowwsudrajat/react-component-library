import { expectType } from '@momo/types';
import { unstable_useEventCallback as useEventCallback } from '@momo/utils';

function InferenceTest() {
  useEventCallback((event) => {
    expectType<unknown, typeof event>(event);
  });
  useEventCallback((event: MouseEvent) => {
    expectType<MouseEvent, typeof event>(event);
  });
  useEventCallback<[MouseEvent, number], number>((event, count) => {
    expectType<MouseEvent, typeof event>(event);
    expectType<number, typeof count>(count);
    return count;
  });
  useEventCallback<(event: MouseEvent, count: number) => number>((event, count) => {
    expectType<MouseEvent, typeof event>(event);
    expectType<number, typeof count>(count);
    return count;
  });
}
