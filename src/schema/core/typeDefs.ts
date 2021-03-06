import gql from 'graphql-tag';

const typeDefs = gql`
  extend type Query {
    cores(
      find: CoresFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Core]
    coresPast(
      find: CoresFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Core]
    coresUpcoming(
      find: CoresFind
      limit: Int
      offset: Int
      order: String
      sort: String
    ): [Core]
    core(id: ID!): Core
  }

  type Core {
    id: ID
    block: Int
    status: String
    original_launch: Date
    missions: [CapsuleMission]
    reuse_count: Int
    rtls_attempts: Int
    rtls_landings: Int
    asds_attempts: Int
    asds_landings: Int
    water_landing: Boolean
  }

  input CoresFind {
    id: String
    block: Int
    status: String
    original_launch: Date
    missions: String
    reuse_count: Int
    rtls_attempts: Int
    rtls_landings: Int
    asds_attempts: Int
    asds_landings: Int
    water_landing: Boolean
  }

  type CoreMission {
    name: String
    flight: Int
  }
`;
export default typeDefs;
