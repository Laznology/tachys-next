import { trpc } from "../lib/trpc";

/**
 * Domain Hook Pattern
 * Abstracts raw tRPC calls into a clean, domain-specific interface.
 * Returns normalized data and mutation handlers.
 */
export const useUserQuery = (userId?: string) => {
  // Note: Using a placeholder 'hello' router for demonstration since user router might not be fully wired up yet
  // Once the 'user' router is ready, replace this with trpc.user.getById.useQuery()
  const {
    data: userData,
    isLoading,
    error,
  } = trpc.hello.useQuery({ text: userId ?? "guest" }, { enabled: true });

  // const updateMutation = trpc.user.update.useMutation();

  return {
    error,

    isLoading,

    isUpdating: false,

    updateUser: () => console.log("Update mutation not wired"),

    user: userData ?? null,
  };
};
