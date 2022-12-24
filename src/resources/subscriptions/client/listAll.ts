/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { GigsGigsCoreApi } from "@fern-api/gigs";
import * as core from "../../../core";

export type Response = core.APIResponse<GigsGigsCoreApi.SubscriptionList, GigsGigsCoreApi.subscriptions.listAll.Error>;
export type Error = GigsGigsCoreApi.subscriptions.listAll.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    statusCode: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: GigsGigsCoreApi.subscriptions.listAll.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  _unknown: (fetcherError: core.Fetcher.Error): GigsGigsCoreApi.subscriptions.listAll.Error._Unknown => {
    const valueWithoutVisit = fetcherError as unknown as Omit<
      GigsGigsCoreApi.subscriptions.listAll.Error._Unknown,
      "_visit"
    >;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: GigsGigsCoreApi.subscriptions.listAll.Error._Unknown, visitor: GigsGigsCoreApi.subscriptions.listAll.Error._Visitor<_Result>) {
      return GigsGigsCoreApi.subscriptions.listAll.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: GigsGigsCoreApi.subscriptions.listAll.Error,
    visitor: GigsGigsCoreApi.subscriptions.listAll.Error._Visitor<_Result>
  ): _Result => {
    switch (value.statusCode) {
      default:
        return visitor._other(value as any);
    }
  },
} as const;
