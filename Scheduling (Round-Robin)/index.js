export default function roundRobin(jobs, slice, index) {
  let timeTakes = 0;

  while (jobs[index] > 0) {
    // eslint-disable-next-line unicorn/prevent-abbreviations
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i] !== 0) {
        if (jobs[index] <= 0) {
          break;
        }

        // If the slice is less than the current job's, add the slice
        const timeTaken = Math.min(jobs[i], slice);
        timeTakes += timeTaken;
        // Subtract the time taken from the current job
        jobs[i] -= timeTaken;
      }
    }
  }

  return timeTakes;
}
