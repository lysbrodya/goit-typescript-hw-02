/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Week {
  monday = "WORKDAY",
  tuesday = "WORKDAY",
  wednesday = "WORKDAY",
  thursday = "WORKDAY",
  friday = "WORKDAY",
  saturday = "WEEKEND",
  sunday = "WEEKEND",
}

function isWeekend(day: keyof typeof Week): boolean {
  return Week[day] === "WEEKEND";
}
