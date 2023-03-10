/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as DevicesClient } from "./resources/devices/client/Client";
import { Client as PlansClient } from "./resources/plans/client/Client";
import { Client as ProjectsClient } from "./resources/projects/client/Client";
import { Client as SubscriptionsClient } from "./resources/subscriptions/client/Client";
import { Client as UsersClient } from "./resources/users/client/Client";

export declare namespace GigsGigsCoreApiClient {
  interface Options {
    environment?: environments.Environment | string;
    token?: core.Supplier<core.BearerToken>;
  }
}

export class GigsGigsCoreApiClient {
  constructor(private readonly options: GigsGigsCoreApiClient.Options) {}

  #devices: DevicesClient | undefined;

  public get devices(): DevicesClient {
    return (this.#devices ??= new DevicesClient(this.options));
  }

  #plans: PlansClient | undefined;

  public get plans(): PlansClient {
    return (this.#plans ??= new PlansClient(this.options));
  }

  #projects: ProjectsClient | undefined;

  public get projects(): ProjectsClient {
    return (this.#projects ??= new ProjectsClient(this.options));
  }

  #subscriptions: SubscriptionsClient | undefined;

  public get subscriptions(): SubscriptionsClient {
    return (this.#subscriptions ??= new SubscriptionsClient(this.options));
  }

  #users: UsersClient | undefined;

  public get users(): UsersClient {
    return (this.#users ??= new UsersClient(this.options));
  }
}
