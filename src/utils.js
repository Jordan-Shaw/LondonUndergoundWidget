exports.checkLineStatuses = (line) => {
  const { lineStatuses } = line;
  let largest = { index: 0, statusSeverity: -1 };

  if (lineStatuses.length === 1) {
    return 0;
  } else {
    for (let i = 0; i < lineStatuses.length; i++) {
      if (lineStatuses[i].statusSeverity > largest.statusSeverity) {
        largest.index = i;
        largest.statusSeverity = lineStatuses[i].statusSeverity;
      }
    }
    return largest.index;
  }
};
