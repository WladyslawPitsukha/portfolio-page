export default function calculateYearPercentage(period: string): number {
    const [start, end] = period.split("-");
    const [startMonth, startYear] = start.split(".").map(Number);
    const [endMonth, endYear] = end.split(".").map(Number);

    if (startYear > endYear || (startYear === endYear && startMonth > endMonth)) {
        throw new Error("Mistake");
    }

    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
    const percentage = (Math.min(100, (totalMonths / 12) * 100));
    
    return Math.round(percentage);
}