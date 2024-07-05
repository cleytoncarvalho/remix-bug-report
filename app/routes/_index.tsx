import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

import { useEffect, useRef } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    console.log(formRef)
  }, [])

  return (
    <div className="font-sans p-4">

      <h1 className="text-3xl">Welcome to Remix</h1>

      <br />
      <br />

      <Form ref={formRef}>
        <input type="email" name="email" defaultValue="test@test.com" className="border border-gray-300" />
      </Form>
    </div>
  );
}
