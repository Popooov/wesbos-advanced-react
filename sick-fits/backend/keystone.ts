import { User } from "./schemas/User";
import { config, createSchema } from "@keystone-next/keystone/schema";
import "dotenv/config";
import { createAuth } from "@keystone-next/auth";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";

const databaseURL =
  process.env.DATABASE_URL || "mongodb://localhost/keystone-sick-fits-tutorial";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
    //TODO roles
  },
});

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: "mongoose",
    url: databaseURL,
    // todo
  },
  lists: createSchema({
    // schema
    User,
  }),
  ui: {
    // todo
    isAccessAllowed: ({ session }) => {
      // console.log(session);
      return !!session?.data;
    },
  },
  session: withItemData(statelessSessions(sessionConfig), {
    User: `id`,
  }),
});
