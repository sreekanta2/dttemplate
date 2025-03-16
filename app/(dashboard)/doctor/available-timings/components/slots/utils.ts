export function calculatePrice(
  startTime: Date,
  endTime: Date,
  ratePerMinute = 5
): number {
  // Calculate difference in milliseconds
  const timeDifferenceMs = endTime.getTime() - startTime.getTime();

  // Convert milliseconds to minutes
  const timeDifferenceMinutes = timeDifferenceMs / (1000 * 60);

  // Calculate total price
  const totalPrice = timeDifferenceMinutes * ratePerMinute;

  return totalPrice;
}
