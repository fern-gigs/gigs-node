/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { GigsApi } from "@fern-api/gigs";

export interface Coverage {
  /** Type of object is always `coverage`. */
  object: GigsApi.CoverageObject;
  /** Unique identifier for the coverage configuration. */
  id: string;
  /** List of countries in ISO 3166-1 alpha-2 format covered by this coverage configuration. */
  countries: string[];
  /** A human-readable identifier of the coverage configuration, might not be unique. */
  name: string;
}