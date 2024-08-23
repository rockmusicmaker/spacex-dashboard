import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

export const QueryLaunches = () =>
  useQuery(gql`
    query Query {
      launches {
        id
      }
    }
  `);
