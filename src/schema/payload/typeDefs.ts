import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    payloads(
      find: PayloadsFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Payload]
    payload(id: ID!): Payload
  }

  extend type Mission {
    payloads: [Payload]
  }

  type Payload {
    id: ID
    norad_id: [Int]
    reused: Boolean
    customers: [String]
    nationality: String
    manufacturer: String
    payload_type: String
    payload_mass_kg: Float
    payload_mass_lbs: Float
    orbit: String
    orbit_params: PayloadOrbitParams
  }

  type PayloadOrbitParams {
    reference_system: String
    regime: String
    longitude: Float
    lifespan_years: Float
    epoch: Date
    mean_motion: Float
    raan: Float
    semi_major_axis_km: Float
    eccentricity: Float
    periapsis_km: Float
    apoapsis_km: Float
    inclination_deg: Float
    period_min: Float
    arg_of_pericenter: Float
    mean_anomaly: Float
  }

  input PayloadsFind {
    payload_id: ID
    norad_id: Int
    customer: String
    nationality: String
    manufacturer: String
    payload_type: String
    orbit: String
    reference_system: String
    regime: String
    longitude: Float
    semi_major_axis_km: Float
    eccentricity: Float
    periapsis_km: Float
    apoapsis_km: Float
    inclination_deg: Float
    period_min: Float
    lifespan_years: Float
    epoch: Date
    mean_motion: Float
    raan: Float
    reused: Boolean
  }
`;
export default typeDefs;
