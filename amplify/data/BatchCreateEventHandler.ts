import { util } from "@aws-appsync/utils";

// @ts-expect-error who knows what this is
export function request(ctx) {
  const now = util.time.nowISO8601();

  return {
    operation: "BatchPutItem",
    tables: {
      [`Post-${ctx.stash.awsAppsyncApiId}-${ctx.stash.amplifyApiEnvironmentName}`]:
        // @ts-expect-error events are defined in the schema
        ctx.args.events.map((event) =>
          util.dynamodb.toMapValues({
            ...event,
            id: util.autoId(),
            createdAt: now,
            updatedAt: now,
          })
        ),
    },
  };
}

// @ts-expect-error who knows what this is
export function response(ctx) {
  if (ctx.error) {
    util.error(ctx.error.message, ctx.error.type);
  }

  return ctx.result.data[
    `Post-${ctx.stash.awsAppsyncApiId}-${ctx.stash.amplifyApiEnvironmentName}`
  ];
}
