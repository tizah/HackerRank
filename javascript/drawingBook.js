function pageCount(n, p) {
  /*
   * Write your code here.
   */

  const totalNumberOfTurnsToReachEnd = n / 2;
  const totalNumberOfTurnToReachPageFromLeft = p / 2;

  let totalNumberOfTurnToReachPageFromRight =
    totalNumberOfTurnsToReachEnd - totalNumberOfTurnToReachPageFromLeft;
  if (n % 2 === 0) {
    totalNumberOfTurnToReachPageFromRight = Math.round(
      totalNumberOfTurnToReachPageFromRight
    );
  }
  const result = Math.min(
    totalNumberOfTurnToReachPageFromLeft,
    totalNumberOfTurnToReachPageFromRight
  );

  return Math.floor(result);
}

console.log(pageCount(6, 3));
