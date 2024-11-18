import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

export const useLaunches = () =>
  useQuery(gql`
    query Query {
      launches {
        id
        launch_date_local
        mission_name
        rocket {
          rocket_name
        }
        details
      }
    }
  `);
