import { useQuery, type QueryHookOptions, type QueryResult } from "@apollo/client";
import { GET_PRODUCT_BY_URL_KEY } from "../catelog/queries/Product";

export interface GetProductByUrlKeyVariables {
  urlKey: string;
}

export function useProductByUrlKeyQuery<TData = any>(
  variables: GetProductByUrlKeyVariables,
  options?: Omit<QueryHookOptions<TData, GetProductByUrlKeyVariables>, "query" | "variables">
): QueryResult<TData, GetProductByUrlKeyVariables> {
  return useQuery<TData, GetProductByUrlKeyVariables>(GET_PRODUCT_BY_URL_KEY, {
    ...options,
    variables,
  });
}

