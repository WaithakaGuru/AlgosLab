const DSIntroduction = () => (
  <section className=" max-w-8xl mx-auto">
    <h2 className="text-2xl font-bold mb-2">Introduction to Data Structures</h2>
    <p>
      Data Structures (DS) are ways of organizing and storing data so that operations like access, insertion, deletion, and search can be performed efficiently. They are fundamental to computer science and software engineering, enabling us to solve complex problems and build efficient applications.
    </p>
    <h3 className="text-xl font-semibold mt-6 mb-2">Why Do We Need Data Structures?</h3>
    <ul className="list-disc ml-6">
      <li>Efficient data management and retrieval</li>
      <li>Optimized use of memory and resources</li>
      <li>Enabling complex operations (e.g., searching, sorting, graph traversal)</li>
      <li>Foundation for algorithms and system design</li>
    </ul>
    <h3 className="text-xl font-semibold mt-6 mb-2">Classes of Data Structures</h3>
    <ul className="list-disc ml-6">
      <li>
        <b>Linear Data Structures:</b> Elements are arranged sequentially. Examples: Arrays, Linked Lists, Stacks, Queues.
      </li>
      <li>
        <b>Non-Linear Data Structures:</b> Elements are arranged hierarchically or in a network. Examples: Trees, Graphs, Heaps.
      </li>
    </ul>
    <h3 className="text-xl font-semibold mt-6 mb-2">Linear vs Non-Linear Data Structures</h3>
    <table className="table-auto border-collapse border border-slate-400 my-4">
      <thead>
        <tr>
          <th className="border border-slate-300 px-2 py-1">Linear</th>
          <th className="border border-slate-300 px-2 py-1">Non-Linear</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-slate-300 px-2 py-1">Sequential arrangement</td>
          <td className="border border-slate-300 px-2 py-1">Hierarchical/network arrangement</td>
        </tr>
        <tr>
          <td className="border border-slate-300 px-2 py-1">Single level</td>
          <td className="border border-slate-300 px-2 py-1">Multiple levels/relations</td>
        </tr>
        <tr>
          <td className="border border-slate-300 px-2 py-1">Easy traversal</td>
          <td className="border border-slate-300 px-2 py-1">Complex traversal</td>
        </tr>
        <tr>
          <td className="border border-slate-300 px-2 py-1">Examples: Array, Stack</td>
          <td className="border border-slate-300 px-2 py-1">Examples: Tree, Graph</td>
        </tr>
      </tbody>
    </table>
    <h3 className="text-xl font-semibold mt-6 mb-2">Use Cases</h3>
    <ul className="list-disc ml-6">
      <li>Arrays: Storing lists, lookup tables, buffers</li>
      <li>Linked Lists: Dynamic memory allocation, undo functionality</li>
      <li>Stacks: Function call management, expression evaluation</li>
      <li>Queues: Task scheduling, print queues</li>
      <li>Trees: File systems, databases, hierarchical data</li>
      <li>Graphs: Social networks, maps, web page links</li>
    </ul>
    <h3 className="text-xl font-semibold mt-6 mb-2">How Data Structures Are Built</h3>
    <p>
      Data structures are built using basic programming constructs like variables, pointers/references, and classes/objects. Their implementation varies by language.
    </p>
    <h4 className="font-bold mt-4">Array Implementation Example</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <span className="font-mono text-sm">C</span>
           <div className="border-l-4 border-blue-500 bg-slate-900 text-green-200 font-mono rounded p-3 my-2 text-xs shadow-md overflow-x-auto">
                <pre className=" rounded text-xs overflow-x-auto">{`int arr[5] = {1, 2, 3, 4, 5};`}</pre>
            </div>
        </div>
        <div>
            <span className="font-mono text-sm">JavaScript/TypeScript</span>
            <pre className="border-l-4 border-orange-500 bg-slate-900 text-green-200 font-mono rounded p-3 my-2 text-xs shadow-md overflow-x-auto">{`const arr = [1, 2, 3, 4, 5];`}</pre>
        </div>
    </div>
    <h3 className="text-xl font-semibold mt-6 mb-2">Visual Representations</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <span className="font-bold">Array</span>
        <pre className="bg-slate-900 rounded p-2 text-sm text-white overflow-x-auto border-gray-600 border-4">[ 1 | 2 | 3 | 4 | 5 ]</pre>
      </div>
      <div>
        <span className="font-bold">Stack</span>
        <pre className="bg-slate-900 text-white rounded p-2 text-sm overflow-x-auto border-amber-600 border-4">{`| 3 |
| 2 |
| 1 |
-----`}</pre>
      </div>
      <div>
        <span className="font-bold">Linked List</span>
        <pre className="bg-slate-900 text-white rounded p-2 text-sm  overflow-x-auto  border-lime-600 border-4">[1]→[2]→[3]→[4]→[5]→null</pre>
      </div>
      <div>
        <span className="font-bold">Tree</span>
        <pre className="bg-slate-900 text-white rounded p-2 text-sm  overflow-x-auto  border-pink-600 border-4">{`   1
  / \\
 2   3
    / \\
   4   5`}</pre>
      </div>
      <div className="col-span-2">
        <span className="font-bold">Graph (4 vertices)</span>
        <pre className="bg-slate-900 text-white rounded p-2 text-xs overflow-x-auto border-amber-600 border-4">{`A --- B
|   / |
|  /  |
C --- D`}</pre>
      </div>
    </div>
  </section>
);

export default DSIntroduction;
