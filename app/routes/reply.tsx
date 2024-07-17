

import {
  ClientActionFunctionArgs,
  useFetcher,
  useLoaderData,
} from "@remix-run/react";


export async function clientLoader() {
  return { ok: true };
}
export async function clientAction({ request }: ClientActionFunctionArgs) {

  return { ok: true };
}
export default function NewFile() {
  return (
    <iframe className='mx-auto' src='/assets/Application(General)Form08-ApplicantMichinski-01-MAY-2024(2).pdf' width="95%" height="1000px" />


  )
}
