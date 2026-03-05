import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a
  .schema({
    EventFields: a.customType({
      daysSinceOrigin: a.integer().required(),
      title: a.string().required(),
      description: a.string().required(),
      tags: a.string().array(),
      campaignId: a.id().required(),
    }),

    Event: a.model({
      daysSinceOrigin: a.integer().required(),
      title: a.string().required(),
      description: a.string().required(),
      tags: a.string().array(),
      campaignId: a.id().required(),
      campaign: a.belongsTo("Campaign", "campaignId"),
    }),

    Campaign: a.model({
      name: a.string().required(),
      description: a.string().required(),
      startDate: a.date().required(),
      endDate: a.date(),
      campaignStartYear: a.integer(),
      campaignEndYear: a.integer(),
      events: a.hasMany("Event", "campaignId"),
      timelineSettings: a.hasOne("TimelineSettings", "campaignId"),
    }),

    TimelineSettings: a
      .model({
        campaignId: a.id().required(),
        campaign: a.belongsTo("Campaign", "campaignId"),
        startYear: a.integer(),
        endYear: a.integer(),
        checkedTags: a.string().array(),
        excludeDowntime: a.boolean().default(true),
      })
      .authorization((allow) => [allow.owner()]),

    // BatchCreateEvent: a
    //   .mutation()
    //   .arguments({ events: a.ref("EventFields").array() })
    //   .returns(a.ref("Event").array())
    //   .authorization((allow) => [allow.authenticated()])
    //   .handler(
    //     a.handler.custom({
    //       dataSource: a.ref("Event"),
    //       entry: "./BatchCreateEventHandler.ts",
    //     })
    //   ),
  })
  .authorization((allow) => [allow.authenticated()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
