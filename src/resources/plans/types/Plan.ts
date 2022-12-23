/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { GigsApi } from "@fern-api/gigs";

export interface Plan {
  /** Type of object is always `plan`. */
  object: GigsApi.PlanObject;
  /** The unique identifier for the plan. */
  id: GigsApi.PlanId;
  coverage: GigsApi.Coverage;
  /** The data allowance included in this plan. A value of `-1` indicates unlimited data. */
  data: number;
  /** The unit of the data value is always `byte`. */
  dataUnit: GigsApi.DataUnit;
  /** The plan's description, meant to be displayable to the users. */
  description?: string;
  /** The plan's image, meant to be displayable to the users. */
  image: string;
  /** The plan's name, meant to be displayable to the users. */
  name: string;
  price: GigsApi.Price;
  /** The ID of the network provider supported by this plan. */
  provider: string;
  requirements: GigsApi.PlanRequirements;
  /** List of SIM types supported by this plan. */
  simTypes: GigsApi.SimTypes[];
  /** The SMS allowance included in this plan. A value of `-1` indicates unlimited SMS. */
  sms: number;
  /** The unit of the sms value is always `message`. */
  smsUnit: GigsApi.PlanSmsUnit;
  status: GigsApi.PlanStatus;
  /** List of tags describing this plan. */
  tags: string[];
  validity: GigsApi.Validity;
  /** The voice call allowance in seconds included in this plan. A value of `-1` indicates unlimited voice calls. */
  voice: number;
  /** The unit of the voice value is always `second`. */
  voiceUnit: GigsApi.VoiceUnit;
  /** Time when the plan was created. */
  createdAt: Date;
}
