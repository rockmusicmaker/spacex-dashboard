import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

export const useUpcomingLaunches = () =>
  useQuery(gql`
    query Query {
      launchesUpcoming {
        details
        id
        is_tentative
        launch_date_local
        launch_date_unix
        launch_date_utc
        launch_success
        launch_year
        mission_id
        mission_name
        static_fire_date_unix
        static_fire_date_utc
        tentative_max_precision
        upcoming
        rocket {
          rocket_name
        }
      }
    }
  `);
