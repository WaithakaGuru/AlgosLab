import { useState, useRef } from 'react';
import './index.css';
import { Container, Typography, Box, Button, Select, MenuItem, Paper, AppBar, Toolbar, TextField, Stack, ButtonGroup } from '@mui/material';
import * as visualSorts from './visualSorts';

// New random array generator
function getRandomArray(size: number, min = 1, max = 99): number[] {
  return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

function App() {
  const [array, setArray] = useState<number[]>([]);
  const [size, setSize] = useState(10);
  const [algorithm, setAlgorithm] = useState('quickSort');
  const [speed, setSpeed] = useState(500);
  const [sorting, setSorting] = useState(false);
  const [paused, setPaused] = useState(false);
  const [currentIndices, setCurrentIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const [contestantIndices, setContestantIndices] = useState<number[]>([]);
  const [buckets, setBuckets] = useState<number[][] | null>(null); // for bucketSort
  const [mergeSubarrays, setMergeSubarrays] = useState<number[][] | null>(null); // for mergeSort
  const [insertionBoundary, setInsertionBoundary] = useState<number | null>(null); // for insertionSort
  const sortGenRef = useRef<Generator<number[], void, unknown> | null>(null);

  // Generate random array using the new function
  const generateArray = () => {
    setArray(getRandomArray(size));
    setCurrentIndices([]);
    setSortedIndices([]);
    setContestantIndices([]);
  };

  // Pause handler
  const handlePause = () => setPaused((prev) => !prev);

  // Visualization: animate through the generator steps
  const runSort = async () => {
    if (!array.length) return;
    setSorting(true);
    setPaused(false);
    setCurrentIndices([]);
    setSortedIndices([]);
    setContestantIndices([]);
    setBuckets(null);
    setMergeSubarrays(null);
    setInsertionBoundary(null);
    // Pick the right generator
    const genName = algorithm + 'Steps';
    const sortGen = (visualSorts as any)[genName] as (arr: number[], opts?: any) => Generator<any>;
    if (!sortGen) {
      setSorting(false);
      return;
    }
    // For bucketSort and mergeSort, pass a callback to get bucket/merge info
    let extraInfo: any = {};
    if (algorithm === 'bucketSort') {
      extraInfo.onBuckets = (b: number[][]) => setBuckets(b.map(bucket => [...bucket]));
    }
    if (algorithm === 'mergeSort') {
      extraInfo.onSubarrays = (subs: number[][]) => setMergeSubarrays(subs.map(sub => [...sub]));
    }
    if (algorithm === 'insertionSort') {
      extraInfo.onBoundary = (boundary: number) => setInsertionBoundary(boundary);
    }
    const gen = sortGen(array.slice(), extraInfo);
    sortGenRef.current = gen;
    let step = gen.next();
    let lastArr: number[] = array.slice();
    let lastContestants: number[] = [];
    let lastStepArr: number[] = [];
    while (!step.done) {
      // Pause logic
      while (paused) {
        await new Promise(res => setTimeout(res, 100));
      }
      const arrStep = step.value;
      setArray(arrStep);
      lastStepArr = arrStep;
      // Find which indices changed (for highlight)
      const changed: number[] = [];
      arrStep.forEach((v: number, i: number) => {
        if (v !== lastArr[i]) changed.push(i);
      });
      setCurrentIndices(changed);
      // For two contestants: if two bars changed, highlight them as red and orange
      if (changed.length === 2) {
        setContestantIndices([changed[0], changed[1]]);
        lastContestants = [changed[0], changed[1]];
      } else {
        // If not two, keep previous contestants until next swap
        setContestantIndices(lastContestants);
      }
      // If this is the last step, mark all as sorted
      if (gen.next().done) {
        setSortedIndices(Array.from({ length: arrStep.length }, (_, i) => i));
        setCurrentIndices([]);
        setContestantIndices([]);
        setArray(arrStep);
        break;
      }
      lastArr = arrStep.slice();
      await new Promise(res => setTimeout(res, speed));
      step = gen.next();
    }
    // Ensure all bars turn green after sorting (for all algorithms)
    setSortedIndices(Array.from({ length: lastStepArr.length }, (_, i) => i));
    setCurrentIndices([]);
    setContestantIndices([]);
    setArray(lastStepArr);
    setSorting(false);
    setBuckets(null);
    setMergeSubarrays(null);
    setInsertionBoundary(null);
  };

  // Visualization: bar chart
  const maxVal = Math.max(...array, 1);
  return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: '#f1f5f9',
      color: 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      p: 0,
      m: 0,
    }}>
      <AppBar position="static" sx={{ bgcolor:'darkslategray', width: '99%', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'skyblue' }}>
            Sorta
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{
        m: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
        <Paper elevation={3}
          sx={{
            px: 4,
            py: 1,
            borderRadius: 3,
            bgcolor: '#f1f5f9',
            border: '1px solid #cbd5e1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            mx: 'auto',
            width: { xs: '90%'}
          }}
        >
          <Typography variant='h6' fontWeight={"bold"} align='left' gutterBottom>Set Array size, Sorting method and delay</Typography>
          <Stack direction={"row"} gap={1} border={"1px solid #e2e8f0"} p={".8rem"}>
            <Box>
              <Typography sx={{ color: '#334155'}}>Array Size</Typography>
              <TextField
                type="number"
                value={size}
                onChange={e => {
                  let val = parseInt(e.target.value, 10);
                  if (isNaN(val)) val = 10;
                  if (val < 10) val = 10;
                  if (val > 100) val = 100;
                  setSize(val);
                }}
                inputProps={{ min: 10, max: 100 }}
                size='small'
                sx={{ width: "8rem", height:"2.5rem",  bgcolor: 'white', borderRadius: 1, border: '1px solid #cbd5e1' }}
              />
            </Box>
            <Box>
              <Typography sx={{ color: '#334155'}}>Algorithm</Typography>
              <Select value={algorithm} onChange={e => setAlgorithm(e.target.value)} sx={{ bgcolor: 'white', height:'2.5rem', width: "9.5rem" }}>
                <MenuItem value="bucketSort">Bucket Sort</MenuItem>
                <MenuItem value="selectionSort">Selection Sort</MenuItem>
                <MenuItem value="insertionSort">Insertion Sort</MenuItem>
                <MenuItem value="bubbleSort">Bubble Sort</MenuItem>
                <MenuItem value="heapSort">Heap Sort</MenuItem>
                <MenuItem value="quickSort">Quick Sort</MenuItem>
                <MenuItem value="mergeSort">Merge Sort</MenuItem>
              </Select>
            </Box>
            <Box>
              <Typography sx={{ color: '#334155'}}>Delay (ms)</Typography>
              <TextField
                type="number"
                value={speed}
                onChange={e => {
                  let val = parseInt(e.target.value, 10);
                  if (isNaN(val)) val = 50;
                  if (val < 50) val = 50;
                  if (val > 2000) val = 2000;
                  setSpeed(val);
                }}
                inputProps={{ min: 50, max: 2000, step: 50 }}
                size="small"
                sx={{ width: "6rem", height: '2.5rem', bgcolor: 'white', borderRadius: 1, border: 'none' }}
              />
            </Box>
          </Stack>
          <Box sx={{ mt: 2, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Stack direction="row" gap="10rem" sx={{ gap: 1, justifyContent:"space-between", height: '4rem', alignItems:"center" }}>
              <Typography variant="subtitle1" fontStyle={"italic"}  sx={{ color: '#334155', textAlign: 'left', left: "-15rem", position:"relative"}}>
                Array Visualization:
              </Typography>
              <ButtonGroup>
                <Button variant="contained" color="primary" onClick={generateArray} sx={{
                  borderRadius: 1, height: '3rem', textWrap: "nowrap"}} disabled={sorting}>
                  Create Array
                </Button>
                <Button variant="contained" color="success" onClick={runSort} sx={{ 
                  borderRadius: 1, height: '3rem', textWrap: "nowrap"}} disabled={sorting || !array.length}>
                  {sorting ? 'Sorting...' : 'Sort Array'}
                </Button>
                <Button variant="contained" color="warning" onClick={handlePause} sx={{ borderRadius: 1, height: '3rem' }} disabled={!sorting}>
                  {paused ? 'Resume' : 'Pause'}
                </Button>
              </ButtonGroup>
            </Stack>
            <Box component={"div"} sx={{ position: 'relative', display: 'flex', alignItems: 'end', justifyContent: 'center', gap: 0.5, width: '100%', bgcolor: '#334155', borderRadius: 2, border: '1px solid #e2e8f0', p: 2, overflowX: 'auto' }}>
              {/* Bucket/merge/insertion lines */}
              {algorithm === 'bucketSort' && buckets && buckets.length > 1 &&
                buckets.reduce<React.ReactElement[]>((acc, _bucket, idx) => {
                  if (idx === 0) return acc;
                  const left = buckets.slice(0, idx).reduce((sum, b) => sum + b.length, 0);
                  acc.push(
                    <Box key={idx} sx={{ position: 'absolute', left: `${(left / array.length) * 100}%`, top: 0, bottom: 0, width: 3, bgcolor: "lime", zIndex: 2, borderRadius: 2 }} />
                  );
                  return acc;
                }, [])
              }
              {algorithm === 'mergeSort' && mergeSubarrays && mergeSubarrays.length > 1 &&
                mergeSubarrays.reduce<React.ReactElement[]>((acc, _sub, idx) => {
                  if (idx === 0) return acc;
                  const left = mergeSubarrays.slice(0, idx).reduce((sum, s) => sum + s.length, 0);
                  acc.push(
                    <Box key={idx} sx={{ position: 'absolute', left: `${(left / array.length) * 100}%`, top: 0, bottom: 0, width: 3, bgcolor: 'lime', zIndex: 2, borderRadius: 2 }} />
                  );
                  return acc;
                }, [])
              }
              {algorithm === 'insertionSort' && insertionBoundary !== null && insertionBoundary > 0 && insertionBoundary < array.length && (
                <Box sx={{ position: 'absolute', left: `${(insertionBoundary / array.length) * 100}%`, top: 0, bottom: 0, width: 3, bgcolor: 'lime', zIndex: 2, borderRadius: 2 }} />
              )}
              {/* Bars */}
              {array.map((num, idx) => {
                let barColor = '#38bdf8'; // sky-400
                let borderColor = '#0ea5e9'; // sky-600
                if (sortedIndices.includes(idx)) {
                  barColor = '#4ade80'; // green-400
                  borderColor = '#16a34a'; // green-600
                } else if (contestantIndices.length === 2 && idx === contestantIndices[0]) {
                  barColor = '#ef4444'; // red-500
                  borderColor = '#b91c1c'; // red-700
                } else if (contestantIndices.length === 2 && idx === contestantIndices[1]) {
                  barColor = '#f59e42'; // orange-400
                  borderColor = '#ea580c'; // orange-600
                } else if (currentIndices.includes(idx)) {
                  barColor = '#f472b6'; // pink-400
                  borderColor = '#be185d'; // pink-600
                }
                return (
                  <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: `${100 / array.length}%` }}>
                    <Box
                      sx={{
                        width: '100%',
                        backgroundColor: barColor,
                        border: `2px solid ${borderColor}`,
                        borderRadius: '6px 6px 0 0',
                        transition: 'all 0.2s',
                        height: `${(num / maxVal) * 264 + 10}px`,
                        minWidth: 12,
                      }}
                    ></Box>
                    <Typography variant="caption" sx={{ color: '#f1f5f9', mt: 1 }}>{num}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default App;
