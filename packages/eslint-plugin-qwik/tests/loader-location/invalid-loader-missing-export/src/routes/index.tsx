// Expect error: { "messageId": "missingExport" }

import { routeLoader$ } from '@builder.io/qwik-city';

const useFormLoader = routeLoader$(() => {
  return null;
});
