import { useQuery, type QueryHookOptions, type QueryResult } from "@apollo/client";
import { GET_PRODUCTS } from "../catelog/queries/Product";

export interface GetProductsVariables {
  query?: string;
  sortKey?: string;
  reverse?: boolean;
  first?: number;
  last?: number;
  after?: string;
  before?: string;
  channel?: string;
  locale?: string;
  filter?: string;
}

export function useProductsQuery<TData = any>(
  variables: GetProductsVariables,
  options?: Omit<QueryHookOptions<TData, GetProductsVariables>, "query" | "variables">
): QueryResult<TData, GetProductsVariables> {
  return useQuery<TData, GetProductsVariables>(GET_PRODUCTS, {
    ...options,
    variables,
  });
}

