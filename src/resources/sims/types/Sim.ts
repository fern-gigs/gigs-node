/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { GigsGigsCoreApi } from "@fern-api/gigs";

export interface Sim {
  object: GigsGigsCoreApi.SimObject;
  /** Unique identifier for the SIM. */
  id: string;
  /** The ICCID (integrated circuit card identifier) associated with the SIM. */
  iccid: string;
  /** The ID of the network provider of the SIM. */
  provider: string;
  /** The status of the SIM. */
  status: GigsGigsCoreApi.SimStatus;
  /** The type of the SIM. */
  type: GigsGigsCoreApi.SimTypes;
  /** Time when the SIM was created. */
  createdAt: Date;
}
