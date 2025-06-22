import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const extractFileName = (uri: string) => {
  if (uri) {
    return uri.split("/").pop(); // Gets the last part of the URI
  }
};
