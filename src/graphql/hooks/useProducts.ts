import { useQuery, type QueryHookOptions, type QueryResult } from "@apollo/client";
import { GET_PRODUCTS } from "../catelog/queries/Product";
import type { GetProductsVariables } from "../types";

export function useProductsQuery<TData = any>(
  variables: GetProductsVariables,
  options?: Omit<QueryHookOptions<TData, GetProductsVariables>, "query" | "variables">
): QueryResult<TData, GetProductsVariables> {
  return useQuery<TData, GetProductsVariables>(GET_PRODUCTS, {
    ...options,
    variables,
  });
}
