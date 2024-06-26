import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";
import { useEffect, useRef } from "react";

export async function clientLoader() {
  return { ok: true };
}
export async function clientAction({ request }: ClientActionFunctionArgs) {

  return { ok: true };
}

export default function NewFile() {

  return (
    <div>
      <p>test</p>

    </div>
  )
}
