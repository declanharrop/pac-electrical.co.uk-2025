import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support';
import { RetryLink } from '@apollo/client/link/retry';

export const { getClient } = registerApolloClient(() => {
  // 1. Define the standard HTTP link (Your existing connection)
  const httpLink = new HttpLink({
    uri: process.env.API_ROUTE,
    headers: {
      authorization: process.env.API_KEY,
    },
  });

  // 2. Define the Retry strategy
  const retryLink = new RetryLink({
    delay: {
      initial: 300, // Wait 300ms before first retry
      max: Infinity,
      jitter: true, // Randomize delay to prevent all requests hitting at once
    },
    attempts: {
      max: 5,
      retryIf: (error, _operation) => !!error, // Retry on any network error
    },
  });

  // 3. Return the client with the links chained together
  return new ApolloClient({
    cache: new InMemoryCache(),
    // 'from' chains them: Try RetryLink -> then try HttpLink
    link: from([retryLink, httpLink]),
  });
});
