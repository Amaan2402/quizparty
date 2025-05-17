function generateBucket(maxScore) {
  let bucketCount = 0;

  if (maxScore <= 5) {
    bucketCount = 2;
  } else if (maxScore <= 10) {
    bucketCount = 3;
  } else {
    bucketCount = 4;
  }

  const bucketSize = Math.floor((maxScore + 1) / bucketCount);
  const buckets = [];

  let start = 0;
  for (let i = 0; i < bucketCount; i++) {
    let end = start + bucketSize - 1;

    // Make sure last bucket ends at maxScore
    if (i === bucketCount - 1) {
      end = maxScore;
    }

    buckets.push({ label: `${start}-${end}`, min: start, max: end });
    start = end + 1;
  }

  return buckets;
}

function countParticipantsInBuckets({ participants, buckets }) {
  const scoreDistribution = [];

  for (const bucket of buckets) {
    const count = participants.filter(
      (p) => p.score >= bucket.min && p.score <= bucket.max
    ).length;
    scoreDistribution.push({ label: bucket.label, count });
  }

  return scoreDistribution;
}

const participants = [
  { name: "Alice", score: 3, id: 1 },
  { name: "Bob", score: 7, id: 2 },
  { name: "Charlie", score: 10, id: 3 },
  { name: "David", score: 2, id: 4 },
  { name: "Eve", score: 8, id: 5 },
  { name: "Charlie", score: 10, id: 3 },
  { name: "David", score: 2, id: 4 },
  { name: "Eve", score: 8, id: 5 },
];

const maxScore = 10;

const buckets = generateBucket(maxScore);
const counts = countParticipantsInBuckets({ participants, buckets });
console.log("Buckets:", buckets);
console.log("Counts:", counts);
