function roundRobin(jobs, slice, index) {
  let timeTakes = 0;

  while (jobs[index] > 0) {
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i] !== 0) {
        if (jobs[index] <= 0) {
          break;
        }
        
        // we must add the slice or if the slice if less that the current job's we add the current job
        const timeTaken = Math.min(jobs[i], slice);
        timeTakes += timeTaken;
        // Subtract the time taken from the current job
        jobs[i] -= timeTaken;

      }
    }
  }

  return timeTakes;
}
