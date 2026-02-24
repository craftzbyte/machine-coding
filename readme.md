#repos for machine coding

lazy initialization
const [count, setCount] = useState(() => {
return Number(localStorage.getItem('count') || 0);
});
he funciton will run just once in the initial render, thats it
useState cant store a funciton . if it detects type == function it will execute it thinkng its a lazy initialization funciton .

🔑 Senior insight: useCallback is USELESS without React.memo on the child. The entire point is to prevent referential changes from defeating memo. If the child isn't memo'd, you're just adding overhead for zero benefit.

Setting state to the same value silently bails out — but with a catch. React uses Object.is to compare old and new state. If they're identical, React skips re-rendering children. But the component itself may still execute once more before React decides to bail out. This means you might see your component function body run even though no visible update happens.

Non-Primitive Types (Reference Types)
These are mutable and stored by reference:\
// Primitives are immutable

// strings
// extensively use sets maps and all
