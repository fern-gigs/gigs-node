/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { GigsApi } from "@fern-api/gigs";

export interface PlanList {
  /** Type of object is always `list`. */
  object: GigsApi.PlanListObject;
  /** List of objects of type `plan`. */
  items: GigsApi.Plan[];
  /** A unique identifier to be used as `after` pagination parameter if more items are available sorted after the current batch of items. */
  moreItemsAfter?: string;
  /** A unique identifier to be used as `before` pagination parameter if more items are available sorted before the current batch of items. */
  moreItemsBefore?: string;
}
