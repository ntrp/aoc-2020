data = document
  .querySelector("body>pre")
  .innerText.split("\n\n")
  .filter((str) => str.length > 0);

// P1
console.log(
  `Part1: ${data
    .map((str) => new Set([...str.replaceAll(/\n/g, "")]).size)
    .reduce((prev, curr) => prev + curr, 0)}`
);
// P2
console.log(
  `Part2: ${data
    .map((str) => ({
      people: str.split("\n").length,
      chars: [...str.replaceAll(/\n/g, "")].reduce(
        (prev, curr) => ({ ...prev, [curr]: (prev[curr] || 0) + 1 }),
        {}
      ),
    }))
    .map(
      (data) =>
        Object.values(data.chars).filter((val) => val === data.people).length
    )
    .reduce((prev, curr) => prev + curr, 0)}`
);
