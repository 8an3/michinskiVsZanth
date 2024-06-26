import { json, type ActionFunction, type LoaderFunction } from '@remix-run/node';

import { Form, Link, useLoaderData, useLocation, Await, useFetcher, useSubmit, useNavigate } from '@remix-run/react';

export async function loader({ request, params }: LoaderFunction) {
  return null
};

export async function action({ request, params }: ActionFunction) {
  return null
};

export default function NewFile() {

  return (
    <div>

    </div>
  )
}
