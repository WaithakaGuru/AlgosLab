import { Stack, Typography } from "@mui/material";

const Prerequisites = () => (
    <section className="max-w-8xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Prerequisites for Advanced TypeScript Typings</h2>
        <p>
          Before diving into advanced TypeScript typings, you should be comfortable with the basics of TypeScript and its differences from JavaScript. Here’s what you should know:
        </p>
        <ul className="list-decimal ml-6 lispace">
            <li>
              <b>What TypeScript is and why it’s needed:</b>
              <div className="ml-2 text-sm text-slate-600">TypeScript is a superset of JavaScript that adds static typing. It helps catch errors early, improves code quality, and enables better tooling and refactoring. For example, <code>let age: number = 25;</code> ensures <code>age</code> is always a number.</div>
            </li>
            <li>
              <b>How TypeScript code is executed and how to set up a basic <code>tsconfig.json</code>:</b>
              <div className="ml-2 text-sm text-slate-600">TypeScript code is compiled to JavaScript using the TypeScript compiler (<code>tsc</code>). A <code>tsconfig.json</code> file configures the compiler. Example:
                {/* <pre className="rounded p-2 text-xs bg-slate-100 border-l-4 border-blue-400 text-slate-800 font-mono">{`{ */}
                </div>
            </li>
              
            <li>
              <b>What a type is and how to do basic typing:</b>
              <div className="ml-2 text-sm text-slate-600">A type defines the shape or kind of data a variable can hold. Example: <code>let name: string = "Alice";</code> or <code>let isActive: boolean = true;</code></div>
            </li>
            <li>
              <b>Primitive data types:</b>
              <div className="ml-2 text-sm text-slate-600">Common primitives include:
                <ul className="list-disc ml-6">
                  <li><code>number</code>: <span className="text-xs">e.g. <code>let n: number = 42;</code></span></li>
                  <li><code>string</code>: <span className="text-xs">e.g. <code>let s: string = "hello";</code></span></li>
                  <li><code>boolean</code>: <span className="text-xs">e.g. <code>let b: boolean = false;</code></span></li>
                  <li><code>null</code> and <code>undefined</code>: <span className="text-xs">absence of value</span></li>
                  <li><code>infinity</code>: <span className="text-xs">special numeric value, e.g. <code>let inf = Infinity;</code></span></li>
                </ul>
              </div>
            </li>
            <li>
              <b>How to define custom types using <code>type</code> and <code>interface</code>:</b>
              <div className="ml-2 text-sm text-slate-600">Use <code>type</code> for type aliases and <code>interface</code> for object shapes. Example:
                <pre className="code-snippet">{`type Point = { x: number; y: number; `}
                </pre>
              </div>
            </li>
            <li>
              <b>Type inference:</b>
              <div className="ml-2 text-sm text-slate-600">TypeScript can automatically infer types from values. Example: <code>let city = "Nairobi";</code> is inferred as <code>string</code> without explicit annotation.</div>
            </li>
            <li>
              <b>How to write and run statically typed TypeScript code:</b>
              <div className="ml-2 text-sm text-slate-600">Write code in <code>.ts</code> files, use types everywhere, and run <code>tsc</code> to compile. Example:
                <pre className="code-snippet">
            {`type Person = {
        name: string;
        age: number;
    };
    const user: Person = { name: "Jane", age: 25 };`}</pre>
                </div>
            </li>
        </ul>

        <Typography variant="h6"fontWeight={"bold"}>Basic Typings in Typescript</Typography>        
        <Stack component={"section"} className="pl-6">
            <div className="fcol">
                <span className="font-bold">Array Typing</span>
                <pre className="code-snippet">{`const numbers: number[] = [1, 2, 3, 4];
    const users: Person[] = [user];`}</pre>
            </div>
            <div className="fcol">
                <span className="font-bold">Function Typing</span>
                <pre className="code-snippet">{`function add(a: number, b: number): number {
        return a + b;
}
 const calculateMiles: (kilometers: number) => number = (): number {
    return kilometers * 1.61
 }
`}</pre>
            </div>
            <div className="fcol">
                <span className="font-bold">Object Typing</span>
                <pre className="code-snippet">{`const obj1: {[key: string]: string} = {name: "Waithaka"}

        // or use the Record in-built Utility type(covered in later topics)
const obj2: Record<string, string> = {sport: "Football}
`}</pre>
            </div>
        </Stack>
        <h3 className="text-xl font-semibold mt-6 mb-2">Previsit: Union & Intersection Types</h3>
        <ul className="list-disc ml-6">
          <li><b>Union Types:</b> Allow a variable to be one of several types. <code>type ID = number | string;</code></li>
      <li><b>Intersection Types:</b> Combine multiple types into one. <code>{`type User = Person & { role: string };`}</code></li>
        </ul>
        <p className="mt-4">With these basics, you’ll be ready to tackle advanced TypeScript typings, generics, utility types, and more!</p>
    </section>
  
);

export default Prerequisites;
