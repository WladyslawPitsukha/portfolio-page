export default function calculateYearPercentage(period: string): number {
    const normalizedPeriod = period.replace(/\s+/g, "");
    const [startRaw, endRaw] = normalizedPeriod.split("-");

    if (!startRaw || !endRaw) {
        return 0;
    }

    const parseDatePart = (value: string) => {
        const [monthPart, yearPart] = value.includes(".") ? value.split(".") : value.split("-");
        const month = Number(monthPart);
        const year = Number(yearPart);

        if (!Number.isFinite(month) || !Number.isFinite(year) || month < 1 || month > 12) {
            return null;
        }

        return { month, year };
    };

    const start = parseDatePart(startRaw);
    const end = parseDatePart(endRaw);

    if (!start || !end) {
        return 0;
    }

    if (start.year > end.year || (start.year === end.year && start.month > end.month)) {
        return 0;
    }

    const totalMonths = (end.year - start.year) * 12 + (end.month - start.month);
    const percentage = Math.min(100, (totalMonths / 12) * 100);

    return Math.round(percentage);
}