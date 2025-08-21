import { Typography, Box } from "@mui/material";

const Arrays = () => (
  <>
    <Typography variant="h5" color="#0f172a" fontWeight="bold" gutterBottom>
      Arrays
    </Typography>
    <Typography component={"p"} gutterBottom>
      Arrays are the most basic linear data structure. They store elements in a contiguous block of memory and allow fast access by index. Arrays are fixed in size in many languages, but in JavaScript/TypeScript, arrays are dynamic and can grow or shrink.
    </Typography>
    <Typography component={"p"} gutterBottom>
      <b>Example:</b>
    </Typography>
    <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
      {`const arr: number[] = [1, 2, 3, 4, 5];
console.log(arr[2]); // 3
arr.push(6); // [1,2,3,4,5,6]
arr.pop(); // [1,2,3,4,5]`}
    </Box>
      <Typography component={"p"} gutterBottom>
        Arrays are contiguous memory locations that store elements of the same type. They allow random access using indices.
      </Typography>
      <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
        {`const arr = [10, 20, 30, 40];
console.log(arr[2]); // 30`}
      </Box>
      <Typography component={"p"} gutterBottom>
        <b>Zero-based Indexing:</b> Arrays in most programming languages (including JavaScript and TypeScript) are zero-indexed. This means the first element is at index 0, the second at index 1, and so on. For example:
      </Typography>
      <Box component="pre" sx={{ bgcolor: '#e0e7ff', p: 2, borderRadius: 2, fontSize: '1rem', border: '2px solid #6366f1', whiteSpace: 'pre-wrap', wordBreak: 'break-word', mb: 2 }}>
        {`const arr = [5, 8, 12, 20];
// Index:    0   1   2   3
// Value:    5   8  12  20
console.log(arr[0]); // 5 (first element)
console.log(arr[3]); // 20 (last element)`}
      </Box>
      <div className="mb-4">
        <b>Visual Representation:</b>
        <div className="flex flex-row gap-2 mt-2">
          {[0, 1, 2, 3].map((idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-12 h-12 border-2 border-blue-400 bg-blue-100 flex items-center justify-center text-lg font-bold rounded">
                {['5','8','12','20'][idx]}
              </div>
              <span className="text-xs mt-1">{idx}</span>
            </div>
          ))}
        </div>
        <div className="text-xs text-gray-600 mt-2">Each box is an array cell. The number below is its index (starting from 0).</div>
      </div>
      <Typography component={"p"} gutterBottom>
        Arrays are ideal for scenarios where you need fast access to elements by position, but inserting or deleting elements (except at the end) can be costly.
      </Typography>
  </>
);

export default Arrays;
